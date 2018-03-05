		
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


//validacion

$('#P10').on('change', function(e){			
	if($('#P10').val()==1 || $('#P10').val()==9){
		enableContainer('P10_1');			
	}else{				
		disableContainer('P10_1', true);
	}
});

$('#P11').on('change', function(e){
	if($('#P11').val()==1){
		disableContainer('P12', false);
	}else{
		enableContainer('P12');
	}
});



$('#P12').on('change', function(e){
	if($('#P12').val()!=-1){
		disableContainer('P13', false);
		disableContainer('P14', false);
		disableContainer('P15', false);
		disableContainer('P16', false);
		disableContainer('P17', false);
		disableContainer('P18', false);
		disableContainer('P19', false);
		disableContainer('P20', false);
		disableContainer('P21', false);
		disableContainer('P22', false);
	}else{
		enableContainer('P13');
		enableContainer('P14');
		enableContainer('P15');
		enableContainer('P16');
		enableContainer('P17');
		enableContainer('P18');
		enableContainer('P19');
		enableContainer('P20');
		enableContainer('P21');
		enableContainer('P22');
	}
});

$('#P14').on('change', function(e){
	if($('#P14').val()==1 && $('#P11').val()==1){
		disableContainer('P14A', false);
	}else{
		if($('#P12').val()==-1){
			enableContainer('P14A');
		}
	}
});

$('#P14_7').on('change', function(e){
	if($('#P14_7').val()==1){
		enableContainer('P14_7_O');
	}else{
		disableContainer('P14_7_O', true);
	}
});

$('#P15').on('change', function(e){
	if($('#P15').val()==1 && $('#P11').val()==1){
		disableContainer('P15A', false);
	}else{
		if($('#P12').val()==-1){
			enableContainer('P15A');
		}
	}
});

$('#P15_8').on('change', function(e){
	if($('#P15_8').val()==1){
		enableContainer('P15_8_O');
	}else{
		disableContainer('P15_8_O', true);
	}
});

$('#P16').on('change', function(e){
	if($('#P16').val()==1 && $('#P11').val()==1){
		disableContainer('P16A', false);
	}else{
		if($('#P12').val()==-1){
			enableContainer('P16A');
		}
	}
});

$('#P16A_11').on('change', function(e){
	if($('#P16A_11').val()==1){
		enableContainer('P16A_11_O');
	}else{
		disableContainer('P16A_11_O', true);
	}
});

$('#P16').on('change', function(e){
	if($('#P16').val()==2 && $('#P11').val()==1){
		disableContainer('P17', false);
		disableContainer('P18', false);
		disableContainer('P19', false);
		disableContainer('P20', false);
		disableContainer('P21', false);
		disableContainer('P22', false);
	}else{
		if($('#P12').val()==-1){
			enableContainer('P17');
			enableContainer('P18');
			enableContainer('P19');
			enableContainer('P20');
			enableContainer('P21');
			enableContainer('P22');
		}
	}
});

$('#P16A_11').on('change', function(e){
	if($('#P16A_11').val()==1){
		enableContainer('P16A_11_O');
	}else{
		disableContainer('P16A_11_O', true);
	}
});

$('#P18').on('change', function(e){
	if($('#P18').val()==1 && $('#P11').val()==1 && $('#P16').val()==1){
		disableContainer('P19', false);	
	}else{
		if($('#P16').val()!=2){
			enableContainer('P19');
		}
	}
});

$('#P11').on('change', function(e){
	if($('#P18').val()==1 && $('#P11').val()==1 && $('#P16').val()==1){
		disableContainer('P19', false);	
	}else{
		if($('#P16').val()!=2){
			enableContainer('P19');
		}
	}
});

$('#P16').on('change', function(e){
	if($('#P18').val()==1 && $('#P11').val()==1 && $('#P16').val()==1){
		disableContainer('P19', false);	
	}else{
		if($('#P16').val()!=2){
			enableContainer('P19');
		}
	}
});

$('#P19_1').on('change', function(e){
	if($('#P19_1').val()==1 ){
		enableContainer('P19_1_1');
	}else{
		disableContainer('P19_1_1', true);
	}
});

