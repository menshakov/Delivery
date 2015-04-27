<?php

/**
 * Class DeliveryMainController
 */
abstract class DeliveryMainController extends modExtraManagerController {
	/** @var Delivery $Delivery */
	public $Delivery;


	/**
	 * @return void
	 */
	public function initialize() {
		$corePath = $this->modx->getOption('delivery_core_path', null, $this->modx->getOption('core_path') . 'components/delivery/');
		require_once $corePath . 'model/delivery/delivery.class.php';

		$this->Delivery = new Delivery($this->modx);
		$this->addCss($this->Delivery->config['cssUrl'] . 'mgr/main.css');
		$this->addJavascript($this->Delivery->config['jsUrl'] . 'mgr/delivery.js');
		$this->addHtml('
		<script type="text/javascript">
			Delivery.config = ' . $this->modx->toJSON($this->Delivery->config) . ';
			Delivery.config.connector_url = "' . $this->Delivery->config['connectorUrl'] . '";
		</script>
		');

		parent::initialize();
	}


	/**
	 * @return array
	 */
	public function getLanguageTopics() {
		return array('delivery:default');
	}


	/**
	 * @return bool
	 */
	public function checkPermissions() {
		return true;
	}
}


/**
 * Class IndexManagerController
 */
class IndexManagerController extends DeliveryMainController {

	/**
	 * @return string
	 */
	public static function getDefaultController() {
		return 'home';
	}
}