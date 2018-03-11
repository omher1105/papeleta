<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	class n_model extends CI_Model{
		function __construct(){
			parent::__construct();
			//$this->load->database();
			//$this->load->library('session');
		}

		public function login($usuario,$pass){
			$sql = "select 
					us.CODUSER,
					us.DES_USUARIO,
					us.CLAVE,
					us.ACTIVO,
					vlpt.UBIC_FISI_CTR,
					us.FECHAINGRESO,
					us.CORREO,
					us.FECHAACTUALIZADO,
					us.IPACTUALIZADO,
					us.ROLASISTENCIA,
					tr.DESCRIPCION,
					us.CODI_EMPL_PER	
					from usuarios_sisvis us
					INNER JOIN v_lista_personal_total vlpt
					on us.CODI_EMPL_PER = vlpt.CODI_EMPL_PER
					INNER JOIN tb_rol tr
					ON tr.ID = us.ROLASISTENCIA
					where us.CODI_EMPL_PER = '".$usuario."' and us.CLAVE = '".$pass."'
					and us.ACTIVO = 1
					LIMIT 1 ";
			$query = $this->db->query($sql)->result_array();
			if(count($query) > 0){
				echo "entraste";
			}
			return $query;

			
		   // $this -> db -> where('CODI_EMPL_PER', $usuario);
		   // $this -> db -> where('CLAVE', $pass);

		   // $query=$this -> db -> get('USUARIOS_SISVIS');
		   // if($query -> num_rows() > 0)
		   // {
		   //   return $query->row();
		   // }
		   // else
		   // {
		   //   return false;
		   // }
		}

		public function get_tiposalida(){
			$query = $this->db->query('SELECT TIPO_OPER_TOP from TIPO_OPERACION 
				WHERE TIPO_OPER_TOP <> ""
				GROUP BY TIPO_OPER_TOP ORDER BY 1 ASC');


			 return $query->result_array();
		}
		
		public function get_tiposalidaDesc(){
			$sql = "SELECT  CODI_OPER_TOP, DESC_OPER_TOP 
				FROM TIPO_OPERACION 
				WHERE CODI_OPER_TOP IN (35,19,49)
				GROUP BY CODI_OPER_TOP, DESC_OPER_TOP ORDER BY 2";
			$query = $this->db->query($sql)->result_array();
			return $query;
			
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

		function listarPapeleta($id , $rol, $ubi_fisi){
			// WHEN P.ESTADO=1 and fecha_ini < sysdate() THEN 'DEFASADO'
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
						WHEN P.ESTADO=2 THEN 'PENDIENTE ADMINISTRATIVO'
						WHEN P.ESTADO=3 THEN 'PENDIENTE JEFE DE UNIDAD'
						WHEN P.ESTADO=4 THEN 'PENDIENTE DIRECTOR EJECUTIVO'
						WHEN P.ESTADO=5 THEN 'PENDIENTE DIRECTOR TECNICO'
						WHEN P.ESTADO=6 THEN 'PENDIENTE RRHH'
						WHEN P.ESTADO=7 THEN 'AUTORIZADO'
						ELSE 'NO AUTORIZADO' END AS ESTADO_DESC,
						sec_to_time(
							timestampdiff(
								SECOND,
								P.FECHA_INI,
								P.FECHA_FIN
							)
						)AS DIFERENCIA
						from permiso P
						INNER JOIN usuarios_sisvis US
						ON P.ID_USER = US.CODI_EMPL_PER
						INNER  JOIN tipo_operacion T_O
						on P.TIPO_OP = T_O.CODI_OPER_TOP
						INNER JOIN v_lista_personal_total VLPT
						on VLPT.CODI_EMPL_PER = US.CODI_EMPL_PER
						where p.ID_USER=".$id." and VLPT.UBIC_FISI_CTR =".$ubi_fisi."
						group by P.ID, P.ID_USER,	US.DES_USUARIO,T_O.CODI_OPER_TOP,
						T_O.TIPO_OPER_TOP,	T_O.DESC_OPER_TOP,	P.FECHA_INI,
						P.FECHA_FIN, P.ESTADO
						 order by 1 desc";
				}else if($rol == 1 || $rol == 2 || $rol == 3||$rol == 4 ){ // administrativo  o director
					//$local = 6130;
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
							WHEN P.ESTADO=2 THEN 'PENDIENTE ADMINISTRATIVO'
							WHEN P.ESTADO=3 THEN 'PENDIENTE JEFE DE UNIDAD'
							WHEN P.ESTADO=4 THEN 'PENDIENTE DIRECTOR EJECUTIVO'
							WHEN P.ESTADO=5 THEN 'PENDIENTE DIRECTOR TECNICO'
							WHEN P.ESTADO=6 THEN 'PENDIENTE RRHH'
							WHEN P.ESTADO=7 THEN 'AUTORIZADO'
							ELSE 'NO AUTORIZADO' END AS ESTADO_DESC,
							US.ROLASISTENCIA,
							TR.DESCRIPCION,
							sec_to_time(
							timestampdiff(
								SECOND,
								P.FECHA_INI,
								P.FECHA_FIN
							)
							)AS DIFERENCIA
							from permiso P
							INNER JOIN usuarios_sisvis US
							ON P.ID_USER = US.CODI_EMPL_PER
							INNER  JOIN tipo_operacion T_O
							on P.TIPO_OP = T_O.CODI_OPER_TOP 
							inner join tb_rol TR
							on TR.ID = US.ROLASISTENCIA
							INNER JOIN v_lista_personal_total VP
							ON VP.CODI_EMPL_PER = US.CODI_EMPL_PER
							WHERE VP.UBIC_FISI_TDE = ".$ubi_fisi."
							order by 1 desc";
				} else if($rol == 5 || $rol == 7){
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
							WHEN P.ESTADO=2 THEN 'PENDIENTE ADMINISTRATIVO'
							WHEN P.ESTADO=3 THEN 'PENDIENTE JEFE DE UNIDAD'
							WHEN P.ESTADO=4 THEN 'PENDIENTE DIRECTOR EJECUTIVO'
							WHEN P.ESTADO=5 THEN 'PENDIENTE DIRECTOR TECNICO'
							WHEN P.ESTADO=6 THEN 'PENDIENTE RRHH'
							WHEN P.ESTADO=7 THEN 'AUTORIZADO'
							ELSE 'NO AUTORIZADO' END AS ESTADO_DESC,
							US.ROLASISTENCIA,
							TR.DESCRIPCION,
							sec_to_time(
							timestampdiff(
								SECOND,
								P.FECHA_INI,
								P.FECHA_FIN
							)
							)AS DIFERENCIA
							from permiso P
							INNER JOIN usuarios_sisvis US
							ON P.ID_USER = US.CODI_EMPL_PER
							INNER  JOIN tipo_operacion T_O
							on P.TIPO_OP = T_O.CODI_OPER_TOP 
							inner join tb_rol TR
							on TR.ID = US.ROLASISTENCIA
							INNER JOIN v_lista_personal_total VP
							ON VP.CODI_EMPL_PER = US.CODI_EMPL_PER
							order by 1 desc";
				}
			
			$query = $this->db->query($sql)->result_Array();
    		return $query;
		}


		function buscarPapeleta($id, $fi = false, $ff = false){
			if(isset($id) && $id > 0){
				$sql = "select * from permiso where id =".$id;
			}else{
				return false;
			}
			$query = $this->db->query($sql)->result_Array();
			return $query;
		}

		function actualizarPapeletaId($data){
			$sql = "update permiso set TIPO_OP = '".$data['TIPO_OP']."', FECHA_INI = '". $data['FECHA_INI']."', FECHA_FIN = '". $data['FECHA_FIN']."', FECHA_REGISTRO='".$data['FECHA_REGISTRO']."' where ID = ".$data['ID'];
			//echo $sql;
			$this->db->query($sql);
		}

		function actualizarPapeleta($data){
			debug($data);
			if($data['estado'] == 3){//administrativo
				$sql = "update permiso set estado=".$data['estado'].",USER_APRUEBA = '".$data['USER_APRUEBA']."', 
				FECHA_APRUEBA = '".$data['FECHA_APRUEBA']."' where id = ".$data['id'];
	    	}else if($data['estado'] == 4){//jefe de unidad
	    		$sql = "update permiso set estado=".$data['estado'].",USER_APRUEBA2 = '".$data['USER_APRUEBA']."', 
				FECHA_APRUEBA2 = '".$data['FECHA_APRUEBA']."' where id = ".$data['id'];
	    	}else if($data['estado'] == 5){//director ejecutivo
	    		$sql = "update permiso set estado=".$data['estado'].",USER_APRUEBA3 = '".$data['USER_APRUEBA']."', 
				FECHA_APRUEBA3 = '".$data['FECHA_APRUEBA']."' where id = ".$data['id'];
	    	}else if($data['estado'] == 6){//director tecnico
	    		$sql = "update permiso set estado=".$data['estado'].",USER_APRUEBA4 = '".$data['USER_APRUEBA']."', 
				FECHA_APRUEBA4 = '".$data['FECHA_APRUEBA']."' where id = ".$data['id'];
	    	}else if($data['estado'] == 7){//recursos humanos
	    		$sql = "update permiso set estado=".$data['estado'].",USER_APRUEBA5 = '".$data['USER_APRUEBA']."', 
				FECHA_APRUEBA5 = '".$data['FECHA_APRUEBA']."' where id = ".$data['id'];
	    	}
			$this->db->query($sql);
		}

		
		

}
	
?>



