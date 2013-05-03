Ext.define('Sencha.view.Viewport', {
    extend: 'Ext.TabPanel',

    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',
        items:[
            {
                xtype: 'homepanel'
            },
            {
                xtype: 'productspage'
            },
            {
                xtype: 'commentspage',

                store: {
                    fields: ['comment', 'email', 'name'],
                    data: [
                        {comment: 'Wicked Party Yo', email: 'joe@blogs.com', name: 'Joe Blogs'},
                        {comment: 'Have you seen my weasel?', email: 'jane@blogs.com', name: 'Jane Blogs'},
                        {comment: 'I bent my wookee', email: 'ralph@wiggum.com', name: 'Ralph Wiggum'},
                        {comment: 'The new Celine Dion Album is rocking', email: 'noone@ever.com', name: 'Noone, Ever'}
                    ]
                }
            },
            {
                xtype: 'commentform'
            }
        ]
    }
});