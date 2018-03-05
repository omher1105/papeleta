		
$(document).ready(function (){
	readModule('readModulo01');	
});

$('#btnBack').on('click', function(e){
	writeModule('writeModulo01', "#frm_mod01", "http://sigit.inei.gob.pe/sigitdesa/FCNLmonitoreo/");
});

$('#btnNext').on('click', function(e){
	writeModule('writeModulo01', "#frm_mod01", "modulo02");
});

$('#btnSave').on('click', function(e){
	writeModule('writeModulo01', "#frm_mod01");
});

$('#btnSalir').on('click', function(e){
	writeModule('writeModulo01', "#frm_mod01");
});

window.onload = function() {
  document.getElementById("RESFIN").focus();
};

$('#P5_T2').on('change', function(e){
	$('#P5_T1').removeClass('unansweredQuestion');
});

$('#P7_CARGO2').on('change', function(e){
	$('#P7_NOM2').removeClass('unansweredQuestion');
	$('#P7_T2').removeClass('unansweredQuestion');
	$('#P7_CODC2').removeClass('unansweredQuestion');
});
$('#P7_NOM2').on('change', function(e){
	$('#P7_CARGO2').removeClass('unansweredQuestion');
	$('#P7_T2').removeClass('unansweredQuestion');
	$('#P7_CODC2').removeClass('unansweredQuestion');
});
$('#P7_T2').on('change', function(e){
	$('#P7_CARGO2').removeClass('unansweredQuestion');
	$('#P7_NOM2').removeClass('unansweredQuestion');
	$('#P7_CODC2').removeClass('unansweredQuestion');
});
$('#P7_CODC2').on('change', function(e){
	$('#P7_T2').removeClass('unansweredQuestion');
});

$('#P7_CARGO3').on('change', function(e){
	$('#P7_NOM3').removeClass('unansweredQuestion');
	$('#P7_T3').removeClass('unansweredQuestion');
	$('#P7_CODC3').removeClass('unansweredQuestion');
});
$('#P7_NOM3').on('change', function(e){
	$('#P7_CARGO3').removeClass('unansweredQuestion');
	$('#P7_T3').removeClass('unansweredQuestion');
	$('#P7_CODC3').removeClass('unansweredQuestion');
});
$('#P7_T3').on('change', function(e){
	$('#P7_CARGO3').removeClass('unansweredQuestion');
	$('#P7_NOM3').removeClass('unansweredQuestion');
	$('#P7_CODC3').removeClass('unansweredQuestion');
});
$('#P7_CODC3').on('change', function(e){
	$('#P7_T3').removeClass('unansweredQuestion');
});


$("#frm_mod01 :input").change(function() {
	$(this).removeClass('unansweredQuestion');
})

