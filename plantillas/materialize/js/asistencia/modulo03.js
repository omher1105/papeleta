		
$(document).ready(function (){
	readModule('readModulo03');	
});

$('#btnBack').on('click', function(e){
	writeModule('writeModulo03', "#frm_mod03", "modulo02");
});

$('#btnNext').on('click', function(e){
	writeModule('writeModulo03', "#frm_mod03", "modulo04");
});

$('#btnSave').on('click', function(e){
	writeModule('writeModulo03', "#frm_mod03");
});

window.onload = function() {
  document.getElementById("P19").focus();
};

$('#P19_1').on('change', function(e){
	if($('#P19_1').val()==2){
		disableContainer('P19A_1', false);
	}else{
		enableContainer('P19A_1');
	}
});

$('#P19_2').on('change', function(e){
	if($('#P19_2').val()==2){
		disableContainer('P19A_2', false);
	}else{
		enableContainer('P19A_2');
	}
});

$('#P19_3').on('change', function(e){
	if($('#P19_3').val()==2){
		disableContainer('P19A_3', false);
	}else{
		enableContainer('P19A_3');
	}
});

$('#P19_4').on('change', function(e){
	if($('#P19_4').val()==2){
		disableContainer('P19A_4', false);
	}else{
		enableContainer('P19A_4');
	}
});

$('#P19_4').on('change', function(e){	
	if($('#P19_4').val()==1 || $('#P19_4').val()==9){
		enableContainer('P19_4_O');	
	}else{				
		disableContainer('P19_4_O', true);
	}
});

$('#P20_1').on('change', function(e){
	if($('#P20_1').val()==2){
		disableContainer('P20A_1', false);
	}else{
		enableContainer('P20A_1');
	}
});

$('#P20_2').on('change', function(e){
	if($('#P20_2').val()==2){
		disableContainer('P20A_2', false);
	}else{
		enableContainer('P20A_2');
	}
});

$('#P20_3').on('change', function(e){
	if($('#P20_3').val()==2){
		disableContainer('P20A_3', false);
	}else{
		enableContainer('P20A_3');
	}
});

$('#P20_4').on('change', function(e){
	if($('#P20_4').val()==2){
		disableContainer('P20A_4', false);
	}else{
		enableContainer('P20A_4');
	}
});

$('#P20_5').on('change', function(e){
	if($('#P20_5').val()==2){
		disableContainer('P20A_5', false);
	}else{
		enableContainer('P20A_5');
	}
});

$('#P20_5').on('change', function(e){	
	if($('#P20_5').val()==1 || $('#P20_5').val()==9){
		enableContainer('P20_5_O');	
	}else{				
		disableContainer('P20_5_O', true);
	}
});

$('#P22').on('change', function(e){
	if($('#P22').val()==2){
		disableContainer('P22_O', true);
		disableContainer('P22A', false);
		disableContainer('P24', false);
	}else{
		enableContainer('P22_O');
		enableContainer('P22A');
		enableContainer('P24');
	}
});


/*$('#P24_1').on('change', function(e){
	if($('#P24_1').val()==2){
		disableContainer('P24A_1', false);
	}else{
		enableContainer('P24A_1');
	}
});*/

/*$('#P24_3').on('change', function(e){
	if($('#P24_3').val()==2){
		disableContainer('P24A_3', false);
	}else{
		enableContainer('P24A_3');
	}
});*/




$("#frm_mod03 :input").change(function() {
	$(this).removeClass('unansweredQuestion');
})


