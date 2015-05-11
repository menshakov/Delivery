<?php

/**
 * The home manager controller for Delivery.
 *
 */
class DeliveryHomeManagerController extends DeliveryMainController {
	/* @var Delivery $Delivery */
	public $Delivery;


	/**
	 * @param array $scriptProperties
	 */
	public function process(array $scriptProperties = array()) {
	}


	/**
	 * @return null|string
	 */
	public function getPageTitle() {
		return $this->modx->lexicon('delivery');
	}


	/**
	 * @return void
	 */
	public function loadCustomCssJs() {
		$this->addCss($this->Delivery->config['cssUrl'] . 'mgr/main.css');
		$this->addCss($this->Delivery->config['cssUrl'] . 'mgr/bootstrap.buttons.css');
		$this->addJavascript($this->Delivery->config['jsUrl'] . 'mgr/misc/utils.js');
		$this->addJavascript($this->Delivery->config['jsUrl'] . 'mgr/widgets/points.grid.js');
		$this->addJavascript($this->Delivery->config['jsUrl'] . 'mgr/widgets/points.windows.js');
        $this->addJavascript($this->Delivery->config['jsUrl'] . 'mgr/widgets/city.grid.js');
        $this->addJavascript($this->Delivery->config['jsUrl'] . 'mgr/widgets/city.windows.js');
        $this->addJavascript($this->Delivery->config['jsUrl'] . 'mgr/widgets/region.grid.js');
        $this->addJavascript($this->Delivery->config['jsUrl'] . 'mgr/widgets/region.windows.js');
		$this->addJavascript($this->Delivery->config['jsUrl'] . 'mgr/widgets/home.panel.js');
		$this->addJavascript($this->Delivery->config['jsUrl'] . 'mgr/sections/home.js');
		$this->addHtml('<script type="text/javascript">
		Ext.onReady(function() {
			MODx.load({ xtype: "delivery-page-home"});
		});
		</script>');
	}


	/**
	 * @return string
	 */
	public function getTemplateFile() {
		return $this->Delivery->config['templatesPath'] . 'home.tpl';
	}
}