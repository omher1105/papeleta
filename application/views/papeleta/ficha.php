<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Papeleta - Electrónica</title>
<!-- Library CSS -->
<link rel= rel="stylesheet" href="<?= base_url() ?>plantillas/css/lecker_library.css" >
<!-- Icons CSS -->
<link rel="stylesheet" href="<?= base_url() ?>plantillas/fonts/themify-icons.css" >
<link rel="stylesheet" href="<?= base_url() ?>plantillas/fonts/selima/stylesheet.css" >
<!-- Theme CSS -->
<link rel="stylesheet" href="<?= base_url() ?>plantillas/css/lecker_style.css" >
<!-- Google Fonts -->
<link  rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bree+Serif|Lato">
<link href="https://fonts.googleapis.com/css?family=Bree+Serif|Lato" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="<?= base_url() ?>plantillas/material/js/materialize.min.js"></script>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Passion+One" rel="stylesheet">
<link rel="stylesheet" href="<?= base_url() ?>plantillas/material/css/materialize.min.css">
<link rel="stylesheet" href="<?= base_url() ?>plantillas/materialize/css/main.css">

</head>
<body >
      <?php include "/../nav.php"; ?>
      
<div class="lec_france">
<div class="lec_page" id="lec_page">
    <!-- To Top -->
    <a href="#lec_page" class="lec_top lec_go"><b class="ti ti-angle-up"></b></a>

   
    <form name="guardarpapeleta" id="guardarpapeleta"  action="<?= site_url('papeleta/registro') ?>" method="post">

        <section class="lec_section lec_section_no_overlay">
        <div class="container text-center" id="lec_virtual">

         <div class="row">
          <h3><i class="ti ti-credit-card lec_icon_box"></i><strong>  Detalle de Operaciones por Trabajador</strong></h3>
          
          <table class="table table-hover borde_table pullUp"  id='lista_tabla' style="font-size:11px;" border=1>
              
              <thead class="cabecera">
              <tr>
                <td colspan=4><input type="text" class="form-control" id="fecha" name="fecha_inic"  required="required" placeholder ="Fecha de Inicio" readonly  />
                </td>
                <td colspan=2><input type="text" class="form-control" id="usuario" name="codEmpleado"  required="required"  value="<?php echo $_SESSION['CODI_EMPL_PER'];?>" placeholder ="Cod. Empleado"  readonly />
                </td>
                <td colspan=4><input type="text" class="form-control" id="usuario_nom" name="usuario_nom"  required="required" value="<?php echo $_SESSION['DES_USUARIO'];?>" placeholder ="Nombre Empleado"  readonly />
                </td>
              </tr>
              
              <tr>
                <td colspan=4>
                <input type="text" class="form-control" id="fecha_fin" name="fecha_fin"  required="required" placeholder ="Fecha Final" readonly  />
                </td>

                <td colspan=2>
                  <select id="estados" name="estados" class="form-control" required="required">
                    <option value="">Seleccione </option>
                    <option value="Autorizado">Autorizado </option>
                    <option value="No Autorizado">No Autorizado </option>
                  </select>
                </td> 

                <td colspan=4>
                <select type="text" id="tipsalida" name="tipsalida" class="form-control" required="required" placeholder ="tipo salida" readonly  />
                      <option value="" disabled selected>Seleccione</option>
                      <?php foreach($tiposalida as $depa) {  ?>
                             <option value=""><?php echo $depa['TIPO_OPER_TOP']; ?></option>
                      <?php } ?>

                  </select>
                  </td>
              </tr>    
          </table>
       
           <a id="btn_buscar" href="#" class="btn"> <i class="ti ti-search"></i>Buscar</a>               
              <button class="btn" type="submit"> <i class="ti ti-archive"></i>Agregar </button>
        
              <!-- tabla para el listado-->
         <table id="tbl_requerimiento" style="width:100%;" align="center">
          <tr>
            <td valign="top">
              <div id="div_materiales_consolidado" name="div_materiales_consolidado">
                <table id="tbl_materiales_consolidado"></table><div id="pag_materiales_consolidado"></div>
              </div>
            </td>
          </tr>
          </table>
        
                    </div>
                    <!-- row end -->
          
                </div>
                <!-- container end -->
                    
                
        </section>
      </form>
        <!-- section end -->
