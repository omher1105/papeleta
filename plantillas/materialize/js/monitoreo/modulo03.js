$(document).ready(function (){
	readModule('readModulo03');	
});

$('#btnBack').on('click', function(e){
	writeModule('writeModulo03', "#frm_mod03", "modulo02");
});

$('#btnNext').on('click', function(e){
	writeModule('writeModulo03', "#frm_mod03", "http://sigit.inei.gob.pe/sigitdesa/FCNLmonitoreo/");
});

$('#btnSave').on('click', function(e){
	writeModule('writeModulo03', "#frm_mod03");
});
 

$('#E1_E').on('change', function(e){
	if($('#E1_E').val()!=-1 && $('#E1_E').val()!=1){
		enableContainer('E2_E');
	}else{
		disableContainer('E2_E', false);
	}
});


$('#E1_E').on('change', function(e){
	if($('#E1_E').val()==1){
		disableContainer('E1_M_A', false);
	}else{
		enableContainer('E1_M_A');
	}
});

$('#E2_E').on('change', function(e){
	if($('#E2_E').val()!=-1 && $('#E2_E').val()!=1){
		enableContainer('E3_E');
	}else{
		disableContainer('E3_E', false);
	}
});

$('#E2_E').on('change', function(e){
	if($('#E2_E').val()==1){
		disableContainer('E2_M_A', false);
	}else{
		enableContainer('E2_M_A');
	}
});

$('#E3_E').on('change', function(e){
	if($('#E3_E').val()!=-1 && $('#E3_E').val()!=1){
		enableContainer('E4_E');
	}else{
		disableContainer('E4_E', false);
	}
});

$('#E3_E').on('change', function(e){
	if($('#E3_E').val()==1){
		disableContainer('E3_M_A', false);
	}else{
		enableContainer('E3_M_A');
	}
});

$('#E4_E').on('change', function(e){
	if($('#E4_E').val()==1){
		disableContainer('E4_M_A', false);
	}else{
		enableContainer('E4_M_A');
	}
});


$("#frm_mod03 :input").change(function() {
	$(this).removeClass('unansweredQuestion');
})

