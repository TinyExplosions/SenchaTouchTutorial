Ext.define('Sencha.view.Comments', {
    extend: 'Ext.List',
    xtype: 'commentspage',
    id: 'commentsList',

    config: {
        title: 'Comments',
        iconCls: 'organize',

        itemTpl: '{comment}',
        store: {
            fields: ['comment', 'email', 'name']
        }
    }
});