<script src="<?= base_url()?>plantillas/js/jquery-1.12.4.min.js"></script> 
<!-- Library JS -->
<script src="<?= base_url()?>plantillas/js/lecker_library.js"></script> 
<!-- Theme JS -->
<script src="<?= base_url()?>plantillas/js/lecker_script.js"></script>
<!-- Bootstrap core CSS -->
<link rel="stylesheet" href="<?= base_url()?>plantillas/css/bootstrap.min.css" >
 <script src="<?= base_url()?>plantillas/js/bootstrap.min.js"></script>
  <!--ALERT-->
<script src="<?= base_url()?>plantillas/js/sweetalert.min.js"></script>
<link rel="stylesheet" href="<?= base_url() ?>plantillas/css/sweetalert.css">
<script src="<?= base_url()?>plantillas/js/bootbox.min.js"></script>
<!--MORRIS-->
<script src="<?= base_url()?>plantillas/js/epa_morris/raphael-min.js"></script>
<script src="<?= base_url()?>plantillas/js/epa_morris/morris-0.4.1.min.js"></script>
<link rel="stylesheet" type="text/css" href="<?= base_url()?>plantillas/css/grid_style.css"/>
<link rel="stylesheet" type="text/css" href="<?= base_url()?>plantillas/lib/jquery-ui/css/custom-theme/jquery-ui-1.8.22.custom.css"/>
<link rel="stylesheet" type="text/css" href="<?= base_url()?>plantillas/lib/jqGrid/css/ui.jqgrid.css"/>


<script src="<?= base_url()?>plantillas/lib/jqGrid/js/jquery-1.7.2.min.js"></script> 

<script src="<?= base_url()?>plantillas/lib/jquery-ui/js/jquery-ui-1.9.2.custom.min.js"></script>

<script src="<?= base_url()?>plantillas/lib/jqGrid/js/jquery.jqGrid.src.js"></script>
<script src="<?= base_url()?>plantillas/lib/jqGrid/js/i18n/grid.locale-es.js"></script>
<!--CALENDAR-->
<link src="text/css" rel="stylesheet" href="<?= base_url()?>plantillas/css/bootstrap-datepicker/css/datepicker.css" />  
<script src="<?= base_url()?>plantillas/css/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script src="<?= base_url()?>plantillas/css/bootstrap-datepicker/js/locales/bootstrap-datepicker.es.js"></script>  





<style>
.not-active {
   pointer-events: none;
   cursor: default;
    opacity: 0.3;
}
</style>

<script type="text/javascript">

 /*$('#btn_registrar').on('click', function(e){
                e.preventDefault();
                get_file_c3("#guardarpapeleta");
            });

function get_file_c3(form) {
                       var url = "papeleta/registrar";
                       $.ajax({
                            url: url,
                            data: $(form).serializeArray(),
                            type: 'POST',
                            success: function (data) {
                                 /* console.log($(form).serializeArray());
                            alert("Los datos fueron agregados con exito");*/
                           /* },
                            error:function(jqXHR,textStatus,errorThrown){
                 /* console.log('error:: '+errorThrown);
                      console.log($(form).serializeArray());*/
              /*  }
                });

                }*/


$.extend($.jgrid.defaults, {
  datatype: 'json',
  mtype: 'GET',
  sortorder: 'asc',
  viewrecords: true,  
    autowidth: true,
  height:300,
  rowNum: 30,
  rowList:[5,15,30,50,100,200,500,1000,2000],
  gridview: true,
  multiselect: false,
  loadonce:false,
  rownumbers: true
});

