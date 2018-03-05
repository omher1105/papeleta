$(document).ready(function (){
	readModule('readModulo01');	
});

$('#btnBack').on('click', function(e){
	writeModule('writeModulo01', "#frm_mod01", "index");
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

  if($('#TVIA').val()==-1){
    $("#TVIA").addClass('unansweredQuestion');
    focus = focus || "TVIA";    
    isOk = false;
  }

  if($('#NOMVIA').val().length==0){
    $("#NOMVIA").addClass('unansweredQuestion');
    focus = focus || "NOMVIA";    
    isOk = false;
  }

  if($('#NOMVIA').val().length!=0 && $('#NOMVIA').val()==0){
    //alert("Nombre de Via no puede ser 0");
    $("#NOMVIA").addClass('unansweredQuestion');
    focus = focus || "NOMVIA";    
    isOk = false;
  }

  if($('#PUERTA').val().length==0){
    $("#PUERTA").addClass('unansweredQuestion');
    focus = focus || "PUERTA";    
    isOk = false;
  }

  if($('#PUERTA').val().length!=0 && $('#PUERTA').val()==0){
    //alert("N° de Puerta no puede ser 0");
    $("#PUERTA").addClass('unansweredQuestion');
    focus = focus || "PUERTA";    
    isOk = false;
  }

  if($('#MZ').val().length!=0 && $('#MZ').val()==0){
    //alert("Manzana no puede ser 0");
    $("#MZ").addClass('unansweredQuestion');
    focus = focus || "MZ";    
    isOk = false;
  }

  if($('#LT').val().length!=0 && $('#LT').val()==0){
    //alert("Lote no puede ser 0");
    $("#LT").addClass('unansweredQuestion');
    focus = focus || "LT";    
    isOk = false;
  }

  if($('#KM').val().length!=0 && $('#KM').val()==0){
    //alert("KM. no puede ser 0");
    $("#KM").addClass('unansweredQuestion');
    focus = focus || "KM";    
    isOk = false;
  }

  if($('#P4_CODCIU').val().length!=0 && $('#P4_CODCIU').val()==0){
    //alert("Cod. Ciudad no puede ser 0");
    $("#P4_CODCIU").addClass('unansweredQuestion');
    focus = focus || "P4_CODCIU";   
    isOk = false;
  }
  if($('#P4_TELEF1').val().length!=0 && $('#P4_TELEF1').val()==0){
    //alert("Telefono 1 no puede ser 0");
    $("#P4_TELEF1").addClass('unansweredQuestion');
    focus = focus || "P4_TELEF1";   
    isOk = false;
  }
  if($('#P4_TELEF2').val().length!=0 && $('#P4_TELEF2').val()==0){
    //alert("Telefono 1 no puede ser 0");
    $("#P4_TELEF2").addClass('unansweredQuestion');
    focus = focus || "P4_TELEF2";   
    isOk = false;
  }
  if($('#P4_TELEF3').val().length!=0 && $('#P4_TELEF3').val()==0){
    //alert("Telefono 1 no puede ser 0");
    $("#P4_TELEF3").addClass('unansweredQuestion');
    focus = focus || "P4_TELEF3";   
    isOk = false;
  }

  if($('#P5_CODCIU').val().length!=0 && $('#P5_CODCIU').val()==0){
    //alert("Cod. Ciudad no puede ser 0");
    $("#P5_CODCIU").addClass('unansweredQuestion');
    focus = focus || "P5_CODCIU";   
    isOk = false;
  }

  if($('#P5_TELEF1').val().length!=0 && $('#P5_TELEF1').val()==0){
    //alert("Telefono 1 no puede ser 0");
    $("#P5_TELEF1").addClass('unansweredQuestion');
    focus = focus || "P5_TELEF1";   
    isOk = false;
  }

  if($('#P5_TELEF2').val().length!=0 && $('#P5_TELEF2').val()==0){
    //alert("Telefono 2 no puede ser 0");
    $("#P5_TELEF2").addClass('unansweredQuestion');
    focus = focus || "P5_TELEF2";   
    isOk = false;
  }

  if($('#P7').val().length!=0 &&  $('#P7').val()==0){
    //alert("P8 no puede ser 0");
    $("#P7").addClass('unansweredQuestion');
    focus = focus || "P7";    
    isOk = false;
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



