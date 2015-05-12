<?php

/**
 * Create an Point
 */
class DeliveryRegionCreateProcessor extends modObjectCreateProcessor {
	public $objectType = 'extDeliveryRegion';
	public $classKey = 'extDeliveryRegion';
	public $languageTopics = array('delivery');
	//public $permission = 'create';


	/**
	 * @return bool
	 */
	public function beforeSet() {
		$name = trim($this->getProperty('name'));
		if (empty($name)) {
			$this->modx->error->addField('name', $this->modx->lexicon('delivery_region_err_name'));
		}
		elseif ($this->modx->getCount($this->classKey, array('name' => $name))) {
			$this->modx->error->addField('name', $this->modx->lexicon('delivery_region_err_ae'));
		}

		return parent::beforeSet();
	}

    /** {@inheritDoc} */
    public function beforeSave() {
        $this->object->fromArray(array(
            'rank' => $this->modx->getCount('extDeliveryRegion')
        ));
        return parent::beforeSave();
    }

}

return 'DeliveryRegionCreateProcessor';