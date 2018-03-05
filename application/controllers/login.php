<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

			public function __construct() {
				parent::__construct();
				$this->load->library(array('session'));
				$this->load->helper(array('url'));
				$this->load->model('n_model');			
			}

			public function index(){

				if ($this->session->userdata('usuario')) {

						$this->load->view('papeleta/ficha');	
				}
				else{$this->load->view('login');}
				
			}
			
	    	public function ingresar()
			{
				$usuario = $this->input->post('user');
				$pass = $this->input->post('pass');			
				
				if (isset($usuario)) {
					$resp = $this->n_model->login($usuario,$pass);
		  			if ($resp) {
		  				$user= [
			  				/*"nombre" => $resp->nombre,
			  				"apellidos" => $resp->apellidos,
			  				"dni" => $resp->dni,
			  				"idtipo" => $resp->idtipo,
			  				"usuario" => $resp->usuario,*/

			  				"CODUSER" => $resp->CODUSER,
			  				"TIPO" => $resp->CODUSER,

			  				"DES_USUARIO" => $resp->DES_USUARIO,
			  				"ACTIVO" => $resp->ACTIVO,
			  				"FECHAINGRESO" => $resp->FECHAINGRESO,

			  				"CORREO" => $resp->CORREO,
			  				"FECHAACTUALIZADO" => $resp->FECHAACTUALIZADO,
			  				"IPACTUALIZADO" => $resp->IPACTUALIZADO,
			  				"ROLASISTENCIA" => $resp->ROLASISTENCIA,
			  				"CODI_EMPL_PER" => $resp->CODI_EMPL_PER,
			  				
		  				];
		  
	  			         $this->session->set_userdata($user);
						
	  			         $data['tiposalida']= $this->n_model->get_tiposalida();

	  			         //var_dump($data);
	  			        // $data['script'] = '<script src='.base_url().'custom/ficha.js></script>';
						$this->load->view('papeleta/ficha', $data);						
					       }
					else{
		   				redirect('');
	     			}
				}

			}

  
		
}


