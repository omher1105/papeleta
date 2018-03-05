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


	public  function registrarpapeleta()
	{
		$fecha_ini = $this->input->post('fecha_ini');
		$fecha_fin = $this->input->post('fecha_fin');
		$tipo_op = $this ->input->post('tipo_op');
		$fecha_registro = $this ->input->post('fecha_registro');
		$estado = $this ->input->post('estado');
		$id_user = $this ->input->post('id_user');
		$user_aprueba = $this ->input->post('user_aprueba');
		$fecha_aprueba = $this ->input->post('fecha_aprueba');

		$user_aprueba2 = $this ->input->post('user_aprueba2');
		$fecha_aprueba2 = $this ->input->post('fecha_aprueba2');

		$user_aprueba3 = $this ->input->post('user_aprueba3');
		$fecha_aprueba3 = $this ->input->post('fecha_aprueba3');

		$resp = $this->n_model->guardarpapeleta($fecha_ini,$fecha_fin,$tipo_op,$fecha_registro,$estado,$id_user,$user_aprueba,$fecha_aprueba,$user_aprueba2,$fecha_aprueba2,$user_aprueba3,$fecha_aprueba3 );	

				$this->load->view('papeleta/registrar');	

				}

	}


			return $res;
	}

      
}