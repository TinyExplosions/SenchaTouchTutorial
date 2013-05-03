Ext.define('Sencha.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        views: ['Home', 'Products', 'Comments', 'Contact'],

        refs: {
            commentForm: 'panel[id=commentForm]'
        }
    },

    init: function () {
        this.control({
            'button[action=submitComment]': {
                tap: 'submitCommentForm'
            }
        });
    },

    submitCommentForm: function() {
        var form = this.getCommentForm();
        $fh.act({
            act: "submitCommentForm",
            req: {
                comment: form.getValues()
            }
        }, function(res) {
            console.log('success!');
        }, function(msg, err) {
            console.log('Error',err);
        });
    }
});