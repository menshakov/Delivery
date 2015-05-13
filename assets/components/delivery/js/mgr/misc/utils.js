Delivery.utils.renderBoolean = function (value, props, row) {

	return value
		? String.format('<span class="green">{0}</span>', _('yes'))
		: String.format('<span class="red">{0}</span>', _('no'));
}

Delivery.utils.getMenu = function(actions, grid) {
    var menu = [];
    for (var i in actions) {

        if (!actions.hasOwnProperty(i)) {continue;}
        var a = actions[i];
        console.log(a);
        if (!a['menu']) {
            if (a == '-') {menu.push('-');}
            continue;
        }
        else if (menu.length > 0 && /^remove/i.test(a['type'])) {
            menu.push('-');
        }

        var cls = typeof(a['class']) == 'object' && a['class']['menu']
            ? a['class']['menu']
            : '';
        cls += ' ' + (MODx.modx23 ? 'icon icon-' : 'fa fa-') + a['icon'];
        menu.push({
            text: '<i class="' + cls + ' x-menu-item-icon"></i> ' + _('delivery_action_' + a['type'])
            ,handler: grid[a['type']]
        });
    }

    return menu;
};



Delivery.utils.renderActions = function (value, props, row) {
	var res = [];
	var cls, icon, title, action, item = '';
	for (var i in row.data.actions) {
		if (!row.data.actions.hasOwnProperty(i)) {
			continue;
		}
		var a = row.data.actions[i];
		if (!a['button']) {
			continue;
		}

		cls = a['cls'] ? a['cls'] : '';
		icon = a['icon'] ? a['icon'] : '';
		action = a['action'] ? a['action'] : '';
		title = a['title'] ? a['title'] : '';

		item = String.format(
			'<li class="{0}"><button class="btn btn-default {1}" action="{2}" title="{3}"></button></li>',
			cls, icon, action, title
		);

		res.push(item);
	}

	return String.format(
		'<ul class="delivery-row-actions">{0}</ul>',
		res.join('')
	);
};