$('#P19_1_1').on('change', function(e){
	if($('#P19_1_1').val()==1 ){
		enableContainer('P19_1_1_ZC');
	}else{
		disableContainer('P19_1_1_ZC', true);
	}
});

$('#P19_1_2').on('change', function(e){
	if($('#P19_1_2').val()==1 ){
		enableContainer('P19_1_2_C');
	}else{
		disableContainer('P19_1_2_C', true);
	}
});

//22
$('#P22_1').on('change', function(e){
	if($('#P22_1').val()==1){
		enableContainer('P22_1');	
	}else{		
		disableContainer('P22_1', true);
	}
});

$('#P22_2').on('change', function(e){
	if($('#P22_2').val()==1 ){
		enableContainer('P22_2');	
	}else{		
		disableContainer('P22_2', true);
	}
});

$('#P22_3').on('change', function(e){
	if($('#P22_3').val()==1){
		enableContainer('P22_3');
	}else{		
		disableContainer('P22_3', true);
	}
});

$('#P22_4').on('change', function(e){
	if($('#P22_4').val()==1){
		enableContainer('P22_4');
	}else{
		disableContainer('P22_4', true);
	}
});
//23
$('#P23_1').on('change', function(e){
	if($('#P23_1').val()==2 && $('#P23_2').val()==2 && $('#P23_3').val()==2 && $('#P23_4').val()==2 && $('#P23_5').val()==2 && $('#P23_6').val()==2 && $('#P23_7').val()==2){
		disableContainer('P24', false);
	}else{
		enableContainer('P24');
	}
})
$('#P23_2').on('change', function(e){
	if($('#P23_2').val()==2 && $('#P23_2').val()==2 && $('#P23_3').val()==2 && $('#P23_4').val()==2 && $('#P23_5').val()==2 && $('#P23_6').val()==2 && $('#P23_7').val()==2){
		disableContainer('P24', false);
	}else{
		enableContainer('P24');
	}
})
$('#P23_3').on('change', function(e){
	if($('#P23_3').val()==2 && $('#P23_2').val()==2 && $('#P23_3').val()==2 && $('#P23_4').val()==2 && $('#P23_5').val()==2 && $('#P23_6').val()==2 && $('#P23_7').val()==2){
		disableContainer('P24', false);
	}else{
		enableContainer('P24');
	}
})
$('#P23_4').on('change', function(e){
	if($('#P23_4').val()==2 && $('#P23_2').val()==2 && $('#P23_3').val()==2 && $('#P23_4').val()==2 && $('#P23_5').val()==2 && $('#P23_6').val()==2 && $('#P23_7').val()==2){
		disableContainer('P24', false);
	}else{
		enableContainer('P24');
	}
})
$('#P23_5').on('change', function(e){
	if($('#P23_5').val()==2 && $('#P23_2').val()==2 && $('#P23_3').val()==2 && $('#P23_4').val()==2 && $('#P23_5').val()==2 && $('#P23_6').val()==2 && $('#P23_7').val()==2){
		disableContainer('P24', false);
	}else{
		enableContainer('P24');
	}
})
$('#P23_6').on('change', function(e){
	if($('#P23_6').val()==2 && $('#P23_2').val()==2 && $('#P23_3').val()==2 && $('#P23_4').val()==2 && $('#P23_5').val()==2 && $('#P23_6').val()==2 && $('#P23_7').val()==2){
		disableContainer('P24', false);
	}else{
		enableContainer('P24');
	}
})
$('#P23_7').on('change', function(e){
	if($('#P23_7').val()==2&& $('#P23_2').val()==2 && $('#P23_3').val()==2 && $('#P23_4').val()==2 && $('#P23_5').val()==2 && $('#P23_6').val()==2 && $('#P23_7').val()==2){
		disableContainer('P24', false);
	}else{
		enableContainer('P24');
	}
})

