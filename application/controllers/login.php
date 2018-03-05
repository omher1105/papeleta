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

						redirect('papeleta/ficha');	
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
						
	  			         

	  			         //var_dump($data);
	  			        // $data['script'] = '<script src='.base_url().'custom/ficha.js></script>';
						redirect('papeleta/ficha');						
					       }
					else{
		   				redirect('');
	     			}
				}

			}

			function logout(){
				$this->session->sess_destroy();
        		redirect('/');
			}

  
		
}