function validate(){

	var isOk = true;
	var focus;

	if($('#P19_1').val()==-1){
		$("#P19_1").addClass('unansweredQuestion');
		focus = focus || "P19_1";
		isOk = false;

	}

	if(($('#P19_1').val()==1 || $('#P19_1').val()==-1 || $('#P19_1').val()==9) && $('#P19A_1').val()==-1){
		$("#P19A_1").addClass('unansweredQuestion');
		focus = focus || "P19A_1";
		isOk = false;

	}

	if($('#P19_2').val()==-1){
		$("#P19_2").addClass('unansweredQuestion');
		focus = focus || "P19_2";
		isOk = false;

	}

	if(($('#P19_2').val()==1 || $('#P19_2').val()==-1 || $('#P19_2').val()==9) && $('#P19A_2').val()==-1){
		$("#P19A_2").addClass('unansweredQuestion');
		focus = focus || "P19A_2";
		isOk = false;

	}

	if($('#P19_3').val()==-1){
		$("#P19_3").addClass('unansweredQuestion');
		focus = focus || "P19_3";
		isOk = false;

	}

	if(($('#P19_3').val()==1 || $('#P19_3').val()==-1 || $('#P19_3').val()==9) && $('#P19A_3').val()==-1){
		$("#P19A_3").addClass('unansweredQuestion');
		focus = focus || "P19A_3";
		isOk = false;

	}

	if($('#P19_4').val()==-1){
		$("#P19_4").addClass('unansweredQuestion');
		focus = focus || "P19_4";
		isOk = false;

	}

	if(($('#P19_4').val()==1 || $('#P19_4').val()==-1 || $('#P19_4').val()==9) && $('#P19A_4').val()==-1){
		$("#P19A_4").addClass('unansweredQuestion');
		focus = focus || "P19A_4";
		isOk = false;

	}


	if($('#P19_4').val()==1 && $('#P19_4_O').val().length==0){
		$("#P19_4_O").addClass('unansweredQuestion');
		focus = focus || "P19_4_O";
		isOk = false;

	}

	if($('#P20_1').val()==-1){
		$("#P20_1").addClass('unansweredQuestion');
		focus = focus || "P20_1";
		isOk = false;

	}

	if(($('#P20_1').val()==1 || $('#P20_1').val()==-1 || $('#P20_1').val()==9) && $('#P20A_1').val()==-1){
		$("#P20A_1").addClass('unansweredQuestion');
		focus = focus || "P20A_1";
		isOk = false;

	}

	if($('#P20_2').val()==-1){
		$("#P20_2").addClass('unansweredQuestion');
		focus = focus || "P20_2";
		isOk = false;

	}

	if(($('#P20_2').val()==1 || $('#P20_2').val()==-1 || $('#P20_2').val()==9) && $('#P20A_2').val()==-1){
		$("#P20A_2").addClass('unansweredQuestion');
		focus = focus || "P20A_2";
		isOk = false;

	}

	if($('#P20_3').val()==-1){
		$("#P20_3").addClass('unansweredQuestion');
		focus = focus || "P20_3";
		isOk = false;

	}

	if(($('#P20_3').val()==1 || $('#P20_3').val()==-1 || $('#P20_3').val()==9) && $('#P20A_3').val()==-1){
		$("#P20A_3").addClass('unansweredQuestion');
		focus = focus || "P20A_3";
		isOk = false;

	}

	if($('#P20_4').val()==-1){
		$("#P20_4").addClass('unansweredQuestion');
		focus = focus || "P20_4";
		isOk = false;

	}

	if(($('#P20_4').val()==1 || $('#P20_4').val()==-1 || $('#P20_4').val()==9) && $('#P20A_4').val()==-1){
		$("#P20A_4").addClass('unansweredQuestion');
		focus = focus || "P20A_4";
		isOk = false;

	}

	if($('#P20_5').val()==-1){
		$("#P20_5").addClass('unansweredQuestion');
		focus = focus || "P20_5";
		isOk = false;

	}

	if(($('#P20_5').val()==1 || $('#P20_5').val()==-1 || $('#P20_5').val()==9) && $('#P20A_5').val()==-1){
		$("#P20A_5").addClass('unansweredQuestion');
		focus = focus || "P20A_5";
		isOk = false;

	}

	if($('#P20_5').val()==1 && $('#P20_5_O').val().length==0){
		$("#P20_5_O").addClass('unansweredQuestion');
		focus = focus || "P20_5_O";
		isOk = false;

	}

	if($('#P21').val()==-1){
		$("#P21").addClass('unansweredQuestion');
		focus = focus || "P21";
		isOk = false;

	}

	if($('#P22').val()==-1){
		$("#P22").addClass('unansweredQuestion');
		focus = focus || "P22";
		isOk = false;

	}

	if($('#P22').val()==1 && $('#P22_1').val().length==0){
		$("#P22_1").addClass('unansweredQuestion');
		focus = focus || "P22_1";
		isOk = false;

	}

	if($('#P22').val()==1 && $('#P22_2').val().length==0){
		$("#P22_2").addClass('unansweredQuestion');
		focus = focus || "P22_2";
		isOk = false;

	}

	if($('#P22').val()==1 && $('#P22_3').val().length==0){
		$("#P22_3").addClass('unansweredQuestion');
		$("#P22_4").addClass('unansweredQuestion');
		focus = focus || "P22_3";
		isOk = false;

	}

	if($('#P22').val()==1 && $('#P22_4').val().length==0){
		$("#P22_4").addClass('unansweredQuestion');
		focus = focus || "P22_4";
		isOk = false;

	}

	if($('#P22').val()==1 && $('#P22A').val()==-1){
		$("#P22A").addClass('unansweredQuestion');
		focus = focus || "P22A";
		isOk = false;

	}

	if($('#P23').val()==-1){
		$("#P23").addClass('unansweredQuestion');
		focus = focus || "P23";
		isOk = false;

	}

	if($('#P23A').val()==-1){
		$("#P23A").addClass('unansweredQuestion');
		focus = focus || "P23A";
		isOk = false;

	}

	if(($('#P22').val()==1 || $('#P22').val()==9) && $('#P24_1').val()==-1){
		$("#P24_1").addClass('unansweredQuestion');
		focus = focus || "P24_1";
		isOk = false;

	}

	if(($('#P22').val()==1 || $('#P22').val()==9) && $('#P24A_1').val()==-1){
		$("#P24A_1").addClass('unansweredQuestion');
		focus = focus || "P24A_1";
		isOk = false;
	}

	/*if(($('#P24_1').val()==1 || $('#P24_1').val()==-1 || $('#P24_1').val()==9) && $('#P24A_1').val()==-1){
		$("#P24A_1").addClass('unansweredQuestion');
		focus = focus || "P24A_1";
		isOk = false;
	}*/

	if(($('#P22').val()==1 || $('#P22').val()==9) && $('#P24_2').val()==-1){
		$("#P24_2").addClass('unansweredQuestion');
		focus = focus || "P24_2";
		isOk = false;

	}

	if(($('#P22').val()==1 || $('#P22').val()==9) && $('#P24_3').val()==-1){
		$("#P24_3").addClass('unansweredQuestion');
		focus = focus || "P24_3";
		isOk = false;

	}

	if(($('#P22').val()==1 || $('#P22').val()==9) && $('#P24A_3').val()==-1){
		$("#P24A_3").addClass('unansweredQuestion');
		focus = focus || "P24A_3";
		isOk = false;
	}

	/*if(($('#P24_3').val()==1 || $('#P24_3').val()==-1 || $('#P24_3').val()==9) && $('#P24A_3').val()==-1){
		$("#P24A_3").addClass('unansweredQuestion');
		focus = focus || "P24A_3";
		isOk = false;

	}*/

	if(($('#P22').val()==1 || $('#P22').val()==9) && $('#P24_4').val()==-1){
		$("#P24_4").addClass('unansweredQuestion');
		focus = focus || "P24_4";
		isOk = false;

	}


	if(!isOk){
		$("#"+focus).focus();
	}

	return isOk;
}