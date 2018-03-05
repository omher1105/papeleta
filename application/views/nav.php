
<header>
  <nav>
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
        
        <li><a href="#" class="waves-effect waves-light"><i class="material-icons right">person</i><span><?=$this->session->userdata('ROLASISTENCIA') ?></span></a></li>

        <li><a href="<?= site_url('login/logout') ?>" class="waves-effect waves-right">Salir<i class="material-icons left">input</i> </a></li>

      </ul>
    </div>
  </nav>
  </div>
</header>

