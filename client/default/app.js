Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Sencha',

    requires: ['Sencha.view.Viewport'],
    controllers: ['Main'],

    launch: function() {
        // $fh.ready({}, function() {
            Ext.create('Sencha.view.Viewport');
        // });
    }
});