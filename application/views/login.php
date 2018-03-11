<!DOCTYPE html>
<html lang="en">
<head>
  <title>Papeleta ELectrónica</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->  
  <link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="plantillas/vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="plantillas/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="plantillas/fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="plantillas/vendor/animate/animate.css">
  <link rel="stylesheet" type="text/css" href="plantillas/vendor/select2/select2.min.css">
<!--===============================================================================================-->  
  <link rel="stylesheet" type="text/css" href="plantillas/css/util.css">
  <link rel="stylesheet" type="text/css" href="plantillas/css/main.css">
<!--===============================================================================================-->
</head>
<body>
<div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <div class="login100-form-title" style="background-image: url(images/bg-01.jpg);">
          <span class="login100-form-title-1">             
          </span>
        </div> 
        <form name="frm_admin" id="frm_admin" class="login100-form" action="<?php echo base_url(); ?>login/ingresar" method="post">
          <div class="wrap-input100 validate-input m-b-26" id='valido' style="display: none;">
            <button type="button" id='valido' class="close">&times;</button>
            <span></span>
          </div>
               
          <div class="wrap-input100 validate-input m-b-26" data-validate="Ingrese Usuario">
            <span class="label-input100">Usuario</span>
            <input class="input100" type="text" id="user" name="user" placeholder="Enter usuario">
            <span class="focus-input100"></span>
          </div>

          <div class="wrap-input100 validate-input m-b-18" data-validate = "Ingrese Password">
            <span class="label-input100">Password</span>
            <input class="input100" type="password" id="pass" name="pass" placeholder="Enter password">
            <span class="focus-input100"></span>
          </div>

          <div class="flex-sb-m w-full p-b-30">
            <div class="contact100-form-checkbox">
              <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
              <label class="label-checkbox100" for="ckb1">
                Recuerdame
              </label>
            </div>

            <div>
              <a href="#" class="txt1">
                ¿Olvidaste tu Password?
              </a>
            </div>
          </div>

          <div class="container-login100-form-btn">
            <button id="btn_enviar" name="btn_enviar" type="submit" class="login100-form-btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  
<!--===============================================================================================-->
  <script src="plantillas/vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
  <script src="plantillas/vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
  <script src="plantillas/vendor/bootstrap/js/popper.js"></script>
  <script src="plantillas/vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
  <script src="plantillas/vendor/select2/select2.min.js"></script>
  <script src="plantillas/jss/main.js"></script>
<script type="text/javascript">

$(function() {
  $(".close").click(function (e) {
    e.preventDefault();
    $(this).parent().fadeOut("fast");
  });

  $("#btn_limpiar").click(function(e) { 
    $("#user").val("");
    $("#pass").val("");
    $("#valido").hide();
  });


  $("#btn_enviar").click(function(e) {  

    var usuario = $("#user").val();
    var password = $("#pass").val();
    console.log(usuario);
    console.log(password);
    var isValidado = true;
    e.preventDefault();
    $("#frm_admin").find("input[required=required]").each(function (i,e) {
      var tipo_control = ($(this)[0].tagName).toUpperCase();
      if (tipo_control == "INPUT") {
        if ($.trim($(this).val()).length==0) {
          $(this).addClass("error");
          if (isValidado)
          $(this).focus(); 
          isValidado = false;
        } else
          $(this).removeClass("error");
      }
    });
    
    $("#frm_admin").find("input[required=required]").keyup(function (e) {
      if ($.trim($(this).val()).length==0) {
        $(this).addClass("error")
      }else
        $(this).removeClass("error");
    });
    
    
    if (!isValidado)
    return;
  
    acceso(usuario,password);


/*****************************************************/
/*function acceso(usuario,password) {
    $.ajax({
      data: {usuario:usuario,password:password},
      dataType: 'json',
      url: 'login.php',
      success:  function (response) {
        console.log(response);
        if (response.codigo=="1"){
          $("#valido").addClass("alert alert-success").removeClass("alert-danger").fadeIn('fast').find("span").text('Usuario y/o Password Válido');
          setTimeout(function() {
          window.location='ficha.php';
        
        }, 2000);
        }else{
          $("#valido").addClass("alert alert-danger").removeClass("alert-success").fadeIn('fast').find("span").text('Usuario y/o Password Incorrecto');
        }
      
      }
    });
  } 


});*/



  
</script>
</body>
</html>