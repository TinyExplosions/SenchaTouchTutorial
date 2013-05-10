Ext.define('Sencha.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        views: ['Home', 'Products', 'Comments', 'Contact'],

        refs: {
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
        //get comments from FeedHenry Server
        $fh.act({
            act: "getCommentData",
            req: {}
        }, function(res) {
            console.log('success! Got Data',res);
            self.reloadList(res);
        }, function(msg, err) {
            console.log('Error',err);
        });
    },

    submitCommentForm: function() {
        var self = this;
        var form = this.getCommentForm();
        $fh.act({
            act: "submitCommentForm",
            req: {
                comment: form.getValues()
            }
        }, function(res) {
            console.log('success!',res);
            self.reloadList(res);
            self.clearCommentForm();
        }, function(msg, err) {
            console.log('Error',err);
        });
    },

    clearCommentForm: function() {
        var form = this.getCommentForm();
        form.reset();
    },

    reloadList: function(list) {
        // this.getCommentList();
        var commentList = this.getCommentList();
        var store = commentList.getStore();
        store.applyData(list);
        console.log('reloading');
    }
});