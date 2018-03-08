$( document ).ready(function() {
   // alert( "ready!" );
	$('.datepicker').datepicker({
	    format: 'mm/dd/yyyy',
	    startDate: '-3d'
	});

	$('.datetimepicker').datetimepicker({
	    format: 'mm/dd/yyyy',
	    startDate: '-3d'
	});

    $('#s_tipo').on('change',function(){
    	if(this.value == 'D'){
    		$('#time-frame').hide();
    	}else if(this.value == 'H'){
    		$('#time-frame').show();
    		$('#date-frame').show();
    	}
    });

});