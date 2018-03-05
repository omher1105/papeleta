		
$(document).ready(function (){
	readModule('readModulo08v2');	
});

$('#btnBack').on('click', function(e){
	writeModule('writeModulo08v2', "#frm_mod08_v2", "modulo07v2");
});

$('#btnNext').on('click', function(e){
	writeModule('writeModulo08v2', "#frm_mod08_v2", "moduloResultv2");
});

$('#btnSave').on('click', function(e){
	writeModule('writeModulo08v2', "#frm_mod08_v2");
});


window.onload = function() {
  document.getElementById("M8_1").focus();
};


$("#frm_mod08_v2 :input").change(function() {
	$(this).removeClass('unansweredQuestion');
})


function validate(){

	var isOk = true;
	var focus;

	if($('#M8_1').val().length==0){
		$("#M8_1").addClass('unansweredQuestion');	
		focus = focus || "M8_1";	
		isOk = false;
	}

	if($('#M8_2').val().length==0){
		$("#M8_2").addClass('unansweredQuestion');		
		focus = focus || "M8_2";	
		isOk = false;
	}

	if($('#M8_3').val().length==0){
		$("#M8_3").addClass('unansweredQuestion');		
		focus = focus || "M8_3";	
		isOk = false;
	}

	if($('#M8_3').val().length!=8 && $('#M8_3').val().length!=0){
		alert("DNI debe tener 8 digitos");
		$("#M8_3").addClass('unansweredQuestion');		
		focus = focus || "M8_3";	
		isOk = false;
	}

	if($('#M8_4_1').val().length==0){
		$("#M8_4_1").addClass('unansweredQuestion');		
		focus = focus || "M8_4_1";	
		isOk = false;
	}

	if($('#M8_4_1').val().length!=2){
		alert("Formato erroneo de Dia - Fecha de Inicio");
		$("#M8_4_1").addClass('unansweredQuestion');		
		focus = focus || "M8_4_1";	
		isOk = false;
	}

	if(($('#M8_4_1').val()>31 || $('#M8_4_1').val()<1) && $('#M8_4_1').val()!=99 && $('#M8_4_1').val().length!=0){
		alert("La Pregunta 3 solo admite dias de 1 al 31 , OMISION = 99");
		$("#M8_4_1").addClass('unansweredQuestion');		
		focus = focus || "M8_4_1";	
		isOk = false;
	}

	if($('#M8_4_2').val().length==0){
		$("#M8_4_2").addClass('unansweredQuestion');		
		focus = focus || "M8_4_2";	
		isOk = false;
	}

	if($('#M8_4_2').val().length!=2){
		alert("Formato erroneo de Mes - Fecha de Inicio");
		$("#M8_4_2").addClass('unansweredQuestion');		
		focus = focus || "M8_4_2";	
		isOk = false;
	}

	if(($('#M8_4_2').val()>12 || $('#M8_4_2').val()<1) && $('#M8_4_2').val()!=99 && $('#M8_4_2').val().length!=0){
		alert("La Pregunta 3 solo admite meses de 1 al 12 , OMISION = 99");
		$("#M8_4_2").addClass('unansweredQuestion');		
		focus = focus || "M8_4_2";	
		isOk = false;
	}

	if($('#M8_4_3').val().length==0){
		$("#M8_4_3").addClass('unansweredQuestion');		
		focus = focus || "M8_4_3";	
		isOk = false;
	}

	if(($('#M8_4_3').val()>2030 || $('#M8_4_3').val()<1900) && $('#M8_4_3').val()!=9999 && $('#M8_4_3').val().length!=0){
		alert("La Pregunta 3 solo admite años de 1900 al 2030 , OMISION = 99");
		$("#M8_4_3").addClass('unansweredQuestion');		
		focus = focus || "M8_4_3";	
		isOk = false;
	}

	if($('#M8_5_1').val().length==0){
		$("#M8_5_1").addClass('unansweredQuestion');		
		focus = focus || "M8_5_1";	
		isOk = false;
	}

	if($('#M8_5_1').val().length!=2){
		alert("Formato erroneo de Dia - Fecha de Fin");
		$("#M8_5_1").addClass('unansweredQuestion');		
		focus = focus || "M8_5_1";	
		isOk = false;
	}

	if(($('#M8_5_1').val()>31 || $('#M8_5_1').val()<1) && $('#M8_5_1').val()!=99 && $('#M8_5_1').val().length!=0){
		alert("La Pregunta 3 solo admite dias de 1 al 31 , OMISION = 99");
		$("#M8_5_1").addClass('unansweredQuestion');		
		focus = focus || "M8_5_1";	
		isOk = false;
	}

	if($('#M8_5_2').val().length==0){
		$("#M8_5_2").addClass('unansweredQuestion');		
		focus = focus || "M8_5_2";	
		isOk = false;
	}

	if($('#M8_5_2').val().length!=2){
		alert("Formato erroneo de Mes - Fecha de Fin");
		$("#M8_5_2").addClass('unansweredQuestion');		
		focus = focus || "M8_5_2";	
		isOk = false;
	}

	if(($('#M8_5_2').val()>12 || $('#M8_5_2').val()<1) && $('#M8_5_2').val()!=99 && $('#M8_5_2').val().length!=0){
		alert("La Pregunta 3 solo admite meses de 1 al 12 , OMISION = 99");
		$("#M8_5_2").addClass('unansweredQuestion');		
		focus = focus || "M8_5_2";	
		isOk = false;
	}

	if($('#M8_5_3').val().length==0){
		$("#M8_5_3").addClass('unansweredQuestion');		
		focus = focus || "M8_5_3";	
		isOk = false;
	}

	if(($('#M8_5_3').val()>2030 || $('#M8_5_3').val()<1900) && $('#M8_5_3').val()!=9999 && $('#M8_5_3').val().length!=0){
		alert("La Pregunta 3 solo admite años de 1900 al 2030 , OMISION = 99");
		$("#M8_5_3").addClass('unansweredQuestion');		
		focus = focus || "M8_5_3";	
		isOk = false;
	}

	/* ------- SI EL AÑO ES IGUAL ----------- */
	if($('#M8_5_3').val() == $('#M8_4_3').val()){ 
		if($('#M8_5_2').val() == $('#M8_4_2').val()){ /* SI EL MES ES IGUAL */
			if($('#M8_5_1').val() < $('#M8_4_1').val()){
				alert("Fecha de Inicio debe ser menor o igual que Fecha de Fin");
				$("#M8_5_1").addClass('unansweredQuestion');
				$("#M8_4_1").addClass('unansweredQuestion');
				focus = focus || "M8_5_1";	
				isOk = false;
			}
		}

		if($('#M8_5_2').val() < $('#M8_4_2').val()){ /* SI EL MES ES MENOR */
			alert("Fecha de Inicio debe ser menor que Fecha de Fin");
			$("#M8_5_2").addClass('unansweredQuestion');
			$("#M8_4_2").addClass('unansweredQuestion');
			focus = focus || "M8_5_2";	
			isOk = false;
		}
	}

	/* ------- SI EL AÑO ES MENOR ----------- */
	if($('#M8_5_3').val() < $('#M8_4_3').val()){
		alert("Fecha de Inicio debe ser menor que Fecha de Fin");
		$("#M8_5_3").addClass('unansweredQuestion');
		$("#M8_4_3").addClass('unansweredQuestion');		
		focus = focus || "M8_5_3";	
		isOk = false;
	}


	if($('#M8_6_1_H').val().length==0){
		$("#M8_6_1_H").addClass('unansweredQuestion');		
		focus = focus || "M8_6_1_H";	
		isOk = false;
	}

	if(($('#M8_6_1_H').val()>23 || $('#M8_6_1_H').val()<0) && $('#M8_6_1_H').val()!=99 && $('#M8_6_1_H').val().length!=0){
		alert("6a. Dia 1: horas admite valores de 0 al 23 , OMISION = 99");
		$("#M8_6_1_H").addClass('unansweredQuestion');		
		focus = focus || "M8_6_1_H";	
		isOk = false;
	}

	if($('#M8_6_2_H').val().length==0){
		$("#M8_6_2_H").addClass('unansweredQuestion');		
		focus = focus || "M8_6_2_H";	
		isOk = false;
	}

	if(($('#M8_6_2_H').val()>23 || $('#M8_6_2_H').val()<0) && $('#M8_6_2_H').val()!=99 && $('#M8_6_2_H').val().length!=0){
		alert("6b. Dia 2: horas admite valores de 0 al 23 , OMISION = 99");
		$("#M8_6_2_H").addClass('unansweredQuestion');		
		focus = focus || "M8_6_2_H";	
		isOk = false;
	}

	if($('#M8_6_3_H').val().length==0){
		$("#M8_6_3_H").addClass('unansweredQuestion');		
		focus = focus || "M8_6_3_H";	
		isOk = false;
	}

	if(($('#M8_6_3_H').val()>23 || $('#M8_6_3_H').val()<0) && $('#M8_6_3_H').val()!=99 && $('#M8_6_3_H').val().length!=0){
		alert("6c. Dia 3: horas admite valores de 0 al 23 , OMISION = 99");
		$("#M8_6_3_H").addClass('unansweredQuestion');		
		focus = focus || "M8_6_3_H";	
		isOk = false;
	}

	if($('#M8_6_4_TH').val().length==0){
		$("#M8_6_4_TH").addClass('unansweredQuestion');		
		focus = focus || "M8_6_4_TH";	
		isOk = false;
	}

	if(($('#M8_6_4_TH').val()>98 || $('#M8_6_4_TH').val()<0) && $('#M8_6_4_TH').val()!=99 && $('#M8_6_4_TH').val().length!=0){
		alert("6d. TOTAL: horas admite valores de 0 al 98 , OMISION = 99");
		$("#M8_6_4_TH").addClass('unansweredQuestion');		
		focus = focus || "M8_6_4_TH";	
		isOk = false;
	}

	if($('#M8_6_1_M').val().length==0){
		$("#M8_6_1_M").addClass('unansweredQuestion');		
		focus = focus || "M8_6_1_M";	
		isOk = false;
	}

	if(($('#M8_6_1_M').val()>59 || $('#M8_6_1_M').val()<0) && $('#M8_6_1_M').val()!=99 && $('#M8_6_1_M').val().length!=0){
		alert("6a. Dia 1: minutos admite valores de 0 al 59 , OMISION = 99");
		$("#M8_6_1_M").addClass('unansweredQuestion');		
		focus = focus || "M8_6_1_M";	
		isOk = false;
	}

	if($('#M8_6_2_M').val().length==0){
		$("#M8_6_2_M").addClass('unansweredQuestion');		
		focus = focus || "M8_6_2_M";	
		isOk = false;
	}

	if(($('#M8_6_2_M').val()>59 || $('#M8_6_2_M').val()<0) && $('#M8_6_2_M').val()!=99 && $('#M8_6_2_M').val().length!=0){
		alert("6b. Dia 2: minutos admite valores de 0 al 59 , OMISION = 99");
		$("#M8_6_2_M").addClass('unansweredQuestion');		
		focus = focus || "M8_6_2_M";	
		isOk = false;
	}

	if($('#M8_6_2_M').val().length==0){
		$("#M8_6_2_M").addClass('unansweredQuestion');		
		focus = focus || "M8_6_2_M";	
		isOk = false;
	}

	if(($('#M8_6_3_M').val()>59 || $('#M8_6_3_M').val()<0) && $('#M8_6_3_M').val()!=99 && $('#M8_6_3_M').val().length!=0){
		alert("6c. Dia 3: minutos admite valores de 0 al 59 , OMISION = 99");
		$("#M8_6_3_M").addClass('unansweredQuestion');		
		focus = focus || "M8_6_3_M";	
		isOk = false;
	}

	if($('#M8_6_4_TM').val().length==0){
		$("#M8_6_4_TM").addClass('unansweredQuestion');		
		focus = focus || "M8_6_4_TM";	
		isOk = false;
	}

	if(($('#M8_6_4_TM').val()>59 || $('#M8_6_4_TM').val()<0) && $('#M8_6_4_TM').val()!=99 && $('#M8_6_4_TM').val().length!=0){
		alert("6d. TOTAL: minutos admite valores de 0 al 59 , OMISION = 99");
		$("#M8_6_4_TM").addClass('unansweredQuestion');		
		focus = focus || "M8_6_4_TM";	
		isOk = false;
	}

	var sm = (($('#M8_6_1_H').val())*60) + (($('#M8_6_2_H').val())*60) + (($('#M8_6_3_H').val())*60) + ($('#M8_6_1_M').val()*1) + ($('#M8_6_2_M').val()*1) + ($('#M8_6_3_M').val()*1);
	
	var tm = (($('#M8_6_4_TH').val())*60) + ($('#M8_6_4_TM').val()*1);


	if(sm != tm){
		$("#M8_6_4_TH").addClass('unansweredQuestion');	
		$("#M8_6_4_TM").addClass('unansweredQuestion');	
		alert("6d. TOTAL no es la suma correcta");
		//alert(sm);
		focus = focus || "M8_6_4_TH";	
		isOk = false;
	}

	if(!isOk){
		$("#"+focus).focus();
	}

	return isOk;
}