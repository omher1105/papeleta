<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body style="background-color: #95A5A6">
<style type="text/css">
	.form-static {
	    display: block;
	    width: 100%;
	    height: 34px;
	    padding: 6px 12px;
	    font-size: 14px;
	    line-height: 1.42857143;
	    color: #555;
	    background-color: #fff;
	    background-image: none;
	    border: 0;
		  outline: 0;
		  background: transparent;
		  border-bottom: 1px solid black;
	    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
	    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
	    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
	    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
	    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
	}
	.papeleta-opcion{
		width: 25%;
    	text-align: center;
    	float: right;
	}
</style>
<?php //debug($impresion);?>
<div class="row">
	<div class="container" style="background-color: #ffffff;font-size: 10px;width: 813px;margin-top: 40px">
		<div class="col-md-12">
			<br>
			<div class="col-md-6" align="left">
				<img src="http://series.inei.gob.pe/becaIES/images/logoInei.png" width="25%">
			</div>
			<div class="col-md-6" align="right">
				<div class="col-md-12" style="font-size: 15px;"><label>PAPELETA DE SALIDA</label></div>
				<div class="col-md-12" style="font-size: 15px;"><label>OTA - OEPER UNIDAD DE CONTROL</label></div>
			</div>
		</div>
		<div class="col-md-12">
			<br><br>
		</div>
		<div class="col-md-12">
			<div class="col-md-6">
				<div class="col-md-12">
					<div class="col-md-6">
						<div class="form-group">
							<label>CODIGO PERSONAL</label>
							<input class="form-control" type="text" name="" value="<?php echo $impresion[0]['ID_USER'];?>" disabled="true">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>NUMERO DE TARJETA</label>
							<input  class="form-control" type="text" name="" value="" disabled="true">
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="form-group">
					<input class="form-static" type="text" name="" value="<?php echo $impresion[0]['DES_USUARIO'];?>" disabled="true">
					<label>APELLIDOS Y NOMBRES DEL TRABAJADOR</label>
					</div>
				</div>
				<div class="col-md-12">
					<div class="form-group">
					<input class="form-static" type="text" name="" value="<?php echo $impresion[0]['DES_USUARIO2'];?>" disabled="true">
					<label>JEFE UNIDAD</label>
					</div>
				</div>
				<div class="col-md-12">
					<div class="form-group">
					<input class="form-static" type="text" name="" value="<?php echo $impresion[0]['DES_USUARIO3'];?>" disabled="true">
					<label>DIRECTOR EJECUTIVO</label>
					</div>
				</div>
				<div class="col-md-12">
					<div class="form-group">
					<input class="form-static" type="text" name="" value="<?php echo $impresion[0]['DES_USUARIO4'];?>" disabled="true">
					<label>DIRECTOR TECNICO/NACIONAL</label>
					</div>
				</div>
				<div class="col-md-12">
					<div class="form-group">
					<input class="form-static" type="text" name="" value="<?php echo $impresion[0]['DES_USUARIO5'];?>" disabled="true">
					<label>V.B° DE OEPER</label>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="col-md-12">
					<label>MOTIVO DEL PERMISO</label><br>
					<label>PERMISO PARTICULAR POR HORAS</label>
				</div>
				<div class="col-md-12" style="border:1px solid #000">
					<!--<ol>
						<li>PERMISO CON GOCE DE HABER</li>
						<li>ATENCION MEDICA(INEI)</li>
						<li>ATENCION MEDICA ESSALUD</li>
						<li>TRAMITE DE PRESTACIONES</li>
						<li>COMISION DE SERVICIOS</li>
					</ol>-->
					<table>
						<tr>
							<td>I.PERMISO CON GOCE DE HACER</td>
							<td></td>
						</tr>
						<tr>
							<td>1.ATENCION MEDICA (INEI)</td>
							<td><input  class="papeleta-opcion" type="text" name="" readonly="true" value="" disabled="true"></td>
						</tr>
						<tr>
							<td>2.ATENCION MEDICA (ESSALUD)</td>
							<td><input class="papeleta-opcion" type="text" name="" readonly="true" disabled="true"></td>
						</tr>
						<tr>
							<td>3.TRAMITE DE PRESTACIONES</td>
							<td><input class="papeleta-opcion" type="text" name="" readonly="true" disabled="true"></td>
						</tr>
						<tr>
							<td>4.COMISION DE SERVICIOS</td>
							<td><input class="papeleta-opcion" type="text" name="" readonly="true" disabled="true"></td>
						</tr>
						<tr><td><br></td><td><br></td></tr>
						<tr>
							<td>II.PERMISO SIN GOCE DE HACER</td>
							<td></td>
						</tr>
						<tr>
							<td>1.PARTICULAR: TRAMITES PERSONALES<br>
								<label>(Maximo 2 horas)</label>	</td>
							<td>
								<input  class="papeleta-opcion" type="text" name="" readonly="true" value="" disabled="true">
							</td>

						</tr>
						<tr>
							<td><br><label>Nota: Marcar el motivo del permiso</label></td>
							<td></td>
						</tr>
					</table>
				</div>
				<div class="col-md-12">
					<br><br>
				</div>
				<div class="col-md-12">
					<table class="table" style="border:1px solid #000">
						<tr>
							<td><label>SALIDA</label></td>
							<td><label>REGRESO</label></td>
						</tr>
						<tr>
							<td><?php echo $impresion[0]['FECHA_INI']?></td>
							<td><?php echo $impresion[0]['FECHA_FIN']?></td>
						</tr>
					</table>
				</div>
				<div class="col-md-12">
					<label>Lima, <?php echo date('d')?> de <?php echo date('M')?> del <?php echo date('Y')?></label>
				</div>
			</div>
		</div>
	</div>
</div> 


<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</body>
</html>