var httpR;

$.ajaxSetup({
  async:true,
  type:  'GET',
  dataType: 'html',
  beforeSend: function(data) {
    if(httpR) httpR.abort();
    else visualizarCargaExterna(null,false); //mostrarCargaInterna("#div_centro");
    httpR = data;     
  },
  error: function(data) {
    if(!data.statusText.toLowerCase()=="abort") alert("error");
  }
});

$(function() {  
  $('#fecha').datepicker({
          format: "yyyy-mm-dd",
          startView: "year",
          language :"es",
          autoclose: true
        }).on('changeDate', function(event) {
      
        var fecha_fin=$('#fecha_fin').val();
        
        //console.log(fecha_fin);
          if (fecha_fin.length!=0){
            if ($(this).val() > fecha_fin ){
              $(this).val("");
              bootbox.alert('Fecha Inicio no puede ser mayor a Fecha Fin');
            }
          }
       
      });

  $('#fecha_fin').datepicker({
          format: "yyyy-mm-dd",
          startView: "year",
          language :"es",
          autoclose: true
        }).on('changeDate', function(event) {
          
          var fecha_inicio=$('#fecha').val();
          //console.log(fecha_inicio);
            if (fecha_inicio.length!=0){
              if ($(this).val() < fecha_inicio ){
                $(this).val("");
                bootbox.alert('Fecha Fin no puede ser menor a Fecha Inicio');
              }
            }
          
        });

  var fecha ='<?php $fecha = date('Y-m-01'); $nuevafecha = strtotime ( '-20 day' , strtotime ( $fecha ) ) ; $nuevafecha = date ( 'Y-m-d' , $nuevafecha ); echo ( $nuevafecha);?>'
  console.log(fecha);

  var fecha_fin ='<?php $fecha = date('Y-m-d'); $nuevafecha = strtotime ( '+1 month' , strtotime ( $fecha ) ) ; $nuevafecha = date ( 'Y-m-d' , $nuevafecha ); echo ( $nuevafecha);?>'
  console.log(fecha_fin);

  
  listarClientes("?fecha=" + fecha + '&fecha_fin=' + fecha_fin+ '&usuario=&estado=&usuario_nom=&salida=', false);
  

  $("#btn_buscar").click(function(e) {        
    var fecha = $("#fecha").val();
    var fecha_fin= $("#fecha_fin").val();
    var usuario= $("#usuario").val();
    var estado= $("#estados").val();
    var usuario_nom= $("#usuario_nom").val();
    var salida= $("#salida").val();
    
    listarClientes("?fecha=" + fecha + '&fecha_fin=' + fecha_fin+ '&usuario=' + usuario+ '&estado=' + estado+ '&usuario_nom=' + usuario_nom+ '&salida=' + salida, true);
    listar_datos(fecha,fecha_fin,usuario,estado,usuario_nom,salida);
    
  });

  $("#cerrar_session").click(function(e) {
    e.preventDefault();
    var user = '<?php echo $_SESSION["CODUSER"] ?>';
  
    bootbox.confirm("<b style='color:orange'>" +user+"</b> ::: ¿Desea salir del sistema de Papeleta?", function(result) {
      if (result){
      cerrarSesion();

      }
    
    });
  });
  
  $("#btn_exportar").click(function(e) {
    e.preventDefault();
    var fecha = $("#fecha").val();
    
    if (fecha.length==0 ){
      bootbox.alert("Seleccione fecha para exportar csv.");       
    }
    else{
      abrirNuevaVentana('excel.php?fecha=' +  $("#fecha").val());
    }
  });

});

