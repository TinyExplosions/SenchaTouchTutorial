Ext.define('Sencha.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        views: ['Home', 'CarouselPage', 'Comments', 'Contact'],

        models: ['Comment'],

        refs: {
            tabPanel: 'tabpanel[id=mainPanel]',
            commentForm: 'panel[id=commentForm]',
            commentList: 'list[id=commentsList]',
            submitCommentFormButton: 'button[action=submitComment]'
        },
        control: {
            submitCommentFormButton: {
                tap: 'submitCommentForm'
            },
            commentForm: {
                show: 'clearCommentForm'
            }
        }
    },

    init: function() {
        var self = this;
        $fh.act({
            act: "getCommentData",
            req: {}
        }, function(res) {
            self.reloadList(res);

        }, function(msg, err) {
            console.log('Error',err);
        });
    },

    submitCommentForm: function() {
        var self = this;
        var form = this.getCommentForm();
        var values = form.getValues();
        var comment = Ext.create('Sencha.model.Comment',values);
        if(!comment.isValid()) {
            Ext.Msg.alert('Error', 'You must fill in all the fields.', Ext.emptyFn);
            return;
        }

        $fh.act({
            act: "submitCommentForm",
            req: {
                comment: form.getValues()
            }
        }, function(res) {
            self.reloadList(res);
            self.clearCommentForm();
            Ext.Msg.alert('Success', 'Your comment has been successfully saved.', self.showCommentList, self);
        }, function(msg, err) {
            console.log('Error',err);
            Ext.Msg.alert('Error', 'There was an error saving your comment. Please try again later.', Ext.emptyFn);
        });
    },

    showCommentList: function() {
        this.getTabPanel().setActiveItem(this.getCommentList());
    },

    clearCommentForm: function() {
        var form = this.getCommentForm();
        form.reset();
    },

    reloadList: function(list) {
        var commentList = this.getCommentList();
        var store = commentList.getStore();
        store.applyData(list);
    }
});