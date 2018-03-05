<!-- JQuery -->
<script src="<?= base_url() ?>plantillas/js/jquery-1.12.4.min.js"></script> 
<!-- Library JS -->
<script src="<?= base_url() ?>plantillas/js/lecker_library.js"></script> 

<!-- Theme JS -->
<script src="<?= base_url() ?>plantillas/lecker_script.js"> </script>

<!-- Bootstrap core CSS -->
<link href="<?= base_url() ?>plantillas/css/bootstrap.min.css" rel="stylesheet">
<script src="<?= base_url() ?>plantillas/js/bootstrap.min.js"></script>
   
<!--ALERT-->
<script src="<?= base_url() ?>plantillas/js/sweetalert.min.js"></script>
<link rel="stylesheet" href="<?= base_url() ?>plantillas/css/sweetalert.css">
<script src="<?= base_url() ?>plantillas/js/bootbox.min.js"></script>


<!--CHOSEN-->
<script src="<?= base_url() ?>plantillas/js/chosen/chosen.jquery.min.js"></script>
<link rel="stylesheet" href="<?= base_url() ?>plantillas/js/chosen/chosen.css">

<!--CALENDAR-->
<link type="text/css" rel="stylesheet" src="<?= base_url() ?>plantillas/css/bootstrap-datepicker/css/datepicker.css"/>  
<script src="<?= base_url() ?>plantillas/css/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script src="<?= base_url() ?>plantillas/css/bootstrap-datepicker/js/locales/bootstrap-datepicker.es.js"></script>  
<!--TIME-->
<link rel="stylesheet" href="<?= base_url() ?>plantillas/css/bootstrap-datetimepicker.min.css">
<script src="<?= base_url() ?>plantillas/js/bootstrap-datetimepicker.min.js"></script>

<script type="text/javascript">


