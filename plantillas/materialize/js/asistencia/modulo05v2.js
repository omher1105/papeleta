		
$(document).ready(function (){
	readModule('readModulo05v2');	
});

$('#btnBack').on('click', function(e){
	writeModule('writeModulo05v2', "#frm_mod05_v2", "modulo04v2");
});

$('#btnNext').on('click', function(e){
	writeModule('writeModulo05v2', "#frm_mod05_v2", "modulo06v2");
});

$('#btnSave').on('click', function(e){
	writeModule('writeModulo05v2', "#frm_mod05_v2");
});

window.onload = function() {
  document.getElementById("P36A_1").focus();
};

$('#P36A_10').on('change', function(e){
	if($('#P36A_10').val()==1 || $('#P36A_10').val()==9){
		enableContainer('P36A_10_O');
	}else{
		disableContainer('P36A_10_O', true);	}
});

$('#P36A_11').on('change', function(e){
	if($('#P36A_11').val()==1 || $('#P36A_11').val()==9){
		enableContainer('P36A_11_O');
	}else{
		disableContainer('P36A_11_O', true);	}
});


$('#P36B_2').on('change', function(e){
	if($('#P36B_2').val()==1 || $('#P36B_2').val()==9){
		enableContainer('P36B_2_A');
		enableContainer('P36B_2_Q');
	}else{
		disableContainer('P36B_2_A', false);
		disableContainer('P36B_2_Q', false);	}
});

$('#P36B_3').on('change', function(e){
	if($('#P36B_3').val()==1 || $('#P36B_3').val()==9){
		enableContainer('P36B_3_A');
		enableContainer('P36B_3_Q');
	}else{
		disableContainer('P36B_3_A', false);
		disableContainer('P36B_3_Q', false);	}
});

$('#P36B_4').on('change', function(e){
	if($('#P36B_4').val()==1 || $('#P36B_4').val()==9){
		enableContainer('P36B_4_A');
		enableContainer('P36B_4_Q');
	}else{
		disableContainer('P36B_4_A', false);
		disableContainer('P36B_4_Q', false);	}
});

$('#P36B_5').on('change', function(e){
	if($('#P36B_5').val()==1 || $('#P36B_5').val()==9){
		enableContainer('P36B_5_A');
		enableContainer('P36B_5_Q');
	}else{
		disableContainer('P36B_5_A', false);
		disableContainer('P36B_5_Q', false);	}
});

$('#P36B_6').on('change', function(e){
	if($('#P36B_6').val()==1 || $('#P36B_6').val()==9){
		enableContainer('P36B_6_A');
		enableContainer('P36B_6_Q');
	}else{
		disableContainer('P36B_6_A', false);
		disableContainer('P36B_6_Q', false);	}
});

$('#P36B_7').on('change', function(e){
	if($('#P36B_7').val()==1 || $('#P36B_7').val()==9){
		enableContainer('P36B_7_A');
		enableContainer('P36B_7_Q');
	}else{
		disableContainer('P36B_7_A', false);
		disableContainer('P36B_7_Q', false);	}
});

$('#P36B_8').on('change', function(e){
	if($('#P36B_8').val()==1 || $('#P36B_8').val()==9){
		enableContainer('P36B_8_A');
		enableContainer('P36B_8_Q');
	}else{
		disableContainer('P36B_8_A', false);
		disableContainer('P36B_8_Q', false);	}
});

$('#P36B_10').on('change', function(e){
	if($('#P36B_10').val()==1 || $('#P36B_10').val()==9){
		enableContainer('P36B_10_A');
		enableContainer('P36B_10_Q');
	}else{
		disableContainer('P36B_10_A', false);
		disableContainer('P36B_10_Q', false);	}
});

$('#P36B_11').on('change', function(e){
	if($('#P36B_11').val()==1 || $('#P36B_11').val()==9){
		enableContainer('P36B_11_A');
		enableContainer('P36B_11_Q');
	}else{
		disableContainer('P36B_11_A', false);
		disableContainer('P36B_11_Q', false);	}
});

