<?php

/**
 * Remove an Items
 */
class DeliveryRegionRemoveProcessor extends modObjectProcessor {
	public $objectType = 'extDeliveryRegion';
	public $classKey = 'extDeliveryRegion';
	public $languageTopics = array('delivery');
	//public $permission = 'remove';


	/**
	 * @return array|string
	 */
	public function process() {
		if (!$this->checkPermissions()) {
			return $this->failure($this->modx->lexicon('access_denied'));
		}

		$ids = $this->modx->fromJSON($this->getProperty('ids'));
		if (empty($ids)) {
			return $this->failure($this->modx->lexicon('delivery_region_err_ns'));
		}

		foreach ($ids as $id) {
			/** @var DeliveryItem $object */
			if (!$object = $this->modx->getObject($this->classKey, $id)) {
				return $this->failure($this->modx->lexicon('delivery_region_err_nf'));
			}

			$object->remove();
		}

		return $this->success();
	}

}

return 'DeliveryRegionRemoveProcessor';