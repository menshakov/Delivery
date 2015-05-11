<?php
$xpdo_meta_map['extDeliveryCity']= array (
  'package' => 'delivery',
  'version' => '1.1',
  'table' => 'delivery_city',
  'extends' => 'xPDOSimpleObject',
  'fields' => 
  array (
    'name' => '',
    'id_region' => 0,
    'rank' => 0,
  ),
  'fieldMeta' => 
  array (
    'name' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '250',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'id_region' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'int',
      'null' => false,
      'default' => 0,
    ),
    'rank' =>
        array (
            'dbtype' => 'int',
            'precision' => '10',
            'phptype' => 'int',
            'null' => true,
            'default' => 0,
          ),
  ),
  'indexes' => 
  array (
    'id_region' => 
    array (
      'alias' => 'id_region',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'id_region' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
  ),
  'composites' => 
  array (
    'Points' => 
    array (
      'class' => 'extDeliveryPoint',
      'local' => 'id',
      'foreign' => 'id_city',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
  ),
  'aggregates' => 
  array (
    'Region' => 
    array (
      'class' => 'extDeliveryRegion',
      'local' => 'id_region',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
  ),
);
