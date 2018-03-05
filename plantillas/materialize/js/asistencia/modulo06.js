
$(document).ready(function (){
	readModule('readModulo06');
});

$('#btnBack').on('click', function(e){
	writeModule('writeModulo06', "#frm_mod06", "modulo05");
});

$('#btnNext').on('click', function(e){
	writeModule('writeModulo06', "#frm_mod06", "modulo07");
});

$('#btnSave').on('click', function(e){
	writeModule('writeModulo06', "#frm_mod06");
});

window.onload = function() {
  document.getElementById("P41_1_1").focus();
};



$('#P41_1_1').on('change', function(e){
	if($('#P41_1_1').val()==1 ){
		enableContainer('P41_1_1');
	}else{
		disableContainer('P41_1_1', true);
	}
});

$('#P41_1_2').on('change', function(e){
	if($('#P41_1_2').val()==1 ){
		enableContainer('P41_1_2');
	}else{
		disableContainer('P41_1_2', true);
	}
});

$('#P41_1_3').on('change', function(e){
	if($('#P41_1_3').val()==1 ){
		enableContainer('P41_1_3');
	}else{
		disableContainer('P41_1_3', true);
	}
});

$('#P41_1_4').on('change', function(e){
	if($('#P41_1_4').val()==1 ){
		enableContainer('P41_1_4');
	}else{
		disableContainer('P41_1_4', true);
	}
});

$('#P41_1_5').on('change', function(e){
	if($('#P41_1_5').val()==1 ){
		enableContainer('P41_1_5');
	}else{
		disableContainer('P41_1_5', true);
	}
});

$('#P41_1_6').on('change', function(e){
	if($('#P41_1_6').val()==1 ){
		enableContainer('P41_1_6');
	}else{
		disableContainer('P41_1_6', true);
	}
});

$('#P41_1_7').on('change', function(e){
	if($('#P41_1_7').val()==1 ){
		enableContainer('P41_1_7');
	}else{
		disableContainer('P41_1_7', true);
	}
});

$('#P41_1_8').on('change', function(e){
	if($('#P41_1_8').val()==1 ){
		enableContainer('P41_1_8');
	}else{
		disableContainer('P41_1_8', true);
	}
});

$('#P41_2_1').on('change', function(e){
	if($('#P41_2_1').val()==1 ){
		enableContainer('P41_2_1');
	}else{
		disableContainer('P41_2_1', true);
	}
});

$('#P41_2_2').on('change', function(e){
	if($('#P41_2_2').val()==1 ){
		enableContainer('P41_2_2');
	}else{
		disableContainer('P41_2_2', true);
	}
});

$('#P41_2_3').on('change', function(e){
	if($('#P41_2_3').val()==1 ){
		enableContainer('P41_2_3');
	}else{
		disableContainer('P41_2_3', true);
	}
});
$('#P41_2_4').on('change', function(e){
	if($('#P41_2_4').val()==1 ){
		enableContainer('P41_2_4');
	}else{
		disableContainer('P41_2_4', true);
	}
});

$('#P41_3_1').on('change', function(e){
	if($('#P41_3_1').val()==1 ){
		enableContainer('P41_3_1');

	}else{
		disableContainer('P41_3_1', true);

	}
});

$('#P42').on('change', function(e){
	if($('#P42').val()==1 ||$('#P42').val()==9 ){
		enableContainer('P42_O');
	}else{
		disableContainer('P42_O', true);
	}
});

$('#P23').on('change', function(e){
	if($('#P23').val()==1 ||$('#P23').val()==9 ){
		enableContainer('P45A');
	}else{
		disableContainer('P45A', false);
	}
});



$("#frm_mod06 :input").change(function() {
	$(this).removeClass('unansweredQuestion');
})


