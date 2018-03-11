<br><br><br><br><br><br><br><br>
<?php  
$url = base_url().'papeleta/registrarPapeleta/1';
//debug($papeleta_recuperada);
if(isset($papeleta_recuperada[0]['ID'])){
  $url = base_url().'papeleta/registrarPapeleta/2';
}
  
 //echo $url;?>
<div class="row">
  <div class="container" style="width:70%">
    <div class="col-md-12" align="center">
      <h3><i class="ti ti-credit-card lec_icon_box"></i><strong>  Detalle de Operaciones por Trabajador</strong></h3>
    </div>
    <div class="col-md-12">
      <br><br>
    </div>
    <?php if(isset($error)){ ?>
      <div class="col-md-12" align="center" style="color:#fff">
        <span style="background-color:red"><?php echo $error; ?></span>
      </div>
    <?php } ?>
    <form action="<?php echo $url; ?>" method="post" id="formRegistro">
    <div class="col-md-12">
      <div class="col-md-9">
        <div class="form-group">
          <label>Motivo de salida</label>
          <?php if(isset($papeleta_recuperada)){ ?>
          <input type="hidden" name="id_papeleta" value="<?php echo $papeleta_recuperada[0]['ID'] ?>">
          <?php } ?>    
          <select class="form-control" name="dpx-motivo" id="dpx-motivo" required="true">
            <option value="0" selected disabled="true">Seleccione</option>
            <?php foreach($tiposalida1 as $depa){ 
              if($papeleta_recuperada[0]['TIPO_OP'] == $depa['CODI_OPER_TOP']){ ?>
                  <option selected value="<?php echo $depa['CODI_OPER_TOP']; ?>">
                    <?php echo $depa['DESC_OPER_TOP']; ?>
                  </option>

              <?php }else{ ?>
                <option  value="<?php echo $depa['CODI_OPER_TOP']; ?>">
                    <?php echo $depa['DESC_OPER_TOP']; ?>
                  </option>
              <?php } } ?>
          </select>
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-group">
          <label>Tipo</label>
          <select class="form-control" id="s_tipo" name="dpx-tipo" required="true">
            <option value="Default" selected disabled="true">Seleccione</option>
            <?php foreach($tiposalida2 as $depa){ ?>
            <option value="<?php echo $depa['TIPO_OPER_TOP']; ?>">
              <?php echo $depa['TIPO_OPER_TOP']; ?>
            </option>
            <?php  } ?>
          </select>
        </div>
      </div>
    </div>
    <div class="col-md-12" id="date-frame">
      <div class="col-md-6">
        <div class="form-group">
          <label>Fecha de Inicio</label>
           <div class="input-group">
            <div class="input-group-addon">
             <i class="fa fa-calendar">
             </i>
            </div>
            <?php if(isset($papeleta_recuperada)){ ?>
              <input class="form-control date" id="date1" name="date1" placeholder="MM/DD/YYYY" type="text" value="<?php echo $papeleta_recuperada[0]['FECHA_INI']?>"/>
            <?php }else{?>
              <input class="form-control date" id="date1" name="date1" placeholder="MM/DD/YYYY" type="text"/>
            <?php } ?>
           </div>
         </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>Fecha de Fin</label>
           <div class="input-group">
            <div class="input-group-addon">
             <i class="fa fa-calendar">
             </i>
            </div>
            <?php if(isset($papeleta_recuperada)){ ?>
              <input class="form-control date" id="date2" name="date2" placeholder="MM/DD/YYYY" type="text" value="<?php echo $papeleta_recuperada[0]['FECHA_FIN']?>"/>
            <?php }else{?>
              <input class="form-control date" id="date2" name="date2" placeholder="MM/DD/YYYY" type="text"/>
            <?php } ?>
           </div>
         </div>
      </div>
    </div>
    <div class="col-md-12" id="time-frame" style="display: none">
      <div class="col-md-6">
        <div class="form-group">
          <label>Fecha y Hora de Inicio</label>
           <div class="input-group">
            <div class="input-group-addon">
             <i class="fa fa-calendar">
             </i>
            </div>
            <?php if(isset($papeleta_recuperada)){ ?>
              <input class="form-control datetime" id="datetime1" name="datetime1" placeholder="MM/DD/YYYY" type="text" value="<?php echo $papeleta_recuperada[0]['FECHA_INI']?>"/>
            <?php }else{?>
              <input class="form-control datetime" id="datetime1" name="datetime1" placeholder="MM/DD/YYYY" type="text"/>
            <?php } ?>
           </div>
         </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>Fecha y Hora de Fin</label>
           <div class="input-group">
            <div class="input-group-addon">
             <i class="fa fa-calendar">
             </i>
            </div>
            <?php if(isset($papeleta_recuperada)){ ?>
              <input class="form-control datetime" id="datetime2" name="datetime2" placeholder="MM/DD/YYYY" type="text" value="<?php echo $papeleta_recuperada[0]['FECHA_FIN']?>"/>
            <?php }else{?>
              <input class="form-control datetime" id="datetime2" name="datetime2" placeholder="MM/DD/YYYY" type="text"/>
            <?php } ?>
            
           </div>
         </div>
      </div>
    </div>
    <div class="col-md-12" align="center">
      <button class="btn btn-primary" type="submit">
        <i class="ti ti-archive"></i>
          Registrar
      </button>
      <a class="btn btn-primary">
        <i class="ti ti-archive"></i>
        Listar
      </a>
    </div>
    </form>
  </div>
</div>
<?php 
  if(isset($script)){
    echo $script;
  }
?>

<?php 
  if(isset($additional_script)){
    echo $additional_script;
  }
?>