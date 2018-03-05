
$(document).ready(function (){
	readModule('readModuloResult');
});

$('#btnBack').on('click', function(e){
	writeModule('writeModuloResult', "#frm_modResult", "modulo08");
});

$('#btnNext').on('click', function(e){
	writeModule('writeModuloResult', "#frm_modResult", "http://sigit.inei.gob.pe/sigitdesa/FCNLmonitoreo/");
});

$('#btnSave').on('click', function(e){
	writeModule('writeModuloResult', "#frm_modResult");
});

window.onload = function() {
  document.getElementById("E1").focus();
};

$('#E1').on('change', function(e){
	if($('#E1').val()!=-1 && $('#E1').val()!=1){
		enableContainer('E2');
	}else{
		disableContainer('E2', false);
	}
});

$('#E1').on('change', function(e){
	if($('#E1').val()==1 || $('#E1').val()==2){
		disableContainer('E1_MO', false);
	}else{
		enableContainer('E1_MO');
	}
});

$('#E2').on('change', function(e){
	if($('#E2').val()!=-1 && $('#E2').val()!=1){
		enableContainer('E3');
	}else{
		disableContainer('E3', false);
	}
});

$('#E2').on('change', function(e){
	if($('#E2').val()==1 || $('#E2').val()==2){
		disableContainer('E2_MO', false);
	}else{
		enableContainer('E2_MO');
	}
});

$('#E3').on('change', function(e){
	if($('#E3').val()==1 || $('#E3').val()==2){
		disableContainer('E3_MO', false);
	}else{
		enableContainer('E3_MO');
	}
});


$("#frm_modResult :input").change(function() {
	$(this).removeClass('unansweredQuestion');
})


