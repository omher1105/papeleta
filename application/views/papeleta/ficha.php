<?php $sesion =  $_SESSION['usuario'][0];
?>
<div class="lec_france">
<div class="lec_page" id="lec_page">
    <!-- To Top -->
    <a href="#lec_page" class="lec_top lec_go"><b class="ti ti-angle-up"></b></a>

   
    
        <section class="lec_section lec_section_no_overlay">
        <div class="container text-center" id="lec_virtual">

         <div class="row">
          <h3><i class="ti ti-credit-card lec_icon_box"></i><strong>  Detalle de Operaciones por Trabajador</strong></h3>
          
          <table class="table table-hover borde_table pullUp"  id='lista_tabla' style="font-size:11px;" border=1>
              
              <thead class="cabecera">
              <tr>
                <td colspan=4><input type="text" class="form-control datepicker" name="fecha_inic"  required="required" placeholder ="Fecha de Inicio" readonly  />
                </td>
                <td colspan=2><input type="text" class="form-control" id="usuario" name="codEmpleado"  required="required"  value="<?php echo $sesion['CODI_EMPL_PER'];?>" placeholder ="Cod. Empleado"  readonly />
                </td>
                <td colspan=4><input type="text" class="form-control" id="usuario_nom" name="usuario_nom"  required="required" value="<?php echo $sesion['DES_USUARIO'];?>" placeholder ="Nombre Empleado"  readonly />
                </td>
              </tr>
              
              <tr>
                <td colspan=4>
                <input type="text" class="form-control datepicker" id="fecha_fin" name="fecha_fin"  required="required" placeholder ="Fecha Final" readonly  />
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
            
            <div class="form-group">
              <a id="btn btn_buscar" href="#" class="btn"> <i class="ti ti-search"></i>Buscar</a>               
              <a class="btn" href="<?php echo base_url() ?>papeleta/registro" > <i class="ti ti-archive"></i>Agregar </a>
            </div>
            
            
              <!-- tabla para el listado-->
               <!-- <table id="tbl_requerimiento" style="width:100%;" align="center">
                <tr>
                  <td valign="top">
                    <div id="div_materiales_consolidado" name="div_materiales_consolidado">
                      <table id="tbl_materiales_consolidado"></table><div id="pag_materiales_consolidado"></div>
                    </div>
                  </td>
                </tr>
                </table>
               -->
               <table class="table table-hover" id="tbl_requerimiento" style="font-size: 10px;"></table>
                    </div>
                    <!-- row end -->
          
                </div>
                <!-- container end -->
                    
                
        </section>

        <?php //echo base_url();?>

