<?php

/**
 * Get a list of Items
 */
class DeliveryCityGetListProcessor extends modObjectGetListProcessor {
	public $objectType = 'extDeliveryCity';
	public $classKey = 'extDeliveryCity';
	public $defaultSortField = 'rank';
	public $defaultSortDirection = 'asc';
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
        $c->innerJoin('extDeliveryRegion','extDeliveryRegion','extDeliveryRegion.id = extDeliveryCity.id_region');
        $c->select($this->modx->getSelectColumns('extDeliveryCity','extDeliveryCity'));
        $c->select('extDeliveryRegion.name as region_name');

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

return 'DeliveryCityGetListProcessor';