$('#P36B_12').on('change', function(e){
	if($('#P36B_12').val()==1 || $('#P36B_12').val()==9){
		enableContainer('P36B_12_A');
		enableContainer('P36B_12_Q');
	}else{
		disableContainer('P36B_12_A', false);
		disableContainer('P36B_12_Q', false);	}
});

$('#P36B_13').on('change', function(e){
	if($('#P36B_13').val()==1 || $('#P36B_13').val()==9){
		enableContainer('P36B_13_A');
		enableContainer('P36B_13_Q');
	}else{
		disableContainer('P36B_13_A', false);
		disableContainer('P36B_13_Q', false);	}
});

$('#P36B_14').on('change', function(e){
	if($('#P36B_14').val()==1 || $('#P36B_14').val()==9){
		enableContainer('P36B_14_A');
		enableContainer('P36B_14_Q');
	}else{
		disableContainer('P36B_14_A', false);
		disableContainer('P36B_14_Q', false);	}
});

$('#P36B_15').on('change', function(e){
	if($('#P36B_15').val()==1 || $('#P36B_15').val()==9){
		enableContainer('P36B_15_A');
		enableContainer('P36B_15_Q');
	}else{
		disableContainer('P36B_15_A', false);
		disableContainer('P36B_15_Q', false);	}
});

$('#P36B_16').on('change', function(e){
	if($('#P36B_16').val()==1 || $('#P36B_16').val()==9){
		enableContainer('P36B_16_A');
		enableContainer('P36B_16_Q');
	}else{
		disableContainer('P36B_16_A', false);
		disableContainer('P36B_16_Q', false);	}
});

$('#P36B_17').on('change', function(e){
	if($('#P36B_17').val()==1 || $('#P36B_17').val()==9){
		enableContainer('P36B_17_O');
		enableContainer('P36B_17_A');
		enableContainer('P36B_17_Q');
	}else{
		disableContainer('P36B_17_O', true);
		disableContainer('P36B_17_A', false);
		disableContainer('P36B_17_Q', false);	}
});

$('#P36B_18').on('change', function(e){
	if($('#P36B_18').val()==1 || $('#P36B_18').val()==9){
		enableContainer('P36B_18_O');
		enableContainer('P36B_18_A');
		enableContainer('P36B_18_Q');
	}else{
		disableContainer('P36B_18_O', true);
		disableContainer('P36B_18_A', false);
		disableContainer('P36B_18_Q', false);	}
});

$('#P36C_4').on('change', function(e){
	if($('#P36C_4').val()==1 || $('#P36C_4').val()==9){ 
		enableContainer('P36C_4_O');
	}else{
		disableContainer('P36C_4_O', true);	}
});

$('#P36C_5').on('change', function(e){
	if($('#P36C_5').val()==1 || $('#P36C_5').val()==9) {
		enableContainer('P36C_5_O');
	}else{
		disableContainer('P36C_5_O', true);	}
});

$('#P37').on('change', function(e){
	if($('#P37').val()==2 || $('#P37').val()==3){
		disableContainer('P37A', false);
		disableContainer('P38', false);
	}else{
		enableContainer('P37A');
		enableContainer('P38');
	}
});

$('#P40A_1').on('change', function(e){
	if($('#P40A_1').val()==1){
		enableContainer('P40_1');
	}else{
		disableContainer('P40_1', true);
	}
});
$('#P40A_2').on('change', function(e){
	if($('#P40A_2').val()==1){
		enableContainer('P40_2');
	}else{
		disableContainer('P40_2', true);
	}
});
$('#P40A_3').on('change', function(e){
	if($('#P40A_3').val()==1){
		enableContainer('P40_3');
	}else{
		disableContainer('P40_3', true);
	}
});
$('#P40A_4').on('change', function(e){
	if($('#P40A_4').val()==1){
		enableContainer('P40_4');
	}else{
		disableContainer('P40_4', true);
	}
});
$('#P40A_5').on('change', function(e){
	if($('#P40A_5').val()==1){
		enableContainer('P40_5');
	}else{
		disableContainer('P40_5', true);
	}
});
$('#P40A_6').on('change', function(e){
	if($('#P40A_6').val()==1){
		enableContainer('P40_6');
	}else{
		disableContainer('P40_6', true);
	}
});


