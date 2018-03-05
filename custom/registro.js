$( document ).ready(function() {
   // alert( "ready!" );

    $('#s_tipo').on('change',function(){
    	if(this.value == 'D'){
    		$('#time-frame').hide();
    	}else if(this.value == 'H'){
    		$('#time-frame').show();
    		$('#date-frame').show();
    	}
    });

});