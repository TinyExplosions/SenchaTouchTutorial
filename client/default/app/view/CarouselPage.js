Ext.define('Sencha.view.CarouselPage', {
    extend: 'Ext.Carousel',
    xtype: 'carouselPage',

    config: {
        title: 'Carousel',
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