$("#frm_mod05_v2 :input").change(function() {
	$(this).removeClass('unansweredQuestion');
})


function validate(){

	var isOk = true;
	var focus;

	if($("#P36A_1").val()==-1){
		$("#P36A_1").addClass('unansweredQuestion');
		focus = focus || "P36A_1";
		isOk = false;
	}
	if($("#P36A_2").val()==-1){
		$("#P36A_2").addClass('unansweredQuestion');
		focus = focus || "P36A_2";
		isOk = false;
	}
	if($("#P36A_3").val()==-1){
		$("#P36A_3").addClass('unansweredQuestion');
		focus = focus || "P36A_3";
		isOk = false;
	}
	if($("#P36A_4").val()==-1){
		$("#P36A_4").addClass('unansweredQuestion');
		focus = focus || "P36A_4";
		isOk = false;
	}
	if($("#P36A_5").val()==-1){
		$("#P36A_5").addClass('unansweredQuestion');
		focus = focus || "P36A_5";
	}
	if($("#P36A_6").val()==-1){
		$("#P36A_6").addClass('unansweredQuestion');
		focus = focus || "P36A_6";
		isOk = false;
	}
	if($("#P36A_7").val()==-1){
		$("#P36A_7").addClass('unansweredQuestion');
		focus = focus || "P36A_7";
	}
	if($("#P36A_8").val()==-1){
		$("#P36A_8").addClass('unansweredQuestion');
		focus = focus || "P36A_8";
		isOk = false;
	}
	if($("#P36A_9").val()==-1){
		$("#P36A_9").addClass('unansweredQuestion');
		focus = focus || "P36A_9";
	}

	if($("#P36A_10").val()==-1){
		$("#P36A_10").addClass('unansweredQuestion');
		focus = focus || "P36A_10";
		isOk = false;
	}
	if(($('#P36A_10').val()==1 || $('#P36A_10').val()==9)&& $('#P36A_10_O').val().length==0){
		$("#P36A_10_O").addClass('unansweredQuestion');
		focus = focus || "P36A_10_O";		
		isOk = false;
	}
	if($("#P36A_11").val()==-1){
		$("#P36A_11").addClass('unansweredQuestion');
		focus = focus || "P36A_11";
		isOk = false;
	}
	if(($('#P36A_11').val()==1 || $('#P36A_11').val()==9)&& $('#P36A_11_O').val().length==0){
		$("#P36A_11_O").addClass('unansweredQuestion');
		focus = focus || "P36A_11_O";		
		isOk = false;
	}

	if($("#P36B_1").val()==-1){
		$("#P36B_1").addClass('unansweredQuestion');
		focus = focus || "P36B_1";
		isOk = false;
	}
	if($("#P36B_2").val()==-1){
		$("#P36B_2").addClass('unansweredQuestion');
		focus = focus || "P36B_2";
		isOk = false;
	}
	if($("#P36B_3").val()==-1){
		$("#P36B_3").addClass('unansweredQuestion');
		focus = focus || "P36B_3";
		isOk = false;
	}
	if($("#P36B_4").val()==-1){
		$("#P36B_4").addClass('unansweredQuestion');
		focus = focus || "P36B_4";
		isOk = false;
	}
	if($("#P36B_5").val()==-1){
		$("#P36B_5").addClass('unansweredQuestion');
		focus = focus || "P36B_5";
		isOk = false;
	}
	if($("#P36B_6").val()==-1){
		$("#P36B_6").addClass('unansweredQuestion');
		focus = focus || "P36B_6";
		isOk = false;
	}
	if($("#P36B_7").val()==-1){
		$("#P36B_7").addClass('unansweredQuestion');
		focus = focus || "P36B_7";
		isOk = false;
	}
	if($("#P36B_8").val()==-1){
		$("#P36B_8").addClass('unansweredQuestion');
		focus = focus || "P36B_8";
		isOk = false;
	}
	if($("#P36B_9").val()==-1){
		$("#P36B_9").addClass('unansweredQuestion');
		focus = focus || "P36B_9";
		isOk = false;
	}
	if($("#P36B_10").val()==-1){
		$("#P36B_10").addClass('unansweredQuestion');
		focus = focus || "P36B_10";
		isOk = false;
	}
	if($("#P36B_11").val()==-1){
		$("#P36B_11").addClass('unansweredQuestion');
		focus = focus || "P36B_11";
		isOk = false;
	}
	if($("#P36B_12").val()==-1){
		$("#P36B_12").addClass('unansweredQuestion');
		focus = focus || "P36B_12";
		isOk = false;
	}
	if($("#P36B_13").val()==-1){
		$("#P36B_13").addClass('unansweredQuestion');
		focus = focus || "P36B_13";
		isOk = false;
	}
	if($("#P36B_14").val()==-1){
		$("#P36B_14").addClass('unansweredQuestion');
		focus = focus || "P36B_14";
		isOk = false;
	}
	if($("#P36B_15").val()==-1){
		$("#P36B_15").addClass('unansweredQuestion');
		focus = focus || "P36B_15";
		isOk = false;
	}
	if($("#P36B_16").val()==-1){
		$("#P36B_16").addClass('unansweredQuestion');
		focus = focus || "P36B_16";
		isOk = false;
	}
	if($("#P36B_17").val()==-1){
		$("#P36B_17").addClass('unansweredQuestion');
		focus = focus || "P36B_17";
		isOk = false;
	}
	if(($('#P36B_17').val()==1 || $('#P36B_17').val()==9) && $('#P36B_17_O').val().length==0){
		$("#P36B_17_O").addClass('unansweredQuestion');
		focus = focus || "P36B_17_O";		
		isOk = false;
	}
	if($("#P36B_18").val()==-1){
		$("#P36B_18").addClass('unansweredQuestion');
		focus = focus || "P36B_18";
		isOk = false;
	}
	if(($('#P36B_18').val()==1 || $('#P36B_18').val()==9)&& $('#P36B_18_O').val().length==0){
		$("#P36B_18_O").addClass('unansweredQuestion');
		focus = focus || "P36B_18_O";		
		isOk = false;
	}

	if($('#P36B_2').val()==1 || $('#P36B_2').val()==9){
		if($("#P36B_2_A").val()==-1){
			$("#P36B_2_A").addClass('unansweredQuestion');
			focus = focus || "P36B_2_A";
			isOk = false;
		}
		if($("#P36B_2_Q").val()==-1){
			$("#P36B_2_Q").addClass('unansweredQuestion');
			focus = focus || "P36B_2_Q";
			isOk = false;
		}
	}

	if($('#P36B_3').val()==1 || $('#P36B_3').val()==9){
		if($("#P36B_3_A").val()==-1){
			$("#P36B_3_A").addClass('unansweredQuestion');
			focus = focus || "P36B_3_A";
			isOk = false;
		}
		if($("#P36B_3_Q").val()==-1){
			$("#P36B_3_Q").addClass('unansweredQuestion');
			focus = focus || "P36B_3_Q";
			isOk = false;
		}		
	}

	if($('#P36B_4').val()==1 || $('#P36B_4').val()==9){
		if($("#P36B_4_A").val()==-1){
			$("#P36B_4_A").addClass('unansweredQuestion');
			focus = focus || "P36B_4_A";
			isOk = false;
		}
		if($("#P36B_4_Q").val()==-1){
			$("#P36B_4_Q").addClass('unansweredQuestion');
			focus = focus || "P36B_4_Q";
			isOk = false;
		}		
	}

	if($('#P36B_5').val()==1 || $('#P36B_5').val()==9){
		if($("#P36B_5_A").val()==-1){
			$("#P36B_5_A").addClass('unansweredQuestion');
			focus = focus || "P36B_5_A";
			isOk = false;
		}
		if($("#P36B_5_Q").val()==-1){
			$("#P36B_5_Q").addClass('unansweredQuestion');
			focus = focus || "P36B_5_Q";
			isOk = false;
		}		
	}

	if($('#P36B_6').val()==1 || $('#P36B_6').val()==9){
		if($("#P36B_6_A").val()==-1){
			$("#P36B_6_A").addClass('unansweredQuestion');
			focus = focus || "P36B_6_A";
			isOk = false;
		}
		if($("#P36B_6_Q").val()==-1){
			$("#P36B_6_Q").addClass('unansweredQuestion');
			focus = focus || "P36B_6_Q";
			isOk = false;
		}		
	}

	if($('#P36B_7').val()==1 || $('#P36B_7').val()==9){
		if($("#P36B_7_A").val()==-1){
			$("#P36B_7_A").addClass('unansweredQuestion');
			focus = focus || "P36B_7_A";
			isOk = false;
		}
		if($("#P36B_7_Q").val()==-1){
			$("#P36B_7_Q").addClass('unansweredQuestion');
			focus = focus || "P36B_7_Q";
			isOk = false;
		}		
	}

	if($('#P36B_8').val()==1 || $('#P36B_8').val()==9){
		if($("#P36B_8_A").val()==-1){
			$("#P36B_8_A").addClass('unansweredQuestion');
			focus = focus || "P36B_8_A";
			isOk = false;
		}
		if($("#P36B_8_Q").val()==-1){
			$("#P36B_8_Q").addClass('unansweredQuestion');
			focus = focus || "P36B_8_Q";
			isOk = false;
		}		
	}

	if($('#P36B_10').val()==1 || $('#P36B_10').val()==9){
		if($("#P36B_10_A").val()==-1){
			$("#P36B_10_A").addClass('unansweredQuestion');
			focus = focus || "P36B_10_A";
			isOk = false;
		}
		if($("#P36B_10_Q").val()==-1){
			$("#P36B_10_Q").addClass('unansweredQuestion');
			focus = focus || "P36B_10_Q";
			isOk = false;
		}		
	}

	if($('#P36B_11').val()==1 || $('#P36B_11').val()==9){
		if($("#P36B_11_A").val()==-1){
			$("#P36B_11_A").addClass('unansweredQuestion');
			focus = focus || "P36B_11_A";
			isOk = false;
		}
		if($("#P36B_11_Q").val()==-1){
			$("#P36B_11_Q").addClass('unansweredQuestion');
			focus = focus || "P36B_11_Q";
			isOk = false;
		}		
	}

	if($('#P36B_12').val()==1 || $('#P36B_12').val()==9){
		if($("#P36B_12_A").val()==-1){
			$("#P36B_12_A").addClass('unansweredQuestion');
			focus = focus || "P36B_12_A";
			isOk = false;
		}
		if($("#P36B_12_Q").val()==-1){
			$("#P36B_12_Q").addClass('unansweredQuestion');
			focus = focus || "P36B_12_Q";
			isOk = false;
		}		
	}

	if($('#P36B_13').val()==1 || $('#P36B_13').val()==9){
		if($("#P36B_13_A").val()==-1){
			$("#P36B_13_A").addClass('unansweredQuestion');
			focus = focus || "P36B_13_A";
			isOk = false;
		}
		if($("#P36B_13_Q").val()==-1){
			$("#P36B_13_Q").addClass('unansweredQuestion');
			focus = focus || "P36B_13_Q";
			isOk = false;
		}		
	}

	if($('#P36B_14').val()==1 || $('#P36B_14').val()==9){
		if($("#P36B_14_A").val()==-1){
			$("#P36B_14_A").addClass('unansweredQuestion');
			focus = focus || "P36B_14_A";
			isOk = false;
		}
		if($("#P36B_14_Q").val()==-1){
			$("#P36B_14_Q").addClass('unansweredQuestion');
			focus = focus || "P36B_14_Q";
			isOk = false;
		}		
	}

	if($('#P36B_15').val()==1 || $('#P36B_15').val()==9){
		if($("#P36B_15_A").val()==-1){
			$("#P36B_15_A").addClass('unansweredQuestion');
			focus = focus || "P36B_15_A";
			isOk = false;
		}
		if($("#P36B_15_Q").val()==-1){
			$("#P36B_15_Q").addClass('unansweredQuestion');
			focus = focus || "P36B_15_Q";
			isOk = false;
		}		
	}

	if($('#P36B_16').val()==1 || $('#P36B_16').val()==9){
		if($("#P36B_16_A").val()==-1){
			$("#P36B_16_A").addClass('unansweredQuestion');
			focus = focus || "P36B_16_A";
			isOk = false;
		}
		if($("#P36B_16_Q").val()==-1){
			$("#P36B_16_Q").addClass('unansweredQuestion');
			focus = focus || "P36B_16_Q";
			isOk = false;
		}		
	}

	if($('#P36B_17').val()==1 || $('#P36B_17').val()==9){
		if($("#P36B_17_A").val()==-1){
			$("#P36B_17_A").addClass('unansweredQuestion');
			focus = focus || "P36B_17_A";
			isOk = false;
		}
		if($("#P36B_17_Q").val()==-1){
			$("#P36B_17_Q").addClass('unansweredQuestion');	
			focus = focus || "P36B_17_Q";
			isOk = false;
		}	
	}

	if($('#P36B_18').val()==1 || $('#P36B_18').val()==9){
		if($("#P36B_18_A").val()==-1){
			$("#P36B_18_A").addClass('unansweredQuestion');
			focus = focus || "P36B_18_A";
			isOk = false;
		}
		if($("#P36B_18_Q").val()==-1){
			$("#P36B_18_Q").addClass('unansweredQuestion');	
			focus = focus || "P36B_18_Q";
			isOk = false;
		}	
	}

	if($("#P36C_1").val()==-1){
		$("#P36C_1").addClass('unansweredQuestion');
		focus = focus || "P36C_1";
		isOk = false;
	}
	if($("#P36C_2").val()==-1){
		$("#P36C_2").addClass('unansweredQuestion');
		focus = focus || "P36C_2";
		isOk = false;
	}
	if($("#P36C_3").val()==-1){
		$("#P36C_3").addClass('unansweredQuestion');
		focus = focus || "P36C_3";
		isOk = false;
	}
	if($("#P36C_4").val()==-1){
		$("#P36C_4").addClass('unansweredQuestion');
		focus = focus || "P36C_4";
		isOk = false;
	}
	if(($('#P36C_4').val()==1 || $('#P36C_4').val()==9) && $('#P36C_4_O').val().length==0){
		$("#P36C_4_O").addClass('unansweredQuestion');
		focus = focus || "P36C_4_O";		
		isOk = false;
	}
	if($("#P36C_5").val()==-1){
		$("#P36C_5").addClass('unansweredQuestion');
		focus = focus || "P36C_5";
		isOk = false;
	}
	if(($('#P36C_5').val()==1 || $('#P36C_5').val()==9) && $('#P36C_5_O').val().length==0){
		$("#P36C_5_O").addClass('unansweredQuestion');
		focus = focus || "P36C_5_O";		
		isOk = false;
	}

	if($('#P37').val()==-1){
		$("#P37").addClass('unansweredQuestion');
		focus = focus || "P37";		
		isOk = false;
	}

	if($('#P37A_1').val()==-1 && ($('#P37').val()==1 || $('#P37').val()==9)){
		$("#P37A_1").addClass('unansweredQuestion');
		focus = focus || "P37A_1";		
		isOk = false;
	}

	if($('#P37A_2').val()==-1 && ($('#P37').val()==1 || $('#P37').val()==9)){
		$("#P37A_2").addClass('unansweredQuestion');
		focus = focus || "P37A_2";		
		isOk = false;
	}

	if($('#P37A_3').val()==-1 && ($('#P37').val()==1 || $('#P37').val()==9)){
		$("#P37A_3").addClass('unansweredQuestion');
		focus = focus || "P37A_3";		
		isOk = false;
	}

	if($('#P37A_4').val()==-1 && ($('#P37').val()==1 || $('#P37').val()==9)){
		$("#P37A_4").addClass('unansweredQuestion');
		focus = focus || "P37A_4";		
		isOk = false;
	}

	if($('#P38').val()==-1 && ($('#P37').val()==1 || $('#P37').val()==9)){
		$("#P38").addClass('unansweredQuestion');
		focus = focus || "P38";		
		isOk = false;
	}

	if($('#P39').val()==-1){
		$("#P39").addClass('unansweredQuestion');
		focus = focus || "P39";		
		isOk = false;
	}

	if($('#P40A_1').val()==-1){
		$("#P40A_1").addClass('unansweredQuestion');
		focus = focus || "P40A_1";		
		isOk = false;
	}

	if($('#P40A_1').val()==1 && $('#P40_1').val().length==0){
		$("#P40_1").addClass('unansweredQuestion');
		focus = focus || "P40_1";		
		isOk = false;
	}

	if($('#P40A_2').val()==-1){
		$("#P40A_2").addClass('unansweredQuestion');
		focus = focus || "P40A_2";		
		isOk = false;
	}

	if($('#P40A_2').val()==1 && $('#P40_2').val().length==0){
		$("#P40_2").addClass('unansweredQuestion');
		focus = focus || "P40_2";		
		isOk = false;
	}

	if($('#P40A_3').val()==-1){
		$("#P40A_3").addClass('unansweredQuestion');
		focus = focus || "P40A_3";		
		isOk = false;
	}

	if($('#P40A_3').val()==1 && $('#P40_3').val().length==0){
		$("#P40_3").addClass('unansweredQuestion');
		focus = focus || "P40_3";		
		isOk = false;
	}

	if($('#P40A_4').val()==-1){
		$("#P40A_4").addClass('unansweredQuestion');
		focus = focus || "P40A_4";		
		isOk = false;
	}

	if($('#P40A_4').val()==1 && $('#P40_4').val().length==0){
		$("#P40_4").addClass('unansweredQuestion');
		focus = focus || "P40_4";		
		isOk = false;
	}

	if($('#P40A_5').val()==-1){
		$("#P40A_5").addClass('unansweredQuestion');
		focus = focus || "P40A_5";		
		isOk = false;
	}

	if($('#P40A_5').val()==1 && $('#P40_5').val().length==0){
		$("#P40_5").addClass('unansweredQuestion');
		focus = focus || "P40_5";		
		isOk = false;
	}

	if($('#P40A_6').val()==-1){
		$("#P40A_6").addClass('unansweredQuestion');
		focus = focus || "P40A_6";		
		isOk = false;
	}

	if($('#P40A_6').val()==1 && $('#P40_6').val().length==0){
		$("#P40_6").addClass('unansweredQuestion');
		focus = focus || "P40_6";		
		isOk = false;
	}


	if(!isOk){
		$("#"+focus).focus();
	}

	return isOk;
}

