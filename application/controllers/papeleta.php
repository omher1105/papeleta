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
			redirect('papeleta/ficha');
		}else{
			$this->load->view('login');
		}
	}

	function registro($error = false, $id = false){
		if($error == true){
			if($error == 1){
				$data['error'] = 'LOS CAMPOS SON OBLIGATORIOS : MOTIVO DE SALIDA Y TIPO';
			}
		}

		if(isset($id) && isset($error)){
			if($error == 0){
				$data['papeleta_recuperada'] = $this->n_model->buscarPapeleta($id);
				$data['additional_script'] = "
					<script>
						$('#s_tipo').val('H').trigger('change');
					    $('#time-frame').css('display','block');
					    $('#date-frame').css('display','none');
					</script>";
			}
		}
		
		$data['tiposalida1'] = $this->n_model->get_tiposalidaDesc();
		$data['tiposalida2'] = $this->n_model->get_tiposalida();
		$data['script'] = '<script src="'.base_url().'custom/registro.js"></script>';
		//debug($data);
		layout('papeleta/registrar', $data);
	}

	function ficha(){
		$data['tiposalida']= $this->n_model->get_tiposalida();
		$data['script'] = '<script src="'.base_url().'custom/ficha.js"></script>';
		layout('papeleta/ficha', $data);
	}

	function registrarPapeleta($estado){
		//debug($_SESSION);
		//debug($_POST);
		echo $estado;
		if(isset($_POST['dpx-motivo']) && isset($_POST['dpx-tipo'])){
			//echo "entraste";
			//debug($_POST);
			$hoy = date('d-m-Y h:m:i');
			if($_POST['dpx-tipo'] == 'H'){
				echo "entraste a hora";
				$data['FECHA_INI'] = $_POST['datetime1'];
				$data['FECHA_FIN'] = $_POST['datetime2'];
			}else if($_POST['dpx-tipo'] == 'D'){
				echo "entraste a dia";
				$data['FECHA_INI'] = $_POST['date1'];
				$data['FECHA_FIN'] = $_POST['date2'];
			}
			//$data['ID'] = $_SESSION['CODI_EMPL_PER'];
			$data['TIPO_OP'] = $_POST['dpx-motivo'];
			$data['FECHA_REGISTRO'] = $hoy;
			$data['ESTADO'] = 2;
			$data['ID_USER'] = $_SESSION['usuario'][0]['CODI_EMPL_PER'];
			$data['IP_REG'] = getUserIP();
			//debug($data);
			//debug($_SERVER);
			if($estado == 1){
				$this->n_model->crearPapeleta($data);	
			}else{
				$data['ID'] = $_POST['id_papeleta'];
				$this->n_model->actualizarPapeletaId($data);
			}
			redirect('papeleta/ficha');
		}else{
			redirect('papeleta/registro/1');
		}
	
	}


	function restarFechas($fi, $ff){
		$diff = abs(strtotime($ff) - strtotime($fi));
		$data['years'] = floor($diff / (365*60*60*24));
		$data['months'] = floor(($diff - $data['years'] * 365*60*60*24) / (30*60*60*24));
		$data['days'] = floor(($diff - $data['years'] * 365*60*60*24 - $data['months']*30*60*60*24)/ (60*60*24));
		//debug($data);
		return $data;
	}

	 public function ajax_registrar_pedido() {
        $fecha_ini = $this->input->get('fecha_i').' '.$this->input->get('hora_ini');
        $fecha_fin = $this->input->get('fecha_f').' '.$this->input->get('hora_fin');
        $res = $this->pedido_model->registrar_papeleta(
            $fecha_ini, $fecha_fin, $this->input->get('s_nombre'), $_SESSION['CODI_EMPL_PER']
        );
        echo json_encode(var_dump($res));
    }
    
    function listarPapeleta(){
    	header('Content-Type: application/json');
    	$data = $this->n_model->listarPapeleta($_SESSION['usuario'][0]['CODI_EMPL_PER'], $_SESSION['usuario'][0]['ROLASISTENCIA'], $_SESSION['usuario'][0]['UBIC_FISI_CTR']);
    	echo json_encode($data);
    }


    function actualizarPapeletaSegundoFiltro($id, $estado){
    	$data['id'] = $id;
    	$data['estado'] = $estado;
    	$data['USER_APRUEBA'] = $_SESSION['usuario'][0]['CODI_EMPL_PER'];
    	$data['FECHA_APRUEBA'] = date('d-m-Y h:m:i');
    	$this->n_model->actualizarPapeleta($data);
    	redirect('papeleta/ficha');
    }

    
	function impresion($id = false){
		if($id == false){
			redirect('papeleta/ficha');
		}else{
			$data['impresion'] = $this->n_model->mostrarImpresion($id);
			$this->load->view('impresion', $data);
		}
		
	}
	


	

      
}
