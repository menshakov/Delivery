Delivery.window.CreateCity = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'delivery-city-window-create';
	}
	Ext.applyIf(config, {
		title: _('delivery_city_create'),
		width: 550,
		autoHeight: true,
		url: Delivery.config.connector_url,
		action: 'mgr/city/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Delivery.window.CreateCity.superclass.constructor.call(this, config);
};
Ext.extend(Delivery.window.CreateCity, MODx.Window, {

	getFields: function (config) {
		return [
            {xtype: 'textfield',fieldLabel: _('delivery_city_name'),name: 'name',id: config.id+'-name',anchor: '99%'}
            ,{xtype: 'delivery-combo-region',fieldLabel: _('delivery_city_region_name'),name: 'id_region',id: config.id+'-id_region',anchor: '99%'}
        ]
	}

});
Ext.reg('delivery-city-window-create', Delivery.window.CreateCity);


Delivery.window.UpdateCity = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'delivery-city-window-update';
	}
	Ext.applyIf(config, {
		title: _('delivery_city_update'),
		width: 550,
		autoHeight: true,
		url: Delivery.config.connector_url,
		action: 'mgr/city/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Delivery.window.UpdateCity.superclass.constructor.call(this, config);
};
Ext.extend(Delivery.window.UpdateCity, MODx.Window, {

	getFields: function (config) {
        return [
            {xtype: 'hidden', name: 'id', id: config.id + '-id'}
            ,{xtype: 'textfield',fieldLabel: _('delivery_city_name'),name: 'name',id: config.id+'-name',anchor: '99%'}
            ,{xtype: 'delivery-combo-region',fieldLabel: _('delivery_city_region_name'),name: 'id_region',id: config.id+'-id_region',anchor: '99%'}
        ]
	}

});
Ext.reg('delivery-city-window-update', Delivery.window.UpdateCity);