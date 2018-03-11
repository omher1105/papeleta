$( document ).ready(function() {

	// $('.datepicker').datepicker({
	//     format: 'mm/dd/yyyy',
	//     startDate: '-3d'
	// });

	   


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
						<th style="text-align:center">HH/MM/SS</th>
					</tr>
				</thead><tbody></tbody>`);
			for(var i in data){
				let estado = 'No Autorizado';
				let background_color = 'red';
				let color = '#ffffff';

				if(data[i].ESTADO == 1){
					background_color = 'red';
				}else if(data[i].ESTADO >=  2 && data[i].ESTADO <=  6){
					background_color = '#ffae00';
				} else if(data[i].ESTADO ==  7){
					background_color = 'green';
				} 

				//EMPLEADO VALIDACION
				if(data[i].ESTADO == 7){
					rol_opciones = `<button disabled="true" style="background-color:#a5a5a5"><i class="ti ti-check"></i></button>
									<a href="${base_url}papeleta/impresion"><button><i class="ti ti-list"></i></button></a>`;
				} else if(data[i].ESTADO == 1){
					rol_opciones = `<button disabled="true" style="background-color:#a5a5a5"><i class="ti ti-check"></i></button>
									<button disabled="true" style="background-color:#a5a5a5"><i class="ti ti-close"></i></button>`;
				} else if(rol_usuario == 6 && data[i].ESTADO >=  2 && data[i].ESTADO <=  6){
					rol_opciones = `<button disabled="true" style="background-color:#a5a5a5"><i class="ti ti-check"></i></button>
									<button><i class="ti ti-reload"></i></button>`;
				} else if(rol_usuario == 2  && data[i].ESTADO ==  2){
					rol_opciones = `<form action="${base_url}papeleta/actualizarPapeletaSegundoFiltro/${data[i].ID}/3">
									<button><i class="ti ti-check"></i></button>
									</form>
									<form action="${base_url}papeleta/actualizarPapeletaSegundoFiltro/${data[i].ID}/1">
									<button><i class="ti ti-close"></i></button>
									</form>`;
				}else if(rol_usuario == 2  && data[i].ESTADO >=  3 && data[i].ESTADO <=  6){
					rol_opciones = `<button disabled="true" style="background-color:#a5a5a5"><i class="ti ti-check"></i></button>
									<button><i class="ti ti-reload"></i></button>`;
				}else if(rol_usuario == 3 && data[i].ESTADO ==  2){
					rol_opciones = `<button disabled="true" style="background-color:#a5a5a5"><i class="ti ti-check"></i></button>
									<button><i class="ti ti-reload"></i></button>`;
				}else if(rol_usuario == 3 && data[i].ESTADO ==  3){
					rol_opciones = `<form action="${base_url}papeleta/actualizarPapeletaSegundoFiltro/${data[i].ID}/4">
									<button><i class="ti ti-check"></i></button>
									</form>
									<form action="${base_url}papeleta/actualizarPapeletaSegundoFiltro/${data[i].ID}/1">
									<button><i class="ti ti-close"></i></button>
									</form>`;
				} else if(rol_usuario == 3  && data[i].ESTADO >=  4 && data[i].ESTADO <=  6){
					rol_opciones = `<button disabled="true" style="background-color:#a5a5a5"><i class="ti ti-check"></i></button>
									<button><i class="ti ti-reload"></i></button>`;
				} else if(rol_usuario == 4 && data[i].ESTADO >=  2 && data[i].ESTADO <=  3){
					rol_opciones = `<button disabled="true" style="background-color:#a5a5a5"><i class="ti ti-check"></i></button>
									<button><i class="ti ti-reload"></i></button>`;
				} else if(rol_usuario == 4 && data[i].ESTADO ==  4){
					rol_opciones = `<form action="${base_url}papeleta/actualizarPapeletaSegundoFiltro/${data[i].ID}/5">
									<button><i class="ti ti-check"></i></button>
									</form>
									<form action="${base_url}papeleta/actualizarPapeletaSegundoFiltro/${data[i].ID}/1">
									<button><i class="ti ti-close"></i></button>
									</form>`;
				} else if(rol_usuario == 4  && data[i].ESTADO >=  5 && data[i].ESTADO <=  6){
					rol_opciones = `<button disabled="true" style="background-color:#a5a5a5"><i class="ti ti-check"></i></button>
									<button><i class="ti ti-reload"></i></button>`;
				} else if(rol_usuario == 1 && data[i].ESTADO >=  2 && data[i].ESTADO <=  4){
					rol_opciones = `<button disabled="true" style="background-color:#a5a5a5"><i class="ti ti-check"></i></button>
									<button><i class="ti ti-reload"></i></button>`;
				} else if(rol_usuario == 1 &&  data[i].ESTADO ==  5){
					rol_opciones = `<form action="${base_url}papeleta/actualizarPapeletaSegundoFiltro/${data[i].ID}/6">
									<button><i class="ti ti-check"></i></button>
									</form>
									<form action="${base_url}papeleta/actualizarPapeletaSegundoFiltro/${data[i].ID}/1">
									<button><i class="ti ti-close"></i></button>
									</form>`;
				} else if(rol_usuario == 1  && data[i].ESTADO ==  6){
					rol_opciones = `<button disabled="true" style="background-color:#a5a5a5"><i class="ti ti-check"></i></button>
									<button><i class="ti ti-reload"></i></button>`;
				} else if(rol_usuario == 5  && data[i].ESTADO >=  2 && data[i].ESTADO <=  5){
					rol_opciones = `<button disabled="true" style="background-color:#a5a5a5"><i class="ti ti-check"></i></button>
									<button><i class="ti ti-reload"></i></button>`;
				} else if(rol_usuario == 5  && data[i].ESTADO ==  6){
					rol_opciones = `<form action="${base_url}papeleta/actualizarPapeletaSegundoFiltro/${data[i].ID}/7">
									<button><i class="ti ti-check"></i></button>
									</form>
									<form action="${base_url}papeleta/actualizarPapeletaSegundoFiltro/${data[i].ID}/1">
									<button><i class="ti ti-close"></i></button>
									</form>`;
				}

				$('#tbl_requerimiento>tbody').append(`
					<tr>
						<td style="text-align:center;display: -webkit-box;">
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
						<td>${data[i].DIFERENCIA}</td>
					</tr>
				`);
			}
			 $('#tbl_requerimiento').DataTable({
			 	"pageLength": 10,
			 	"bLengthChange": false,
			 	"language":{
						    "sProcessing":     "Procesando...",
						    "sLengthMenu":     "Mostrar _MENU_ registros",
						    "sZeroRecords":    "No se encontraron resultados",
						    "sEmptyTable":     "Ningún dato disponible en esta tabla",
						    "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
						    "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
						    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
						    "sInfoPostFix":    "",
						    "sSearch":         "Buscar:",
						    "sUrl":            "",
						    "sInfoThousands":  ",",
						    "sLoadingRecords": "Cargando...",
						    "oPaginate": {
						        "sFirst":    "Primero",
						        "sLast":     "Último",
						        "sNext":     "Siguiente",
						        "sPrevious": "Anterior"
						    },
						    "oAria": {
						        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
						        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
						    }
						}
			 });

		}
	});


});


function ingresoPapeleta(id){
	alert(id);
}
