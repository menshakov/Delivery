Delivery.window.CreateItem = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'delivery-point-window-create';
	}
	Ext.applyIf(config, {
		title: _('delivery_point_create'),
		width: 550,
		autoHeight: true,
		url: Delivery.config.connector_url,
		action: 'mgr/point/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Delivery.window.CreateItem.superclass.constructor.call(this, config);
};
Ext.extend(Delivery.window.CreateItem, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'textfield',
			fieldLabel: _('delivery_point_name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textarea',
			fieldLabel: _('delivery_point_description'),
			name: 'description',
			id: config.id + '-description',
			height: 150,
			anchor: '99%'
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('delivery_point_active'),
			name: 'active',
			id: config.id + '-active',
			checked: true,
		}];
	}

});
Ext.reg('delivery-point-window-create', Delivery.window.CreateItem);


Delivery.window.UpdateItem = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'delivery-point-window-update';
	}
	Ext.applyIf(config, {
		title: _('delivery_point_update'),
		width: 550,
		autoHeight: true,
		url: Delivery.config.connector_url,
		action: 'mgr/point/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	Delivery.window.UpdateItem.superclass.constructor.call(this, config);
};
Ext.extend(Delivery.window.UpdateItem, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'hidden',
			name: 'id',
			id: config.id + '-id',
		}, {
			xtype: 'textfield',
			fieldLabel: _('delivery_point_name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textarea',
			fieldLabel: _('delivery_point_description'),
			name: 'description',
			id: config.id + '-description',
			anchor: '99%',
			height: 150,
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('delivery_point_active'),
			name: 'active',
			id: config.id + '-active',
		}];
	}

});
Ext.reg('delivery-point-window-update', Delivery.window.UpdateItem);