$('#P23_1').on('change', function(e){
	if($('#P23_1').val()==1 || $('#P23_2').val()==1 || $('#P23_3').val()==1 || $('#P23_4').val()==1 || $('#P23_5').val()==1 || $('#P23_6').val()==1 || $('#P23_7').val()==1){
		enableContainer('P24');
	}else{
		disableContainer('P24', false);
	}
})
$('#P23_2').on('change', function(e){
	if($('#P23_1').val()==1 || $('#P23_2').val()==1 || $('#P23_3').val()==1 || $('#P23_4').val()==1 || $('#P23_5').val()==1 || $('#P23_6').val()==1 || $('#P23_7').val()==1){
		enableContainer('P24');
	}else{
		disableContainer('P24', false);
	}
})
$('#P23_3').on('change', function(e){
	if($('#P23_1').val()==1 || $('#P23_2').val()==1 || $('#P23_3').val()==1 || $('#P23_4').val()==1 || $('#P23_5').val()==1 || $('#P23_6').val()==1 || $('#P23_7').val()==1){
		enableContainer('P24');
	}else{
		disableContainer('P24', false);
	}
})
$('#P23_4').on('change', function(e){
	if($('#P23_1').val()==1 || $('#P23_2').val()==1 || $('#P23_3').val()==1 || $('#P23_4').val()==1 || $('#P23_5').val()==1 || $('#P23_6').val()==1 || $('#P23_7').val()==1){
		enableContainer('P24');
	}else{
		disableContainer('P24', false);
	}
})
$('#P23_5').on('change', function(e){
	if($('#P23_1').val()==1 || $('#P23_2').val()==1 || $('#P23_3').val()==1 || $('#P23_4').val()==1 || $('#P23_5').val()==1 || $('#P23_6').val()==1 || $('#P23_7').val()==1){
		enableContainer('P24');
	}else{
		disableContainer('P24', false);
	}
})
$('#P23_6').on('change', function(e){
	if($('#P23_1').val()==1 || $('#P23_2').val()==1 || $('#P23_3').val()==1 || $('#P23_4').val()==1 || $('#P23_5').val()==1 || $('#P23_6').val()==1 || $('#P23_7').val()==1){
		enableContainer('P24');
	}else{
		disableContainer('P24', false);
	}
})
$('#P23_7').on('change', function(e){
	if($('#P23_1').val()==1 || $('#P23_2').val()==1 || $('#P23_3').val()==1 || $('#P23_4').val()==1 || $('#P23_5').val()==1 || $('#P23_6').val()==1 || $('#P23_7').val()==1){
		enableContainer('P24');
	}else{
		disableContainer('P24', false);
	}
})

$('#P25').on('change', function(e){
	if($('#P25').val()==2){
		disableContainer('P26', false);
	}else{
		enableContainer('P26');
	}
});

$('#P27').on('change', function(e){			
	if($('#P27').val()==1){
		enableContainer('P27_E');			
	}else{				
		disableContainer('P27_E', true);
	}
});

$('#P28').on('change', function(e){
	if($('#P28').val()==2){
		disableContainer('P29', false);
	}else{
		enableContainer('P29');
	}
});

$('#P29_1').on('change', function(e){
	if($('#P29_1').val()==1){
		enableContainer('P29_1');	
	}else{		
		disableContainer('P29_1', true);
	}
});

$('#P29_2').on('change', function(e){
	if($('#P29_2').val()==1 ){
		enableContainer('P29_2');	
	}else{		
		disableContainer('P29_2', true);
	}
});

$('#P29_3').on('change', function(e){
	if($('#P29_3').val()==1){
		enableContainer('P29_3');
	}else{		
		disableContainer('P29_3', true);
	}
});

$('#P29_4').on('change', function(e){
	if($('#P29_4').val()==1){
		enableContainer('P29_4');
	}else{
		disableContainer('P29_4', true);
	}
});

$("#frm_mod02 :input").change(function() {
	$(this).removeClass('unansweredQuestion');
})

