		
$(document).ready(function (){
	readModule('readModulo04');	
});

$('#btnBack').on('click', function(e){
	writeModule('writeModulo04', "#frm_mod04", "modulo03");
});

$('#btnNext').on('click', function(e){
	writeModule('writeModulo04', "#frm_mod04", "modulo05");
});

$('#btnSave').on('click', function(e){
	writeModule('writeModulo04', "#frm_mod04");
});

window.onload = function() {
  document.getElementById("M4_CARGO").focus();
};

$('#P25').on('change', function(e){
	if($('#P25').val()==2){
		disableContainer('P26', false);
		disableContainer('P26A', false);
		disableContainer('P27', false);
	}else{
		if($('#P26').val()==-1){
			enableContainer('P26');
			enableContainer('P26A');
			enableContainer('P27');
		}
	}
});

$('#P26').on('change', function(e){
	if($('#P26').val()==1){
		disableContainer('P26A', false);
	}else{
		if($('#P25').val()!=2){
			enableContainer('P26A');
		}
	}
});

$('#P26').on('change', function(e){
	if($('#P26').val()==2 || $('#P26').val()==9){
		disableContainer('P27', false);
	}else{
		if($('#P25').val()!=2){
			enableContainer('P27');
		}
		
	}
});

$('#P26A_4').on('change', function(e){
	if($('#P26A_4').val()==1){
		enableContainer('P26A_4_O');
	}else{
		disableContainer('P26A_4_O', true);
	}
});

$('#P28').on('change', function(e){
	if($('#P28').val()==2){
		disableContainer('P28A', false);

	}else{
		enableContainer('P28A');
	}
});

$('#P28A').on('change', function(e){
	if($('#P28A').val().length!=0){
		disableContainer('P28B', false);
	}else{
		enableContainer('P28B');
	}
});

$('#P28B_5').on('change', function(e){
	if($('#P28B_5').val()==1){
		enableContainer('P28B_5_O');
	}else{
		disableContainer('P28B_5_O', true);
	}
});

$('#P28B_6').on('change', function(e){
	if($('#P28B_6').val()==1){
		enableContainer('P28B_6_O');
	}else{
		disableContainer('P28B_6_O', true);
	}
});

$('#P28B_7').on('change', function(e){
	if($('#P28B_7').val()==1){
		enableContainer('P28B_7_O');
	}else{
		disableContainer('P28B_7_O', true);
	}
});

$('#P28').on('change', function(e){ /* EN EL FLUJO PONEN AL DAR CLIC EN P29 PERO DEBERIA SER AL DAR CLIC EN P28*/
	if($('#P28').val()==2){
		disableContainer('P30', false);
		disableContainer('P31', false);
		disableContainer('P32', false);
	}else{
		enableContainer('P30');
		enableContainer('P31');
		enableContainer('P32');
		/*
		disableContainer('P30_1_U', false);
		disableContainer('P30_1_R', false);
		disableContainer('P30_4_U', false);
		disableContainer('P30_4_R', false);
		disableContainer('P30_5_U', false);
		disableContainer('P30_1_R', false);
		disableContainer('P30_5_U', false);
		disableContainer('P30_5_R', false);
		disableContainer('P30_7_U', false);
		disableContainer('P30_7_R', false);
		disableContainer('P30_8_U', false);
		disableContainer('P30_8_R', false);
		disableContainer('P30_9_U', false);
		disableContainer('P30_9_R', false);
		disableContainer('P30_10_U', false);
		disableContainer('P30_10_R', false);
		disableContainer('P30_11_U', false);
		disableContainer('P30_11_R', false);
		disableContainer('P30_12_U', false);
		disableContainer('P30_12_R', false);*/
	}
});

$('#P30_1').on('change', function(e){
	if($('#P30_1').val()==1 || $('#P30_1').val()==9){
		enableContainer('P30_1_U');
		enableContainer('P30_1_R');
	}else{
		disableContainer('P30_1_U', false);
		disableContainer('P30_1_R', false);	}
});

$('#P30_4').on('change', function(e){
	if($('#P30_4').val()==1 || $('#P30_4').val()==9){
		enableContainer('P30_4_U');
		enableContainer('P30_4_R');
	}else{
		disableContainer('P30_4_U', false);
		disableContainer('P30_4_R', false);	}
});

$('#P30_5').on('change', function(e){
	if($('#P30_5').val()==1 || $('#P30_5').val()==9){
		enableContainer('P30_5_U');
		enableContainer('P30_5_R');
	}else{
		disableContainer('P30_5_U', false);
		disableContainer('P30_5_R', false);	}
});

$('#P30_7').on('change', function(e){
	if($('#P30_7').val()==1 || $('#P30_7').val()==9){
		enableContainer('P30_7_U');
		enableContainer('P30_7_R');
	}else{
		disableContainer('P30_7_U', false);
		disableContainer('P30_7_R', false);	}
});

$('#P30_8').on('change', function(e){
	if($('#P30_8').val()==1 || $('#P30_8').val()==9){
		enableContainer('P30_8_U');
		enableContainer('P30_8_R');
	}else{
		disableContainer('P30_8_U', false);
		disableContainer('P30_8_R', false);	}
});

$('#P30_9').on('change', function(e){
	if($('#P30_9').val()==1 || $('#P30_9').val()==9){
		enableContainer('P30_9_U');
		enableContainer('P30_9_R');
	}else{
		disableContainer('P30_9_U', false);
		disableContainer('P30_9_R', false);	}
});

$('#P30_10').on('change', function(e){
	if($('#P30_10').val()==1 || $('#P30_10').val()==9){
		enableContainer('P30_10_U');
		enableContainer('P30_10_R');
	}else{
		disableContainer('P30_10_U', false);
		disableContainer('P30_10_R', false);	}
});