function mostrarResultadoAjax(response,fn_cargarFuncionalidad,objetivo_padre,objetivo_hijo) {
  if (response) {
    objetivo_hijo = (objetivo_hijo?objetivo_hijo:".div_contenido_evaluation");
    $(objetivo_hijo).fadeOut(50, function () {
      $(this).remove();
      $(objetivo_padre?objetivo_padre:"#div_centro").html(response);
      if (fn_cargarFuncionalidad) fn_cargarFuncionalidad();
      removerCargaExterna(); //removerCargaInterna();
      httpR = null;
      $(objetivo_hijo).css("display","none").fadeIn(300);
    });
  } else {
    if (fn_cargarFuncionalidad) fn_cargarFuncionalidad();
    removerCargaExterna();
  }
}
// tabla para la visualizacion de papeletas
function visualizarCargaExterna(contenido,cerrar_click,objetivo_no_propagar) {
  if (!contenido) contenido = '<img id="img_cargando" src="images/preloader.gif" />';
  $('<div class="div_carga div_opaco_50_ie"></div><div class="div_wrapper"><div><div>'+contenido+'<div></div></div>').appendTo("body");
  if (cerrar_click) { 
    $(".div_wrapper").click(function() { removerCargaExterna(); });
    $(".div_wrapper").find(objetivo_no_propagar).click(function(event) { event.stopPropagation(); });
  }
}

function removerCargaExterna() {
  $(".div_carga").fadeOut(200, function () { $(this).remove(); });
  $(".div_wrapper").fadeOut(200, function () { $(this).remove(); });
}

function formatearPersonalUsuario(cellvalue, options, rowObject) {
  //console.log("formatearPersonalUsuario");
  //console.log(cellvalue);
  //console.log(options);
  //console.log(rowObject);
  var tipo='<?php echo $_SESSION['TIPO'];?>';
  var user='<?php echo $_SESSION['CODI_EMPL_PER'];?>';

  var str = rowObject[2];
  var res = str.split("-",1);
  /*console.log(res);
  console.log(user);*/
  /*10:director | 11: jefe | 12: admin*/
  var str_tbody="";
  if(rowObject[8]=='Autorizado'){
    str_tbody += '<button class="btn_aproved not-active" disabled type="button"><i class="ti ti-check"></i> </button><button class="btn_pdf" type="button"><i class="ti ti-file"></i></button>';
  }else if (rowObject[8]=='Pendiente' && res==user){
    str_tbody += '<button class="btn_aproved not-active" disabled type="button"><i class="ti ti-check"></i> </button><button class="btn_update" type="button"><i class="ti ti-reload"></i></button>';
  }else if( (tipo==1 || tipo==2) && rowObject[3]!='OTIN' && rowObject[8]=='Pendiente'){
      str_tbody += '<button class="btn_aproved"  type="button"><i class="ti ti-check"></i> </button><button class="btn_pdf not-active" disabled type="button"><i class="ti ti-file"></i></button>';
  }else{
    if( (rowObject[10]==tipo) || (rowObject[11]==tipo) || (rowObject[12]==tipo) || rowObject[8]!='Pendiente' || (rowObject[10]==1 && tipo==2) ||  rowObject[8]=='Defasado' ){
      str_tbody += '<button class="btn_aproved not-active" disabled type="button"><i class="ti ti-check"></i> </button><button class="btn_pdf not-active" disabled type="button"  ><i class="ti ti-file"></i> </button>';
    }else{
      str_tbody += '<button class="btn_aproved"  type="button"><i class="ti ti-check"></i> </button><button class="btn_pdf not-active" disabled type="button"  ><i class="ti ti-file"></i> </button>';
    }
  }
  return str_tbody;
}

function pintar_objeto(cellvalue, options, rowObject) {
  //console.log(rowObject);
  var str_tbody="";
  if ( cellvalue=="Pendiente"  ){
    str_tbody += '<span style="background-color: orange; color:white">Pendiente</span>' ;
  }else if ( cellvalue=="Autorizado" ){
    str_tbody += '<span style="background-color: green; color:white">Autorizado</span>' ;
  }else if ( cellvalue=="No Autorizado" ){
    str_tbody += '<span style="background-color: red; color:white">No Autorizado</span>' ;
  }else if ( cellvalue=="Defasado" ){
    str_tbody += '<span style="background-color: grey; color:white">Defasado</span>' ;
  }
  
  return str_tbody;
  
}
// javascript de la tabla de listar-->

