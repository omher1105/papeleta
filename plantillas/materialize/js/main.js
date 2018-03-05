$(document).ready(function (){
	/*
	$(".mayus").keyup(function(){
    	this.value = this.value.toUpperCase();
    });
    */
});

function readModule(url) {
	$.ajax({
		type: 'GET',
		datatype: "json",
		url: url,			
		success: function (data) {			
			var result = $.parseJSON(data)[0];
			for(var propertyName in result) {
				if($('#'+propertyName).is("select") && result[propertyName] == null) {
				    $('#'+propertyName).val(-1);				
				}else{
					$('#'+propertyName).val(result[propertyName]);				
				}				
			}
			$(":input").trigger("change");
		},
		error: function(jqXHR,textStatus,errorThrown){
		}
	});
}

function writeModule(url, form, jumpToUrl) {
	var values;	
	var valLength = 0;

	//Convierte los elementos .mayus a mayusculas antes de guardar.
	var mayusArray = $(".mayus");
	var arrayLength = mayusArray.length;
	for (var i = 0; i < arrayLength; i++) {
		mayusArray[i].value = mayusArray[i].value.toUpperCase();
	}

	if(validate() || $("#resfin").val()==3 || $("#resfin").val()==4){		
		values = $(form).serializeAll();
		valLength = values.length;
		
		for (var i = 0; i < valLength; i++) {
			if( values[i].value == -1 || values[i].value == '' ){
				values[i].value = 'NULL';
			}
		}

		console.log()
		$.ajax({
			type: 'POST',
			url: url,
			data: values,				
			success: function (data) {
				alert("Los datos fueron agregados con exito!!!");
				if(jumpToUrl){
					window.location.href = jumpToUrl;
				}			
			},
			error: function(jqXHR,textStatus,errorThrown){
				alert("Error!!!");
			}
		});	
	}else{
		alert("Por favor completar los campos obligatorios!");
	}		
}

function disableInput(element, nullValue){
	$("#"+element).val(nullValue);
	$("#"+element).trigger("change");
	$("#"+element).prop('disabled', true);
}
function enableInput(element){
	$("#"+element).prop('disabled', false);
}

function enableContainer(element){
	$("#"+element+"_container").show();
	$("#"+element+"_container").removeClass('hidden');
	$("#"+element+"_container :input").attr("disabled", false);
	$("#"+element+"_container :input").trigger("change");
}
function disableContainer(element, hideContainer){
	if(hideContainer){
		$("#"+element+"_container").hide();
	}else{
		$("#"+element+"_container").addClass('hidden');
	}
	$("#"+element+"_container :input").attr("disabled", true);
	$("#"+element+"_container input").val("");
	$("#"+element+"_container select").val(-1);
	$("#"+element+"_container textarea").val("");
	$("#"+element+"_container :input").trigger("change");
}

function soloLetras(e){
   key = e.keyCode || e.which;
   tecla = String.fromCharCode(key).toLowerCase();
   letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
   especiales = "8";

   tecla_especial = false
   for(var i in especiales){
        if(key == especiales[i]){
            tecla_especial = true;
            break;
        }
    }

    if(letras.indexOf(tecla)==-1 && !tecla_especial){
        return false;
    }
}

function maxLengthCheck(object)
{
	if (object.value.length > object.maxLength)
	object.value = object.value.slice(0, object.maxLength)
}

function soloNumeros(e){
   key = e.keyCode || e.which;
   tecla = String.fromCharCode(key).toLowerCase();
   numeros = " 0123456789";

    if(numeros.indexOf(tecla)==-1){
        return false;
    }
 }

function solo2numerosyletras(e){
	key = e.keyCode || e.which;
	tecla = String.fromCharCode(key).toLowerCase();
	numeros = " 0123456789áéíóúabcdefghijklmnñopqrstuvwxyz";

	if(numeros.indexOf(tecla)==-1){
	    return false;
	}
}

function soloComayletras(e){
	key = e.keyCode || e.which;
	tecla = String.fromCharCode(key).toLowerCase();
	letras = " áéíóúabcdefghijklmnñopqrstuvwxyz,";
	especiales = "8-37-39-46";

	tecla_especial = false
	for(var i in especiales){
	     if(key == especiales[i]){
	         tecla_especial = true;
	         break;
	     }
	 }

	 if(letras.indexOf(tecla)==-1 && !tecla_especial){
	     return false;
	 }
}

function SoloEscala(e){
	key = e.keyCode || e.which;
	tecla = String.fromCharCode(key).toLowerCase();
	letras = " 0123456789áéíóúabcdefghijklmnñopqrstuvwxyz:/";
	especiales = "8-37-39-46";

	tecla_especial = false
	for(var i in especiales){
	     if(key == especiales[i]){
	         tecla_especial = true;
	         break;
	     }
	 }

	 if(letras.indexOf(tecla)==-1 && !tecla_especial){
	     return false;
	 }
}

(function ($) {
  $.fn.serializeAll = function () {
    var data = $(this).serializeArray();
          
    $(':disabled[name]', this).each(function () { 
        data.push({ name: this.name, value: $(this).val() });
    });
      
    return data;
  }
})(jQuery);