$(function() {
  
  /*$('#s_nombre').chosen({
  
    });*/

  $('#time_frame').hide();
  $('#hora_frame').hide();
  
  
  $("#frm_admin").find("select[required=required]").change(function (e) {
      if ($(this).val()==0) {
      $(this).addClass("error")
      }
      else
      $(this).removeClass("error");
    });
    
    
    
  $("#frm_admin").find("input[required=required],textarea[required=required]").keyup(function (e) {
    
      if ($.trim($(this).val()).length==0) {
      $(this).addClass("error")
      }
      else
      $(this).removeClass("error");
    
  });
  $("#frm_admin").find("input[required=required],textarea[required=required]").change(function (e) {
    
      if ($.trim($(this).val()).length==0) {
      $(this).addClass("error")
      }
      else
      $(this).removeClass("error");
    
  });
  
  $('#s_nombre').change(function(e) { 
    var tipo = $(this).val();
    console.log(tipo.substr(0,1));
    $('#s_tipo').val(tipo.substr(0,1));
    
    if ( tipo.substr(0,1) =="H"){
      $('#hora_frame').show();
      $('#time_frame').show();
      $("#s_tipo").removeClass('error').removeAttr('required');
    }else if( tipo.substr(0,1)=="D"){
      $('#hora_frame').hide();
      $('#time_frame').show();
      $("#h_i").removeClass('error').removeAttr('required');
      $("#h_f").removeClass('error').removeAttr('required');
      $("#s_tipo").removeClass('error').removeAttr('required');
    }else{
      $('#time_frame').hide();
      $('#hora_frame').hide();
      $("#fecha_f").removeClass('error').removeAttr('required');
      $("#fecha_i").removeClass('error').removeAttr('required');
      $("#h_i").removeClass('error').removeAttr('required');
      $("#h_f").removeClass('error').removeAttr('required');
    }
    
  });

    $('#s_tipo').change(function(e) {   

      var salida = $(this).val();
    console.log(salida);

    if ( salida =="H"){
      $('#hora_frame').show();
      $('#time_frame').show();
      $('#fecha_f').addClass("error");
      $('#fecha_i').addClass("error");
      $('#h_i').addClass("error");
      $('#h_f').addClass("error");
      
    }else if( salida=="D"){
      $('#hora_frame').hide();
      $('#time_frame').show();
      $('#h_i').removeClass("error");
      $('#h_f').removeClass("error");
    }else{
      $('#time_frame').hide();
      $('#hora_frame').hide();
      $('#fecha_f').removeClass("error");
      $('#fecha_i').removeClass("error");
      $('#h_i').removeClass("error");
      $('#h_f').removeClass("error");

    }
    });

    $('#hora_ini').datetimepicker({
      pickDate: false
    });
  
  $('#hora_fin').datetimepicker({
      pickDate: false

    });


  
  $('#fecha_i').datepicker({
        format: "yyyy-mm-dd",
        startView: "year",
        language :"es",
        //endDate: '1d',
        autoclose: true
      }).on('changeDate', function(event) {
      
        var fecha_fin=$('#fecha_f').val();
        
        //console.log(fecha_fin);
          if (fecha_fin.length!=0){
            if ($(this).val() > fecha_fin ){
              $(this).val("");
              bootbox.alert('Fecha Inicio no puede ser mayor a Fecha Fin');
            }/*else{
            $('#alert').hide();
            } */
          }
      
      });

  $('#fecha_f').datepicker({
          format: "yyyy-mm-dd",
          startView: "year",
          language :"es",
          /*startDate: "2016-07-01",
          endDate: '1d',*/
          autoclose: true
        }).on('changeDate', function(event) {
          
          var fecha_inicio=$('#fecha_i').val();
          //console.log(fecha_inicio);
            if (fecha_inicio.length!=0){
              if ($(this).val() < fecha_inicio ){
                $(this).val("");
                bootbox.alert('Fecha Fin no puede ser menor a Fecha Inicio');
              }/*else{
              $('#alert').hide();
              }*/ 
            }
          
        });
   
  $("#btn_registrar").click(function(e) { 
    e.preventDefault();
    var s_nombre= $('#s_nombre').val().substr(1,10);
    var fecha_f = $('#fecha_f').val();
    var fecha_i = $('#fecha_i').val();
    var hora_ini =  $('#h_i').val();
    var hora_fin =  $('#h_f').val();
    
    console.log("datos enviados AJAX");
    
    /*****DATOS NULL*****/
    var isValidado = true;

      $("#frm_admin").find("input[required=required],textarea[required=required],select[required=required]").each(function (i,e) {
      var tipo_control = ($(this)[0].tagName).toUpperCase();
      if (tipo_control == "INPUT") {
        if ($.trim($(this).val()).length==0) {
          $(this).addClass("error");
          if (isValidado)
          $(this).focus(); 
          isValidado = false;
        } else
          $(this).removeClass("error");
      } else if (tipo_control == "SELECT") {
        if ($(this).val()==0) {
          $(this).addClass("error");
          if (isValidado)
            $(this).focus(); 
          isValidado = false;
        } else
          $(this).removeClass("error");
      }
    });
    
    $("#frm_admin").find("select[required=required]").change(function (e) {
      if ($(this).val()==0) {
      $(this).addClass("error")
      }
      else
      $(this).removeClass("error");
    });
    
    
    
    $("#frm_admin").find("input[required=required],textarea[required=required]").keyup(function (e) {
      console.log('keyup');
      
      if ($.trim($(this).val()).length==0) {
      $(this).addClass("error")
      }
      else
      $(this).removeClass("error");
    
    });
    
    if (!isValidado)
    return;
  
        
        bootbox.confirm("¿Desea registrar papeleta?", function(result) {
          if (result){  
            registrar(s_nombre,fecha_i,fecha_f,hora_ini,hora_fin);
          }
        });
      
  }); 
  /*
  $("#cerrar_session").click(function(e) {
    e.preventDefault();
    var user = '<?php echo utf8_encode($_SESSION['usuario']);?>';
  
    bootbox.confirm("<b style='color:orange'>" +user+"</b> ::: ¿Desea salir del sistema ?", function(result) {
      if (result){
      cerrarSesion();

      }
    
    });
  });
  
});
*/

function registrar(s_nombre,fecha_i,fecha_f,hora_ini,hora_fin) {
    $.ajax({
      data: {s_nombre:s_nombre,fecha_i:fecha_i,fecha_f:fecha_f,hora_ini:hora_ini,hora_fin:hora_fin},
      dataType: 'json',
      url: 'ajax_registrar_pedido.php',
      success:  function (response) {
        
      console.log(response);
        if (response.codigo==1)
          window.location='system_javeca_order.php';
        else
          bootbox.dialog({
          closeButton: false,
          message: response.mensaje,
            buttons: {
                  danger: {
                    label: "Cerrar",
                    className: "btn-danger",
                    callback: function () {
                      window.location='system_javeca_order.php';
                      }
                    }
                }
          }); 
      }
    });
  }

function cerrarSesion() {
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
  }

</script>


</body>
</html>