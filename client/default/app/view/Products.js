Ext.define('Sencha.view.Products', {
    extend: 'Ext.Carousel',
    xtype: 'productspage',

    config: {
        title: 'Deploy',
        iconCls: 'star',

        items: [
            {
                xtype: 'image',
                src: 'resources/deploy-graphic.png'
            },
             {
                xtype: 'image',
                src: 'resources/develop-graphic.png'
            },
             {
                xtype: 'image',
                src: 'resources/integrate-graphic.png'
            }
        ]
    }
});