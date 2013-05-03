Ext.define('Sencha.view.Contact', {
    extend: 'Ext.form.Panel',
    xtype: 'commentform',
    id: 'commentForm',

    config: {
        title: 'New Comment',
        iconCls: 'user',

        layout: {
            type: 'vbox'
        },

        items: [
            {
                xtype: 'fieldset',
                title: 'Leave a comment',
                instructions: 'Email is optional',

                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name',
                        name: 'name'
                    },
                    {
                        xtype: 'emailfield',
                        label: 'Email',
                        name: 'email'
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Comment',
                        name: 'comment'
                    }
                ]
            },
            {
                xtype: 'button',
                ui: 'confirm',
                text: 'Submit Comment',
                action: 'submitComment'
            }
        ]
    }
});