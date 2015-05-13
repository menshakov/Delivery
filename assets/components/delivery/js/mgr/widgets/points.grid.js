Delivery.grid.Points = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'delivery-grid-points';
	}

    this.dd = function(grid) {
        this.dropTarget = new Ext.dd.DropTarget(grid.container, {
            ddGroup : 'dd',
            copy:false,
            notifyDrop : function(dd, e, data) {
                var store = grid.store.data.items;
                var target = store[dd.getDragData(e).rowIndex].id;
                var source = store[data.rowIndex].id;
                if (target != source) {
                    dd.el.mask(_('loading'),'x-mask-loading');
                    MODx.Ajax.request({
                        url: Delivery.config.connector_url
                        ,params: {
                            action: 'mgr/point/sort'
                            ,source: source
                            ,target: target
                        }
                        ,listeners: {
                            success: {fn:function(r) {dd.el.unmask();grid.refresh();},scope:grid}
                            ,failure: {fn:function(r) {dd.el.unmask();},scope:grid}
                        }
                    });
                    //console.log(source);
                    //console.log(target);
                }
            }
        });
    };

	Ext.applyIf(config, {
		url: Delivery.config.connector_url,
		fields: this.getFields(config),
		columns: this.getColumns(config),
		tbar: this.getTopBar(config),
		sm: new Ext.grid.CheckboxSelectionModel(),
		baseParams: {
			action: 'mgr/point/getlist'
		},
	/*	listeners: {
			rowDblClick: function (grid, rowIndex, e) {
				var row = grid.store.getAt(rowIndex);
				this.updateItem(grid, e, row);
			}
		},
	*/
		viewConfig: {
			forceFit: true,
			enableRowBody: true,
			autoFill: true,
			showPreview: true,
			scrollOffset: 0,
			getRowClass: function (rec, ri, p) {
				return !rec.data.active
					? 'delivery-row-disabled'
					: '';
			}
		},
		paging: true,
		remoteSort: true,
		autoHeight: true,
        save_action: 'mgr/point/updatefromgrid',
        autosave: true,
        ddGroup: 'dd',
        enableDragDrop: true,
        listeners: {render: {fn: this.dd, scope: this}}
	});
	Delivery.grid.Points.superclass.constructor.call(this, config);

	// Clear selection on grid refresh
	this.store.on('load', function (store) {
		if (this._getSelectedIds().length) {
			this.getSelectionModel().clearSelections();
		}




	}, this);
};
Ext.extend(Delivery.grid.Points, MODx.grid.Grid, {
	windows: {},

    getMenu: function() {
        var m = [];
        m.push({
            text: _('delivery_point_update')
            ,handler: this.updateItem
        });
        m.push('-');
        m.push({
            text: _('delivery_point_remove')
            ,handler: this.removeItem
        });
        this.addContextMenuItem(m);
    },

	createItem: function (btn, e) {
		var w = MODx.load({
			xtype: 'delivery-point-window-create',
			id: Ext.id(),
			listeners: {
				success: {
					fn: function () {
						this.refresh();
					}, scope: this
				}
			}
		});
		w.reset();
		w.setValues({active: true});
		w.show(e.target);
	},

	updateItem: function (btn, e, row) {
		if (typeof(row) != 'undefined') {
			this.menu.record = row.data;
		}
		else if (!this.menu.record) {
			return false;
		}
		var id = this.menu.record.id;

		MODx.Ajax.request({
			url: this.config.url,
			params: {
				action: 'mgr/point/get',
				id: id
			},
			listeners: {
				success: {
					fn: function (r) {
						var w = MODx.load({
							xtype: 'delivery-point-window-update',
							id: Ext.id(),
							record: r,
							listeners: {
								success: {
									fn: function () {
										this.refresh();
									}, scope: this
								}
							}
						});
						w.reset();
						w.setValues(r.object);
						w.show(e.target);
					}, scope: this
				}
			}
		});
	},

	removeItem: function (act, btn, e) {
		var ids = this._getSelectedIds();
		if (!ids.length) {
			return false;
		}
		MODx.msg.confirm({
			title: ids.length > 1
				? _('delivery_points_remove')
				: _('delivery_point_remove'),
			text: ids.length > 1
				? _('delivery_points_remove_confirm')
				: _('delivery_point_remove_confirm'),
			url: this.config.url,
			params: {
				action: 'mgr/point/remove',
				ids: Ext.util.JSON.encode(ids),
			},
			listeners: {
				success: {
					fn: function (r) {
						this.refresh();
					}, scope: this
				}
			}
		});
		return true;
	},

	disableItem: function (act, btn, e) {
		var ids = this._getSelectedIds();
		if (!ids.length) {
			return false;
		}
		MODx.Ajax.request({
			url: this.config.url,
			params: {
				action: 'mgr/point/disable',
				ids: Ext.util.JSON.encode(ids),
			},
			listeners: {
				success: {
					fn: function () {
						this.refresh();
					}, scope: this
				}
			}
		})
	},

	enableItem: function (act, btn, e) {
		var ids = this._getSelectedIds();
		if (!ids.length) {
			return false;
		}
		MODx.Ajax.request({
			url: this.config.url,
			params: {
				action: 'mgr/point/enable',
				ids: Ext.util.JSON.encode(ids),
			},
			listeners: {
				success: {
					fn: function () {
						this.refresh();
					}, scope: this
				}
			}
		})
	},

	getFields: function (config) {
		return ['id','name','id_type_delivery','delivery','id_city','city','address','price','geo','description','active'];
	},

	getColumns: function (config) {
        return [
            {
                header: _('delivery_point_id'),
                dataIndex: 'id',
                width: 50
            }, {
                header: _('delivery_point_name'),
                dataIndex: 'name',
                width: 100
            }, {
                header: _('delivery_point_type'),
                dataIndex: 'delivery',
                width: 100
            }, {
                header: _('delivery_point_city'),
                dataIndex: 'city',
                width: 100
            }, {
                header: _('delivery_point_address'),
                dataIndex: 'address',
                width: 100
            }, {
                header: _('delivery_point_price'),
                dataIndex: 'price',
                width: 100
            }
            //,{header: _('delivery_point_geo'),dataIndex: 'geo',width: 100}
            //,{header: _('delivery_point_description'),dataIndex: 'description',width: 100}
            ,{
                header: _('delivery_point_active'),
                dataIndex: 'active',
                width: 75,
                //renderer: Delivery.utils.renderBoolean,
                editor: {xtype: 'combo-boolean', renderer: 'boolean'}
            }

        ];
	},

	getTopBar: function (config) {
		return [{
			text: '<i class="icon icon-plus"></i>&nbsp;' + _('delivery_point_create'),
			handler: this.createItem,
			scope: this
		}, '->', {
			xtype: 'textfield',
			name: 'query',
			width: 200,
			id: config.id + '-search-field',
			emptyText: _('delivery_grid_search'),
			listeners: {
				render: {
					fn: function (tf) {
						tf.getEl().addKeyListener(Ext.EventObject.ENTER, function () {
							this._doSearch(tf);
						}, this);
					}, scope: this
				}
			}
		}, {
			xtype: 'button',
			id: config.id + '-search-clear',
			text: '<i class="icon icon-times"></i>',
			listeners: {
				click: {fn: this._clearSearch, scope: this}
			}
		}];
	},

	onClick: function (e) {
		var elem = e.getTarget();
		if (elem.nodeName == 'BUTTON') {
			var row = this.getSelectionModel().getSelected();
			if (typeof(row) != 'undefined') {
				var action = elem.getAttribute('action');
				if (action == 'showMenu') {
					var ri = this.getStore().find('id', row.id);
					return this._showMenu(this, ri, e);
				}
				else if (typeof this[action] === 'function') {
					this.menu.record = row.data;
					return this[action](this, e);
				}
			}
		}
		return this.processEvent('click', e);
	},

	_getSelectedIds: function () {
		var ids = [];
		var selected = this.getSelectionModel().getSelections();

		for (var i in selected) {
			if (!selected.hasOwnProperty(i)) {
				continue;
			}
			ids.push(selected[i]['id']);
		}

		return ids;
	},

	_doSearch: function (tf, nv, ov) {
		this.getStore().baseParams.query = tf.getValue();
		this.getBottomToolbar().changePage(1);
		this.refresh();
	},

	_clearSearch: function (btn, e) {
		this.getStore().baseParams.query = '';
		Ext.getCmp(this.config.id + '-search-field').setValue('');
		this.getBottomToolbar().changePage(1);
		this.refresh();
	}
});
Ext.reg('delivery-grid-points', Delivery.grid.Points);