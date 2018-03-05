<?php
date_default_timezone_set('America/Lima');
class Pedido_model extends CI_Model
{
    public function pdf_permiso($id)
    {
        $sql = "SELECT distinct A.id,B.codi_empl_per,B.DES_USUARIO,D.DES_USUARIO as director,e.DES_USUARIO as jefe,B.proyecto,C.DESC_OPER_TOP,c.TIPO_OPER_TOP,date(fecha_ini) as fecha_ini, date(fecha_fin) as fecha_fin,time(fecha_ini) as hora_ini, time(fecha_fin) as hora_fin,a.fecha_registro,case when A.estado='P' and fecha_ini < sysdate() then 'Defasado'  when A.estado='A' then 'Autorizado' when A.estado='P' then 'Pendiente' else 'No Autorizado' end as estado,C.codi_oper_top from permiso A 
        left join USUARIOS_SISVIS B on A.id_user=B.codi_empl_per 
        left join tipo_operacion C on A.tipo_op=C.CODI_OPER_TOP
        left join USUARIOS_SISVIS D on D.codi_empl_per=A.user_aprueba and D.RolAsistencia in (1,2)
        left join USUARIOS_SISVIS e on e.codi_empl_per=A.user_aprueba3 and e.RolAsistencia in (4)
        where  a.id='$id' ";
        $res = $this->db->query($sql);
        return $res->query();
    }
    /*public function consulta_salidas()*/
    public function get_tiposalidaDesc() {

      $sql = $this->db->query('SELECT distinct TIPO_OPER_TOP,CODI_OPER_TOP,DESC_OPER_TOP from TIPO_OPERACION 
                    where TIPO_OPER_TOP in ('D','H') order by DESC_OPER_TOP asc');
        $res = $this->db->query($sql);
        if ($res)
            return $res->result();
        return $this->db->error();
    }
/*CONSULATS*/
/*public function get_tiposalidaDesc(){
            $query = $this->db->query('SELECT DISTINCT CODI_OPER_TOP, DESC_OPER_TOP FROM [SISVIS].[dbo].[TIPO_OPERACION] ORDER BY [DESC_OPER_TOP]');

            return $query->result_array();
        }*/

/* CONSULATAS*/


    public function consulta_tipos()
    {
        $sql = "SELECT tipo_oper_top from tipo_operacion group by tipo_oper_top ";
        $res = $this->db->query($sql);
        $arr_datos = array();
        if ($res)
            return $res->result();
        return $this->db->error();
    }

    public static function listar_permisos($fecha_i, $fecha_f, $user, $tipo, $usuario, $estado, $usuario_nom, $salida, $sidx = 1, $sord = 'ASC')
    {
        $objConx = new clsConexion();   /* cambiar*/
        $objConx->conectar();

        if ($tipo != 'Empleado') {
            $sql = "SELECT distinct A.id,CONCAT(B.codi_empl_per,'-',B.DES_USUARIO) AS codi_empl_per,B.proyecto,C.DESC_OPER_TOP,c.TIPO_OPER_TOP,case when A.estado='P' and fecha_ini < sysdate() then 'Defasado'  when A.estado='A' then 'Autorizado' when A.estado='P' then 'Pendiente' else 'No Autorizado' end as estado,fecha_ini,fecha_fin,CONCAT( TIMESTAMPDIFF(DAY, fecha_ini, fecha_fin), ' DD | ', MOD(TIMESTAMPDIFF(HOUR, fecha_ini, fecha_fin), 24), ' HH | ', MOD(TIMESTAMPDIFF(MINUTE, fecha_ini, fecha_fin), 60), ' MM' ) as tiempo, case c.TIPO_OPER_TOP when 'D' then CONCAT( TIMESTAMPDIFF(DAY, fecha_ini, fecha_fin), ' DD') when 'H' then CONCAT( MOD(TIMESTAMPDIFF(HOUR, fecha_ini, fecha_fin), 24), ' HH | ', MOD(TIMESTAMPDIFF(MINUTE, fecha_ini, fecha_fin), 60), ' MM' ) end as valida,IF(D.RolAsistencia is null, 0, D.RolAsistencia) as director,IF(e.RolAsistencia is null, 0, e.RolAsistencia) as jefe,IF(f.RolAsistencia is null, 0, f.RolAsistencia)  as rrhh,IF(g.RolAsistencia is null, 0, g.RolAsistencia)as administrador from permiso A 
                
                left join USUARIOS_SISVIS B on A.id_user=B.codi_empl_per 
                left join tipo_operacion C on A.tipo_op=C.CODI_OPER_TOP
                left join USUARIOS_SISVIS D on D.codi_empl_per=A.user_aprueba and D.RolAsistencia in (1,2)
                left join USUARIOS_SISVIS e on e.codi_empl_per=A.user_aprueba3 and e.RolAsistencia in (4)
                left join USUARIOS_SISVIS f on f.codi_empl_per=A.user_aprueba2 and f.RolAsistencia in (3)
/* perfil rrhh*/ left join USUARIOS_SISVIS g on g.codi_empl_per=A.user_aprueba4 and g.RolAsistencia in (5)

                where fecha_ini >= '$fecha_i 00:00:00' and fecha_ini <= '$fecha_f 23:59:59' and  when A.estado='P' and fecha_ini < sysdate() then 'Defasado'  when A.estado='A' then 'Autorizado' when A.estado='P' then 'Pendiente' else 'No Autorizado' end !='Defasado' ";

            if (strlen($usuario) > 0) {
                $sql = $sql . " and B.codi_empl_per='$usuario'";
            }
            if (strlen($estado) > 0) {
                $sql = $sql . " and case when A.estado='P' and fecha_ini < sysdate() then 'Defasado'  when A.estado='A' then 'Autorizado' when A.estado='P' then 'Pendiente' else 'No Autorizado' end ='$estado'";
            }
            if (strlen($usuario_nom) > 0) {
                $sql = $sql . " and B.DES_USUARIOlike '%$usuario_nom%' ";
            }
            if (strlen($salida) > 0) {
                $sql = $sql . " and C.DESC_OPER_TOP like '%$salida%' ";
            }

        } else {
            $sql = "SELECT distinct A.id,CONCAT(B.codi_empl_per,'-',B.DES_USUARIO) AS codi_empl_per,B.proyecto,C.DESC_OPER_TOP,c.TIPO_OPER_TOP,case when A.estado='P' and fecha_ini < sysdate() then 'Defasado'  when A.estado='A' then 'Autorizado' when A.estado='P' then 'Pendiente' else 'No Autorizado' end as estado,fecha_ini,fecha_fin,CONCAT( TIMESTAMPDIFF(DAY, fecha_ini, fecha_fin), ' DD | ', MOD(TIMESTAMPDIFF(HOUR, fecha_ini, fecha_fin), 24), ' HH | ', MOD(TIMESTAMPDIFF(MINUTE, fecha_ini, fecha_fin), 60), ' MM' ) as tiempo, case c.TIPO_OPER_TOP when 'D' then CONCAT( TIMESTAMPDIFF(DAY, fecha_ini, fecha_fin), ' DD') when 'H' then CONCAT( MOD(TIMESTAMPDIFF(HOUR, fecha_ini, fecha_fin), 24), ' HH | ', MOD(TIMESTAMPDIFF(MINUTE, fecha_ini, fecha_fin), 60), ' MM' ) end as valida,IF(D.RolAsistencia is null, '', D.RolAsistencia) as director,IF(e.RolAsistencia is null, '', e.RolAsistencia) as jefe,IF(f.RolAsistencia is null, '', f.RolAsistencia) as rrhh,IF(g.RolAsistencia is null, 0, g.RolAsistencia) as administrador from permiso A 
                left join USUARIOS_SISVIS B on A.id_user=B.codi_empl_per 
                left join tipo_operacion C on A.tipo_op=C.CODI_OPER_TOP
                left join USUARIOS_SISVIS D on D.codi_empl_per=A.user_aprueba and D.RolAsistencia in (1,2)
                left join USUARIOS_SISVIS e on e.codi_empl_per=A.user_aprueba3 and e.RolAsistencia in (4)
                left join USUARIOS_SISVIS f on f.codi_empl_per=A.user_aprueba2 and f.RolAsistencia in (3)
 /* perfil rrhh*/ left join USUARIOS_SISVIS g on g.codi_empl_per=A.user_aprueba4 and g.RolAsistencia in (5)

                where fecha_ini >= '$fecha_i 00:00:00' and fecha_ini <= '$fecha_f 23:59:59' and id_user='$user'";
            if (strlen($estado) > 0) {
                $sql = $sql . " and case when A.estado='P' and fecha_ini < sysdate() then 'Defasado'  when A.estado='A' then 'Autorizado' when A.estado='P' then 'Pendiente' else 'No Autorizado' end ='$estado' ";
            }

            if (strlen($salida) > 0) {
                $sql = $sql . " and C.DESC_OPER_TOP like '%$salida%' ";
            }
        }

        $sql .= " ORDER BY {$sidx} {$sord};";
        //echo($sql);
        if ($sql != "") {
            $res = sqlsrv_query($sql) or die(sqlsrv_errors());
            $arr_datos = array();
            while ($row = sqlsrv_fetch_array($res)) {  

                $arr_datos[] = array('', $row["id"], utf8_encode($row["codi_empl_per"]), utf8_encode($row["proyecto"]), utf8_encode($row["TIPO_OPER_TOP"]), utf8_encode($row["DESC_OPER_TOP"]), $row["fecha_ini"], $row["fecha_fin"], $row["estado"], utf8_encode($row["valida"]), $row["director"], $row["jefe"], $row["administrador"]);

            }
            $objConx->desconectar();
            if ($res)
                return $arr_datos;
        }

        /*$res = mysql_query($sql) or die(mysql_error());
        //echo($sql);
        $arr_datos = array();

        while($row = mysql_fetch_array($res)) {

              $arr_datos[] = array($row["id"],utf8_encode($row["codi_empl_per"]),utf8_encode($row["proyecto"]),utf8_encode($row["TIPO_OPER_TOP"]),utf8_encode($row["DESC_OPER_TOP"]),$row["fecha_ini"],$row["fecha_fin"],$row["estado"],utf8_encode($row["valida"]),$row["director"],$row["jefe"],$row["administrador"]);
        }
        $objConx->desconectar();
        if ($res)
        return $arr_datos;
        return $res;*/
    }
    public function registrar_papeleta($fecha_inicio, $fecha_fin, $tipo_op, $id_user)
    {
        $data = array(
            'FECHA_INI' => $fecha_inicio,
            'FECHA_FIN' => $fecha_fin,
            'TIPO_OP' => $tipo_op,
            'FECHA_REGISTRO' => 'SYSDATE',
            'ESTADO' => 'P',
            'ID_USER' => $id_user,
            'USER_APRUEBA' => 0,
            'FECHA_APRUEBA' => NULL,
            'USER_APRUEBA2' => 0,
            'FECHA_APRUEBA2' => NULL,
            'USER_APRUEBA3' => 0,
            'FECHA_APRUEBA3' => NULL,         
        );
        $res = $this->db->insert('PERMISO', $data);
        return $res;
    }

    public static function aprobar_permiso($id, $id_aprueba, $tipo, $proyecto, $u1, $u2, $u3)
    {
        $objConx = new clsConexion(); /* cambiar*/
        $objConx->conectar();
        //jefe:user_3 y admin:user_2
        if ($proyecto == "DESAPROBADO") {
            $sql = "UPDATE permiso set user_aprueba='$id_aprueba',fecha_aprueba=sysdate(),estado='N' where id='$id'";
        } elseif ($proyecto != "OTIN") {

            $sql = "UPDATE permiso set user_aprueba='$id_aprueba',fecha_aprueba=sysdate(),estado='A' where id='$id'";
        } elseif ($tipo == "Administrador" AND $proyecto == "OTIN" AND $u1 > 0 AND $u2 > 0) {

            $sql = "UPDATE permiso set user_aprueba2='$id_aprueba',fecha_aprueba2=sysdate(),estado='A' where id='$id'";
        } elseif ($tipo == "Administrador" AND $proyecto == "OTIN" AND ($u1 == 0 OR $u2 == 0)) {

            $sql = "UPDATE permiso set user_aprueba2='$id_aprueba',fecha_aprueba2=sysdate(),estado='P' where id='$id'";
        } elseif ($tipo == "Jefe Unidad" AND $proyecto == "OTIN" AND ($u1 == 0 OR $u3 == 0)) {

            $sql = "UPDATE permiso set user_aprueba3='$id_aprueba',fecha_aprueba3=sysdate(),estado='P' where id='$id'";
        } elseif ($tipo == "Jefe Unidad" AND $proyecto == "OTIN" AND $u1 > 0 AND $u3 > 0) {
            $sql = "UPDATE permiso set user_aprueba3='$id_aprueba',fecha_aprueba3=sysdate(),estado='A' where id='$id'";

        } elseif (($tipo != "Jefe Unidad" OR $tipo != "Administrador") AND $proyecto == "OTIN" AND $u2 > 0 AND $u3 > 0) {
            $sql = "UPDATE permiso set user_aprueba='$id_aprueba',fecha_aprueba=sysdate(),estado='A' where id='$id'";

        } elseif (($tipo != "Jefe Unidad" OR $tipo != "Administrador") AND $proyecto == "OTIN" AND ($u2 == 0 OR $u3 == 0)) {
            $sql = "UPDATE permiso set user_aprueba='$id_aprueba',fecha_aprueba=sysdate(),estado='P' where id='$id'";

        }
        //echo($sql);
        $res = sqlsrv_query($sql) or die(sqlsrv_errors());
        $objConx->desconectar();
        return $res;
    }
    public static function actualizar_permiso($id, $fecha_ini, $fecha_fin, $tipo_op)
    {
        $objConx = new clsConexion();
        $objConx->conectar();
        $sql = "UPDATE permiso set fecha_ini='$fecha_ini',fecha_fin='$fecha_fin',tipo_op='$tipo_op' where id='$id'";
        //echo($sql);
        $res = sqlsrv_query($sql) or die(sqlsrv_errors());
        $objConx->desconectar();
        return $res;
    }
}