function validate(){

	var isOk = true;
	var focus;

	if($('#RESFIN').val()==-1){
		$("#RESFIN").addClass('unansweredQuestion');
		focus = focus || "RESFIN";		
		isOk = false;
	}

	if($('#PER_EJE').val().length==0){
		$("#PER_EJE").addClass('unansweredQuestion');
		focus = focus || "PER_EJE";		
		isOk = false;
	}

	if($('#PER_EJE').val()==0 && $('#PER_EJE').val().length!=0){
		alert("La Pregunta 3A solo admite valores del 1 al 6 , OMISION = 3");
		$("#PER_EJE").addClass('unansweredQuestion');		
		focus = focus || "PER_EJE";		
		isOk = false;
	}

	if($('#P4_TVIA').val()==-1){
		$("#P4_TVIA").addClass('unansweredQuestion');
		focus = focus || "P4_TVIA";		
		isOk = false;
	}

	if($('#P4_NOMVIA').val().length==0){
		$("#P4_NOMVIA").addClass('unansweredQuestion');
		focus = focus || "P4_NOMVIA";		
		isOk = false;
	}

	if($('#P4_NOMVIA').val().length!=0 && $('#P4_NOMVIA').val()==0){
		//alert("Nombre de Via no puede ser 0");
		$("#P4_NOMVIA").addClass('unansweredQuestion');
		focus = focus || "P4_NOMVIA";		
		isOk = false;
	}

	if($('#P4_PUERTA').val().length==0){
		$("#P4_PUERTA").addClass('unansweredQuestion');
		focus = focus || "P4_PUERTA";		
		isOk = false;
	}

	if($('#P4_PUERTA').val().length!=0 && $('#P4_PUERTA').val()==0){
		//alert("N° de Puerta no puede ser 0");
		$("#P4_PUERTA").addClass('unansweredQuestion');
		focus = focus || "P4_PUERTA";		
		isOk = false;
	}

	if($('#P4_MZ').val().length!=0 && $('#P4_MZ').val()==0){
		//alert("Manzana no puede ser 0");
		$("#P4_MZ").addClass('unansweredQuestion');
		focus = focus || "P4_MZ";		
		isOk = false;
	}

	if($('#P4_LT').val().length!=0 && $('#P4_LT').val()==0){
		//alert("Lote no puede ser 0");
		$("#P4_LT").addClass('unansweredQuestion');
		focus = focus || "P4_LT";		
		isOk = false;
	}

	if($('#P4_KM').val().length!=0 && $('#P4_KM').val()==0){
		//alert("KM. no puede ser 0");
		$("#P4_KM").addClass('unansweredQuestion');
		focus = focus || "P4_KM";		
		isOk = false;
	}

	if($('#P5_CODC').val().length!=0 && $('#P5_CODC').val()==0){
		//alert("Cod. Ciudad no puede ser 0");
		$("#P5_CODC").addClass('unansweredQuestion');
		focus = focus || "P5_CODC";		
		isOk = false;
	}

	if($('#P5_T1').val().length!=0 && $('#P5_T1').val()==0){
		//alert("Telefono 1 no puede ser 0");
		$("#P5_T1").addClass('unansweredQuestion');
		focus = focus || "P5_T1";		
		isOk = false;
	}

	if($('#P5_T2').val().length!=0){
		if($('#P5_T1').val().length==0){
			alert("Respetar orden de llenado");
			$("#P5_T1").addClass('unansweredQuestion');
			focus = focus || "P5_T1";		
			isOk = false;
		}
		if($('#P5_T2').val()==0){
			//alert("Telefono 2 no puede ser 0");
			$("#P5_T2").addClass('unansweredQuestion');
			focus = focus || "P5_T2";		
			isOk = false;
		}	
	}

	if($('#P7_CARGO1').val().length==0){
		$("#P7_CARGO1").addClass('unansweredQuestion');
		focus = focus || "P7_CARGO1";		
		isOk = false;
	}

	if($('#P7_NOM1').val().length==0){
		$("#P7_NOM1").addClass('unansweredQuestion');
		focus = focus || "P7_NOM1";		
		isOk = false;
	}

	if($('#P7_T1').val().length==0){
		$("#P7_T1").addClass('unansweredQuestion');
		focus = focus || "P7_T1";		
		isOk = false;
	}

	if($('#P7_CODC1').val().length!=0 && $('#P7_CODC1').val()==0){
		//alert("P7_CODC1 no puede ser 0");
		$("#P7_CODC1").addClass('unansweredQuestion');
		focus = focus || "P7_CODC1";		
		isOk = false;
	}

	if($('#P7_T1').val().length!=0 && $('#P7_T1').val()==0){
		//alert("P7_T1 no puede ser 0");
		$("#P7_T1").addClass('unansweredQuestion');
		focus = focus || "P7_T1";		
		isOk = false;
	}

	if($('#P7_CARGO2').val().length!=0){
		if($('#P7_CARGO2').val()==0){
			//alert("P7_CARGO2 no puede ser 0");
			$("#P7_CARGO2").addClass('unansweredQuestion');
			focus = focus || "P7_CARGO2";		
			isOk = false;
		}
		if($('#P7_NOM2').val().length==0){
			//Si llena el cargo debe llenar el nombre
			$("#P7_NOM2").addClass('unansweredQuestion');
			focus = focus || "P7_NOM2";		
			isOk = false;
		}
		if($('#P7_T2').val().length==0){
			//Si llena el cargo debe llenar el telefono
			$("#P7_T2").addClass('unansweredQuestion');
			focus = focus || "P7_T2";		
			isOk = false;
		}
	}

	if($('#P7_NOM2').val().length!=0){
		if($('#P7_NOM2').val()==0){
			//alert("P7_NOM2 no puede ser 0");
			$("#P7_NOM2").addClass('unansweredQuestion');
			focus = focus || "P7_NOM2";		
			isOk = false;
		}
		if($('#P7_CARGO2').val().length==0){
			//Si llena el nombre debe llenar el cargo
			$("#P7_CARGO2").addClass('unansweredQuestion');
			focus = focus || "P7_CARGO2";		
			isOk = false;
		}
		if($('#P7_T2').val().length==0){
			//Si llena el nombre debe llenar el telefono
			$("#P7_T2").addClass('unansweredQuestion');
			focus = focus || "P7_T2";		
			isOk = false;
		}
	}

	if($('#P7_CODC2').val().length!=0){
		if($('#P7_CODC2').val()==0){
			//alert("P7_CODC2 no puede ser 0");
			$("#P7_CODC2").addClass('unansweredQuestion');
			focus = focus || "P7_CODC2";		
			isOk = false;
		}
		if($('#P7_T2').val().length==0){
			//No se puede llenar el CODC2 si no ha llenado telefono
			$("#P7_T2").addClass('unansweredQuestion');
			focus = focus || "P7_T2";		
			isOk = false;
		}
	}

	if($('#P7_T2').val().length!=0){
		if($('#P7_T2').val()==0){
			//alert("P7_T2 no puede ser 0");
			$("#P7_T2").addClass('unansweredQuestion');
			focus = focus || "P7_T2";		
			isOk = false;
		}
		if($('#P7_CARGO2').val().length==0){
			//Si llena el telefono debe llenar el cargo
			$("#P7_CARGO2").addClass('unansweredQuestion');
			focus = focus || "P7_CARGO2";		
			isOk = false;
		}
		if($('#P7_NOM2').val().length==0){
			//Si llena el telefono debe llenar el nombre
			$("#P7_NOM2").addClass('unansweredQuestion');
			focus = focus || "P7_NOM2";		
			isOk = false;
		}
	}

	if($('#P7_CARGO3').val().length!=0){
		if($('#P7_CARGO2').val().length==0){
			alert("Respetar orden de llenado");
			$("#P7_CARGO2").addClass('unansweredQuestion');
			focus = focus || "P7_CARGO2";		
			isOk = false;
		}
		if($('#P7_CARGO3').val()==0){
			//alert("P7_CARGO3 no puede ser 0");
			$("#P7_CARGO3").addClass('unansweredQuestion');
			focus = focus || "P7_CARGO3";		
			isOk = false;
		}
		if($('#P7_NOM3').val().length==0){
			//Si llena el cargo debe llenar el nombre
			$("#P7_NOM3").addClass('unansweredQuestion');
			focus = focus || "P7_NOM3";		
			isOk = false;
		}
		if($('#P7_T3').val().length==0){
			//Si llena el cargo debe llenar el telefono
			$("#P7_T3").addClass('unansweredQuestion');
			focus = focus || "P7_T3";		
			isOk = false;
		}
	}

	if($('#P7_NOM3').val().length!=0){
		if($('#P7_NOM3').val()==0){
			//alert("P7_NOM3 no puede ser 0");
			$("#P7_NOM3").addClass('unansweredQuestion');
			focus = focus || "P7_NOM3";		
			isOk = false;
		}
		if($('#P7_CARGO3').val().length==0){
			//Si llena el nombre debe llenar el cargo
			$("#P7_CARGO3").addClass('unansweredQuestion');
			focus = focus || "P7_CARGO3";		
			isOk = false;
		}
		if($('#P7_T3').val().length==0){
			//Si llena el nombre debe llenar el telefono
			$("#P7_T3").addClass('unansweredQuestion');
			focus = focus || "P7_T3";		
			isOk = false;
		}
	}

	if($('#P7_CODC3').val().length!=0){
		if($('#P7_CODC3').val()==0){
			//alert("P7_CODC3 no puede ser 0");
			$("#P7_CODC3").addClass('unansweredQuestion');
			focus = focus || "P7_CODC3";		
			isOk = false;
		}
		if($('#P7_T3').val().length==0){
			//No se puede llenar el CODC3 si no ha llenado telefono
			$("#P7_T3").addClass('unansweredQuestion');
			focus = focus || "P7_T3";		
			isOk = false;
		}
	}

	if($('#P7_T3').val().length!=0){
		if($('#P7_T3').val()==0){
			//alert("P7_T3 no puede ser 0");
			$("#P7_T3").addClass('unansweredQuestion');
			focus = focus || "P7_T3";		
			isOk = false;
		}
		if($('#P7_CARGO3').val().length==0){
			//Si llena el telefono debe llenar el cargo
			$("#P7_CARGO3").addClass('unansweredQuestion');
			focus = focus || "P7_CARGO3";		
			isOk = false;
		}
		if($('#P7_NOM3').val().length==0){
			//Si llena el telefono debe llenar el nombre
			$("#P7_NOM3").addClass('unansweredQuestion');
			focus = focus || "P7_NOM3";		
			isOk = false;
		}
	}

	if($('#P8').val().length!=0 &&  $('#P8').val()==0){
		//alert("P8 no puede ser 0");
		$("#P8").addClass('unansweredQuestion');
		focus = focus || "P8";		
		isOk = false;
	}

	if($('#P9_1').val().length==0){
		$("#P9_1").addClass('unansweredQuestion');
		focus = focus || "P9_1";		
		isOk = false;
	}

	if($('#P9_2').val().length==0){
		$("#P9_2").addClass('unansweredQuestion');
		focus = focus || "P9_2";		
		isOk = false;
	}

	if($('#P9_3').val().length==0){
		$("#P9_3").addClass('unansweredQuestion');
		focus = focus || "P9_3";		
		isOk = false;
	}

	if($('#P9_4').val()==-1){
		$("#P9_4").addClass('unansweredQuestion');
		focus = focus || "P9_4";		
		isOk = false;
	}

	if($('#P9_5').val().length!=0 && $('#P9_5').val()==0){
		//alert("P9_5 no puede ser 0");
		$("#P9_5").addClass('unansweredQuestion');
		focus = focus || "P9_5";		
		isOk = false;
	}

	if($('#P9_6').val().length!=0 && $('#P9_6').val()==0){
		//alert("P9_6 no puede ser 0");
		$("#P9_6").addClass('unansweredQuestion');
		focus = focus || "P9_6";		
		isOk = false;
	}



	if(!isOk){
		$("#"+focus).focus();
	}

	return isOk;
}

