<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class papeleta extends CI_Controller {

public function __construct(){
		parent::__construct();
		//$this->load->database();
		$this->load->model('n_model');
		$this->load->library('session');
		//$this->session->set_userdata('currentId', 1);
	}

	function index(){
		if ($this->session->userdata('usuario')) {
			layout('papeleta/registrar');	
		}else{
			$this->load->view('login');
		}
	}

	function registro(){
		$data['tiposalida1'] = $this->n_model->get_tiposalidaDesc();
		$data['tiposalida2'] = $this->n_model->get_tiposalida();
		$data['script'] = '<script src="'.base_url().'custom/registro.js"></script>';
		layout('papeleta/registrar', $data);
	}

	function registrarPapeleta(){
		//debug($_SESSION);
		if($_POST['s_tipo'] == 'D'){
			$data['FECHA_INI'] = $_POST['f_inicio'].' 00:00:00';
			$data['FECHA_FIN'] = $_POST['f_fin'].' 00:00:00';
		}else if($_POST['s_tipo'] == 'H'){
			$data['FECHA_INI'] = $_POST['f_inicio'].' '.$_POST['t_inicio'];
			$data['FECHA_FIN'] = $_POST['f_fin'].' '.$_POST['t_fin'];
		}
		$data['ID'] = $_SESSION['CODI_EMPL_PER'];
		$data['TIPO_OP'] = $_POST['TIPO_OP'];
		$data['FECHA_REGISTRO'] = '2013-05-11 00:00:00';
		$data['ESTADO'] = 1;
		$data['ID_USER'] = $_SESSION['CODI_EMPL_PER'];
		//debug($data);
		$this->n_model->crearPapeleta($data);

		redirect('login/ingresar');
	}

	public function registrar()
			{
				// $fecha_inic = $this->input->post('fecha_inic');
				// $codEmpleado = $this->input->post('codEmpleado');
				// $fecha_fin = $this ->input->post('fecha_fin');

				// $tipsalida = $this ->input->post('tipsalida');

// registrar papeleta//

	
		// $fecha_registro = $this ->input->post('fecha_registro');
		// $estado = $this ->input->post('estado');
		// $id_user = $this ->input->post('id_user');
		// $user_aprueba = $this ->input->post('user_aprueba');
		// $fecha_aprueba = $this ->input->post('fecha_aprueba');

		// $user_aprueba2 = $this ->input->post('user_aprueba2');
		// $fecha_aprueba2 = $this ->input->post('fecha_aprueba2');

		// $user_aprueba3 = $this ->input->post('user_aprueba3');
		// $fecha_aprueba3 = $this ->input->post('fecha_aprueba3');

		// $resp = $this->n_model->guardarpapeleta($fecha_inic,$codEmpleado,$tipsalida,$fecha_registro,$estado,$id_user,$user_aprueba,$fecha_aprueba,$user_aprueba2,$fecha_aprueba2,$user_aprueba3,$fecha_aprueba3 );	
// fin de reg. papeleta//

		
				/*$resp = $this->n_model->guardarpapeleta($fecha_inic,$codEmpleado,$fecha_fin);	*/

				// $data['tiposalida1'] = $this->n_model->get_tiposalidaDesc();
				// $data['tiposalida2'] = $this->n_model->get_tiposalida();

				// $this->load->view('papeleta/registrar', $data);	

				}


	 public function ajax_registrar_pedido() {
        $fecha_ini = $this->input->get('fecha_i').' '.$this->input->get('hora_ini');
        $fecha_fin = $this->input->get('fecha_f').' '.$this->input->get('hora_fin');
        $res = $this->pedido_model->registrar_papeleta(
            $fecha_ini, $fecha_fin, $this->input->get('s_nombre'), $_SESSION['CODI_EMPL_PER']
        );
        echo json_encode(var_dump($res));
    }
    	
	
	


	

      
}
