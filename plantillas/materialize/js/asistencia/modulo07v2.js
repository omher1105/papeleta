		
$(document).ready(function (){
	readModule('readModulo07v2');	
});

$('#btnBack').on('click', function(e){
	writeModule('writeModulo07v2', "#frm_mod07_v2", "modulo06v2");
});

$('#btnNext').on('click', function(e){
	writeModule('writeModulo07v2', "#frm_mod07_v2", "modulo08v2");
});

$('#btnSave').on('click', function(e){
	writeModule('writeModulo07v2', "#frm_mod07_v2");
});


window.onload = function() {
  document.getElementById("P46_1").focus();
};


$("#frm_mod07_v2 :input").change(function() {
	$(this).removeClass('unansweredQuestion');
})


function validate(){

	var isOk = true;
	var focus;

	if(($('#P47_3_3').val()>2017 || $('#P47_3_3').val()<1900) && $('#P47_3_3').val()!=9999 && $('#P47_3_3').val().length!=0){
		alert("La Pregunta 47_3_3 solo admite años de 1900 al 2017 , OMISION = 9999");
		$("#P47_3_3").addClass('unansweredQuestion');
		focus = focus || "P47_3_3";
		isOk = false;

	}

	if(($('#P47_3_2').val()>12 || $('#P47_3_2').val()<1) && $('#P47_3_2').val()!=99 && $('#P47_3_2').val().length!=0){
		alert("La Pregunta 47_3_2 solo admite meses de 1 al 12 , OMISION = 99");
		$("#P47_3_2").addClass('unansweredQuestion');		
		focus = focus || "P47_3_2";
		isOk = false;

	}

	if(($('#P47_3_1').val()>31 || $('#P47_3_1').val()<1) && $('#P47_3_1').val()!=99 && $('#P47_3_1').val().length!=0){
		alert("La Pregunta 47_3_1 solo admite dias de 1 al 31 , OMISION = 99");
		$("#P47_3_1").addClass('unansweredQuestion');		
		focus = focus || "P47_3_1";
		isOk = false;

	}

	if($('#P46_1').val().length==0){
		$("#P46_1").addClass('unansweredQuestion');		
		focus = focus || "P46_1";
		isOk = false;

	}

	if($('#P46_2').val().length==0){
		$("#P46_2").addClass('unansweredQuestion');		
		focus = focus || "P46_2";
		isOk = false;

	}

	if($('#P46_3').val().length==0){
		$("#P46_3").addClass('unansweredQuestion');		
		focus = focus || "P46_3";
		isOk = false;

	}

	if($('#P46_4').val().length==0){
		$("#P46_4").addClass('unansweredQuestion');		
		focus = focus || "P46_4";
		isOk = false;

	}

	if($('#P46_8').val().length==0){
		$("#P46_8").addClass('unansweredQuestion');		
		focus = focus || "P46_8";
		isOk = false;

	}

	if($('#P46_9').val().length==0){
		$("#P46_9").addClass('unansweredQuestion');		
		focus = focus || "P46_9";
		isOk = false;

	}

	if($('#P46_9').val().length!=8 && $('#P46_9').val().length!=0){
		alert("DNI debe tener 8 digitos");
		$("#P46_9").addClass('unansweredQuestion');		
		focus = focus || "P46_9";
		isOk = false;

	}

	if($('#P47_1').val().length==0){
		$("#P47_1").addClass('unansweredQuestion');		
		focus = focus || "P47_1";
		isOk = false;

	}

	if($('#P47_2').val().length==0){
		$("#P47_2").addClass('unansweredQuestion');		
		focus = focus || "P47_2";
		isOk = false;

	}

	if($('#P47_3_1').val().length==0){
		$("#P47_3_1").addClass('unansweredQuestion');		
		focus = focus || "P47_3_1";
		isOk = false;
	}

	if($('#P47_3_1').val().length!=2){
		alert("Formato erroneo de Dia");
		$("#P47_3_1").addClass('unansweredQuestion');		
		focus = focus || "P47_3_1";
		isOk = false;
	}

	if($('#P47_3_2').val().length==0){
		$("#P47_3_2").addClass('unansweredQuestion');		
		focus = focus || "P47_3_2";
		isOk = false;
	}

	if($('#P47_3_2').val().length!=2){
		alert("Formato erroneo de Mes");
		$("#P47_3_2").addClass('unansweredQuestion');		
		focus = focus || "P47_3_2";
		isOk = false;
	}

	if($('#P47_3_3').val().length==0){
		$("#P47_3_3").addClass('unansweredQuestion');		
		focus = focus || "P47_3_3";
		isOk = false;

	}

	if(!isOk){
		$("#"+focus).focus();
	}

	return isOk;
}