function validate(){

	var isOk = true;
	var focus;

	var min=0;
	if($('#E1').val()==1 || $('#E2').val()==1 || $('#E3').val()==1){
		min=1;	
	}else{
		if($('#E1').val()==2 || $('#E2').val()==2 || $('#E3').val()==2){
			min=2;	
		}else{
			if($('#E1').val()==3 || $('#E2').val()==3 || $('#E3').val()==3){
				min=3;
			}else{
				min=4;
			}
		}
	}
	
	if(min!=($('#resfin').val())){
		alert("No coincide el estado menor con el resfin");
		focus = focus || "E1";	
		isOk = false;
	}

	if($('#E1').val()==-1){
		$("#E1").addClass('unansweredQuestion');
		focus = focus || "E1";
		isOk = false;
	}


	if($('#E1_D').val().length==0  ){
		$("#E1_D").addClass('unansweredQuestion');
		focus = focus || "E1_D";
		isOk = false;
	}

	if($('#E1_D').val().length!=2 ){
		alert("Formato erroneo de Dia 1");
		$("#E1_D").addClass('unansweredQuestion');
		focus = focus || "E1_D";
		isOk = false;
	}

	if($('#E1_M').val().length==0){
		$("#E1_M").addClass('unansweredQuestion');
		focus = focus || "E1_M";
		isOk = false;
	}

	if($('#E1_M').val().length!=2 ){
		alert("Formato erroneo de Mes 1");
		$("#E1_M").addClass('unansweredQuestion');
		focus = focus || "E1_M";
		isOk = false;
	}

	if($('#E1_A').val().length==0){
		$("#E1_A").addClass('unansweredQuestion');
		focus = focus || "E1_A";
		isOk = false;
	}

	if(($('#E1').val()==3 || $('#E1').val()==4) && ($('#E1_MO').val().length==0)){
		$("#E1_MO").addClass('unansweredQuestion');
		focus = focus || "E1_MO";
		isOk = false;
	}

	if($('#E2').val()!=-1 && $('#E2_D').val().length==0){
		$("#E2_D").addClass('unansweredQuestion');
		focus = focus || "E2_D";
		isOk = false;
	}

	if($('#E2').val()!=-1 && $('#E2_D').val().length!=2){
		alert("Formato erroneo de Dia 2");
		$("#E2_D").addClass('unansweredQuestion');
		focus = focus || "E2_D";
		isOk = false;
	}

	if($('#E2').val()!=-1 && $('#E2_M').val().length==0){
		$("#E2_M").addClass('unansweredQuestion');
		focus = focus || "E2_M";
		isOk = false;
	}

	if($('#E2').val()!=-1 && $('#E2_M').val().length!=2){
		alert("Formato erroneo de Mes 2");
		$("#E2_M").addClass('unansweredQuestion');
		focus = focus || "E2_M";
		isOk = false;
	}

	if($('#E2').val()!=-1 && $('#E2_A').val().length==0){
		$("#E2_A").addClass('unansweredQuestion');
		focus = focus || "E2_A";
		isOk = false;
	}

	if(($('#E2').val()==3 || $('#E2').val()==4) && $('#E2_MO').val().length==0){
		$("#E2_MO").addClass('unansweredQuestion');
		focus = focus || "E2_MO";
		isOk = false;
	}

	if($('#E3').val()!=-1 && $('#E3_D').val().length==0){
		$("#E3_D").addClass('unansweredQuestion');
		focus = focus || "E3_D";
		isOk = false;
	}

	if($('#E3').val()!=-1 && $('#E3_D').val().length!=2){
		alert("Formato erroneo de Dia 3");
		$("#E3_D").addClass('unansweredQuestion');
		focus = focus || "E3_D";
		isOk = false;
	}

	if($('#E3').val()!=-1 && $('#E3_M').val().length==0){
		$("#E3_M").addClass('unansweredQuestion');
		focus = focus || "E3_M";
		isOk = false;
	}

	if($('#E3').val()!=-1 && $('#E3_M').val().length!=2){
		alert("Formato erroneo de Mes 3");
		$("#E3_M").addClass('unansweredQuestion');
		focus = focus || "E3_M";
		isOk = false;
	}

	if($('#E3').val()!=-1 && $('#E3_A').val().length==0){
		$("#E3_A").addClass('unansweredQuestion');
		focus = focus || "E3_A";
		isOk = false;
	}

	if(($('#E3').val()==3 || $('#E3').val()==4) && $('#E3_MO').val().length==0){
		$("#E3_MO").addClass('unansweredQuestion');
		focus = focus || "E3_MO";
		isOk = false;
	}

/* --- */

	if(($('#E1_D').val()>31 || $('#E1_D').val()<1) && $('#E1_D').val()!=99 && $('#E1_D').val().length!=0){
		alert("La fecha solo admite dias de 01 al 31 , OMISION = 99");
		$("#E1_D").addClass('unansweredQuestion');		
		focus = focus || "E1_D";	
		isOk = false;
	}

	if(($('#E1_M').val()>12 || $('#E1_M').val()<1) && $('#E1_M').val()!=99 && $('#E1_M').val().length!=0){
		alert("La fecha solo admite meses de 01 al 12 , OMISION = 99");
		$("#E1_M").addClass('unansweredQuestion');		
		focus = focus || "E1_M";	
		isOk = false;
	}

	if(($('#E1_A').val()>2030 || $('#E1_A').val()<1900) && $('#E1_A').val()!=9999 && $('#E1_A').val().length!=0){
		alert("La fecha solo admite años de 1900 al 2030 , OMISION = 99");
		$("#E1_A").addClass('unansweredQuestion');		
		focus = focus || "E1_A";	
		isOk = false;
	}



	if(($('#E2_D').val()>31 || $('#E2_D').val()<1) && $('#E2_D').val()!=99 && $('#E2_D').val().length!=0){
		alert("La Pregunta 3 solo admite dias de 01 al 31 , OMISION = 99");
		$("#E2_D").addClass('unansweredQuestion');		
		focus = focus || "E2_D";	
		isOk = false;
	}

	if(($('#E2_M').val()>12 || $('#E2_M').val()<1) && $('#E2_M').val()!=99 && $('#E2_M').val().length!=0){
		alert("La Pregunta 3 solo admite meses de 01 al 12 , OMISION = 99");
		$("#E2_M").addClass('unansweredQuestion');		
		focus = focus || "E2_M";	
		isOk = false;
	}

	if(($('#E2_A').val()>2030 || $('#E2_A').val()<1900) && $('#E2_A').val()!=9999 && $('#E2_A').val().length!=0){
		alert("La Pregunta 3 solo admite años de 1900 al 2030 , OMISION = 99");
		$("#E2_A").addClass('unansweredQuestion');		
		focus = focus || "E2_A";	
		isOk = false;
	}

	if(($('#E3_D').val()>31 || $('#E3_D').val()<1) && $('#E3_D').val()!=99 && $('#E3_D').val().length!=0){
		alert("La Pregunta 3 solo admite dias de 01 al 31 , OMISION = 99");
		$("#E3_D").addClass('unansweredQuestion');		
		focus = focus || "E3_D";	
		isOk = false;
	}

	if(($('#E3_M').val()>12 || $('#E3_M').val()<1) && $('#E3_M').val()!=99 && $('#E3_M').val().length!=0){
		alert("La Pregunta 3 solo admite meses de 01 al 12 , OMISION = 99");
		$("#E3_M").addClass('unansweredQuestion');		
		focus = focus || "E3_M";	
		isOk = false;
	}

	if(($('#E3_A').val()>2030 || $('#E3_A').val()<1900) && $('#E3_A').val()!=9999 && $('#E3_A').val().length!=0){
		alert("La Pregunta 3 solo admite años de 1900 al 2030 , OMISION = 99");
		$("#E3_A").addClass('unansweredQuestion');		
		focus = focus || "E3_A";	
		isOk = false;
	}

	
	if(!isOk){
		$("#"+focus).focus();
	}

	return isOk;
}