function listarClientes(parametros, recargar) {
  console.log(parametros);
        var $grilla = $("#tbl_materiales_consolidado").jqGrid({
          rownumbers: false,
          rownumWidth: 45,
          //datastr:"ajax/ajax_listar_tabla.php" + parametros,
          url:""  + parametros,

          // url:"ajax_listar_pedido.php"  + parametros,
          sortname: 'id',
          sortorder: 'DESC',
          datatype: 'json',
          colNames:['OPCIONES','ID','EMPLEADO','PROYECTO','TIPO','SALIDA','INICIO','FIN','ESTADO','DD/HH/MM','DIRECTOR','JEFE','ADMINIS'],
          colModel:[
            {name:'opciones',index:'opciones',sortable:false,width:80, align:"center",hidden:false,frozen:true,formatter: formatearPersonalUsuario},
            {name:'id',index:'id',sortable:true,width:45, align:"center",hidden:false},
            {name:'codi_empl_per',index:'codi_empl_per',width:230, align:"center",editable:true},
            {name:'proyecto',index:'proyecto',width:75, align:"center",editable:true},
            {name:'TIPO_OPER_TOP',index:'TIPO_OPER_TOP',width:60, align:"center",editable:true},
            {name:'DESC_OPER_TOP',index:'DESC_OPER_TOP',width:215, align:"center",editable:true},
            {name:'fecha_ini',index:'fecha_ini',width:120, align:"center",editable:true},
            {name:'fecha_fin',index:'fecha_fin',width:120, align:"center",editable:true},
            {name:'estado',index:'estado',width:120, align:"center",editable:true,formatter:pintar_objeto},
            {name:'valida',index:'valida',width:100, align:"center",editable:true},
            {name:'director',index:'director',width:100, align:"center",editable:true,hidden:true},
            {name:'jefe',index:'jefe',width:100, align:"center",editable:true,hidden:true},
            {name:'administrador',index:'administrador',width:100, align:"center",editable:true,hidden:true}
            ],
          ajaxGridOptions: {
            type: 'POST',
            beforeSend: function(data) {
              visualizarCargaExterna(null,false);
            },
            complete:  function (response) {
              removerCargaExterna();
              
            var tipo='<?php echo $_SESSION['TIPO'];?>';
                      
            $(".btn_aproved").click(function (e) {
              var id = $(this).parent().parent().attr("id");
              var proyecto = $(this).parent().parent().find("td[aria-describedby=tbl_materiales_consolidado_proyecto]").text();
              var u1 = $(this).parent().parent().find("td[aria-describedby=tbl_materiales_consolidado_director]").text();   
              var u2 = $(this).parent().parent().find("td[aria-describedby=tbl_materiales_consolidado_jefe]").text();
              var u3 = $(this).parent().parent().find("td[aria-describedby=tbl_materiales_consolidado_administrador]").text();
                    
              var dialog = bootbox.dialog({
              title: '',
              message: "<p>Usuario elige <b>operación</b> a realizar</p>",
              buttons: {
                ok: {
                  label: "Aprobar",
                  className: 'btn-success',
                  callback: function(){
                    console.log(tipo+" user_sesion");
                    console.log(u2 +" user_jefe | " +u3+" user_admin");
                    console.log(proyecto);
                    if(proyecto=="OTIN" && (tipo==1 || tipo==2) && u3==0 && u2==0){
                      bootbox.alert('No ha sido aprobado por Jefe y Administrativo');
                    }else if(proyecto=="OTIN" && u2==0 && (tipo==1 || tipo==2) ){
                      bootbox.alert('No ha sido aprobado por Jefe');
                    }else if(proyecto=="OTIN" && (tipo==1 || tipo==2) && u3==0 ){
                      bootbox.alert('No ha sido aprobado por Administrativo');
                    }else{
                      aprobar(id,proyecto,u1,u2,u3);
                    }
                    
                  }
                },
                noclose: {
                  label: "Desaprobar",
                  className: 'btn-danger',
                  callback: function(){
                    var proyecto2='DESAPROBADO' 
                    aprobar(id,proyecto2,u1,u2,u3);
                  }
                },cancel: {
                  label: "Cancel",
                  className: 'btn-default',
                  callback: function(){
                    
                  }
                }
              }
              });

            });
            
            $(".btn_pdf").click(function (e) {
              var id = $(this).parent().parent().attr("id");
              console.log(id);
                bootbox.confirm("¿Desea ver pdf papeleta salida?", function(result) {
                  if (result){
                    window.open("generate_1.php?id=" + id, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=800,height=600");
                  }
                }); 
            });
            
            $(".btn_update").click(function (e) {
              var id = $(this).parent().parent().attr("id");  
              console.log(id);
                bootbox.confirm("¿Desea modificar papeleta salida?", function(result) {
                  if (result){
                    window.location='update_ord.php?id=' + id;
                    
                  }
                }); 
            });
            
            }
          },
          altRows: false,
          toppager: false,
          pager: '#pag_materiales_consolidado',
          caption:'Listado de permisos',
          scrollOffset: 0,
          shrinkToFit: false
          })
        .navGrid('#pag_materiales_consolidado',{edit:false,add:false,del:false,search:false,view:false,refresh:true})
        .jqGrid('bindKeys')
        //.jqGrid('setFrozenColumns');
        //.jqGrid('setGridWidth',( $("#div_main_marco").css("width")).replace("px",""));
        if (recargar) {
          $grilla
          .jqGrid('setGridParam',{url:"ajax_listar_pedido.php" + parametros,page:1}).trigger('reloadGrid');
          }
}
 
function aprobar(id,proyecto,u1,u2,u3) {  
    $.ajax({
      data: {id:id,proyecto:proyecto,u1:u1,u2:u2,u3:u3 },
      dataType: 'json',
      url: 'ajax_aprobar.php',
      success:  function (response) {
        console.log(response);
        var fecha ='<?php $fecha = date('Y-m-01'); $nuevafecha = strtotime ( '-20 day' , strtotime ( $fecha ) ) ; $nuevafecha = date ( 'Y-m-d' , $nuevafecha ); echo ( $nuevafecha);?>'
        var fecha_fin ='<?php $fecha = date('Y-m-d'); $nuevafecha = strtotime ( '+1 month' , strtotime ( $fecha ) ) ; $nuevafecha = date ( 'Y-m-d' , $nuevafecha ); echo ( $nuevafecha);?>'
  
        if (response.codigo==1){
          listarClientes("?fecha=" + fecha + '&fecha_fin=' + fecha_fin+ '&usuario=&estado=&usuario_nom=&salida=', true);
        }else{
          bootbox.dialog({
          closeButton: false,
          message: response.mensaje,
            buttons: {
                  danger: {
                    label: "Cerrar",
                    className: "btn-danger",
                    callback: function () {
                      window.location='ficha.php';
                      }
                    }
                }
          });   
        }
      }
    });
  }
  
function abrirNuevaVentana(url) {
    var $w = $('<a style="display: none;"  href="' + url + '"/>');
    $("body").append($w)
    $w[0].click();
    $w.remove();
  }
  
/*function cerrarSesion() {
    $.ajax({
      async:true,
      url:   'ajax_cerrar_sesion.php',
      type:  'post',
      dataType: 'json',         
      success:  function (response) { 
        bootbox.alert(response.mensaje);
        window.location='login.php';
      
        },
      error: function(dato){
        bootbox.alert("Ocurrio un error");  
      }
    });
  }*/

</script>


</body>
</html>