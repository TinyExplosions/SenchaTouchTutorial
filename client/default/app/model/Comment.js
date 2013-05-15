Ext.define('Sencha.model.Comment', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'name',     type: 'string'},
            {name: 'email',     type: 'string'},
            {name: 'comment',     type: 'string'}
        ],

        validations: [
            {type: 'presence',  field: 'comment'},
            {type: 'presence',  field: 'name'},
            {type: 'email',  field: 'email'}
        ]
    }
});