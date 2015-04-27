var Delivery = function (config) {
	config = config || {};
	Delivery.superclass.constructor.call(this, config);
};
Ext.extend(Delivery, Ext.Component, {
	page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('delivery', Delivery);

Delivery = new Delivery();