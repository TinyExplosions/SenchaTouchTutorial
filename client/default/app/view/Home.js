Ext.define('Sencha.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homepanel',

    config: {
        title: 'Home',
        iconCls: 'home',
        cls: 'home',

        html: [
            '<img src="resources/figure-ent.png" />',
            '<p>Use Sencha Touch and FeedHenry to make awesome mobile apps</p>'
        ].join("")
    }
});