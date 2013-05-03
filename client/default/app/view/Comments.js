Ext.define('Sencha.view.Comments', {
    extend: 'Ext.List',
    xtype: 'commentspage',

    config: {
        title: 'Comments',
        iconCls: 'organize',

        itemTpl: '{comment}'
    }
});