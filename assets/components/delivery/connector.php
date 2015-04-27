<?php
/** @noinspection PhpIncludeInspection */
require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CORE_PATH . 'config/' . MODX_CONFIG_KEY . '.inc.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CONNECTORS_PATH . 'index.php';
/** @var Delivery $Delivery */
$Delivery = $modx->getService('delivery', 'Delivery', $modx->getOption('delivery_core_path', null, $modx->getOption('core_path') . 'components/delivery/') . 'model/delivery/');
$modx->lexicon->load('delivery:default');

// handle request
$corePath = $modx->getOption('delivery_core_path', null, $modx->getOption('core_path') . 'components/delivery/');
$path = $modx->getOption('processorsPath', $Delivery->config, $corePath . 'processors/');
$modx->request->handleRequest(array(
	'processors_path' => $path,
	'location' => '',
));