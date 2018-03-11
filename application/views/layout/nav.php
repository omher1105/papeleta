<header>
  <?php $sesion =  $_SESSION['usuario'][0];?>
  <!-- <nav>
  <div class="container" >   
      <a href="#" class="lec_logo">  <?php echo $_SESSION["ROLASISTENCIA"].': '. utf8_encode($_SESSION["DES_USUARIO"]); ?>  &nbsp;&nbsp;&nbsp;&nbsp; INEI<i><span>Papeleta </span><span>Electrónica  </span> </i>  </a>
    </div>
    <div class="nav-wrapper blue accent-4">
      <a href="#" class="brand-logo2 izqu"></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">

      <?php $tipo=$this->session->userdata('ROLASISTENCIA'); if ($tipo=='1') { ?>
           <li><a href="<?= site_url('login/Reportes') ?>" class="waves-effect waves-light"><i class="material-icons left">insert_chart</i><span>Reportes </span></a></li>
      <?php } ?>

        <li><a href="<?= site_url('login/nuevo') ?>" class="waves-effect waves-right"><i class="material-icons left">edit</i><span>Nuevo</span></a></li>
        
        <li><a href="#" class="waves-effect waves-light"><i class="material-icons right">person</i>
          <span><?php if($_SESSION['ROLASISTENCIA'] == 6){echo 'Empleado';}else if($_SESSION['ROLASISTENCIA'] == 3){ echo 'Administrativo';}else if($_SESSION['ROLASISTENCIA'] == 1){echo 'Director Tecnico';}  ?></span></a>
        </li>

        <li><a href="<?php echo base_url() ?>login/logout" class="waves-effect waves-right">Salir<i class="material-icons left">input</i> </a></li>

      </ul>
    </div>
  </nav>
  </div> -->
  <nav class="navbar navbar-default" style="background-color: #26a69a">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <!-- <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div> -->

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="lec_logo"><?php echo $sesion["DESCRIPCION"].': '. utf8_encode($sesion["DES_USUARIO"]); ?></li>
        <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="lec_logo" style="font-size: 19px;">INEI</li>
        <li class="lec_logo" style="border-right:  2px solid">&nbsp;</li>
        <li class="lec_logo" style="font-size: 19px;margin-left: 10px;">Papeleta</li>

        <!-- <li><a href="#">Link</a></li> -->
        <!-- <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li> -->
      </ul>
      <!-- <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form> -->
      <ul class="nav navbar-nav navbar-right">
        <li ><a href="<?php echo base_url()?>login/logout">Cerrar Sesion</a></li>
        
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</header>
<?php // debug($_SESSION)?>