function validate(){

  var isOk = true;
  var focus;


if($('#P10').val()==-1){
		$("#P10").addClass('unansweredQuestion');
		focus = focus || "P10";
		isOk = false;
	}

	if(($('#P10').val()==1 || $('#P10').val()==9) && $('#P10_1').val().length==0){
		$("#P10_1").addClass('unansweredQuestion');	
		focus = focus || "P10_1";	
		isOk = false;
	}

if($('#P11').val()==-1){
		$("#P11").addClass('unansweredQuestion');
		focus = focus || "P11";
		isOk = false;
	}
if(($('#P11').val()==2 || $('#P11').val()==-1 || $('#P11').val()==9) && $('#P12').val()==-1){
		$("#P12").addClass('unansweredQuestion');
		focus = focus || "P12";
		isOk = false;
    }
  // 12
  

if($('#P12').val()==-1 && $('#P13_1').val().length==0){                             
		$("#P13_1").addClass('unansweredQuestion');
		focus = focus || "P13_1";		
		isOk = false;
	}
if($('#P12').val()==-1 && $('#P13_2').val().length==0){
		$("#P13_2").addClass('unansweredQuestion');
		focus = focus || "P13_2";		
		isOk = false;
	}
if($('#P12').val()==-1 && $('#P13_3').val().length==0){
		$("#P13_3").addClass('unansweredQuestion');
		focus = focus || "P13_3";		
		isOk = false;
	}

if($('#P12').val()==-1 && $('#P13_4').val().length==0){
		$("#P13_4").addClass('unansweredQuestion');
		focus = focus || "P13_4";		
		isOk = false;
	}
if($('#P13_5').val().length!=0 && $('#P13_5').val()==0){
		//alert("Telefono 1 no puede ser 0");
		$("#P13_5").addClass('unansweredQuestion');
		focus = focus || "P13_5";		
		isOk = false;
	}
	if($('#P13_6').val().length!=0 && $('#P13_6').val()==0){
		//alert("Telefono 1 no puede ser 0");
		$("#P13_6").addClass('unansweredQuestion');
		focus = focus || "P13_6";		
		isOk = false;
		}

if($('#P13_7').val().length!=0 && $('#P13_7').val()==0){
		//alert("Telefono 1 no puede ser 0");
		$("#P13_7").addClass('unansweredQuestion');
		focus = focus || "P13_7";		
		isOk = false;
		}

if($('#P12').val()==-1 && $('#P13_8').val()==-1){
    $("#P13_8").addClass('unansweredQuestion');
    focus = focus || "P13_8";    
    isOk = false;
  }

if($('#P12').val()==-1 && $('#P13_9').val().length==0){
		$("#P13_9").addClass('unansweredQuestion');
		focus = focus || "P13_9";		
		isOk = false;
	}

if($('#P12').val()==-1 && $('#P14').val()==-1){
	$("#P14").addClass('unansweredQuestion');
	focus = focus || "P14";		
	isOk = false;
}

if($('#P12').val()==-1 && $('#P14').val()!=1 && $('#P14_1').val()==-1){
		$("#P14_1").addClass('unansweredQuestion');
		focus = focus || "P14_1";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P14').val()!=1 && $('#P14_2').val()==-1){
		$("#P14_2").addClass('unansweredQuestion');
		focus = focus || "P14_2";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P14').val()!=1 && $('#P14_3').val()==-1){
		$("#P14_3").addClass('unansweredQuestion');
		focus = focus || "P14_3";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P14').val()!=1 && $('#P14_4').val()==-1){
		$("#P14_4").addClass('unansweredQuestion');
		focus = focus || "P14_4";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P14').val()!=1 && $('#P14_5').val()==-1){
		$("#P14_5").addClass('unansweredQuestion');
		focus = focus || "P14_5";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P14').val()!=1 && $('#P14_6').val()==-1){
		$("#P14_6").addClass('unansweredQuestion');
		focus = focus || "P14_6";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P14').val()!=1 && $('#P14_7').val()==-1){
		$("#P14_7").addClass('unansweredQuestion');
		focus = focus || "P14_7";		
		isOk = false;
}


// completar para todo el 14_

if($('#P12').val()==-1 && $('#P15').val()==-1){
	$("#P15").addClass('unansweredQuestion');
	focus = focus || "P15";		
	isOk = false;
}

if($('#P12').val()==-1 && $('#P15').val()!=1 && $('#P15_1').val()==-1){
		$("#P15_1").addClass('unansweredQuestion');
		focus = focus || "P15_1";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P15').val()!=1 && $('#P15_2').val()==-1){
		$("#P15_2").addClass('unansweredQuestion');
		focus = focus || "P15_2";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P15').val()!=1 && $('#P15_3').val()==-1){
		$("#P15_3").addClass('unansweredQuestion');
		focus = focus || "P15_3";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P15').val()!=1 && $('#P15_4').val()==-1){
		$("#P15_4").addClass('unansweredQuestion');
		focus = focus || "P15_4";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P15').val()!=1 && $('#P15_5').val()==-1){
		$("#P15_5").addClass('unansweredQuestion');
		focus = focus || "P15_5";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P15').val()!=1 && $('#P15_6').val()==-1){
		$("#P15_6").addClass('unansweredQuestion');
		focus = focus || "P15_6";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P15').val()!=1 && $('#P15_7').val()==-1){
		$("#P15_7").addClass('unansweredQuestion');
		focus = focus || "P15_7";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P15').val()!=1 && $('#P15_8').val()==-1){
		$("#P15_8").addClass('unansweredQuestion');
		focus = focus || "P15_8";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P16').val()==-1){
	$("#P16").addClass('unansweredQuestion');
	focus = focus || "P16";		
	isOk = false;
}

if($('#P12').val()==-1 && $('#P16').val()!=1 && $('#P16A_1').val()==-1){
		$("#P16A_1").addClass('unansweredQuestion');
		focus = focus || "P16A_1";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P16').val()!=1 && $('#P16A_2').val()==-1){
		$("#P16A_2").addClass('unansweredQuestion');
		focus = focus || "P16A_2";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P16').val()!=1 && $('#P16A_3').val()==-1){
		$("#P16A_3").addClass('unansweredQuestion');
		focus = focus || "P16A_3";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P16').val()!=1 && $('#P16A_4').val()==-1){
		$("#P16A_4").addClass('unansweredQuestion');
		focus = focus || "P16A_4";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P16').val()!=1 && $('#P16A_5').val()==-1){
		$("#P16A_5").addClass('unansweredQuestion');
		focus = focus || "P16A_5";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P16').val()!=1 && $('#P16A_6').val()==-1){
		$("#P16A_6").addClass('unansweredQuestion');
		focus = focus || "P16A_6";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P16').val()!=1 && $('#P16A_7').val()==-1){
		$("#P16A_7").addClass('unansweredQuestion');
		focus = focus || "P16A_7";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P16').val()!=1 && $('#P16A_8').val()==-1){
		$("#P16A_8").addClass('unansweredQuestion');
		focus = focus || "P16A_8";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P16').val()!=1 && $('#P16A_9').val()==-1){
		$("#P16A_9").addClass('unansweredQuestion');
		focus = focus || "P16A_9";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P16').val()!=1 && $('#P16A_10').val()==-1){
		$("#P16A_10").addClass('unansweredQuestion');
		focus = focus || "P16A_10";		
		isOk = false;
}
if($('#P12').val()==-1 && $('#P16').val()!=1 && $('#P16A_11').val()==-1){
		$("#P16A_11").addClass('unansweredQuestion');
		focus = focus || "P16A_11";		
		isOk = false;
}
//
if($('#P12').val()==-1 && $('#P18').val()==-1 && $('#P16').val()==-2){
	$("#P18").addClass('unansweredQuestion');
	focus = focus || "P18";		
	isOk = false;
}
if($('#P12').val()==-1 && $('#P19_1').val()==-1&& $('#P16').val()==-2){
	$("#P19_1").addClass('unansweredQuestion');
	focus = focus || "P19_1";		
	isOk = false;
}
if($('#P12').val()==-1 && $('#P19_2').val()==-1&& $('#P16').val()==-2){
	$("#P19_2").addClass('unansweredQuestion');
	focus = focus || "P19_2";		
	isOk = false;
}

if($('#P12').val()==-1 && $('#P21').val()==-1&& $('#P16').val()==-2){
	$("#P21").addClass('unansweredQuestion');
	focus = focus || "P21";		
	isOk = false;
}
//22
if($('#P12').val()==-1 && $('#P22_1').val()==-1&& $('#P16').val()==-2){
	$("#P22_1").addClass('unansweredQuestion');
	focus = focus || "P22_1";		
	isOk = false;
}
if($('#P12').val()==-1 && $('#P22_2').val()==-1&& $('#P16').val()==-2){
	$("#P22_2").addClass('unansweredQuestion');
	focus = focus || "P22_2";		
	isOk = false;
}
if($('#P12').val()==-1 && $('#P22_3').val()==-1 && $('#P16').val()==-2){
	$("#P22_3").addClass('unansweredQuestion');
	focus = focus || "P22_3";		
	isOk = false;
}
if($('#P12').val()==-1 && $('#P22_4').val()==-1 && $('#P16').val()==-2){
	$("#P22_4").addClass('unansweredQuestion');
	focus = focus || "P22_4";		
	isOk = false;
}
//19
if(($('#P19_1').val()==1 || $('#P19_1').val()==9) && $('#P19_1_1').val()==-1){
		$("#P19_1_1").addClass('unansweredQuestion');		
		focus = focus || "P19_1_1";		
		isOk = false;
	}
if(($('#P19_1').val()==1 || $('#P19_1').val()==9) && $('#P19_1_2').val()==-1){
		$("#P19_1_2").addClass('unansweredQuestion');		
		focus = focus || "P19_1_2";		
		isOk = false;
	}
if(($('#P19_1_1').val()==1 || $('#P19_1_1').val()==9) && $('#P19_1_1_Z').val().length==0){
		$("#P19_1_1_Z").addClass('unansweredQuestion');		
		focus = focus || "P19_1_1_Z";		
		isOk = false;
	}
if(($('#P19_1_1').val()==1 || $('#P19_1_1').val()==9) && $('#P19_1_1_C').val().length==0){
		$("#P19_1_1_C").addClass('unansweredQuestion');		
		focus = focus || "P19_1_1_C";		
		isOk = false;
	}
if(($('#P19_1_2').val()==1 || $('#P19_1_2').val()==9) && $('#P19_1_2_C').val().length==0){
		$("#P19_1_2_C").addClass('unansweredQuestion');		
		focus = focus || "P19_1_2_C";		
		isOk = false;
	}
	
	// 23

	if($("#P23_1").val()==-1){
			$("#P23_1").addClass('unansweredQuestion');
			focus = focus || "P23_1";
		}

		if($("#P23_2").val()==-1){
			$("#P23_2").addClass('unansweredQuestion');
			focus = focus || "P23_2";
		}
		if($("#P23_3").val()==-1){
			$("#P23_3").addClass('unansweredQuestion');
			focus = focus || "P23_3";
		}
		if($("#P23_4").val()==-1){
			$("#P23_4").addClass('unansweredQuestion');
			focus = focus || "P23_4";
		}
		if($("#P23_5").val()==-1){
			$("#P23_5").addClass('unansweredQuestion');
			focus = focus || "P23_5";
		}
		if($("#P23_6").val()==-1){
			$("#P23_6").addClass('unansweredQuestion');
			focus = focus || "P23_6";
		}
		if($("#P23_7").val()==-1){
			$("#P23_7").addClass('unansweredQuestion');
			focus = focus || "P23_7";
			isOk = false;

		}
if($('#P23_1_E').val().length==0){
		$("#P23_1_E").addClass('unansweredQuestion');	
		focus = focus || "P23_1_E";	
		isOk = false;
	}
if($('#P23_2_E').val().length==0){
		$("#P23_2_E").addClass('unansweredQuestion');	
		focus = focus || "P23_2_E";	
		isOk = false;
	}
if($('#P23_3_E').val().length==0){
	$("#P23_3_E").addClass('unansweredQuestion');
	focus = focus || "P23_3_E";
	isOk = false;
}
if($('#P23_4_E').val().length==0){
	$("#P23_4_E").addClass('unansweredQuestion');
	focus = focus || "P23_4_E";
	isOk = false;
}
if($('#P23_5_E').val().length==0){
	$("#P23_5_E").addClass('unansweredQuestion');
	focus = focus || "P23_5_E";
	isOk = false;
}	

if($('#P23_6_E').val().length==0){
	$("#P23_6_E").addClass('unansweredQuestion');
	focus = focus || "P23_6_E";
	isOk = false;
}
if($('#P23_7_E').val().length==0){
	$("#P23_7_E").addClass('unansweredQuestion');
	focus = focus || "P23_7_E";
	isOk = false;
}
//24


// 25
if($('#P25').val()==-1){
		$("#P25").addClass('unansweredQuestion');
		focus = focus || "P25";
		isOk = false;
	}

if($('#P25').val()==1 && $('#P26_1_E').val().length==0){
		$("#P26_1_E").addClass('unansweredQuestion');
		focus = focus || "P26_1_E";
		isOk = false;
	}
if($('#P25').val()==1 && $('#P26_1').val().length==0){
		$("#P26_1").addClass('unansweredQuestion');
		focus = focus || "P26_1";
		isOk = false;
	}
if($('#P25').val()==1 && $('#P26_2').val().length==0){
		$("#P26_2").addClass('unansweredQuestion');
		focus = focus || "P26_2";
		isOk = false;
	}
if($('#P25').val()==1 && $('#P26_3').val().length==0){
		$("#P26_3").addClass('unansweredQuestion');
		focus = focus || "P26_3";
		isOk = false;
	}
if($('#P25').val()==1 && $('#P26_4').val().length==0){
		$("#P26_4").addClass('unansweredQuestion');
		focus = focus || "P26_4";
		isOk = false;
	}
if($('#P25').val()==1 && $('#P26_5').val().length==0){
		$("#P26_5").addClass('unansweredQuestion');
		focus = focus || "P26_5";
		isOk = false;
	}
if($('#P25').val()==1 && $('#P26_6').val().length==0){
		$("#P26_6").addClass('unansweredQuestion');
		focus = focus || "P26_6";
		isOk = false;
	}
if($('#P25').val()==1 && $('#P26_7').val().length==0){
		$("#P26_7").addClass('unansweredQuestion');
		focus = focus || "P26_7";
		isOk = false;
	}
if($('#P25').val()==1 && $('#P26_8_E').val().length==0){
		$("#P26_8_E").addClass('unansweredQuestion');
		focus = focus || "P26_8_E";
		isOk = false;
	}
if($('#P25').val()==1 && $('#P26_8').val().length==0){
		$("#P26_8").addClass('unansweredQuestion');
		focus = focus || "P26_8";
		isOk = false;
	}
if($('#P25').val()==1 && $('#P26_9_E').val().length==0){
		$("#P26_9_E").addClass('unansweredQuestion');
		focus = focus || "P26_9_E";
		isOk = false;
	}
if($('#P25').val()==1 && $('#P26_9').val().length==0){
		$("#P26_9").addClass('unansweredQuestion');
		focus = focus || "P26_9";
		isOk = false;	
	}

	// pregunta 27

if($('#P27').val()==-1){
		$("#P27").addClass('unansweredQuestion');
		focus = focus || "P27";
		isOk = false;
	}
if ($('#P27').val()==1 && $('#P27_E').val().length==0){
	$('#P27_E').addClass('unansweredQuestion');
	focus=focus
	isOk=false;
	}	

	// 28
	if($('#P28').val()==-1){
		$("#P28").addClass('unansweredQuestion');
		focus = focus || "P28";
		isOk = false;
	}
if(($('#P28').val()==-1 || $('#P28').val()==1 || $('#P28').val()==9) && ($('#P29_1').val()==-1)){
		$("#P29_1").addClass('unansweredQuestion');
		focus = focus || "P29_1";		
		isOk = false;
	} 
if(($('#P28').val()==-1 || $('#P28').val()==1)|| $('#P28').val()==9 && ($('#P29_2').val()==-1)){
		$("#P29_2").addClass('unansweredQuestion');
		focus = focus ||"P29_2";
		isOk = false;
	}
if(($('#P28').val()==-1 || $('#P28').val()==1)|| $('#P28').val()==9 && ($('#P29_3').val()==-1)){
		$("#P29_3").addClass('unansweredQuestion');
		focus = focus ||"P29_3";
		isOk = false;
	}
		
if(($('#P28').val()==-1 || $('#P28').val()==1)|| $('#P28').val()==9 && ($('#P29_4').val()==-1)){
		$("#P29_4").addClass('unansweredQuestion');
		focus = focus ||"P29_4";
		isOk = false;
	}

// pregunta 29

if($('#P29_1_1').val().length==0 && ($('#P29_1').val()==1) ){
		$("#P29_1_1").addClass('unansweredQuestion');		
		focus = focus || "P29_1_1";		
		isOk = false;
	}
if($('#P29_1_2').val().length==0 && ($('#P29_1').val()==1) ){
		$("#P29_1_2").addClass('unansweredQuestion');		
		focus = focus || "P29_1_2";		
		isOk = false;
	}
if($('#P29_1_3').val().length==0 && ($('#P29_1').val()==1) ){
		$("#P29_1_3").addClass('unansweredQuestion');		
		focus = focus || "P29_1_3";		
		isOk = false;
	}
if($('#P29_1_4').val().length==0 && ($('#P29_1').val()==1) ){
		$("#P29_1_4").addClass('unansweredQuestion');		
		focus = focus || "P29_1_4";		
		isOk = false;
	}
if($('#P29_1_5').val().length==0 && ($('#P29_1').val()==1) ){
		$("#P29_1_5").addClass('unansweredQuestion');		
		focus = focus || "P29_1_5";		
		isOk = false;
	}
if($('#P29_1_6').val().length==0 && ($('#P29_1').val()==1) ){
		$("#P29_1_6").addClass('unansweredQuestion');		
		focus = focus || "P29_1_6";		
		isOk = false;
	}
if($('#P29_1_7').val()==-1 && ($('#P29_1').val()==1) ){
		$("#P29_1_7").addClass('unansweredQuestion');		
		focus = focus || "P29_1_7";		
		isOk = false;
	}

if($('#P29_4_1').val().length==0 && ($('#P29_4').val()==1) ){
		$("#P29_4_1").addClass('unansweredQuestion');		
		focus = focus || "P29_4_1";		
		isOk = false;
	}
if($('#P29_4_2').val().length==0 && ($('#P29_4').val()==1) ){
		$("#P29_4_2").addClass('unansweredQuestion');		
		focus = focus || "P29_4_2";		
		isOk = false;
	}
if($('#P29_4_3').val().length==0 && ($('#P29_4').val()==1) ){
		$("#P29_4_3").addClass('unansweredQuestion');		
		focus = focus || "P29_4_3";		
		isOk = false;
	}
if($('#P29_4_4').val().length==0 && ($('#P29_4').val()==1) ){
		$("#P29_4_4").addClass('unansweredQuestion');		
		focus = focus || "P29_4_4";		
		isOk = false;
	}
if($('#P29_4_5').val().length==0 && ($('#P29_4').val()==1) ){
		$("#P29_4_5").addClass('unansweredQuestion');		
		focus = focus || "P29_4_5";		
		isOk = false;
	}
if($('#P29_4_6').val().length==0 && ($('#P29_4').val()==1) ){
		$("#P29_4_6").addClass('unansweredQuestion');		
		focus = focus || "P29_4_6";		
		isOk = false;
	}
if($('#P29_4_7').val()==-1 && ($('#P29_4').val()==1) ){
		$("#P29_4_7").addClass('unansweredQuestion');		
		focus = focus || "P29_4_7";		
		isOk = false;
	}

// 30
if($('#P30').val()==-1){
		$("#P30").addClass('unansweredQuestion');
		focus = focus || "P30";
		isOk = false;
	}
	
if(($('#P30').val()==-1 || $('#P30').val()==2 || $('#P30').val()==9) && ($('#P30_1').val()==0)){
		$("#P30_1").addClass('unansweredQuestion');
		focus = focus || "P30_1";		
		isOk = false;
}

if(!isOk){
    $("#"+focus).focus();
  }

		return isOk;
}

