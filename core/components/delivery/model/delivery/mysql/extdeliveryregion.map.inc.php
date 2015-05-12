<?php
$xpdo_meta_map['extDeliveryRegion']= array (
  'package' => 'delivery',
  'version' => '1.1',
  'table' => 'delivery_region',
  'extends' => 'xPDOSimpleObject',
  'fields' => 
  array (
    'name' => '',
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
    'rank' =>
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'int',
      'null' => true,
      'default' => 0,
    )
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
    'City' => 
    array (
      'class' => 'extDeliveryCity',
      'local' => 'id',
      'foreign' => 'id_region',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
  ),
);
