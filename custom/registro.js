$( document ).ready(function() {
   // alert( "ready!" );
	// $('.datepicker').datepicker({
	//     format: 'mm/dd/yyyy',
	//     startDate: '-3d'
	// });

    var date_input=$('.date'); //our date input has the name "date"
    var date_time=$('.datetime'); //our date input has the name "datetime"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
        format: 'yyyy-mm-dd',
        container: container,
        todayHighlight: true,
        autoclose: true,
    }).on('changeDate', function(event) {

        var fi=$('#date1').val();
        var ff=$('#date2').val();

        if (ff.length!=0){
            if (fi > ff ){
            $(this).val("");
                alert('Fecha Inicio no puede ser mayor a Fecha Fin');
            }
        }

        if (fi.length!=0){
            if (fi < ff ){
            $(this).val("");
             alert('Fecha Fin no puede ser menor a Fecha Inicio');
            }
        }
    });


     date_time.datetimepicker({
        format: "yyyy-mm-dd hh:mm:ii",
        startView: "year",
        language :"es",
        autoclose: true
    }).on('changeDate', function(event) {

        var fecha_inicio=$('#datetime1').val();
        var fecha_fin=$('#datetime2').val();

        if (fecha_fin.length!=0){
            if (fecha_inicio > fecha_fin ){
            $(this).val("");
                alert('Fecha Inicio no puede ser mayor a Fecha Fin');
            }
        }

        if (fecha_inicio.length!=0){
            if ($(this).val() < fecha_inicio ){
            $(this).val("");
             alert('Fecha Fin no puede ser menor a Fecha Inicio');
            }
        }


    });

    

    $('#dpx-motivo').on('change',function(){
        var id = this.value;
        if(id == 35 || id == 19 || id == 49){
            $('#s_tipo').val('H').trigger('change');
        }
    });

    $('#s_tipo').on('change',function(){
        if(this.value == 'D'){
            $('#time-frame').css('display','none');
            $('#date-frame').css('display','block');
        }else if(this.value == 'H'){
            $('#time-frame').css('display','block');
            $('#date-frame').css('display','none');
        }
    });



    // function validateForm(){
    //     event.preventDefault();
    //     form = document.forms['registrar-papeleta'];
    //     if(document.forms['registrar-papeleta']['s_nombre'].value == "0"){
    //         alert("ingrese select correcto");
    //         return false;
    //     }
    // }

});