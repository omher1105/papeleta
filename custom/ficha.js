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
						<th>FECHA REQUERIMIENTO</th>
						<th>TIPO DE OPERACION</th>
						<th>FECHA INICIO</th>
						<th>FECHA FIN</th>
						<th>ESTADO</th>
					</tr>
				</thead><tbody></tbody>`);
			for(var i in data){
				$('#tbl_requerimiento>tbody').append(`
					<tr>
						<td>${data[i].FECHA_REGISTRO}</td>
						<td>${data[i].TIPO_OP}</td>
						<td>${data[i].FECHA_INI}</td>
						<td>${data[i].FECHA_FIN}</td>
						<td>${data[i].ESTADO}</td>
					</tr>
				`);
			}
			
		}
	});


});