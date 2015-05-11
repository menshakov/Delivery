Delivery.window.CreateRegion = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'delivery-region-window-create';
	}
	Ext.applyIf(config, {
		title: _('delivery_region_create'),
		width: 550,
		autoHeight: true,
		url: Delivery.config.connector_url,
		action: 'mgr/region/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Delivery.window.CreateRegion.superclass.constructor.call(this, config);
};
Ext.extend(Delivery.window.CreateRegion, MODx.Window, {

	getFields: function (config) {
		return [
            {xtype: 'textfield',fieldLabel: _('delivery_region_name'),name: 'name',id: config.id+'-name',anchor: '99%'}
        ]
	}

});
Ext.reg('delivery-region-window-create', Delivery.window.CreateRegion);


Delivery.window.UpdateRegion = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'delivery-region-window-update';
	}
	Ext.applyIf(config, {
		title: _('delivery_region_update'),
		width: 550,
		autoHeight: true,
		url: Delivery.config.connector_url,
		action: 'mgr/region/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Delivery.window.UpdateRegion.superclass.constructor.call(this, config);
};
Ext.extend(Delivery.window.UpdateRegion, MODx.Window, {

	getFields: function (config) {
        return [
            {xtype: 'hidden', name: 'id', id: config.id + '-id'}
            ,{xtype: 'textfield',fieldLabel: _('delivery_region_name'),name: 'name',id: config.id+'-name',anchor: '99%'}
        ]
	}

});
Ext.reg('delivery-region-window-update', Delivery.window.UpdateRegion);