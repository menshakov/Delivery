<?php

/**
 * Create an Point
 */
class DeliveryCityCreateProcessor extends modObjectCreateProcessor {
    public $objectType = 'extDeliveryCity';
    public $classKey = 'extDeliveryCity';
    public $languageTopics = array('delivery');
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet() {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('delivery_city_err_name'));
        }
        elseif ($this->modx->getCount($this->classKey, array('name' => $name))) {
            $this->modx->error->addField('name', $this->modx->lexicon('delivery_city_err_ae'));
        }

        return parent::beforeSet();
    }

    /** {@inheritDoc} */
    public function beforeSave() {
        $this->object->fromArray(array(
            'rank' => $this->modx->getCount('extDeliveryCity')
        ));
        return parent::beforeSave();
    }

}

return 'DeliveryCityCreateProcessor';