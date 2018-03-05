<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>FCNL</title>
 

   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.1/css/materialize.min.css">
  <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.1/js/materialize.min.js"></script>
 
  
  <style type="text/css">
  html,
  body {
      height: 100%;
  }
  html {
      display: table;
      margin: auto;
  }
  body {
      display: table-cell;
      vertical-align: middle;
  }
  .margin {
    margin: 0 !important;
  }
  </style>
  
</head>
<body class="blue loaded">
  <div id="login-page" class="row">
    <div class="col s12 z-depth-6 card-panel">
      <form class="login-form" id="frm_login" name="frm_login" action="<?= site_url('login/ingresar') ?>" method="post">
        <div class="row">
          <div class="input-field col s12 center">
            <img src="<?= base_url() ?>images/editorial.png" alt="" class="responsive-img valign profile-image-login">
            <p class="center login-form-text">FORTALECIMIENTO DE CAPACIDADES A NIVEL LOCAL <br>FICHA TÉCNICA</p>
          </div>
        </div>
        <div class="row margin">
          <div class="input-field col s12">
            <i class="mdi-social-person-outline prefix"></i>
            <input id="name" name="usuario" type="text" required="required">
            <label for="first_name">Usuario</label>
          </div>
        </div>
        <div class="row margin">
          <div class="input-field col s12">
            <i class="mdi-action-lock-outline prefix"></i>
            <input id="password" name="password" type="password" required="required">
            <label for="password">Contraseña</label>
          </div>
        </div>
        
        <div class="row">
          <div class="input-field col s12">
           <button  id="loginform" class="btn blue btn-primary btn-raised" type="submit">INGRESAR</button>
          </div>
        </div>
       
      </form>
    </div>
  </div>

     
</body>

</html>