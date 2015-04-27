<?php

/**
 * Create an Item
 */
class DeliveryItemCreateProcessor extends modObjectCreateProcessor {
	public $objectType = 'DeliveryItem';
	public $classKey = 'DeliveryItem';
	public $languageTopics = array('delivery');
	//public $permission = 'create';


	/**
	 * @return bool
	 */
	public function beforeSet() {
		$name = trim($this->getProperty('name'));
		if (empty($name)) {
			$this->modx->error->addField('name', $this->modx->lexicon('delivery_item_err_name'));
		}
		elseif ($this->modx->getCount($this->classKey, array('name' => $name))) {
			$this->modx->error->addField('name', $this->modx->lexicon('delivery_item_err_ae'));
		}

		return parent::beforeSet();
	}

}

return 'DeliveryItemCreateProcessor';