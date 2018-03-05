<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->helper('sql_to_excel_helper');
	}

	public function exportar()
	{
		$this->load->model('n_model');
		to_excel($this->n_model->get(), "FICHA_01D");
	}

}
/* End of file home.php */
/* Location: ./application/controllers/home.php */