function validate(){

	var isOk = true;
	var focus;


	if ($('#P41_1_1').val()==9 && $('#P41_1_2').val()!=9 ) {
		$("#P41_1_2").addClass('unansweredQuestion');
		focus = focus || "P41_1_2";
		alert("error de secuencia en la pregunta 41");
			isOk = false;
	}
	if ($('#P41_1_2').val()==9 && $('#P41_1_3').val()!=9 ) {
		$("#P41_1_3").addClass('unansweredQuestion');
		focus = focus || "P41_1_3";
alert("error de secuencia en la pregunta 41");
			isOk = false;
	}
	if ($('#P41_1_3').val()==9 && $('#P41_1_4').val()!=9 ) {
		$("#P41_1_4").addClass('unansweredQuestion');
		focus = focus || "P41_1_4";
alert("error de secuencia en la pregunta 41");
			isOk = false;
	}
	if ($('#P41_1_4').val()==9 && $('#P41_1_5').val()!=9 ) {
		$("#P41_1_5").addClass('unansweredQuestion');
		focus = focus || "P41_1_5";
alert("error de secuencia en la pregunta 41");
			isOk = false;
	}
	if ($('#P41_1_5').val()==9 && $('#P41_1_6').val()!=9 ) {
		$("#P41_1_6").addClass('unansweredQuestion');
		focus = focus || "P41_1_6";
alert("error de secuencia en la pregunta 41");
			isOk = false;
	}
	if ($('#P41_1_6').val()==9 && $('#P41_1_7').val()!=9 ) {
		$("#P41_1_7").addClass('unansweredQuestion');
		focus = focus || "P41_1_7";
alert("error de secuencia en la pregunta 41");
			isOk = false;
	}
	if ($('#P41_1_7').val()==9 && $('#P41_1_8').val()!=9 ) {
		$("#P41_1_8").addClass('unansweredQuestion');
		focus = focus || "P41_1_8";
alert("error de secuencia en la pregunta 41");
			isOk = false;
	}
	if ($('#P41_2_1').val()==9 && $('#P41_2_2').val()!=9 ) {
		$("#P41_2_2").addClass('unansweredQuestion');
		focus = focus || "P41_2_2";
alert("error de secuencia en la pregunta 41");
			isOk = false;
	}
	if ($('#P41_2_2').val()==9 && $('#P41_2_3').val()!=9 ) {
		$("#P41_2_3").addClass('unansweredQuestion');
		focus = focus || "P41_2_3";
alert("error de secuencia en la pregunta 41");
			isOk = false;
	}
	if ($('#P41_2_3').val()==9 && $('#P41_2_4').val()!=9 ) {
		$("#P41_2_4").addClass('unansweredQuestion');
		focus = focus || "P41_2_4";
alert("error de secuencia en la pregunta 41");
			isOk = false;
	}



	if($('#P41_1_1').val()==-1 ){
		$("#P41_1_1").addClass('unansweredQuestion');
		focus = focus || "P41_1_1";

		isOk = false;
	}
	if( $('#P41_1_1_1').val().length==0 && $('#P41_1_1').val()==1  ){
		$("#P41_1_1_1").addClass('unansweredQuestion');
		focus = focus || "P41_1_1_1";
		isOk = false;
	}
	if($('#P41_1_1_2').val()==-1 && $('#P41_1_1').val()==1  ){
		$("#P41_1_1_2").addClass('unansweredQuestion');
		focus = focus || "P41_1_1_2";
		isOk = false;
	}

	if($('#P41_1_1').val()==1  &&
	( ($('#P41_1_1_3_D').val()>99) || ( $('#P41_1_1_3_D').val()<99 && ($('#P41_1_1_3_D').val()>31 || $('#P41_1_1_3_D').val()<1))))
	{
		if($('#P41_1_1_3_D').val().length!=0){
			alert("La Pregunta P41_1_1_3_D solo admite dias entre 1 y 31 , OMISION = 99");
		}
		$("#P41_1_1_3_D").addClass('unansweredQuestion');
		focus = focus || "P41_1_1_3_D";
		isOk = false;
	}

	if($('#P41_1_1').val()==1  &&
	( ($('#P41_1_1_3_M').val()>99) || ( $('#P41_1_1_3_M').val()<99 && ($('#P41_1_1_3_M').val()>12 || $('#P41_1_1_3_M').val()<1))))
	{
		if($('#P41_1_1_3_M').val().length!=0){
			alert("La Pregunta P41_1_1_3_M solo admite meses entre 1 y 12 , OMISION = 99");
		}
		$("#P41_1_1_3_M").addClass('unansweredQuestion');
		focus = focus || "P41_1_1_3_M";
		isOk = false;
	}

	if($('#P41_1_1').val()==1  &&
	( ($('#P41_1_1_3_A').val()>9999) || ( $('#P41_1_1_3_A').val()<9999 && ($('#P41_1_1_3_A').val()>2030 || $('#P41_1_1_3_A').val()<1900))))
	{
		if($('#P41_1_1_3_A').val().length!=0){
			alert("La Pregunta P41_1_1_3_A solo admite años entre 1900 y 2030 , OMISION = 9999");
		}
		$("#P41_1_1_3_A").addClass('unansweredQuestion');
		focus = focus || "P41_1_1_3_A";
		isOk = false;
	}

	if($('#P41_1_2').val()==-1 && $('#P41_1_1').val()==1 ){
	$("#P41_1_2").addClass('unansweredQuestion');
	focus = focus || "P41_1_2";

		isOk = false;
	}

	if($('#P41_1_2_1').val().length==0 && $('#P41_1_2').val()==1  ){
		$("#P41_1_2_1").addClass('unansweredQuestion');
		focus = focus || "P41_1_2_1";
		isOk = false;
	}
	if($('#P41_1_2_2').val()==-1 && $('#P41_1_2').val()==1  ){
		$("#P41_1_2_2").addClass('unansweredQuestion');
		focus = focus || "P41_1_2_2";
		isOk = false;
	}

	if($('#P41_1_2').val()==1  &&
	( ($('#P41_1_2_3_D').val()>99) || ( $('#P41_1_2_3_D').val()<99 && ($('#P41_1_2_3_D').val()>31 || $('#P41_1_2_3_D').val()<1))))
	{
		if($('#P41_1_2_3_D').val().length!=0){
			alert("La Pregunta P41_1_2_3_D solo admite dias entre 1 y 31 , OMISION = 99");
		}
		$("#P41_1_2_3_D").addClass('unansweredQuestion');
		focus = focus || "P41_1_2_3_D";
		isOk = false;
	}

	if($('#P41_1_2').val()==1  &&
	( ($('#P41_1_2_3_M').val()>99) || ( $('#P41_1_2_3_M').val()<99 && ($('#P41_1_2_3_M').val()>12 || $('#P41_1_2_3_M').val()<1))))
	{
		if($('#P41_1_2_3_M').val().length!=0){
			alert("La Pregunta P41_1_2_3_M solo admite meses entre 1 y 12 , OMISION = 99");
		}
		$("#P41_1_2_3_M").addClass('unansweredQuestion');
		focus = focus || "P41_1_2_3_M";
		isOk = false;
	}

	if($('#P41_1_2').val()==1  &&
	( ($('#P41_1_2_3_A').val()>9999) || ( $('#P41_1_2_3_A').val()<9999 && ($('#P41_1_2_3_A').val()>2030 || $('#P41_1_2_3_A').val()<1900))))
	{
		if($('#P41_1_2_3_A').val().length!=0){
			alert("La Pregunta P41_1_2_3_A solo admite años entre 1900 y 2030 , OMISION = 9999");
		}
		$("#P41_1_2_3_A").addClass('unansweredQuestion');
		focus = focus || "P41_1_2_3_A";
		isOk = false;
	}


	if($('#P41_1_3').val()==-1 && $('#P41_1_2').val()==1  ){
		$("#P41_1_3").addClass('unansweredQuestion');
		focus = focus || "P41_1_3";
		isOk = false;
	}
	if($('#P41_1_3_1').val().length==0 && $('#P41_1_3').val()==1  ){
		$("#P41_1_3_1").addClass('unansweredQuestion');
		focus = focus || "P41_1_3_1";
		isOk = false;
	}
	if($('#P41_1_3_2').val()==-1 && $('#P41_1_3').val()==1  ){
		$("#P41_1_3_2").addClass('unansweredQuestion');
		focus = focus || "P41_1_3_2";
		isOk = false;
	}

	if($('#P41_1_3').val()==1  &&
	( ($('#P41_1_3_3_D').val()>99) || ( $('#P41_1_3_3_D').val()<99 && ($('#P41_1_3_3_D').val()>31 || $('#P41_1_3_3_D').val()<1))))
	{
		if($('#P41_1_3_3_D').val().length!=0){
			alert("La Pregunta P41_1_3_3_D solo admite dias entre 1 y 31 , OMISION = 99");
		}
		$("#P41_1_3_3_D").addClass('unansweredQuestion');
		focus = focus || "P41_1_3_3_D";
		isOk = false;
	}

	if($('#P41_1_3').val()==1  &&
	( ($('#P41_1_3_3_M').val()>99) || ( $('#P41_1_3_3_M').val()<99 && ($('#P41_1_3_3_M').val()>12 || $('#P41_1_3_3_M').val()<1))))
	{
		if($('#P41_1_3_3_M').val().length!=0){
			alert("La Pregunta P41_1_3_3_M solo admite meses entre 1 y 12 , OMISION = 99");
		}
		$("#P41_1_3_3_M").addClass('unansweredQuestion');
		focus = focus || "P41_1_3_3_M";
		isOk = false;
	}

	if($('#P41_1_3').val()==1  &&
	( ($('#P41_1_3_3_A').val()>9999) || ( $('#P41_1_3_3_A').val()<9999 && ($('#P41_1_3_3_A').val()>2030 || $('#P41_1_3_3_A').val()<1900))))
	{
		if($('#P41_1_3_3_A').val().length!=0){
			alert("La Pregunta P41_1_3_3_A solo admite años entre 1900 y 2030 , OMISION = 9999");
		}
		$("#P41_1_3_3_A").addClass('unansweredQuestion');
		focus = focus || "P41_1_3_3_A";
		isOk = false;
	}

	if($('#P41_1_4').val()==-1 && $('#P41_1_3').val()==1  ){
		$("#P41_1_4").addClass('unansweredQuestion');
		focus = focus || "P41_1_4";
		isOk = false;
	}
	if($('#P41_1_4_1').val().length==0 && $('#P41_1_4').val()==1  ){
		$("#P41_1_4_1").addClass('unansweredQuestion');
		focus = focus || "P41_1_4_1";
		isOk = false;
	}
	if($('#P41_1_4_2').val()==-1 && $('#P41_1_4').val()==1  ){
		$("#P41_1_4_2").addClass('unansweredQuestion');
		focus = focus || "P41_1_4_2";
		isOk = false;
	}

	if($('#P41_1_4').val()==1  &&
	( ($('#P41_1_4_3_D').val()>99) || ( $('#P41_1_4_3_D').val()<99 && ($('#P41_1_4_3_D').val()>31 || $('#P41_1_4_3_D').val()<1))))
	{
		if($('#P41_1_4_3_D').val().length!=0){
			alert("La Pregunta P41_1_4_3_D solo admite dias entre 1 y 31 , OMISION = 99");
		}
		$("#P41_1_4_3_D").addClass('unansweredQuestion');
		focus = focus || "P41_1_4_3_D";
		isOk = false;
	}

	if($('#P41_1_4').val()==1  &&
	( ($('#P41_1_4_3_M').val()>99) || ( $('#P41_1_4_3_M').val()<99 && ($('#P41_1_4_3_M').val()>12 || $('#P41_1_4_3_M').val()<1))))
	{
		if($('#P41_1_4_3_M').val().length!=0){
			alert("La Pregunta P41_1_4_3_M solo admite meses entre 1 y 12 , OMISION = 99");
		}
		$("#P41_1_4_3_M").addClass('unansweredQuestion');
		focus = focus || "P41_1_4_3_M";
		isOk = false;
	}

	if($('#P41_1_4').val()==1  &&
	( ($('#P41_1_4_3_A').val()>9999) || ( $('#P41_1_4_3_A').val()<9999 && ($('#P41_1_4_3_A').val()>2030 || $('#P41_1_4_3_A').val()<1900))))
	{
		if($('#P41_1_4_3_A').val().length!=0){
			alert("La Pregunta P41_1_4_3_A solo admite años entre 1900 y 2030 , OMISION = 9999");
		}
		$("#P41_1_4_3_A").addClass('unansweredQuestion');
		focus = focus || "P41_1_4_3_A";
		isOk = false;
	}

	if($('#P41_1_5').val()==-1 && $('#P41_1_4').val()==1 ){
		$("#P41_1_5").addClass('unansweredQuestion');
		focus = focus || "P41_1_5";
		isOk = false;
	}
	if($('#P41_1_5_1').val().length==0 && $('#P41_1_5').val()==1 ){
		$("#P41_1_5_1").addClass('unansweredQuestion');
		focus = focus || "P41_1_5_1";
		isOk = false;
	}
	if($('#P41_1_5_2').val()==-1 && $('#P41_1_5').val()==1  ){
		$("#P41_1_5_2").addClass('unansweredQuestion');
		focus = focus || "P41_1_5_2";
		isOk = false;
	}

	if($('#P41_1_5').val()==1  &&
	( ($('#P41_1_5_3_D').val()>99) || ( $('#P41_1_5_3_D').val()<99 && ($('#P41_1_5_3_D').val()>31 || $('#P41_1_5_3_D').val()<1))))
	{
		if($('#P41_1_5_3_D').val().length!=0){
			alert("La Pregunta P41_1_5_3_D solo admite dias entre 1 y 31 , OMISION = 99");
		}
		$("#P41_1_5_3_D").addClass('unansweredQuestion');
		focus = focus || "P41_1_5_3_D";
		isOk = false;
	}

	if($('#P41_1_5').val()==1  &&
	( ($('#P41_1_5_3_M').val()>99) || ( $('#P41_1_5_3_M').val()<99 && ($('#P41_1_5_3_M').val()>12 || $('#P41_1_5_3_M').val()<1))))
	{
		if($('#P41_1_5_3_M').val().length!=0){
			alert("La Pregunta P41_1_5_3_M solo admite meses entre 1 y 12 , OMISION = 99");
		}
		$("#P41_1_5_3_M").addClass('unansweredQuestion');
		focus = focus || "P41_1_5_3_M";
		isOk = false;
	}

	if($('#P41_1_5').val()==1  &&
	( ($('#P41_1_5_3_A').val()>9999) || ( $('#P41_1_5_3_A').val()<9999 && ($('#P41_1_5_3_A').val()>2030 || $('#P41_1_5_3_A').val()<1900))))
	{
		if($('#P41_1_5_3_A').val().length!=0){
			alert("La Pregunta P41_1_5_3_A solo admite años entre 1900 y 2030 , OMISION = 9999");
		}
		$("#P41_1_5_3_A").addClass('unansweredQuestion');
		focus = focus || "P41_1_5_3_A";
		isOk = false;
	}

	if($('#P41_1_6').val()==-1 && $('#P41_1_5').val()==1 ){
		$("#P41_1_6").addClass('unansweredQuestion');
		focus = focus || "P41_1_6";
		isOk = false;
	}
	if($('#P41_1_6_1').val().length==0 && $('#P41_1_6').val()==1  ){
		$("#P41_1_6_1").addClass('unansweredQuestion');
		focus = focus || "P41_1_6_1";
		isOk = false;
	}
	if($('#P41_1_6_2').val()==-1 && $('#P41_1_6').val()==1  ){
		$("#P41_1_6_2").addClass('unansweredQuestion');
		focus = focus || "P41_1_6_2";
		isOk = false;
	}

	if($('#P41_1_6').val()==1  &&
	( ($('#P41_1_6_3_D').val()>99) || ( $('#P41_1_6_3_D').val()<99 && ($('#P41_1_6_3_D').val()>31 || $('#P41_1_6_3_D').val()<1))))
	{
		if($('#P41_1_6_3_D').val().length!=0){
			alert("La Pregunta P41_1_6_3_D solo admite dias entre 1 y 31 , OMISION = 99");
		}
		$("#P41_1_6_3_D").addClass('unansweredQuestion');
		focus = focus || "P41_1_6_3_D";
		isOk = false;
	}

	if($('#P41_1_6').val()==1  &&
	( ($('#P41_1_6_3_M').val()>99) || ( $('#P41_1_6_3_M').val()<99 && ($('#P41_1_6_3_M').val()>12 || $('#P41_1_6_3_M').val()<1))))
	{
		if($('#P41_1_6_3_M').val().length!=0){
			alert("La Pregunta P41_1_6_3_M solo admite meses entre 1 y 12 , OMISION = 99");
		}
		$("#P41_1_6_3_M").addClass('unansweredQuestion');
		focus = focus || "P41_1_6_3_M";
		isOk = false;
	}

	if($('#P41_1_6').val()==1  &&
	( ($('#P41_1_6_3_A').val()>9999) || ( $('#P41_1_6_3_A').val()<9999 && ($('#P41_1_6_3_A').val()>2030 || $('#P41_1_6_3_A').val()<1900))))
	{
		if($('#P41_1_6_3_A').val().length!=0){
			alert("La Pregunta P41_1_6_3_A solo admite años entre 1900 y 2030 , OMISION = 9999");
		}
		$("#P41_1_6_3_A").addClass('unansweredQuestion');
		focus = focus || "P41_1_6_3_A";
		isOk = false;
	}

	if($('#P41_1_7').val()==-1 && $('#P41_1_6').val()==1){
		$("#P41_1_7").addClass('unansweredQuestion');
		focus = focus || "P41_1_7";
		isOk = false;
	}
	if($('#P41_1_7_1').val().length==0 && $('#P41_1_7').val()==1  ){
		$("#P41_1_7_1").addClass('unansweredQuestion');
		focus = focus || "P41_1_7_1";
		isOk = false;
	}
	if($('#P41_1_7_2').val()==-1 && $('#P41_1_7').val()==1  ){
		$("#P41_1_7_2").addClass('unansweredQuestion');
		focus = focus || "P41_1_7_2";
		isOk = false;
	}

	if($('#P41_1_7').val()==1  &&
	( ($('#P41_1_7_3_D').val()>99) || ( $('#P41_1_7_3_D').val()<99 && ($('#P41_1_7_3_D').val()>31 || $('#P41_1_7_3_D').val()<1))))
	{
		if($('#P41_1_7_3_D').val().length!=0){
			alert("La Pregunta P41_1_7_3_D solo admite dias entre 1 y 31 , OMISION = 99");
		}
		$("#P41_1_7_3_D").addClass('unansweredQuestion');
		focus = focus || "P41_1_7_3_D";
		isOk = false;
	}

	if($('#P41_1_7').val()==1  &&
	( ($('#P41_1_7_3_M').val()>99) || ( $('#P41_1_7_3_M').val()<99 && ($('#P41_1_7_3_M').val()>12 || $('#P41_1_7_3_M').val()<1))))
	{
		if($('#P41_1_7_3_M').val().length!=0){
			alert("La Pregunta P41_1_7_3_M solo admite meses entre 1 y 12 , OMISION = 99");
		}
		$("#P41_1_7_3_M").addClass('unansweredQuestion');
		focus = focus || "P41_1_7_3_M";
		isOk = false;
	}

	if($('#P41_1_7').val()==1  &&
	( ($('#P41_1_7_3_A').val()>9999) || ( $('#P41_1_7_3_A').val()<9999 && ($('#P41_1_7_3_A').val()>2030 || $('#P41_1_7_3_A').val()<1900))))
	{
		if($('#P41_1_7_3_A').val().length!=0){
			alert("La Pregunta P41_1_7_3_A solo admite años entre 1900 y 2030 , OMISION = 9999");
		}
		$("#P41_1_7_3_A").addClass('unansweredQuestion');
		focus = focus || "P41_1_7_3_A";
		isOk = false;
	}


	if($('#P41_1_8').val()==-1 && $('#P41_1_7').val()==1 ){
		$("#P41_1_8").addClass('unansweredQuestion');
		focus = focus || "P41_1_8";
		isOk = false;
	}
	if($('#P41_1_8_1').val().length==0 && $('#P41_1_8').val()==1  ){
		$("#P41_1_8_1").addClass('unansweredQuestion');
		focus = focus || "P41_1_8_1";
		isOk = false;
	}
	if($('#P41_1_8_2').val()==-1 && $('#P41_1_8').val()==1  ){
		$("#P41_1_8_2").addClass('unansweredQuestion');
		focus = focus || "P41_1_8_2";
		isOk = false;
	}

	if($('#P41_1_8').val()==1  &&
	( ($('#P41_1_8_3_D').val()>99) || ( $('#P41_1_8_3_D').val()<99 && ($('#P41_1_8_3_D').val()>31 || $('#P41_1_8_3_D').val()<1))))
	{
		if($('#P41_1_8_3_D').val().length!=0){
			alert("La Pregunta P41_1_8_3_D solo admite dias entre 1 y 31 , OMISION = 99");
		}
		$("#P41_1_8_3_D").addClass('unansweredQuestion');
		focus = focus || "P41_1_8_3_D";
		isOk = false;
	}

	if($('#P41_1_8').val()==1  &&
	( ($('#P41_1_6_3_M').val()>99) || ( $('#P41_1_8_3_M').val()<99 && ($('#P41_1_8_3_M').val()>12 || $('#P41_1_8_3_M').val()<1))))
	{
		if($('#P41_1_8_3_M').val().length!=0){
			alert("La Pregunta P41_1_8_3_M solo admite meses entre 1 y 12 , OMISION = 99");
		}
		$("#P41_1_8_3_M").addClass('unansweredQuestion');
		focus = focus || "P41_1_8_3_M";
		isOk = false;
	}

	if($('#P41_1_8').val()==1  &&
	( ($('#P41_1_8_3_A').val()>9999) || ( $('#P41_1_8_3_A').val()<9999 && ($('#P41_1_8_3_A').val()>2030 || $('#P41_1_8_3_A').val()<1900))))
	{
		if($('#P41_1_8_3_A').val().length!=0){
			alert("La Pregunta P41_1_8_3_A solo admite años entre 1900 y 2030 , OMISION = 9999");
		}
		$("#P41_1_8_3_A").addClass('unansweredQuestion');
		focus = focus || "P41_1_8_3_A";
		isOk = false;
	}


	if($('#P41_2_1').val()==-1 ){
		$("#P41_2_1").addClass('unansweredQuestion');
		focus = focus || "P41_2_1";
		isOk = false;
	}
	if($('#P41_2_1_1').val().length==0 && $('#P41_2_1').val()==1  ){
		$("#P41_2_1_1").addClass('unansweredQuestion');
		focus = focus || "P41_2_1_1";
		isOk = false;
	}
	if($('#P41_2_1_2').val()==-1 && $('#P41_2_1').val()==1  ){
		$("#P41_2_1_2").addClass('unansweredQuestion');
		focus = focus || "P41_2_1_2";
		isOk = false;
	}

	if($('#P41_2_1').val()==1  &&
	( ($('#P41_2_1_3_D').val()>99) || ( $('#P41_2_1_3_D').val()<99 && ($('#P41_2_1_3_D').val()>31 || $('#P41_2_1_3_D').val()<1))))
	{
		if($('#P41_2_1_3_D').val().length!=0){
			alert("La Pregunta P41_2_1_3_D solo admite dias entre 1 y 31 , OMISION = 99");
		}
		$("#P41_2_1_3_D").addClass('unansweredQuestion');
		focus = focus || "P41_2_1_3_D";
		isOk = false;
	}

	if($('#P41_2_1').val()==1  &&
	( ($('#P41_2_1_3_M').val()>99) || ( $('#P41_2_1_3_M').val()<99 && ($('#P41_2_1_3_M').val()>12 || $('#P41_2_1_3_M').val()<1))))
	{
		if($('#P41_2_1_3_M').val().length!=0){
			alert("La Pregunta P41_2_1_3_M solo admite meses entre 1 y 12 , OMISION = 99");
		}
		$("#P41_2_1_3_M").addClass('unansweredQuestion');
		focus = focus || "P41_2_1_3_M";
		isOk = false;
	}

	if($('#P41_2_1').val()==1  &&
	( ($('#P41_2_1_3_A').val()>9999) || ( $('#P41_2_1_3_A').val()<9999 && ($('#P41_2_1_3_A').val()>2030 || $('#P41_2_1_3_A').val()<1900))))
	{
		if($('#P41_2_1_3_A').val().length!=0){
			alert("La Pregunta P41_2_1_3_A solo admite años entre 1900 y 2030 , OMISION = 9999");
		}
		$("#P41_2_1_3_A").addClass('unansweredQuestion');
		focus = focus || "P41_2_1_3_A";
		isOk = false;
	}

	if($('#P41_2_2').val()==-1 &&( $('#P41_2_1').val()==1|| $('#P41_2_1').val()==9 ) ){
		$("#P41_2_2").addClass('unansweredQuestion');
		focus = focus || "P41_2_2";
		isOk = false;
	}
	if($('#P41_2_2_1').val().length==0 && $('#P41_2_2').val()==1  ){
		$("#P41_2_2_1").addClass('unansweredQuestion');
		focus = focus || "P41_2_2_1";
		isOk = false;
	}
	if($('#P41_2_2_2').val()==-1 && $('#P41_2_2').val()==1  ){
		$("#P41_2_2_2").addClass('unansweredQuestion');
		focus = focus || "P41_2_2_2";
		isOk = false;
	}

	if($('#P41_2_2').val()==1  &&
	( ($('#P41_2_2_3_D').val()>99) || ( $('#P41_2_2_3_D').val()<99 && ($('#P41_2_2_3_D').val()>31 || $('#P41_2_2_3_D').val()<1))))
	{
		if($('#P41_2_2_3_D').val().length!=0){
			alert("La Pregunta P41_2_2_3_D solo admite dias entre 1 y 31 , OMISION = 99");
		}
		$("#P41_2_2_3_D").addClass('unansweredQuestion');
		focus = focus || "P41_2_2_3_D";
		isOk = false;
	}

	if($('#P41_2_2').val()==1  &&
	( ($('#P41_2_2_3_M').val()>99) || ( $('#P41_2_2_3_M').val()<99 && ($('#P41_2_2_3_M').val()>12 || $('#P41_2_2_3_M').val()<1))))
	{
		if($('#P41_2_2_3_M').val().length!=0){
			alert("La Pregunta P41_2_2_3_M solo admite meses entre 1 y 12 , OMISION = 99");
		}
		$("#P41_2_2_3_M").addClass('unansweredQuestion');
		focus = focus || "P41_2_2_3_M";
		isOk = false;
	}

	if($('#P41_2_2').val()==1  &&
	( ($('#P41_2_2_3_A').val()>9999) || ( $('#P41_2_2_3_A').val()<9999 && ($('#P41_2_2_3_A').val()>2030 || $('#P41_2_2_3_A').val()<1900))))
	{
		if($('#P41_2_2_3_A').val().length!=0){
			alert("La Pregunta P41_2_2_3_A solo admite años entre 1900 y 2030 , OMISION = 9999");
		}
		$("#P41_2_2_3_A").addClass('unansweredQuestion');
		focus = focus || "P41_2_2_3_A";
		isOk = false;
	}

	if($('#P41_2_3').val()==-1 && $('#P41_2_2').val()==1 ){
		$("#P41_2_3").addClass('unansweredQuestion');
		focus = focus || "P41_2_3";
		isOk = false;
	}
	if($('#P41_2_3_1').val().length==0 && $('#P41_2_3').val()==1  ){
		$("#P41_2_3_1").addClass('unansweredQuestion');
		focus = focus || "P41_2_3_1";
		isOk = false;
	}
	if($('#P41_2_3_2').val()==-1 && $('#P41_2_3').val()==1  ){
		$("#P41_2_3_2").addClass('unansweredQuestion');
		focus = focus || "P41_2_3_2";
		isOk = false;
	}

	if($('#P41_2_3').val()==1  &&
	( ($('#P41_2_3_3_D').val()>99) || ( $('#P41_2_3_3_D').val()<99 && ($('#P41_2_3_3_D').val()>31 || $('#P41_2_3_3_D').val()<1))))
	{
		if($('#P41_2_3_3_D').val().length!=0){
			alert("La Pregunta P41_2_3_3_D solo admite dias entre 1 y 31 , OMISION = 99");
		}
		$("#P41_2_3_3_D").addClass('unansweredQuestion');
		focus = focus || "P41_2_3_3_D";
		isOk = false;
	}

	if($('#P41_2_3').val()==1  &&
	( ($('#P41_2_3_3_M').val()>99) || ( $('#P41_2_3_3_M').val()<99 && ($('#P41_2_3_3_M').val()>12 || $('#P41_2_3_3_M').val()<1))))
	{
		if($('#P41_2_3_3_M').val().length!=0){
			alert("La Pregunta P41_2_3_3_M solo admite meses entre 1 y 12 , OMISION = 99");
		}
		$("#P41_2_3_3_M").addClass('unansweredQuestion');
		focus = focus || "P41_2_3_3_M";
		isOk = false;
	}

	if($('#P41_2_3').val()==1  &&
	( ($('#P41_2_3_3_A').val()>9999) || ( $('#P41_2_3_3_A').val()<9999 && ($('#P41_2_3_3_A').val()>2030 || $('#P41_2_3_3_A').val()<1900))))
	{
		if($('#P41_2_3_3_A').val().length!=0){
			alert("La Pregunta P41_2_3_3_A solo admite años entre 1900 y 2030 , OMISION = 9999");
		}
		$("#P41_2_3_3_A").addClass('unansweredQuestion');
		focus = focus || "P41_2_3_3_A";
		isOk = false;
	}

	if($('#P41_2_4').val()==-1 && $('#P41_2_3').val()==1 ){
		$("#P41_2_4").addClass('unansweredQuestion');
		focus = focus || "P41_2_4";
		isOk = false;
	}
	if($('#P41_2_4_1').val().length==0 && $('#P41_2_4').val()==1  ){
		$("#P41_2_4_1").addClass('unansweredQuestion');
		focus = focus || "P41_2_4_1";
		isOk = false;
	}
	if($('#P41_2_4_2').val()==-1 && $('#P41_2_4').val()==1  ){
		$("#P41_2_4_2").addClass('unansweredQuestion');
		focus = focus || "P41_2_4_2";
		isOk = false;
	}

	if($('#P41_2_4').val()==1  &&
	( ($('#P41_2_4_3_D').val()>99) || ( $('#P41_2_4_3_D').val()<99 && ($('#P41_2_4_3_D').val()>31 || $('#P41_2_4_3_D').val()<1))))
	{
		if($('#P41_2_4_3_D').val().length!=0){
			alert("La Pregunta P41_2_4_3_D solo admite dias entre 1 y 31 , OMISION = 99");
		}
		$("#P41_2_4_3_D").addClass('unansweredQuestion');
		focus = focus || "P41_2_4_3_D";
		isOk = false;
	}

	if($('#P41_2_4').val()==1  &&
	( ($('#P41_2_4_3_M').val()>99) || ( $('#P41_2_4_3_M').val()<99 && ($('#P41_2_4_3_M').val()>12 || $('#P41_2_4_3_M').val()<1))))
	{
		if($('#P41_2_4_3_M').val().length!=0){
			alert("La Pregunta P41_2_4_3_M solo admite meses entre 1 y 12 , OMISION = 99");
		}
		$("#P41_2_4_3_M").addClass('unansweredQuestion');
		focus = focus || "P41_2_4_3_M";
		isOk = false;
	}

	if($('#P41_2_4').val()==1  &&
	( ($('#P41_2_4_3_A').val()>9999) || ( $('#P41_2_4_3_A').val()<9999 && ($('#P41_2_4_3_A').val()>2030 || $('#P41_2_4_3_A').val()<1900))))
	{
		if($('#P41_2_4_3_A').val().length!=0){
			alert("La Pregunta P41_2_4_3_A solo admite años entre 1900 y 2030 , OMISION = 9999");
		}
		$("#P41_2_4_3_A").addClass('unansweredQuestion');
		focus = focus || "P41_2_4_3_A";
		isOk = false;
	}

	if($('#P41_3_1').val()==-1 ){
		$("#P41_3_1").addClass('unansweredQuestion');
		focus = focus || "P41_3_1";
		isOk = false;
	}
	if($('#P41_3_1_1').val().length==0 && $('#P41_3_1').val()==1  ){
		$("#P41_3_1_1").addClass('unansweredQuestion');
		focus = focus || "P41_3_1_1";
		isOk = false;
	}
	if($('#P41_3_1_2').val()==-1 && $('#P41_3_1').val()==1  ){
		$("#P41_3_1_2").addClass('unansweredQuestion');
		focus = focus || "P41_3_1_2";
		isOk = false;
	}

	if($('#P41_3_1').val()==1  &&
	( ($('#P41_3_1_3_D').val()>99) || ( $('#P41_3_1_3_D').val()<99 && ($('#P41_3_1_3_D').val()>31 || $('#P41_3_1_3_D').val()<1))))
	{
		if($('#P41_3_1_3_D').val().length!=0){
			alert("La Pregunta P41_3_1_3_D solo admite dias entre 1 y 31 , OMISION = 99");
		}
		$("#P41_3_1_3_D").addClass('unansweredQuestion');
		focus = focus || "P41_3_1_3_D";
		isOk = false;
	}

	if($('#P41_3_1').val()==1  &&
	( ($('#P41_3_1_3_M').val()>99) || ( $('#P41_3_1_3_M').val()<99 && ($('#P41_3_1_3_M').val()>12 || $('#P41_3_1_3_M').val()<1))))
	{
		if($('#P41_3_1_3_M').val().length!=0){
			alert("La Pregunta P41_3_1_3_M solo admite meses entre 1 y 12 , OMISION = 99");
		}
		$("#P41_3_1_3_M").addClass('unansweredQuestion');
		focus = focus || "P41_3_1_3_M";
		isOk = false;
	}

	if($('#P41_3_1').val()==1  &&
	( ($('#P41_3_1_3_A').val()>9999) || ( $('#P41_3_1_3_A').val()<9999 && ($('#P41_3_1_3_A').val()>2030 || $('#P41_3_1_3_A').val()<1900))))
	{
		if($('#P41_3_1_3_A').val().length!=0){
			alert("La Pregunta P41_3_1_3_A solo admite años entre 1900 y 2030 , OMISION = 9999");
		}
		$("#P41_3_1_3_A").addClass('unansweredQuestion');
		focus = focus || "P41_3_1_3_A";
		isOk = false;
	}

if($('#P42').val()==-1 ){
	$("#P42").addClass('unansweredQuestion');
	focus = focus || "P42";
	isOk = false;
}
if(($('#P42').val()==1 || $('#P42').val()==9) &&
( ($('#P42_1').val()>99) ||( $('#P42_1').val()<99 && $('#P42_1').val()>12) || $('#P42_1').val()<1) )
{
	alert("corregir mes en la pregunta 42");
	$("#P42_1").addClass('unansweredQuestion');
	focus = focus || "P42_1";
	isOk = false;
}
if(($('#P42').val()==1 || $('#P42').val()==9) &&
( ($('#P42_2').val()>9999) ||( $('#P42_2').val()<9999 && $('#P42_2').val()>2030) || $('#P42_2').val()<2017) )
{
	alert("corregir fecha de la pregunta 42b");
	$("#P42_2").addClass('unansweredQuestion');
	focus = focus || "P42_2";
	isOk = false;
}

	if($('#P43_1').val().length==0){
		$("#P43_1").addClass('unansweredQuestion');		
		focus = focus || "P43_1";	
		isOk = false;
	}

	if(($('#P43_1').val()>12 || $('#P43_1').val()<1) && $('#P43_1').val()!=99 && $('#P43_1').val().length!=0){
		alert("La Pregunta 43 solo admite meses de 1 al 12 , OMISION = 99");
		$("#P43_1").addClass('unansweredQuestion');		
		focus = focus || "P43_1";	
		isOk = false;
	}

	if($('#P43_2').val().length==0){
		$("#P43_2").addClass('unansweredQuestion');		
		focus = focus || "P43_2";	
		isOk = false;
	}

	if(($('#P43_2').val()>2030 || $('#P43_2').val()<1900) && $('#P43_2').val()!=9999 && $('#P43_2').val().length!=0){
		alert("La Pregunta 3 solo admite años de 1900 al 2030 , OMISION = 99");
		$("#P43_2").addClass('unansweredQuestion');		
		focus = focus || "P43_2";	
		isOk = false;
	}



if ($('#P42').val()==1) {

	if ($('#P42_2').val()>$('#P43_2').val()) {
		alert("Error Fecha de la pregunta 42 no puede ser mayor que la fecha de la pregunta 43");
		$("#P42_2").addClass('unansweredQuestion');
		focus = focus || "P42_2";	
		isOk = false;

	}
	if ($('#P42_2').val()== $('#P43_2').val()) {
		if ($('#P42_1').val()>$('#P43_1').val()) {
			alert("Error Fecha de la pregunta 42 no puede ser mayor que la fecha de la pregunta 43");
			$("#P42_1").addClass('unansweredQuestion');
			focus = focus || "P42_1";
			isOk = false;
		}

	}


}


	if($("#P44_1").val()==-1){
		$("#P44_1").addClass('unansweredQuestion');
		focus = focus || "P44_1";
		isOk = false;
	}
	if($("#P44_2").val()==-1){
		$("#P44_2").addClass('unansweredQuestion');
		focus = focus || "P44_2";
		isOk = false;
	}
	if($("#P44_3").val()==-1){
		$("#P44_3").addClass('unansweredQuestion');
		focus = focus || "P44_3";
		isOk = false;
	}
	if($("#P44_4").val()==-1){
		$("#P44_4").addClass('unansweredQuestion');
		focus = focus || "P44_4";
		isOk = false;
	}
	if($("#P44_5").val()==-1){
		$("#P44_5").addClass('unansweredQuestion');
		focus = focus || "P44_5";
		isOk = false;
	}
	if($("#P44_6").val()==-1){
		$("#P44_6").addClass('unansweredQuestion');
		focus = focus || "P44_6";
		isOk = false;
	}
	if($("#P44_7").val()==-1){
		$("#P44_7").addClass('unansweredQuestion');
		focus = focus || "P44_7";
		isOk = false;
	}
	if($("#P44_8").val()==-1){
		$("#P44_8").addClass('unansweredQuestion');
		focus = focus || "P44_8";
		isOk = false;
	}
	if($("#P44_9").val()==-1){
		$("#P44_9").addClass('unansweredQuestion');
		focus = focus || "P44_9";
		isOk = false;
	}

if($('#P45_1').val()==-1){
	$("#P45_1").addClass('unansweredQuestion');
	focus = focus || "P45_1";
	isOk = false;
}
if($('#P45_2').val()==-1){
	$("#P45_2").addClass('unansweredQuestion');
	focus = focus || "P45_2";
	isOk = false;
}
if($('#P45_3').val()==-1){
	$("#P45_3").addClass('unansweredQuestion');
	focus = focus || "P45_3";
	isOk = false;
}
if($('#P45_4').val()==-1){
	$("#P45_4").addClass('unansweredQuestion');
	focus = focus || "P45_4";
	isOk = false;
}
if($('#P45_5').val()==-1){
	$("#P45_5").addClass('unansweredQuestion');
	focus = focus || "P45_5";
	isOk = false;
}


if( $('#P45_5').val()==1 &&
($('#P45_1').val()!=0 ||  $('#P45_2').val()!=0 ||  $('#P45_3').val()!=0 ||$('#P45_4').val()!=0 )
){
	alert("Cambie la informacion de la tabla 45 o Elija otra opción en la 45_5");
	$("#P45_5").addClass('unansweredQuestion');
	focus = focus || "P45_5";
	isOk = false;
}


if($('#P45_5').val()==0 && $('#P45_4').val()==0 && $('#P45_3').val()==0 && $('#P45_2').val()==0 && $('#P45_1').val()==0
 ){
	alert("debe marcar almenos un valor pregunta 45");
	$("#P45_1").addClass('unansweredQuestion');
	$("#P45_2").addClass('unansweredQuestion');
	$("#P45_3").addClass('unansweredQuestion');
	$("#P45_4").addClass('unansweredQuestion');
	$("#P45_5").addClass('unansweredQuestion');
	focus = focus || "P45_1";
	isOk = false;
}

if($('#P45A').val()==-1 && ($('#P23').val()==1 || $('#P23').val()==9)){
	$("#P45A").addClass('unansweredQuestion');
	focus = focus || "P45A";
	isOk = false;
}


	if(!isOk){
		$("#"+focus).focus();
	}

	return isOk;
}
