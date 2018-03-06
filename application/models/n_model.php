<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	class n_model extends CI_Model{
		function __construct(){
			parent::__construct();
			$this->load->database();
			$this->load->library('session');
		}

		public function login($usuario,$pass){

		   $this -> db -> where('CODI_EMPL_PER', $usuario);
		   $this -> db -> where('CLAVE', $pass);

		   $query=$this -> db -> get('USUARIOS_SISVIS');
		   if($query -> num_rows() > 0)
		   {
		     return $query->row();
		   }
		   else
		   {
		     return false;
		   }
		}

		public function get_tiposalida(){
			$query = $this->db->query('SELECT TIPO_OPER_TOP from TIPO_OPERACION 
				WHERE TIPO_OPER_TOP <> ""
				GROUP BY TIPO_OPER_TOP ORDER BY 1 ASC');


			 return $query->result_array();
		}
		
		public function get_tiposalidaDesc(){
			// $query = $this->db->query('SELECT DISTINCT CODI_OPER_TOP, DESC_OPER_TOP FROM [SISVIS].[dbo].[TIPO_OPERACION] ORDER BY [DESC_OPER_TOP]');
			$query = $this->db->query('SELECT  CODI_OPER_TOP, DESC_OPER_TOP FROM TIPO_OPERACION 
				WHERE DESC_OPER_TOP <> ""
				GROUP BY CODI_OPER_TOP, DESC_OPER_TOP ORDER BY 2 ');

			return $query->result_array();
			
		}
		public function guardarpapeleta($fecha_inic,$codEmpleado,$fecha_fin,$tipsalida){

			$data = array(
				    'ID' => $codEmpleado,
                    'FECHA_INI' => $fecha_inic,
                    'ID_USER' => $codEmpleado,
                    'FECHA_FIN' => $fecha_fin, 
// registrar permiso//
                     'TIPO_OP' => $tipsalida, 


                );

			//var_dump($data);
                      
   			//$this->db->insert('PERMISO', $data);
			 //return $idOfInsertedData = $this->db->insert_id();

   			//return $data;
		}

		function crearPapeleta($data){
			//debug($data);	
			// if($data['ESTADO'] == 1){
				$sql = 'insert into permiso(FECHA_INI, FECHA_FIN, TIPO_OP, FECHA_REGISTRO, ESTADO, ID_USER) values("'.$data['FECHA_INI'].'","'.$data['FECHA_FIN'].'","'.$data['TIPO_OP'].'","'.$data['FECHA_REGISTRO'].'","'.$data['ESTADO'].'","'.$data['ID_USER'].'")';
				echo $sql;

				$this->db->query($sql);
			// }
		}

		function listarPapeleta($id , $rol){
			if($rol == 6){
				$sql = "select 
					P.ID,
					P.ID_USER,
					US.DES_USUARIO,
					T_O.CODI_OPER_TOP,
					T_O.TIPO_OPER_TOP,
					T_O.DESC_OPER_TOP,
					P.FECHA_INI,
					P.FECHA_FIN,
					P.ESTADO,
					CASE 
					WHEN P.ESTADO=1 and fecha_ini < sysdate() THEN 'DEFASADO'
					WHEN P.ESTADO=2 THEN 'PENDIENTE'
					WHEN P.ESTADO=3 THEN 'AUTORIZADO'
					ELSE 'NO AUTORIZADO' END AS ESTADO_DESC
					from permiso P
					INNER JOIN usuarios_sisvis US
					ON P.ID_USER = US.CODI_EMPL_PER
					INNER  JOIN tipo_operacion T_O
					on P.TIPO_OP = T_O.CODI_OPER_TOP
					where p.ID_USER=". $id ." order by 1 desc";
				}else if($rol == 3 || $rol == 1){ // administrativo  o director
					$sql = "select 
					P.ID,
					P.ID_USER,
					US.DES_USUARIO,
					T_O.CODI_OPER_TOP,
					T_O.TIPO_OPER_TOP,
					T_O.DESC_OPER_TOP,
					P.FECHA_INI,
					P.FECHA_FIN,
					P.ESTADO,
					CASE 
					WHEN P.ESTADO=1 and fecha_ini < sysdate() THEN 'DEFASADO'
					WHEN P.ESTADO=2 THEN 'PENDIENTE POR APROBAR'
					WHEN P.ESTADO=3 THEN 'AUTORIZADO'
					ELSE 'PENDIENTE' END AS ESTADO_DESC
					from permiso P
					INNER JOIN usuarios_sisvis US
					ON P.ID_USER = US.CODI_EMPL_PER
					INNER  JOIN tipo_operacion T_O
					on P.TIPO_OP = T_O.CODI_OPER_TOP order by 1 desc";
				}
			
			$query = $this->db->query($sql)->result_Array();
    		return $query;
		}

		function actualizarPapeleta($id, $estado){
			$sql = "update permiso set estado=".$estado." where id = ".$id;
			$this->db->query($sql);
		}
		

}
	
?>



