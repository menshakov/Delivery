<?php
include_once 'setting.inc.php';

$_lang['delivery'] = 'Delivery :: управление доставкой';
$_lang['delivery_menu_desc'] = 'Управление способами доставки.';
$_lang['delivery_intro_msg'] = 'Вы можете выделять сразу несколько предметов при помощи Shift или Ctrl.';

$_lang['delivery_points'] = 'Пункты доставки';
$_lang['delivery_points_msg'] = 'Точки самовывоза, курьеры, почта РФ.';


$_lang['delivery_point_id'] = 'Id';
$_lang['delivery_point_name'] = 'Название';
$_lang['delivery_point_active'] = 'Активно';
$_lang['delivery_point_type'] = 'Тип доставки';
$_lang['delivery_point_city'] = 'Населенный пункт';
$_lang['delivery_point_address'] = 'Адрес';
$_lang['delivery_point_price'] = 'Стоимость';
$_lang['delivery_point_geo'] = 'Координаты';
$_lang['delivery_point_description'] = 'Описание';

$_lang['delivery_point_create'] = 'Создать точку';
$_lang['delivery_point_update'] = 'Изменить точку';
$_lang['delivery_point_enable'] = 'Включить точку';
$_lang['delivery_points_enable'] = 'Включить точки';
$_lang['delivery_point_disable'] = 'Отключить точку';
$_lang['delivery_points_disable'] = 'Отключить точки';
$_lang['delivery_point_remove'] = 'Удалить точку';
$_lang['delivery_points_remove'] = 'Удалить точки';
$_lang['delivery_point_remove_confirm'] = 'Вы уверены, что хотите удалить эту точку?';
$_lang['delivery_points_remove_confirm'] = 'Вы уверены, что хотите удалить эти точки?';

$_lang['delivery_point_err_name'] = 'Вы должны указать имя точки.';
$_lang['delivery_point_err_ae'] = 'Точка с таким именем уже существует.';
$_lang['delivery_point_err_nf'] = 'Точка не найдена.';
$_lang['delivery_point_err_ns'] = 'Точка не указана.';
$_lang['delivery_point_err_remove'] = 'Ошибка при удалении точки.';
$_lang['delivery_point_err_save'] = 'Ошибка при сохранении точки.';

/** City **/
$_lang['delivery_city'] = 'Населенные пункты';
$_lang['delivery_city_msg'] = 'Населенные пункты, где есть доставка';

$_lang['delivery_city_id'] = 'Id';
$_lang['delivery_city_name'] = 'Название';
$_lang['delivery_region_name'] = 'Выберите регион';

$_lang['delivery_city_create'] = 'Добавить населенный пункт';
$_lang['delivery_city_update'] = 'Изменить';
$_lang['delivery_city_remove'] = 'Удалить';
$_lang['delivery_cities_remove'] = 'Удалить отмеченные';
$_lang['delivery_city_remove_confirm'] = 'Вы уверены, что хотите удалить этот населенный пункт?';
$_lang['delivery_cities_remove_confirm'] = 'Вы уверены, что хотите удалить эти населенные пункты?';


/** Region **/
$_lang['delivery_region'] = 'Регионы';
$_lang['delivery_region_msg'] = 'Условное разделение на регионы';

$_lang['delivery_region_id'] = 'Id';
$_lang['delivery_region_name'] = 'Название';

$_lang['delivery_region_create'] = 'Добавить регион';
$_lang['delivery_region_update'] = 'Изменить';
$_lang['delivery_region_remove'] = 'Удалить';
$_lang['delivery_regions_remove'] = 'Удалить отмеченные';
$_lang['delivery_region_remove_confirm'] = 'Вы уверены, что хотите удалить этот регион?';
$_lang['delivery_regions_remove_confirm'] = 'Вы уверены, что хотите удалить эти регионы?';


$_lang['delivery_grid_search'] = 'Поиск';
$_lang['delivery_grid_actions'] = 'Действия';