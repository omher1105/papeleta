$( document ).ready(function() {

	$('.datepicker').datepicker({
	    format: 'mm/dd/yyyy',
	    startDate: '-3d'
	});

	$.ajax({
		url: base_url + 'papeleta/listarPapeleta',
		success: function(data){
			console.log(data);
			$('#tbl_requerimiento').append(`
				<thead>
					<tr >
						<th style="text-align:center">OPCIONES</th>
						<th style="text-align:center">NRO</th>
						<th style="text-align:center">EMPLEADO</th>
						<th style="text-align:center">PROYECTO</th>
						<th style="text-align:center">TIPO</th>
						<th style="text-align:center">SALIDA</th>
						<th style="text-align:center">FECHA INICIO</th>
						<th style="text-align:center">FECHA FIN</th>
						<th style="text-align:center">ESTADO</th>
						<th style="text-align:center">DD/HH/MM</th>
					</tr>
				</thead><tbody></tbody>`);
			for(var i in data){
				let estado = 'No Autorizado';
				let background_color = 'red';
				let color = '#ffffff';
				if(data[i].ESTADO_DESC == 'NO AUTORIZADO' || data[i].ESTADO_DESC == 'DEFASADO'){
					background_color = 'red';
				}else if(data[i].ESTADO_DESC == 'PENDIENTE' || data[i].ESTADO_DESC == 'PENDIENTE POR APROBAR'){
					background_color = '#ffae00';
				} else if(data[i].ESTADO_DESC == 'AUTORIZADO'){
					background_color = 'green';
				} else if(data[i].ESTADO == 4){
					background_color = "#111cca"
				}

				if(rol_usuario == 3 && data[i].ESTADO_DESC == 'PENDIENTE'){
					rol_opciones = `<button><i class="ti ti-check"></i></button>
									<button disabled="true" style="background-color:#a5a5a5"><i class="ti ti-reload"></i></button>`;
				} else if(rol_usuario == 3 && data[i].ESTADO_DESC == 'PENDIENTE POR APROBAR'){
					rol_opciones = `<button disabled="true" style="background-color:#a5a5a5"><i class="ti ti-check"></i></button>
									<button><i class="ti ti-reload"></i></button>`;
				}else if(rol_usuario == 3 && data[i].ESTADO_DESC == 'DEFASADO'){
					rol_opciones = `<button disabled="true" style="background-color:#a5a5a5"><i class="ti ti-check"></i></button>
									<button disabled="true" style="background-color:#a5a5a5"><i class="ti ti-reload"></i></button>`;
				}else if(rol_usuario == 3 && data[i].ESTADO_DESC == 'AUTORIZADO'){
					rol_opciones = `<button disabled="true" style="background-color:#a5a5a5"><i class="ti ti-check"></i></button>
									<button ><i class="ti ti-list"></i></button>`;
				}else if(rol_usuario == 6 && data[i].ESTADO == 3){
					rol_opciones = `<button disabled="true" style="background-color:#a5a5a5"><i class="ti ti-check"></i></button>
									<button><i class="ti ti-list"></i></button>`;
				} else if(rol_usuario == 6 && data[i].ESTADO == 1){
					rol_opciones = `<button disabled="true" style="background-color:#a5a5a5"><i class="ti ti-check"></i></button>
									<button disabled="true" style="background-color:#a5a5a5"><i class="ti ti-list"></i></button>`;
				} else if(rol_usuario == 6 && data[i].ESTADO == 2){
					rol_opciones = `<button disabled="true" style="background-color:#a5a5a5"><i class="ti ti-check"></i></button>
									<button><i class="ti ti-reload"></i></button>`;
				} else{
					rol_opciones = `<button><i class="ti ti-check"></i></button>
									<button><i class="ti ti-reload"></i></button>
									<button><i class="ti ti-list"></i></button>`;
				}

				$('#tbl_requerimiento>tbody').append(`
					<tr>
						<td style="text-align:center">
							${rol_opciones}
						</td>
						<td onclick="ingresoPapeleta(${data[i].ID})"><a>PAP-${data[i].ID}</a></td>
						<td>${data[i].DES_USUARIO}</td>
						<td></td>
						<td>${data[i].TIPO_OPER_TOP != null ? data[i].TIPO_OPER_TOP : ''}</td>
						<td>${data[i].DESC_OPER_TOP}</td>
						<td>${data[i].FECHA_INI}</td>
						<td>${data[i].FECHA_FIN ? data[i].FECHA_FIN : data[i].FECHA_INI}</td>
						<td style="text-align:center;background-color:${background_color};color:${color}">${data[i].ESTADO_DESC}</td>
						<td></td>
					</tr>
				`);
			}

		}
	});


});


function ingresoPapeleta(id){
	alert(id);
}
