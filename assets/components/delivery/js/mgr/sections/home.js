Delivery.page.Home = function (config) {
	config = config || {};
	Ext.applyIf(config, {
		components: [{
			xtype: 'delivery-panel-home', renderTo: 'delivery-panel-home-div'
		}]
	});
	Delivery.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(Delivery.page.Home, MODx.Component);
Ext.reg('delivery-page-home', Delivery.page.Home);