function validate(){

	var isOk = true;
	var focus;

	var min=0;
	if($('#E1_E').val()==1 || $('#E2_E').val()==1 || $('#E3_E').val()==1 || $('#E4_E').val()==1){
		min=1;	
	}else{
		if($('#E1_E').val()==2 || $('#E2_E').val()==2 || $('#E3_E').val()==2 || $('#E4_E').val()==2){
			min=2;	
		}else{
			if($('#E1_E').val()==3 || $('#E2_E').val()==3 || $('#E3_E').val()==3 || $('#E4_E').val()==3){
				min=3;
			}else{
				min=4;
			}
		}
	}
	
	if(min!=($('#resfin').val())){
		alert("No coincide el estado menor con el resfin");
		focus = focus || "E1_E";	
		isOk = false;
	}

	if($('#E1_E').val()==-1){
		$("#E1_E").addClass('unansweredQuestion');
		focus = focus || "E1_E";
		isOk = false;
	}

	if($('#E1_D').val().length==0  ){
		$("#E1_D").addClass('unansweredQuestion');
		focus = focus || "E1_D";
		isOk = false;
	}

	if($('#E1_D').val().length!=2  ){
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
	if($('#E1_M').val().length!=2  ){
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

	if(($('#E1_E').val()==2 || $('#E1_E').val()==3 || $('#E1_E').val()==4) && ($('#E1_M_A').val().length==0)){
		$("#E1_M_A").addClass('unansweredQuestion');
		focus = focus || "E1_M_A";
		isOk = false;
	}
	if(($('#E1_E').val()==2 && $('#E1_E').val()==3 && $('#E1_E').val()==4) && ($('#E1_M_A').val().length==0)){
		$("#E1_M_A").addClass('unansweredQuestion');
		focus = focus || "E1_M_A";
		isOk = false;
	}

	if($('#E2_E').val()!=-1 && $('#E2_D').val().length!=2){
		alert("Formato erroneo de Dia 2");
		$("#E2_D").addClass('unansweredQuestion');
		focus = focus || "E2_D";
		isOk = false;
	}

	if($('#E2_E').val()!=-1 && $('#E2_M').val().length!=2){
		alert("Formato erroneo de Mes 2");
		$("#E2_M").addClass('unansweredQuestion');
		focus = focus || "E2_M";
		isOk = false;
	}

	if($('#E2_E').val()!=-1 && $('#E2_A').val().length==0){
		$("#E2_A").addClass('unansweredQuestion');
		focus = focus || "E2_A";
		isOk = false;
	}

	if(($('#E2_E').val()==2 || $('#E2_E').val()==3 || $('#E2_E').val()==4) && ($('#E2_M_A').val().length==0)){
		$("#E2_M_A").addClass('unansweredQuestion');
		focus = focus || "E2_M_A";
		isOk = false;
	}

	if($('#E3_E').val()!=-1 && $('#E3_D').val().length!=2){
		alert("Formato erroneo de Dia 3");
		$("#E3_D").addClass('unansweredQuestion');
		focus = focus || "E3_D";
		isOk = false;
	}
	

	if($('#E3_E').val()!=-1 && $('#E3_M').val().length!==2){
		alert("Formato erroneo de Mes 3");
		$("#E3_M").addClass('unansweredQuestion');
		focus = focus || "E3_M";
		isOk = false;
	}

	if($('#E3_E').val()!=-1 && $('#E3_A').val().length==0){
		$("#E3_A").addClass('unansweredQuestion');
		focus = focus || "E3_A";
		isOk = false;
	}

	if(($('#E3_E').val()==2 || $('#E3_E').val()==3 || $('#E3_E').val()==4) && ($('#E3_M_A').val().length==0)){
		$("#E3_M_A").addClass('unansweredQuestion');
		focus = focus || "E3_M_A";
		isOk = false;
	}

	if($('#E4_E').val()!=-1 && $('#E4_D').val().length!=2){
		alert("Formato erroneo de Dia 4");
		$("#E4_D").addClass('unansweredQuestion');
		focus = focus || "E4_D";
		isOk = false;
	}
	
	if($('#E4_E').val()!=-1 && $('#E4_M').val().length!=2){
		alert("Formato erroneo de Mes 4");
		$("#E4_M").addClass('unansweredQuestion');
		focus = focus || "E4_M";
		isOk = false;
	}

	if($('#E4_E').val()!=-1 && $('#E4_A').val().length==0){
		$("#E4_A").addClass('unansweredQuestion');
		focus = focus || "E4_A";
		isOk = false;
	}

	if(($('#E4_E').val()==2 || $('#E4_E').val()==3 || $('#E4_E').val()==4) && ($('#E4_M_A').val().length==0)){
		$("#E4_M_A").addClass('unansweredQuestion');
		focus = focus || "E4_M_A";
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

	if(($('#E1_A').val()>2030 || $('#E1_A').val()<2017) && $('#E1_A').val()!=9999 && $('#E1_A').val().length!=0){
		alert("La fecha solo admite años de 2017 al 2030 , OMISION = 99");
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

	if(($('#E2_A').val()>2030 || $('#E2_A').val()<2017) && $('#E2_A').val()!=9999 && $('#E2_A').val().length!=0){
		alert("La Pregunta 3 solo admite años de 2017 al 2030 , OMISION = 99");
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

	if(($('#E3_A').val()>2030 || $('#E3_A').val()<2017) && $('#E3_A').val()!=9999 && $('#E3_A').val().length!=0){
		alert("La Pregunta 3 solo admite años de 2017 al 2030 , OMISION = 99");
		$("#E3_A").addClass('unansweredQuestion');		
		focus = focus || "E3_A";	
		isOk = false;
	}

	if(($('#E4_D').val()>31 || $('#E4_D').val()<1) && $('#E4_D').val()!=99 && $('#E4_D').val().length!=0){
		alert("La Pregunta 4 solo admite dias de 01 al 31 , OMISION = 99");
		$("#E4_D").addClass('unansweredQuestion');		
		focus = focus || "E4_D";	
		isOk = false;
	}

	if(($('#E4_M').val()>12 || $('#E4_M').val()<1) && $('#E4_M').val()!=99 && $('#E4_M').val().length!=0){
		alert("La Pregunta 4 solo admite meses de 01 al 12 , OMISION = 99");
		$("#E4_M").addClass('unansweredQuestion');		
		focus = focus || "E4_M";	
		isOk = false;
	}

	if(($('#E4_A').val()>2030 || $('#E4_A').val()<2017) && $('#E4_A').val()!=9999 && $('#E4_A').val().length!=0){
		alert("La Pregunta 4 solo admite años de 2017 al 2030 , OMISION = 99");
		$("#E4_A").addClass('unansweredQuestion');		
		focus = focus || "E4_A";	
		isOk = false;
	}



	if($('#INFO_NOM').val().length==0){
		$("#INFO_NOM").addClass('unansweredQuestion');	
		focus = focus || "INFO_NOM";	
		isOk = false;
	}

	if($('#INFO_CARGO').val().length==0){
		$("#INFO_CARGO").addClass('unansweredQuestion');	
		focus = focus || "INFO_CARGO";	
		isOk = false;
	}
	if($('#INFO_DNI').val().length==0){
		$("#INFO_DNI").addClass('unansweredQuestion');	
		focus = focus || "INFO_DNI";	
		isOk = false;
	}



if(!isOk){
		$("#"+focus).focus();
	}

	return isOk;
}


