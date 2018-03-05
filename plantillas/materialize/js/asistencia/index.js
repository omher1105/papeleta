		
$(document).ready(function (){
	listElements();	
});

function listElements(){
	var content = '';
	$.ajax({
		type: 'POST',
		url: 'listElements',
		success: function (data) {
			var json = $.parseJSON(data);
			$.each( json, function( key, element ) {
				content = content + '<a href="#" onclick="startForm('+element.id+');">'
						+ element.ubigeo + ' ' + element.departamento + ' - ' + element.provincia + ' - ' + element.distrito
						+ '</a>' + '<br>';

			});
			$("#elementsTable").html(content);
		},
		error: function(jqXHR,textStatus,errorThrown){
			alert("Error!!!");
		}
	});	
}

function startForm(id){
	$.ajax({
		type: 'POST',
		url: 'startForm',
		data: {'id': id},				
		success: function (data) {
			window.location.href = 'modulo01';			
		},
		error: function(jqXHR,textStatus,errorThrown){
			alert("Error!!!");
		}
	});	
}