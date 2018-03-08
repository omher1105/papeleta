<br><br><br><br><br>
<div class="lec_over" data-color="#333" data-opacity="0.05"></div>
<div class="container text-center" id="lec _virtual">
  <h3> <CENTER> <i class="ti ti-book lec_icon_box"></i> Registrar <strong>Papeleta</strong> </CENTER></h3>
  <p> <CENTER> <b>Fecha Registro:</b>  <?php echo date("Y-m-d");?> </CENTER> </p>
</div>
<form action="<?php echo base_url() ?>papeleta/registrarPapeleta" method="POST">
  <div class="row" >
    <div class="container" style="border: 1px solid #000;">
      <br>
      <div class="col s9">
          <select id="s_nombre" name="TIPO_OP" class="form-control" required="required">
            <option value="0">Seleccione Salida </option>
            <?php foreach($tiposalida1 as $depa) {  ?>
              <option value="<?php echo $depa['CODI_OPER_TOP']; ?>"><?php echo $depa['DESC_OPER_TOP']; ?></option>
            <?php } ?>
          </select>
      </div>
      <div class="col s3">
         <select id="s_tipo" name="s_tipo" class="form-control" required="required">
                <option value="0">Seleccione Salida </option>
                <?php foreach($tiposalida2 as $depa) {  ?>
                    <option value="<?php echo $depa['TIPO_OPER_TOP']; ?>"><?php echo $depa['TIPO_OPER_TOP']; ?></option>
                    <?php } ?>
          </select> 
      </div>
      <br><br>
      <div class="col s9" id="date-frame">
        <div class="col s6">
          <!-- <input type="date" name="f_inicio" class="datepicker"> -->
           <input type="text" class="form-control datepicker" id="f_inicio" name="f_inicio"  required="required" placeholder ="Fecha Final" readonly  />
        </div>
        <div class="col s6">
          <!-- <input type="date" name="f_fin" class="datepicker"> -->
          <input type="text" class="form-control datepicker" id="f_fin" name="f_fin"  required="required" placeholder ="Fecha Final" readonly  />
        </div>
      </div>
      <br>
      <div class="col s9" id="time-frame">
        <div class="col s6">
          <input type="time" name="t_inicio" class="datetimepicker">
          <!-- <input type="text" class="form-control datetimepicker" id="t_inicio" name="t_inicio"  required="required" placeholder ="Fecha Final" readonly  /> -->
        </div>
        <div class="col s6">
          <input type="time" name="t_fin">
        </div>
      </div>
      <br><br>
      <div class="col s12" align="center" style="padding-bottom: 16px;">
        <button class="btn" type="submit"> <i class="ti ti-archive"></i>Registrar </button></td>
        <a href="<?php echo base_url()?>papeleta/ficha" class="btn"> <i class="ti ti-files"></i>Listar</a>  
      </div>
    </div>  
  </div>
</form>
<?php 
  if(isset($script)){
    echo $script;
  }
?>