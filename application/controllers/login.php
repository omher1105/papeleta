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
				$usuario = $_POST['user'];
				$pass = $_POST['pass'];		
				
				$sesion = $this->n_model->login($usuario,$pass);
		  	 	 if (count($sesion) > 0) {
		            $_SESSION['usuario'] = $sesion;
		            redirect('papeleta/ficha');
		        } else {
		            redirect('/');
		        }

			}

			function logout(){
				$this->session->sess_destroy();
        		redirect('/');
			}

  
		
}


