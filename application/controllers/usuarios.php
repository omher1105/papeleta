<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class clsUsuarios {
	public static function acceso($usuario,$pass) {		
		$objConx = new clsConexion();
		$objConx->conectar();

		$sql = " SELECT DES_USUARIO,TIPO,CODI_EMPL_PER,CODUSER,CLAVE,
				case rolasistencia when 1 then 'Director Tecnico'
				when 2 then 'Director Ejecutivo'
				when 3 then 'Administrador'
				when 4 then 'Jefe Unidad'
				when 5 then 'RRHH'
				else 'Empleado' end as ROLASISTENCIA,ROLASISTENCIA 
				FROM USUARIOS_SISVIS
				WHERE CODI_EMPL_PER='$usuario' and CLAVE='$pass' ";
			
		$res = sqlsrv_query($sql) or die(sqlsrv_errors());  
		$arr_datos = array();
		while($row = sqlsrv_fetch_array($res)) {
			$arr_datos[]=$row;
			}
		$objConx->desconectar();
	
			return $arr_datos;
	}
	public static function verificar_sesion($cod_emp,$usuario) {		
		$objConx = new clsConexion();
		$objConx->conectar();

		$sql = "SELECT TIPO,CODI_EMPL_PER,CODUSER FROM USUARIOS_SISVIS
				WHERE CODI_EMPL_PER='$cod_emp' and CODUSER='$usuario' ";

		$res = sqlsrv_query($sql) or die(sqlsrv_errors());
		$arr_datos = array();
		while($row = sqlsrv_fetch_array($res)) {                   
			$arr_datos[]=$row;
			}
		$objConx->desconectar();
	
			return $arr_datos;
	}
	

	
	
}