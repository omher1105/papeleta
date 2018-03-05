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
					<tr>
						<th>NRO OPERACION</th>
						<th>USUARIO</th>
						<th>FECHA REQUERIMIENTO</th>
						<th>TIPO DE OPERACION</th>
						<th>FECHA INICIO</th>
						<th>FECHA FIN</th>
						<th>ESTADO</th>
						<th>OPCIONES</th>
					</tr>
				</thead><tbody></tbody>`);
			for(var i in data){
				$('#tbl_requerimiento>tbody').append(`
					<tr>
						<td onclick="ingresoPapeleta(${data[i].ID})"><a>PAP-${data[i].ID}</a></td>
						<td>${data[i].ID_USER}</td>
						<td>${data[i].FECHA_REGISTRO != null ? data[i].FECHA_REGISTRO : '2010-12-01 00:00:00'}</td>
						<td>${data[i].TIPO_OP != null ? data[i].TIPO_OP : '32'}</td>
						<td>${data[i].FECHA_INI}</td>
						<td>${data[i].FECHA_FIN ? data[i].FECHA_FIN : 'PENDIENTE'}</td>
						<td>${data[i].ESTADO != null ? data[i].ESTADO : '1'}</td>
						<td style="text-align:center">
							<a><i class="ti ti-search"></i></a>
							<a><i class="ti ti-archive"></i></a>
						</td>
					</tr>
				`);
			}

		}
	});


});


function ingresoPapeleta(id){
	alert(id);
}