$('#P30_11').on('change', function(e){
	if($('#P30_11').val()==1 || $('#P30_11').val()==9){
		enableContainer('P30_11_U');
		enableContainer('P30_11_R');
	}else{
		disableContainer('P30_11_U', false);
		disableContainer('P30_11_R', false);	}
});

$('#P30_12').on('change', function(e){
	if($('#P30_12').val()==1 || $('#P30_12').val()==9){
		enableContainer('P30_12_U');
		enableContainer('P30_12_R');
	}else{
		disableContainer('P30_12_U', false);
		disableContainer('P30_12_R', false);	}
});

$('#P31_1').on('change', function(e){
	if($('#P31_1').val()==1 || $('#P31_1').val()==9){
		enableContainer('P31_1_1');
		enableContainer('P31_1_2');	
	}else{
		disableContainer('P31_1_1', true);
		disableContainer('P31_1_2', true);
	}
});

$('#P31_1_1').on('change', function(e){
	if($('#P31_1_1').val()==1 || $('#P31_1_1').val()==9){
		enableContainer('P31_1_1_ZC');
		
	}else{
		
		disableContainer('P31_1_1_ZC', true);
	}
});

$('#P31_1_2').on('change', function(e){
	if($('#P31_1_2').val()==1 || $('#P31_1_2').val()==9){
		enableContainer('P31_1_2_C');
		
	}else{
		
		disableContainer('P31_1_2_C', true);
	}
});

/* -- */

$('#P30_4').on('change', function(e){
	if($('#P30_4').val()==1 || $('#P30_8').val()==1 || $('#P30_9').val()==1 || $('#P30_10').val()==1 || $('#P30_11').val()==1){
		enableContainer('P31');
	}else{
		disableContainer('P31', false);
	}
})

$('#P30_8').on('change', function(e){
	if($('#P30_4').val()==1 || $('#P30_8').val()==1 || $('#P30_9').val()==1 || $('#P30_10').val()==1 || $('#P30_11').val()==1){
		enableContainer('P31');
	}else{
		disableContainer('P31', false);	}
})

$('#P30_9').on('change', function(e){
	if($('#P30_4').val()==1 || $('#P30_8').val()==1 || $('#P30_9').val()==1 || $('#P30_10').val()==1 || $('#P30_11').val()==1){
		enableContainer('P31');
	}else{
		disableContainer('P31', false);	}
})

$('#P30_10').on('change', function(e){
	if($('#P30_4').val()==1 || $('#P30_8').val()==1 || $('#P30_9').val()==1 || $('#P30_10').val()==1 || $('#P30_11').val()==1){
		enableContainer('P31');
	}else{
		disableContainer('P31', false);	}
})

$('#P30_11').on('change', function(e){
	if($('#P30_4').val()==1 || $('#P30_8').val()==1 || $('#P30_9').val()==1 || $('#P30_10').val()==1 || $('#P30_11').val()==1){
		enableContainer('P31');
	}else{
		disableContainer('P31', false);	}
})

/* -- */

$('#P30_11').on('change', function(e){
	if(($('#P30_11').val()==0 && $('#P30_4').val()==0 && $('#P30_8').val()==0 && $('#P30_9').val()==0 && $('#P30_10').val()==0)){
		disableContainer('P31', false);
		disableContainer('P32', false);
	}else{
		if($('#P28').val()!=2){
			enableContainer('P31');
			enableContainer('P32');
		}		
	}
})

$('#P30_10').on('change', function(e){
	if(($('#P30_11').val()==0 && $('#P30_4').val()==0 && $('#P30_8').val()==0 && $('#P30_9').val()==0 && $('#P30_10').val()==0)){
		disableContainer('P31', false);
		disableContainer('P32', false);
	}else{
		if($('#P28').val()!=2){
			enableContainer('P31');
			enableContainer('P32');
		}		
	}
})

$('#P30_9').on('change', function(e){
	if(($('#P30_11').val()==0 && $('#P30_4').val()==0 && $('#P30_8').val()==0 && $('#P30_9').val()==0 && $('#P30_10').val()==0)){
		disableContainer('P31', false);
		disableContainer('P32', false);
	}else{
		if($('#P28').val()!=2){
			enableContainer('P31');
			enableContainer('P32');
		}		
	}
})

$('#P30_8').on('change', function(e){
	if(($('#P30_11').val()==0 && $('#P30_4').val()==0 && $('#P30_8').val()==0 && $('#P30_9').val()==0 && $('#P30_10').val()==0)){
		disableContainer('P31', false);
		disableContainer('P32', false);
	}else{
		if($('#P28').val()!=2){
			enableContainer('P31');
			enableContainer('P32');
		}		
	}
})

$('#P30_4').on('change', function(e){
	if(($('#P30_11').val()==0 && $('#P30_4').val()==0 && $('#P30_8').val()==0 && $('#P30_9').val()==0 && $('#P30_10').val()==0)){
		disableContainer('P31', false);
		disableContainer('P32', false);
	}else{
		if($('#P28').val()!=2){
			enableContainer('P31');
			enableContainer('P32');
		}		
	}
})

$('#P33_1').on('change', function(e){
	if($('#P33_1').val()==1){
		enableContainer('P33_1');

	}else{		
		disableContainer('P33_1', true);
	}
});

$('#P33_2').on('change', function(e){
	if($('#P33_2').val()==1 ){
		enableContainer('P33_2');	
		//enableContainer('P33_3P');	
	}else{		
		disableContainer('P33_2', true);
		//disableContainer('P33_3P', false);
	}
});

$('#P33_3').on('change', function(e){
	if($('#P33_3').val()==1){
		enableContainer('P33_3');
		//enableContainer('P33_4P');
	}else{		
		disableContainer('P33_3', true);
		//disableContainer('P33_4P', false);
	}
});

