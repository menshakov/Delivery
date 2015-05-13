<?php
/**
 * Enable/Disable an Item
 * Created by Delivery.
 * User: Vitaly
 * Date: 13.05.15
 * Time: 12:54
 */


class DeliveryPointEnableDisableProcessor extends modObjectProcessor {
    public $objectType = 'extDeliveryPoint';
    public $classKey = 'extDeliveryPoint';
    public $languageTopics = array('delivery');
    //public $permission = 'save';


    /**
     * @return array|string
     */
    public function process() {

        if (!$this->checkPermissions()) {
            return $this->failure($this->modx->lexicon('access_denied'));
        }

        $data = $this->modx->fromJSON($this->getProperty('data'));
        $id = $data['id'];
        $newStatus = $data['active'];

        if (empty($id)) {
            return $this->failure($this->modx->lexicon('delivery_point_err_ns'));
        }


        if (!$object = $this->modx->getObject($this->classKey, $id)) {
            return $this->failure($this->modx->lexicon('delivery_point_err_nf'));
        }

        $active = ($newStatus) ? true : false;

        $object->set('active', $active);
        $object->save();

        return $this->success();
    }

}

return 'DeliveryPointEnableDisableProcessor';
