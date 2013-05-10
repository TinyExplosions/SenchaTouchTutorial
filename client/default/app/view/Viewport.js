Ext.define('Sencha.view.Viewport', {
    extend: 'Ext.TabPanel',
    id: 'mainPanel',

    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',
        items:[
            {
                xtype: 'homepanel'
            },
            {
                xtype: 'carouselPage'
            },
            {
                xtype: 'commentspage'
            },
            {
                xtype: 'commentform'
            }
        ]
    }
});