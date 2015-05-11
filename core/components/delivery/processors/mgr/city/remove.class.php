<?php

/**
 * Remove an Items
 */
class DeliveryCityRemoveProcessor extends modObjectProcessor {
	public $objectType = 'extDeliveryCity';
	public $classKey = 'extDeliveryCity';
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
			return $this->failure($this->modx->lexicon('delivery_city_err_ns'));
		}

		foreach ($ids as $id) {
			/** @var DeliveryItem $object */
			if (!$object = $this->modx->getObject($this->classKey, $id)) {
				return $this->failure($this->modx->lexicon('delivery_city_err_nf'));
			}

			$object->remove();
		}

		return $this->success();
	}

}

return 'DeliveryCityRemoveProcessor';