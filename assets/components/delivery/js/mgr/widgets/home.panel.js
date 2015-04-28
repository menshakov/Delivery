Delivery.panel.Home = function (config) {
	config = config || {};
	Ext.apply(config, {
		baseCls: 'modx-formpanel',
		layout: 'anchor',
		/*
		 stateful: true,
		 stateId: 'delivery-panel-home',
		 stateEvents: ['tabchange'],
		 getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
		 */
		hideMode: 'offsets',
		items: [{
			html: '<h2>' + _('delivery') + '</h2>',
			cls: '',
			style: {margin: '15px 0'}
		}, {
			xtype: 'modx-tabs',
			defaults: {border: false, autoHeight: true},
			border: true,
			hideMode: 'offsets',
			items: [{
				title: _('delivery_points'),
				layout: 'anchor',
				items: [{
					html: _('delivery_points_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'delivery-grid-points',
					cls: 'main-wrapper',
				}]
			}]
		}]
	});
	Delivery.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(Delivery.panel.Home, MODx.Panel);
Ext.reg('delivery-panel-home', Delivery.panel.Home);