$('#P33_4').on('change', function(e){
	if($('#P33_4').val()==1){
		enableContainer('P33_4');
	}else{
		disableContainer('P33_4', true);
	}
});


$('#P26A_1').on('change', function(e){
	$('#P26A_2').removeClass('unansweredQuestion');
	$('#P26A_3').removeClass('unansweredQuestion');
	$('#P26A_4').removeClass('unansweredQuestion');
});
$('#P26A_2').on('change', function(e){
	$('#P26A_1').removeClass('unansweredQuestion');
	$('#P26A_3').removeClass('unansweredQuestion');
	$('#P26A_4').removeClass('unansweredQuestion');
});
$('#P26A_3').on('change', function(e){
	$('#P26A_1').removeClass('unansweredQuestion');
	$('#P26A_2').removeClass('unansweredQuestion');
	$('#P26A_4').removeClass('unansweredQuestion');
});
$('#P26A_4').on('change', function(e){
	$('#P26A_1').removeClass('unansweredQuestion');
	$('#P26A_2').removeClass('unansweredQuestion');
	$('#P26A_3').removeClass('unansweredQuestion');
});

$('#P28B_1').on('change', function(e){
	$('#P28B_2').removeClass('unansweredQuestion');
	$('#P28B_3').removeClass('unansweredQuestion');
	$('#P28B_4').removeClass('unansweredQuestion');
	$('#P28B_5').removeClass('unansweredQuestion');
	$('#P28B_6').removeClass('unansweredQuestion');
	$('#P28B_7').removeClass('unansweredQuestion');
});
$('#P28B_2').on('change', function(e){
	$('#P28B_1').removeClass('unansweredQuestion');
	$('#P28B_3').removeClass('unansweredQuestion');
	$('#P28B_4').removeClass('unansweredQuestion');
	$('#P28B_5').removeClass('unansweredQuestion');
	$('#P28B_6').removeClass('unansweredQuestion');
	$('#P28B_7').removeClass('unansweredQuestion');
});
$('#P28B_3').on('change', function(e){
	$('#P28B_1').removeClass('unansweredQuestion');
	$('#P28B_2').removeClass('unansweredQuestion');
	$('#P28B_4').removeClass('unansweredQuestion');
	$('#P28B_5').removeClass('unansweredQuestion');
	$('#P28B_6').removeClass('unansweredQuestion');
	$('#P28B_7').removeClass('unansweredQuestion');
});
$('#P28B_4').on('change', function(e){
	$('#P28B_1').removeClass('unansweredQuestion');
	$('#P28B_2').removeClass('unansweredQuestion');
	$('#P28B_3').removeClass('unansweredQuestion');
	$('#P28B_5').removeClass('unansweredQuestion');
	$('#P28B_6').removeClass('unansweredQuestion');
	$('#P28B_7').removeClass('unansweredQuestion');
});
$('#P28B_5').on('change', function(e){
	$('#P28B_1').removeClass('unansweredQuestion');
	$('#P28B_2').removeClass('unansweredQuestion');
	$('#P28B_3').removeClass('unansweredQuestion');
	$('#P28B_4').removeClass('unansweredQuestion');
	$('#P28B_6').removeClass('unansweredQuestion');
	$('#P28B_7').removeClass('unansweredQuestion');
});
$('#P28B_6').on('change', function(e){
	$('#P28B_1').removeClass('unansweredQuestion');
	$('#P28B_2').removeClass('unansweredQuestion');
	$('#P28B_3').removeClass('unansweredQuestion');
	$('#P28B_4').removeClass('unansweredQuestion');
	$('#P28B_5').removeClass('unansweredQuestion');
	$('#P28B_7').removeClass('unansweredQuestion');
});
$('#P28B_7').on('change', function(e){
	$('#P28B_1').removeClass('unansweredQuestion');
	$('#P28B_2').removeClass('unansweredQuestion');
	$('#P28B_3').removeClass('unansweredQuestion');
	$('#P28B_4').removeClass('unansweredQuestion');
	$('#P28B_5').removeClass('unansweredQuestion');
	$('#P28B_6').removeClass('unansweredQuestion');
});

$('#P33_1').on('change', function(e){
	$('#P33_2').removeClass('unansweredQuestion');
	$('#P33_3').removeClass('unansweredQuestion');
	$('#P33_4').removeClass('unansweredQuestion');
});
$('#P33_2').on('change', function(e){
	$('#P33_1').removeClass('unansweredQuestion');
	$('#P33_3').removeClass('unansweredQuestion');
	$('#P33_4').removeClass('unansweredQuestion');
});
$('#P33_3').on('change', function(e){
	$('#P33_1').removeClass('unansweredQuestion');
	$('#P33_2').removeClass('unansweredQuestion');
	$('#P33_4').removeClass('unansweredQuestion');
});
$('#P33_4').on('change', function(e){
	$('#P33_1').removeClass('unansweredQuestion');
	$('#P33_2').removeClass('unansweredQuestion');
	$('#P33_3').removeClass('unansweredQuestion');
});

$("#frm_mod04 :input").change(function() {
	$(this).removeClass('unansweredQuestion');
});

