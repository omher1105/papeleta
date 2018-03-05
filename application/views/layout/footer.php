<!-- JQuery -->
<script src="<?= base_url() ?>plantillas/js/jquery-1.12.4.min.js"></script> 
<script type="text/javascript" href="<?php echo base_url() ?>custom/datatable.js"></script>
<!-- Library JS -->
<!-- <script src="<?= base_url() ?>plantillas/js/lecker_library.js"></script>  -->

<!-- Theme JS -->
<!-- <script src="<?= base_url() ?>plantillas/lecker_script.js"> </script> -->

<!-- Bootstrap core CSS -->
<link href="<?php echo base_url() ?>plantillas/css/bootstrap.min.css" rel="stylesheet">
<script src="<?php echo base_url() ?>plantillas/js/bootstrap.min.js"></script>
   
<!--ALERT-->
<script src="<?php echo base_url() ?>plantillas/js/sweetalert.min.js"></script>
<link rel="stylesheet" href="<?php echo base_url() ?>plantillas/css/sweetalert.css">
<script src="<?php echo base_url() ?>plantillas/js/bootbox.min.js"></script>


<!--CHOSEN-->
<script src="<?php echo base_url() ?>plantillas/js/chosen/chosen.jquery.min.js"></script>
<link rel="stylesheet" href="<?php echo base_url() ?>plantillas/js/chosen/chosen.css">

<!--CALENDAR-->
<link type="text/css" rel="stylesheet" src="<?php echo base_url() ?>plantillas/css/bootstrap-datepicker/css/datepicker.css"/>  
<script src="<?php echo base_url() ?>plantillas/css/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script src="<?php echo base_url() ?>plantillas/css/bootstrap-datepicker/js/locales/bootstrap-datepicker.es.js"></script>  
<!--TIME-->
<link rel="stylesheet" href="<?php echo base_url() ?>plantillas/css/bootstrap-datetimepicker.min.css">
<script src="<?php echo base_url() ?>plantillas/js/bootstrap-datetimepicker.min.js"></script>


<?php if(isset($script)){
  echo $script;
}?>

</body>
</html>