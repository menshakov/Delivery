<?php

if ($object->xpdo) {
	/** @var modX $modx */
	$modx =& $object->xpdo;

	switch ($options[xPDOTransport::PACKAGE_ACTION]) {
		case xPDOTransport::ACTION_INSTALL:
			$modelPath = $modx->getOption('delivery_core_path', null, $modx->getOption('core_path') . 'components/delivery/') . 'model/';
			$modx->addPackage('delivery', $modelPath);

			$manager = $modx->getManager();
			$objects = array(
                'extDeliveryPoint',
                'extDeliveryCity',
                'extDeliveryRegion',
			);
			foreach ($objects as $tmp) {
				$manager->createObjectContainer($tmp);
			}
			break;

		case xPDOTransport::ACTION_UPGRADE:
			break;

		case xPDOTransport::ACTION_UNINSTALL:
			break;
	}
}
return true;