function validate(){

	var isOk = true;
	var focus;

	if($('#M4_CARGO').val().length==0){
		$("#M4_CARGO").addClass('unansweredQuestion');
		focus = focus || "M4_CARGO";		
		isOk = false;
	}

	if($('#M4_NOM').val().length==0){
		$("#M4_NOM").addClass('unansweredQuestion');	
		focus = focus || "M4_NOM";		
		isOk = false;
	}

	if($('#P25').val()==-1){
		$("#P25").addClass('unansweredQuestion');	
		focus = focus || "P25";		
		isOk = false;
	}
	
	if(($('#P25').val()==1 || $('#P25').val()==9 || $('#P25').val()==-1) && $('#P26').val()==-1){
		$("#P26").addClass('unansweredQuestion');		
		focus = focus || "P26";		
		isOk = false;
	}

	if(($('#P26A_4').val()==1) && $('#P26A_4_O').val().length==0){
		$("#P26A_4_O").addClass('unansweredQuestion');		
		focus = focus || "P26A_4_O";		
		isOk = false;
	}

	if(($('#P25').val()!=2) && ($('#P26').val()==-1 || $('#P26').val()==9 || $('#P26').val()==2) && ($('#P26A_1').val()==-1)){
		$("#P26A_1").addClass('unansweredQuestion');
		focus = focus || "P26A_1";		
		isOk = false;
	}

	if(($('#P25').val()!=2) && ($('#P26').val()==-1 || $('#P26').val()==9 || $('#P26').val()==2) && ($('#P26A_2').val()==-1)){
		$("#P26A_2").addClass('unansweredQuestion');		
		focus = focus || "P26A_2";		
		isOk = false;
	}

	if(($('#P25').val()!=2) && ($('#P26').val()==-1 || $('#P26').val()==9 || $('#P26').val()==2) && ($('#P26A_3').val()==-1)){
		$("#P26A_3").addClass('unansweredQuestion');		
		$("#P26A_4").addClass('unansweredQuestion');		
		focus = focus || "P26A_3";		
		isOk = false;
	}

	if(($('#P25').val()!=2) && ($('#P26').val()==-1 || $('#P26').val()==9 || $('#P26').val()==2) && ($('#P26A_4').val()==-1)){
		$("#P26A_4").addClass('unansweredQuestion');		
		focus = focus || "P26A_4";		
		isOk = false;
	}

	if($('#P26A_1').val()==0 && $('#P26A_2').val()==0 && $('#P26A_3').val()==0 && $('#P26A_4').val()==0){
		alert("en la pregunta 26A no pueden ser todas las respuestas NO");
		$("#P26A_1").addClass('unansweredQuestion');
		$("#P26A_2").addClass('unansweredQuestion');	
		$("#P26A_3").addClass('unansweredQuestion');	
		$("#P26A_4").addClass('unansweredQuestion');	
		focus = focus || "P26_1";		
		isOk = false;
	}

	if($('#P27').val()==-1 && $('#P25').val()!=2 && $('#P26').val()!=2) {
		$("#P27").addClass('unansweredQuestion');		
		focus = focus || "P27";		
		isOk = false;
	}


	if($('#P27').val()==-1 && $('#P25').val()!=2 && $('#P26').val()==1){
		$("#P27").addClass('unansweredQuestion');		
		focus = focus || "P27";		
		isOk = false;
	}

	if($('#P28').val()==-1){
		$("#P28").addClass('unansweredQuestion');		
		focus = focus || "P28";		
		isOk = false;
	}

	if(($('#P28').val()==1 || $('#P28').val()==-1 || $('#P28').val()==9) && $('#P28A').val().length==0){
		$("#P28A").addClass('unansweredQuestion');		
		focus = focus || "P28A";		
		isOk = false;
	}	

	if($('#P28A').val()==0 && $('#P28A').val().length!=0){
		alert("La Pregunta 28A solo admite valores del 1 al 98 , OMISION = 99");
		$("#P28A").addClass('unansweredQuestion');		
		focus = focus || "P28A";		
		isOk = false;
	}

	if($('#P28B_1').val()==0 && $('#P28B_2').val()==0 && $('#P28B_3').val()==0 && $('#P28B_4').val()==0 && $('#P28B_5').val()==0 && $('#P28B_6').val()==0 && $('#P28B_7').val()==0){
		alert("En la pregunta 28B no pueden ser todas las respuestas NO");
		$("#P28B_1").addClass('unansweredQuestion');	
		$("#P28B_2").addClass('unansweredQuestion');
		$("#P28B_3").addClass('unansweredQuestion');	
		$("#P28B_4").addClass('unansweredQuestion');
		$("#P28B_5").addClass('unansweredQuestion');	
		$("#P28B_6").addClass('unansweredQuestion');
		$("#P28B_7").addClass('unansweredQuestion');			
		focus = focus || "P28B_1";		
		isOk = false;
	}

	
	if($('#P28').val()==9 && $('#P28A').val()==99 && $('#P28B_1').val()==-1){
		$("#P28B_1").addClass('unansweredQuestion');		
		focus = focus || "P28B_1";		
		isOk = false;
	}

	if($('#P28').val()==9 && $('#P28A').val()==99 && $('#P28B_2').val()==-1){
		$("#P28B_2").addClass('unansweredQuestion');		
		focus = focus || "P28B_2";		
		isOk = false;
	}

	if($('#P28').val()==9 && $('#P28A').val()==99 && $('#P28B_3').val()==-1){
		$("#P28B_3").addClass('unansweredQuestion');		
		focus = focus || "P28B_3";		
		isOk = false;
	}

	if($('#P28').val()==9 && $('#P28A').val()==99 && $('#P28B_4').val()==-1){
		$("#P28B_4").addClass('unansweredQuestion');		
		focus = focus || "P28B_4";		
		isOk = false;
	}

	if($('#P28').val()==9 && $('#P28A').val()==99 && $('#P28B_5').val()==-1){
		$("#P28B_5").addClass('unansweredQuestion');		
		focus = focus || "P28B_5";		
		isOk = false;
	}

	if($('#P28').val()==9 && $('#P28A').val()==99 && $('#P28B_6').val()==-1){
		$("#P28B_6").addClass('unansweredQuestion');		
		focus = focus || "P28B_6";		
		isOk = false;
	}

	if($('#P28').val()==9 && $('#P28A').val()==99 && $('#P28B_7').val()==-1){
		$("#P28B_7").addClass('unansweredQuestion');		
		focus = focus || "P28B_7";		
		isOk = false;
	}
	


	if(($('#P28').val()==2 || $('#P28').val()==-1) && $('#P28B_1').val()==-1){
		$("#P28B_1").addClass('unansweredQuestion');		
		focus = focus || "P28B_1";		
		isOk = false;
	}

	if(($('#P28').val()==2 || $('#P28').val()==-1) && $('#P28B_2').val()==-1){
		$("#P28B_2").addClass('unansweredQuestion');		
		focus = focus || "P28B_2";		
		isOk = false;
	}

	if(($('#P28').val()==2 || $('#P28').val()==-1) && $('#P28B_3').val()==-1){
		$("#P28B_3").addClass('unansweredQuestion');		
		focus = focus || "P28B_3";		
		isOk = false;
	}

	if(($('#P28').val()==2 || $('#P28').val()==-1) && $('#P28B_4').val()==-1){
		$("#P28B_4").addClass('unansweredQuestion');		
		focus = focus || "P28B_4";		
		isOk = false;
	}

	if(($('#P28').val()==2 || $('#P28').val()==-1) && $('#P28B_5').val()==-1){
		$("#P28B_5").addClass('unansweredQuestion');		
		focus = focus || "P28B_5";		
		isOk = false;
	}

	if(($('#P28').val()==2 || $('#P28').val()==-1) && $('#P28B_6').val()==-1){
		$("#P28B_6").addClass('unansweredQuestion');		
		focus = focus || "P28B_6";		
		isOk = false;
	}

	if(($('#P28').val()==2 || $('#P28').val()==-1) && $('#P28B_7').val()==-1){
		$("#P28B_7").addClass('unansweredQuestion');		
		focus = focus || "P28B_7";		
		isOk = false;
	}

	if(($('#P28B_5').val()==1 || $('#P28B_5').val()==9) && $('#P28B_5_O').val().length==0){
		$("#P28B_5_O").addClass('unansweredQuestion');		
		focus = focus || "P28B_5_O";		
		isOk = false;
	}

	if(($('#P28B_6').val()==1 || $('#P28B_6').val()==9) && $('#P28B_6_O').val().length==0){
		$("#P28B_6_O").addClass('unansweredQuestion');		
		focus = focus || "P28B_6_O";		
		isOk = false;
	}

	if(($('#P28B_7').val()==1 || $('#P28B_7').val()==9) && $('#P28B_7_O').val().length==0){
		$("#P28B_7_O").addClass('unansweredQuestion');		
		focus = focus || "P28B_7_O";		
		isOk = false;
	}


	if($('#P29').val()==-1){
		$("#P29").addClass('unansweredQuestion');		
		focus = focus || "P29";		
		isOk = false;
	}

	if($('#P30_1').val()==-1 && $('#P28').val()==1){
		$("#P30_1").addClass('unansweredQuestion');		
		focus = focus || "P30_1";		
		isOk = false;
	}

	if($('#P30_2').val()==-1 && $('#P28').val()==1){
		$("#P30_2").addClass('unansweredQuestion');		
		focus = focus || "P30_2";		
		isOk = false;
	}

	if($('#P30_3').val()==-1 && $('#P28').val()==1){
		$("#P30_3").addClass('unansweredQuestion');		
		focus = focus || "P30_3";		
		isOk = false;
	}

	if($('#P30_4').val()==-1 && $('#P28').val()==1){
		$("#P30_4").addClass('unansweredQuestion');		
		focus = focus || "P30_4";		
		isOk = false;
	}

	if($('#P30_5').val()==-1 && $('#P28').val()==1){
		$("#P30_5").addClass('unansweredQuestion');		
		focus = focus || "P30_5";		
		isOk = false;
	}

	if($('#P30_6').val()==-1 && $('#P28').val()==1){
		$("#P30_6").addClass('unansweredQuestion');		
		focus = focus || "P30_6";		
		isOk = false;
	}

	if($('#P30_7').val()==-1 && $('#P28').val()==1){
		$("#P30_7").addClass('unansweredQuestion');		
		focus = focus || "P30_7";		
		isOk = false;
	}

	if($('#P30_8').val()==-1 && $('#P28').val()==1){
		$("#P30_8").addClass('unansweredQuestion');		
		focus = focus || "P30_8";		
		isOk = false;
	}

	if($('#P30_9').val()==-1 && $('#P28').val()==1){
		$("#P30_9").addClass('unansweredQuestion');		
		focus = focus || "P30_9";		
		isOk = false;
	}

	if($('#P30_10').val()==-1 && $('#P28').val()==1){
		$("#P30_10").addClass('unansweredQuestion');		
		focus = focus || "P30_10";		
		isOk = false;
	}

	if($('#P30_11').val()==-1 && $('#P28').val()==1){
		$("#P30_11").addClass('unansweredQuestion');		
		focus = focus || "P30_11";		
		isOk = false;
	}

	if($('#P30_12').val()==-1 && $('#P28').val()==1){
		$("#P30_12").addClass('unansweredQuestion');		
		focus = focus || "P30_12";		
		isOk = false;
	}

	if($('#P30_1_U').val()==-1 && ($('#P30_1').val()==1 || $('#P30_1').val()==9)  ){
		$("#P30_1_U").addClass('unansweredQuestion');		
		focus = focus || "P30_1_U";		
		isOk = false;
	}
	if($('#P30_1_R').val()==-1 && ($('#P30_1').val()==1 || $('#P30_1').val()==9)  ){
		$("#P30_1_R").addClass('unansweredQuestion');		
		focus = focus || "P30_1_R";		
		isOk = false;
	}

	if($('#P30_4_U').val()==-1 && ($('#P30_4').val()==1 || $('#P30_4').val()==9)  ){
		$("#P30_4_U").addClass('unansweredQuestion');		
		focus = focus || "P30_4_U";		
		isOk = false;
	}
	if($('#P30_4_R').val()==-1 && ($('#P30_4').val()==1 || $('#P30_4').val()==9)  ){
		$("#P30_4_R").addClass('unansweredQuestion');		
		focus = focus || "P30_4_R";		
		isOk = false;
	}

	if($('#P30_5_U').val()==-1 && ($('#P30_5').val()==1 || $('#P30_5').val()==9)  ){
		$("#P30_5_U").addClass('unansweredQuestion');		
		focus = focus || "P30_5_U";		
		isOk = false;
	}
	if($('#P30_5_R').val()==-1 && ($('#P30_5').val()==1 || $('#P30_5').val()==9)  ){
		$("#P30_5_R").addClass('unansweredQuestion');		
		focus = focus || "P30_5_R";		
		isOk = false;
	}

	if($('#P30_7_U').val()==-1 && ($('#P30_7').val()==1 || $('#P30_7').val()==9)  ){
		$("#P30_7_U").addClass('unansweredQuestion');		
		focus = focus || "P30_7_U";		
		isOk = false;
	}
	if($('#P30_7_R').val()==-1 && ($('#P30_7').val()==1 || $('#P30_7').val()==9)  ){
		$("#P30_7_R").addClass('unansweredQuestion');		
		focus = focus || "P30_7_R";		
		isOk = false;
	}

	if($('#P30_8_U').val()==-1 && ($('#P30_8').val()==1 || $('#P30_8').val()==9)  ){
		$("#P30_8_U").addClass('unansweredQuestion');		
		focus = focus || "P30_8_U";		
		isOk = false;
	}
	if($('#P30_8_R').val()==-1 && ($('#P30_8').val()==1 || $('#P30_8').val()==9)  ){
		$("#P30_8_R").addClass('unansweredQuestion');		
		focus = focus || "P30_8_R";		
		isOk = false;
	}

	if($('#P30_9_U').val()==-1 && ($('#P30_9').val()==1 || $('#P30_9').val()==9)  ){
		$("#P30_9_U").addClass('unansweredQuestion');		
		focus = focus || "P30_9_U";		
		isOk = false;
	}
	if($('#P30_9_R').val()==-1 && ($('#P30_9').val()==1 || $('#P30_9').val()==9)  ){
		$("#P30_9_R").addClass('unansweredQuestion');		
		focus = focus || "P30_9_R";		
		isOk = false;
	}

	if($('#P30_10_U').val()==-1 && ($('#P30_10').val()==1 || $('#P30_10').val()==9)  ){
		$("#P30_10_U").addClass('unansweredQuestion');		
		focus = focus || "P30_10_U";		
		isOk = false;
	}
	if($('#P30_10_R').val()==-1 && ($('#P30_10').val()==1 || $('#P30_10').val()==9)  ){
		$("#P30_10_R").addClass('unansweredQuestion');		
		focus = focus || "P30_10_R";		
		isOk = false;
	}

	if($('#P30_11_U').val()==-1 && ($('#P30_11').val()==1 || $('#P30_11').val()==9)  ){
		$("#P30_11_U").addClass('unansweredQuestion');		
		focus = focus || "P30_11_U";		
		isOk = false;
	}
	if($('#P30_11_R').val()==-1 && ($('#P30_11').val()==1 || $('#P30_11').val()==9)  ){
		$("#P30_11_R").addClass('unansweredQuestion');		
		focus = focus || "P30_11_R";		
		isOk = false;
	}

	if($('#P30_12_U').val()==-1 && ($('#P30_12').val()==1 || $('#P30_12').val()==9)  ){
		$("#P30_12_U").addClass('unansweredQuestion');		
		focus = focus || "P30_12_U";		
		isOk = false;
	}
	if($('#P30_12_R').val()==-1 && ($('#P30_12').val()==1 || $('#P30_12').val()==9)  ){
		$("#P30_12_R").addClass('unansweredQuestion');		
		focus = focus || "P30_12_R";		
		isOk = false;
	}

	if($('#P28').val()==1 && ($('#P30_4').val()==1 || $('#P30_8').val()==1 || $('#P30_9').val()==1 || $('#P30_10').val()==1 || $('#P30_11').val()==1 ||
		$('#P30_4').val()==9 || $('#P30_8').val()==9 || $('#P30_9').val()==9 || $('#P30_10').val()==9 || $('#P30_11').val()==9) && $('#P31_1').val()==-1){
		$("#P31_1").addClass('unansweredQuestion');		
		focus = focus || "P31_1";		
		isOk = false;
	}

	if($('#P28').val()==1 && ($('#P30_4').val()==1 || $('#P30_8').val()==1 || $('#P30_9').val()==1 || $('#P30_10').val()==1 || $('#P30_11').val()==1 ||
		$('#P30_4').val()==9 || $('#P30_8').val()==9 || $('#P30_9').val()==9 || $('#P30_10').val()==9 || $('#P30_11').val()==9) && $('#P31_2').val()==-1){
		$("#P31_2").addClass('unansweredQuestion');		
		focus = focus || "P31_2";		
		isOk = false;
	}

	if(($('#P31_1').val()==1 || $('#P31_1').val()==9) && $('#P31_1_1').val()==-1){
		$("#P31_1_1").addClass('unansweredQuestion');		
		focus = focus || "P31_1_1";		
		isOk = false;
	}

	if(($('#P31_1').val()==1 || $('#P31_1').val()==9) && $('#P31_1_2').val()==-1){
		$("#P31_1_2").addClass('unansweredQuestion');		
		focus = focus || "P31_1_2";		
		isOk = false;
	}

	if(($('#P31_1_1').val()==1 || $('#P31_1_1').val()==9) && $('#P31_1_1_Z').val().length==0){
		$("#P31_1_1_Z").addClass('unansweredQuestion');		
		focus = focus || "P31_1_1_Z";		
		isOk = false;
	}

	if(($('#P31_1_1').val()==1 || $('#P31_1_1').val()==9) && $('#P31_1_1_C').val()==-1){
		$("#P31_1_1_C").addClass('unansweredQuestion');		 
		focus = focus || "P31_1_1_C";		
		isOk = false;
	}

	if(($('#P31_1_2').val()==1 || $('#P31_1_2').val()==9) && ($('#P31_1_2_C').val()==-1)){
		$("#P31_1_2_C").addClass('unansweredQuestion');		
		focus = focus || "P31_1_2_C";		
		isOk = false;
	}

	if($('#P28').val()==1
		&& ($('#P30_4').val()==1 || $('#P30_8').val()==1 || $('#P30_9').val()==1 || $('#P30_10').val()==1 || $('#P30_11').val()==1 ||
		$('#P30_4').val()==9 || $('#P30_8').val()==9 || $('#P30_9').val()==9 || $('#P30_10').val()==9 || $('#P30_11').val()==9) && $('#P32').val().length==0){
		$("#P32").addClass('unansweredQuestion');		
		focus = focus || "P32";		
		isOk = false;
	}

	if($('#P32').val()==0 && $('#P32').val().length!=0){
		alert("La Pregunta 32 solo admite valores del 1 al 100 , OMISION = 999");
		$("#P32").addClass('unansweredQuestion');		
		focus = focus || "P32";		
		isOk = false;
	}


	if($("#P33_1").val()==-1){
		$("#P33_1").addClass('unansweredQuestion');
		focus = focus || "P33_1";
		isOk = false;
	}
	if($("#P33_2").val()==-1){
		$("#P33_2").addClass('unansweredQuestion');
		focus = focus || "P33_2";
		isOk = false;
	}
	if($("#P33_3").val()==-1){
		$("#P33_3").addClass('unansweredQuestion');
		focus = focus || "P33_3";
		isOk = false;
	}
	if($("#P33_4").val()==-1){
		$("#P33_4").addClass('unansweredQuestion');
		focus = focus || "P33_4";
		isOk = false;
	}

	if(($("#P33_1").val()==9 || $("#P33_2").val()==9 || $("#P33_3").val()==9 || $("#P33_4").val()==9) && 
		($("#P33_1").val()!=9 || $("#P33_2").val()!=9 || $("#P33_3").val()!=9 || $("#P33_4").val()!=9)){
		alert("Para Omitir toda la pregunta 33 debe ser Omision");
		if($("#P33_1").val()!=9){
			$("#P33_1").addClass('unansweredQuestion');
			focus = focus || "P33_1";
			isOk = false;
		}
		if($("#P33_2").val()!=9){
			$("#P33_2").addClass('unansweredQuestion');
			focus = focus || "P33_2";
			isOk = false;
		}
		if($("#P33_3").val()!=9){
			$("#P33_3").addClass('unansweredQuestion');
			focus = focus || "P33_3";
			isOk = false;
		}
		if($("#P33_4").val()!=9){
			$("#P33_4").addClass('unansweredQuestion');
			focus = focus || "P33_4";
			isOk = false;
		}
	}


	if($('#P33_1_1').val().length==0 && ($('#P33_1').val()==1) ){
		$("#P33_1_1").addClass('unansweredQuestion');		
		focus = focus || "P33_1_1";		
		isOk = false;
	}

	if($('#P33_1_2').val()==-1 && ($('#P33_1').val()==1) ){
		$("#P33_1_2").addClass('unansweredQuestion');		
		focus = focus || "P33_1_2";		
		isOk = false;
	}

	if($('#P33_1_3').val().length==0 && ($('#P33_1').val()==1) ){
		$("#P33_1_3").addClass('unansweredQuestion');		
		focus = focus || "P33_1_3";		
		isOk = false;
	}

	if($('#P33_1_4').val().length==0 && ($('#P33_1').val()==1) ){
		$("#P33_1_4").addClass('unansweredQuestion');		
		focus = focus || "P33_1_4";		
		isOk = false;
	}

	if($('#P33_1_5').val().length==0 && ($('#P33_1').val()==1) ){
		$("#P33_1_5").addClass('unansweredQuestion');		
		focus = focus || "P33_1_5";		
		isOk = false;
	}

	if($('#P33_1_6').val().length==0 && ($('#P33_1').val()==1) ){
		$("#P33_1_6").addClass('unansweredQuestion');		
		focus = focus || "P33_1_6";		
		isOk = false;
	}

	if($('#P33_1_7').val()==-1 && ($('#P33_1').val()==1) ){
		$("#P33_1_7").addClass('unansweredQuestion');		
		focus = focus || "P33_1_7";		
		isOk = false;
	}

	if($('#P33_2_1').val().length==0 && $('#P33_2').val()==1 ){
		$("#P33_2_1").addClass('unansweredQuestion');		
		focus = focus || "P33_2_1";		
		isOk = false;
	}

	if($('#P33_2_1').val().length==0 && $('#P33_2').val()==1 ){
		$("#P33_2_1").addClass('unansweredQuestion');		
		focus = focus || "P33_2_1";		
		isOk = false;
	}

	if($('#P33_2_2').val()==-1 && $('#P33_2').val()==1){
		$("#P33_2_2").addClass('unansweredQuestion');		
		focus = focus || "P33_2_2";		
		isOk = false;
	}

	if($('#P33_2_3').val().length==0 && $('#P33_2').val()==1 ){
		$("#P33_2_3").addClass('unansweredQuestion');		
		focus = focus || "P33_2_3";		
		isOk = false;
	}

	if($('#P33_2_4').val().length==0 && $('#P33_2').val()==1 ){
		$("#P33_2_4").addClass('unansweredQuestion');		
		focus = focus || "P33_2_4";		
		isOk = false;
	}

	if($('#P33_2_5').val().length==0 && $('#P33_2').val()==1 ){
		$("#P33_2_5").addClass('unansweredQuestion');		
		focus = focus || "P33_2_5";		
		isOk = false;
	}

	if($('#P33_2_6').val().length==0 && $('#P33_2').val()==1 ){
		$("#P33_2_6").addClass('unansweredQuestion');		
		focus = focus || "P33_2_6";		
		isOk = false;
	}

	if($('#P33_2_7').val()==-1 && $('#P33_2').val()==1 ){
		$("#P33_2_7").addClass('unansweredQuestion');		
		focus = focus || "P33_2_7";		
		isOk = false;
	}


	if($('#P33_3_1').val().length==0 && $('#P33_3').val()==1 ){
		$("#P33_3_1").addClass('unansweredQuestion');		
		focus = focus || "P33_3_1";		
		isOk = false;
	}

	if($('#P33_3_2').val()==-1 && $('#P33_3').val()==1 ){
		$("#P33_3_2").addClass('unansweredQuestion');		
		focus = focus || "P33_3_2";		
		isOk = false;
	}

	if($('#P33_3_3').val().length==0 && $('#P33_3').val()==1 ){
		$("#P33_3_3").addClass('unansweredQuestion');		
		focus = focus || "P33_3_3";		
		isOk = false;
	}

	if($('#P33_3_4').val().length==0 && $('#P33_3').val()==1 ){
		$("#P33_3_4").addClass('unansweredQuestion');		
		focus = focus || "P33_3_4";		
		isOk = false;
	}

	if($('#P33_3_5').val().length==0 && $('#P33_3').val()==1 ){
		$("#P33_3_5").addClass('unansweredQuestion');		
		focus = focus || "P33_3_5";		
		isOk = false;
	}

	if($('#P33_3_6').val().length==0 && $('#P33_3').val()==1 ){
		$("#P33_3_6").addClass('unansweredQuestion');		
		focus = focus || "P33_3_6";		
		isOk = false;
	}

	if($('#P33_3_7').val()==-1 && $('#P33_3').val()==1 ){
		$("#P33_3_7").addClass('unansweredQuestion');		
		focus = focus || "P33_3_7";		
		isOk = false;
	}


	if($('#P33_4_1').val().length==0 && $('#P33_4').val()==1){
		$("#P33_4_1").addClass('unansweredQuestion');		
		focus = focus || "P33_4_1";		
		isOk = false;
	}

	if($('#P33_4_2').val()==-1 && $('#P33_4').val()==1 ){
		$("#P33_4_2").addClass('unansweredQuestion');		
		focus = focus || "P33_4_2";		
		isOk = false;
	}

	if($('#P33_4_3').val().length==0 && $('#P33_4').val()==1 ){
		$("#P33_4_3").addClass('unansweredQuestion');		
		focus = focus || "P33_4_3";		
		isOk = false;
	}

	if($('#P33_4_4').val().length==0 && $('#P33_4').val()==1 ){
		$("#P33_4_4").addClass('unansweredQuestion');		
		focus = focus || "P33_4_4";		
		isOk = false;
	}

	if($('#P33_4_5').val().length==0 && $('#P33_4').val()==1){
		$("#P33_4_5").addClass('unansweredQuestion');		
		focus = focus || "P33_4_5";		
		isOk = false;
	}

	if($('#P33_4_6').val().length==0 && $('#P33_4').val()==1 ){
		$("#P33_4_6").addClass('unansweredQuestion');		
		focus = focus || "P33_4_6";		
		isOk = false;
	}

	if($('#P33_4_7').val()==-1 && $('#P33_4').val()==1 ){
		$("#P33_4_7").addClass('unansweredQuestion');		
		focus = focus || "P33_4_7";		
		isOk = false;
	}

	if($('#P34_1').val().length==0){
		$("#P34_1").addClass('unansweredQuestion');		
		focus = focus || "P34_1";		
		isOk = false;
	}

	if($('#P35_1').val().length==0){
		$("#P35_1").addClass('unansweredQuestion');		
		focus = focus || "P35_1";		
		isOk = false;
	}

	if(($('#P33_1_5').val()>2017 || $('#P33_1_5').val()<1900) && $('#P33_1_5').val()!=9999 && $('#P33_1_5').val().length!=0){
		alert("La Pregunta 33_1_5 solo admite años de 1900 al 2017 , OMISION = 9999");
		$("#P33_1_5").addClass('unansweredQuestion');		
		focus = focus || "P33_1_5";		
		isOk = false;
	}

	if(($('#P33_2_5').val()>2017 || $('#P33_2_5').val()<1900) && $('#P33_2_5').val()!=9999 && $('#P33_2_5').val().length!=0){
		alert("La Pregunta 33_2_5 solo admite años de 1900 al 2017 , OMISION = 9999");
		$("#P33_2_5").addClass('unansweredQuestion');		
		focus = focus || "P33_2_5";		
		isOk = false;
	}

	if(($('#P33_3_5').val()>2017 || $('#P33_3_5').val()<1900) && $('#P33_3_5').val()!=9999 && $('#P33_3_5').val().length!=0){
		alert("La Pregunta 33_3_5 solo admite años de 1900 al 2017 , OMISION = 9999");
		$("#P33_3_5").addClass('unansweredQuestion');		
		focus = focus || "P33_3_5";		
		isOk = false;
	}

	if(($('#P33_4_5').val()>2017 || $('#P33_4_5').val()<1900) && $('#P33_4_5').val()!=9999 && $('#P33_4_5').val().length!=0){
		alert("La Pregunta 33_4_5 solo admite años de 1900 al 2017 , OMISION = 9999");
		$("#P33_4_5").addClass('unansweredQuestion');		
		focus = focus || "P33_4_5";		
		isOk = false;
	}


	if(!isOk){
		$("#"+focus).focus();
	}

	return isOk;
}

