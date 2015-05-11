Delivery.window.CreatePoint = function (config) {
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
	Delivery.window.CreatePoint.superclass.constructor.call(this, config);
};
Ext.extend(Delivery.window.CreatePoint, MODx.Window, {

	getFields: function (config) {
		return [
            {xtype: 'textfield',fieldLabel: _('delivery_point_name'),name: 'name',id: config.id+'-name',anchor: '99%'}
            ,{
                layout:'column'
                ,border: false
                ,anchor: '100%'
                ,items: [{
                    columnWidth: .5
                    ,layout: 'form'
                    ,defaults: { msgTarget: 'under' }
                    ,border:false
                    ,items: [
                        {xtype: 'delivery-combo-type-delivery',fieldLabel: _('delivery_point_type'),name: 'id_type_delivery',id: config.id+'-id_type_delivery',anchor: '99%'}
                        ,{xtype: 'textfield',fieldLabel: _('delivery_point_address'),name: 'address',id: config.id+'-address',anchor: '99%'}
                    ]
                }, {
                    columnWidth: .5
                    ,layout: 'form'
                    ,defaults: { msgTarget: 'under' }
                    ,border:false
                    ,items: [
                        {xtype: 'delivery-combo-city',fieldLabel: _('delivery_point_city'),name: 'id_city',id: config.id+'-id_city',anchor: '99%'}
                        ,{xtype: 'textfield',fieldLabel: _('delivery_point_price'),name: 'price',id: config.id+'-price',anchor: '99%'}
                    ]
                }]
            }
            ,{xtype: 'textfield',fieldLabel: _('delivery_point_geo'),name: 'geo',id: config.id+'-geo',anchor: '99%'}
            ,{xtype: 'textarea',fieldLabel: _('delivery_point_description'),name: 'description',id: config.id+'-description',height: 75,anchor: '99%'}
            ,{xtype: 'xcheckbox',boxLabel: _('delivery_point_active'),name: 'active',id: config.id + '-active',checked: true}
        ]
	}

});
Ext.reg('delivery-point-window-create', Delivery.window.CreatePoint);


Delivery.window.UpdatePoint = function (config) {
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
	Delivery.window.UpdatePoint.superclass.constructor.call(this, config);
};
Ext.extend(Delivery.window.UpdatePoint, MODx.Window, {

	getFields: function (config) {
        return [
            {xtype: 'hidden', name: 'id', id: config.id + '-id'}
            ,{xtype: 'textfield',fieldLabel: _('delivery_point_name'),name: 'name',id: config.id+'-name',anchor: '99%'}
            ,{
                layout:'column'
                ,border: false
                ,anchor: '100%'
                ,items: [{
                    columnWidth: .5
                    ,layout: 'form'
                    ,defaults: { msgTarget: 'under' }
                    ,border:false
                    ,items: [
                        {xtype: 'delivery-combo-type-delivery',fieldLabel: _('delivery_point_type'),name: 'id_type_delivery',id: config.id+'-id_type_delivery',anchor: '99%'}
                        ,{xtype: 'textfield',fieldLabel: _('delivery_point_address'),name: 'address',id: config.id+'-address',anchor: '99%'}
                    ]
                }, {
                    columnWidth: .5
                    ,layout: 'form'
                    ,defaults: { msgTarget: 'under' }
                    ,border:false
                    ,items: [
                        {xtype: 'delivery-combo-city',fieldLabel: _('delivery_point_city'),name: 'id_city',id: config.id+'-id_city',anchor: '99%'}
                        ,{xtype: 'textfield',fieldLabel: _('delivery_point_price'),name: 'price',id: config.id+'-price',anchor: '99%'}
                    ]
                }]
            }
            ,{xtype: 'textfield',fieldLabel: _('delivery_point_geo'),name: 'geo',id: config.id+'-geo',anchor: '99%'}
            ,{xtype: 'textarea',fieldLabel: _('delivery_point_description'),name: 'description',id: config.id+'-description',height: 75,anchor: '99%'}
            ,{xtype: 'xcheckbox',boxLabel: _('delivery_point_active'),name: 'active',id: config.id + '-active',checked: true}
        ]
	}

});
Ext.reg('delivery-point-window-update', Delivery.window.UpdatePoint);