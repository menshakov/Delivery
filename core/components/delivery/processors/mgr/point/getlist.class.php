<?php

/**
 * Get a list of Items
 */
class DeliveryPointGetListProcessor extends modObjectGetListProcessor {
	public $objectType = 'extDeliveryPoint';
	public $classKey = 'extDeliveryPoint';
	public $defaultSortField = 'rank';
	public $defaultSortDirection = 'ASC';
	//public $permission = 'list';


	/**
	 * * We doing special check of permission
	 * because of our objects is not an instances of modAccessibleObject
	 *
	 * @return boolean|string
	 */
	public function beforeQuery() {
		if (!$this->checkPermissions()) {
			return $this->modx->lexicon('access_denied');
		}

		return true;
	}


	/**
	 * @param xPDOQuery $c
	 *
	 * @return xPDOQuery
	 */
	public function prepareQueryBeforeCount(xPDOQuery $c) {
        $c->innerJoin('extDeliveryCity', 'extDeliveryCity', 'extDeliveryCity.id = extDeliveryPoint.id_city');
        $c->innerJoin('msDelivery', 'msDelivery', 'msDelivery.id = extDeliveryPoint.id_type_delivery');

        $c->select($this->modx->getSelectColumns('extDeliveryPoint', 'extDeliveryPoint'));
        $c->select('extDeliveryCity.name as city');
        $c->select('msDelivery.name as delivery');

		$query = trim($this->getProperty('query'));
		if ($query) {
			$c->where(array(
				'name:LIKE' => "%{$query}%",
				'OR:description:LIKE' => "%{$query}%",
			));
		}

		return $c;
	}


	/**
	 * @param xPDOObject $object
	 *
	 * @return array
	 */
	public function prepareRow(xPDOObject $object) {
		$array = $object->toArray();

		return $array;
	}

}

return 'DeliveryPointGetListProcessor';