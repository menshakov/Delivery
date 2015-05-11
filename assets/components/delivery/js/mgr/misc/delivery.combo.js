/**
 * Created by Vitaly on 11.05.15.
 */

/**
 * Combo box for Region list
 * @param config
 * @constructor
 */
Delivery.combo.Region = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        name: 'id_region'
        ,hiddenName: 'id_region'
        ,displayField: 'name'
        ,valueField: 'id'
        ,fields: ['id','name']
        ,pageSize: 10
        ,hideMode: 'offsets'
        ,url: Delivery.config.connector_url
        ,baseParams: {
            action: 'mgr/region/getlist'
        }
    });
    Delivery.combo.Region.superclass.constructor.call(this,config);
};
Ext.extend(Delivery.combo.Region,MODx.combo.ComboBox);
Ext.reg('delivery-combo-region',Delivery.combo.Region);


/**
 * Combo box for City list
 * @param config
 * @constructor
 */
Delivery.combo.City = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        name: 'id_city'
        ,hiddenName: 'id_city'
        ,displayField: 'name'
        ,valueField: 'id'
        ,fields: ['id','name']
        ,pageSize: 10
        ,hideMode: 'offsets'
        ,url: Delivery.config.connector_url
        ,baseParams: {
            action: 'mgr/city/getlist'
        }
    });
    Delivery.combo.City.superclass.constructor.call(this,config);
};
Ext.extend(Delivery.combo.City,MODx.combo.ComboBox);
Ext.reg('delivery-combo-city',Delivery.combo.City);


/**
 * Combo box for Type Delivery list
 * @param config
 * @constructor
 */
Delivery.combo.TypeDelivery = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        name: 'id_type_delivery'
        ,hiddenName: 'id_type_delivery'
        ,displayField: 'name'
        ,valueField: 'id'
        ,fields: ['id','name']
        ,pageSize: 10
        ,hideMode: 'offsets'
        //,url: MODx.config.components.ur
        ,url: '/assets/components/minishop2/connector.php'
        ,baseParams: {
            action: 'mgr/settings/delivery/getlist'
        }
    });
    Delivery.combo.TypeDelivery.superclass.constructor.call(this,config);
};
Ext.extend(Delivery.combo.TypeDelivery,MODx.combo.ComboBox);
Ext.reg('delivery-combo-type-delivery',Delivery.combo.TypeDelivery);