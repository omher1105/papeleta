		
$(document).ready(function (){
	readModule('readModulo02');	
});

$('#btnBack').on('click', function(e){
	writeModule('writeModulo02', "#frm_mod02", "modulo01");
});

$('#btnNext').on('click', function(e){
	writeModule('writeModulo02', "#frm_mod02", "modulo03");
});

$('#btnSave').on('click', function(e){
	writeModule('writeModulo02', "#frm_mod02");
});

$('#btnSalir').on('click', function(e){
	writeModule('writeModulo02', "#frm_mod02");
});

window.onload = function() {
  document.getElementById("M2_CARGO").focus();
};

$('#P12').on('change', function(e){
	if($('#P12').val()==1){
		disableContainer('P13', false);
	}else{
		enableContainer('P13');
	}
});

$('#P13').on('change', function(e){	
	if($('#P13').val()==5){
		enableContainer('P13_O');				
	}else{		
		disableContainer('P13_O', true);	
	}
});

$('#P14').on('change', function(e){			
	if($('#P14').val()==1 || $('#P14').val()==9){
		enableContainer('P14_1');			
	}else{				
		disableContainer('P14_1', true);
	}
});

$('#P15').on('change', function(e){
	if($('#P15').val()==1){
		disableContainer('P16', false);
		disableContainer('P17', false);
	}else{
		enableContainer('P16');
		enableContainer('P17');
	}
});

$('#P16').on('change', function(e){	
	if($('#P16').val()==6){
		enableContainer('P16_O');			
	}else{	
		disableContainer('P16_O', true);			
	}
});

$("#frm_mod02 :input").change(function() {
	$(this).removeClass('unansweredQuestion');
})

function validate(){

	var isOk = true;
	var focus;

	if($('#M2_CARGO').val().length==0){
		$("#M2_CARGO").addClass('unansweredQuestion');
		focus = focus || "M2_CARGO";		
		isOk = false;
	}

	if($('#M2_NOM').val().length==0){
		$("#M2_NOM").addClass('unansweredQuestion');	
		focus = focus || "M2_NOM";
		isOk = false;
	}

	if($('#P10').val()==-1){
		$("#P10").addClass('unansweredQuestion');	
		focus = focus || "P10";	
		isOk = false;
	}

	if($('#P10A_1').val().length==0){
		$("#P10A_1").addClass('unansweredQuestion');
		focus = focus || "P10A_1";		
		isOk = false;
	}
	/*
	if($('#P10A_2').val().length==0){
		$('#P10A_2').val("NEP");
		$('#P10A_2').trigger("change");
	}

	if($('#P10A_3').val().length==0){
		$('#P10A_3').val("NEP");
		$('#P10A_3').trigger("change");
	}
	*/
	if($('#P11').val()==-1){
		$("#P11").addClass('unansweredQuestion');
		focus = focus || "P11";
		isOk = false;
	}

	if($('#P12').val()==-1){
		$("#P12").addClass('unansweredQuestion');
		focus = focus || "P12";
		isOk = false;
	}

	if(($('#P12').val()==2 || $('#P12').val()==-1 || $('#P12').val()==9) && $('#P13').val()==-1){
		$("#P13").addClass('unansweredQuestion');
		focus = focus || "P13";
		isOk = false;
	}

	if($('#P13').val()==5 && $('#P13_O').val().length==0){
		$("#P13_O").addClass('unansweredQuestion');	
		focus = focus || "P13_O";	
		isOk = false;
	}

	if($('#P14').val()==-1){
		$("#P14").addClass('unansweredQuestion');
		focus = focus || "P14";
		isOk = false;
	}

	if(($('#P14').val()==1 || $('#P14').val()==9) && $('#P14_1').val().length==0){
		$("#P14_1").addClass('unansweredQuestion');	
		focus = focus || "P14_1";	
		isOk = false;
	}
	
	/*if($('#P14_1').val()>2){
		alert("La Pregunta 14A no puede ser mayor a 2.");
		$("#P14_1").addClass('unansweredQuestion');		
		isOk = false;
	}*/

	if($('#P15').val()==-1){
		$("#P15").addClass('unansweredQuestion');
		focus = focus || "P15";
		isOk = false;
	}

	if($('#P15').val()==2 && $('#P15').val()==-1){
		$("#P16").addClass('unansweredQuestion');
		$("#P17").addClass('unansweredQuestion');
		focus = focus || "P16";
		isOk = false;
	}

	if(($('#P15').val()==2 || $('#P15').val()==-1 || $('#P15').val()==9) && $('#P16').val()==-1){
		$("#P16").addClass('unansweredQuestion');
		focus = focus || "P16";
		isOk = false;
	}

	if(($('#P15').val()==2 || $('#P15').val()==-1 || $('#P15').val()==9)  && $('#P17').val()==-1){
		$("#P17").addClass('unansweredQuestion');
		focus = focus || "P17";
		isOk = false;
	}

/*	if($('#P17').val()==0 && $('#P15').val()==2){
		$("#P17").addClass('unansweredQuestion');
		isOk = false;
	}*/

	if($('#P16').val()==6 && $('#P16_O').val().length==0){
		$("#P16_O").addClass('unansweredQuestion');
		focus = focus || "P16_O";
		isOk = false;
	}

	if($('#P18').val()==-1){
		$("#P18").addClass('unansweredQuestion');
		focus = focus || "P18";
		isOk = false;
	}

	if($('#P18A_1').val().length==0){
		$("#P18A_1").addClass('unansweredQuestion');
		focus = focus || "P18A_1";		
		isOk = false;
	}

	if(($('#P14_1').val()>2 || $('#P14_1').val()<1) && $('#P14_1').val()!=9 && $('#P14_1').val().length!=0){
		alert("La Pregunta P4_1 solo admite valores de 1 ó 2 , OMISION = 9");
		$("#P14_1").addClass('unansweredQuestion');	
		focus = focus || "P14_1";	
		isOk = false;
	}

	/*
	if($('#P18A_2').val().length==0){
		$('#P18A_2').val("-");
		$('#P18A_2').trigger("change");
	}

	if($('#P18A_3').val().length==0){
		$('#P18A_3').val("-");
		$('#P18A_3').trigger("change");
	}

	if($('#P18A_4').val().length==0){
		$('#P18A_4').val("-");
		$('#P18A_4').trigger("change");
	}

	if($('#P18A_5').val().length==0){
		$('#P18A_5').val("-");
		$('#P18A_5').trigger("change");
	}
	*/

	if(!isOk){
		$("#"+focus).focus();
	}

	return isOk;
}

