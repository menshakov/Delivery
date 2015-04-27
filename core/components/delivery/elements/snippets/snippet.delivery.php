<?php
/** @var array $scriptProperties */
/** @var Delivery $Delivery */
if (!$Delivery = $modx->getService('delivery', 'Delivery', $modx->getOption('delivery_core_path', null, $modx->getOption('core_path') . 'components/delivery/') . 'model/delivery/', $scriptProperties)) {
	return 'Could not load Delivery class!';
}

// Do your snippet code here. This demo grabs 5 items from our custom table.
$tpl = $modx->getOption('tpl', $scriptProperties, 'Item');
$sortby = $modx->getOption('sortby', $scriptProperties, 'name');
$sortdir = $modx->getOption('sortbir', $scriptProperties, 'ASC');
$limit = $modx->getOption('limit', $scriptProperties, 5);
$outputSeparator = $modx->getOption('outputSeparator', $scriptProperties, "\n");
$toPlaceholder = $modx->getOption('toPlaceholder', $scriptProperties, false);

// Build query
$c = $modx->newQuery('DeliveryItem');
$c->sortby($sortby, $sortdir);
$c->limit($limit);
$items = $modx->getIterator('DeliveryItem', $c);

// Iterate through items
$list = array();
/** @var DeliveryItem $item */
foreach ($items as $item) {
	$list[] = $modx->getChunk($tpl, $item->toArray());
}

// Output
$output = implode($outputSeparator, $list);
if (!empty($toPlaceholder)) {
	// If using a placeholder, output nothing and set output to specified placeholder
	$modx->setPlaceholder($toPlaceholder, $output);

	return '';
}
// By default just return output
return $output;
