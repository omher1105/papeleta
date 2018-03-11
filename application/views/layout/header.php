<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Papeleta - Electrónica</title>
<!-- Library CSS -->
<!-- <link href= rel="stylesheet" href="<?php echo base_url() ?>plantillas/css/lecker_library.css" > -->
<!-- Icons CSS -->
 <link rel="stylesheet" href="<?php echo base_url() ?>plantillas/fonts/themify-icons.css"> 
<!-- <link rel="stylesheet" href="<?php echo base_url() ?>plantillas/fonts/selima/stylesheet.css"> -->
<!-- Theme CSS -->
<link rel="stylesheet" href="<?php echo base_url() ?>plantillas/css/lecker_style.css" >
  <link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<!-- Google Fonts -->
<!-- <link  rel="stylesheet" href="<?= base_url() ?>https:/fonts.googleapis.com/css?family=Bree+Serif|Lato"> -->
<!-- <link href="https://fonts.googleapis.com/css?family=Bree+Serif|Lato" rel="stylesheet"> -->


 <!-- <script src="<?php echo base_url() ?>plantillas/material/js/materialize.min.js"></script> -->
<!--  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
 <link href="https://fonts.googleapis.com/css?family=Passion+One" rel="stylesheet">
 <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Passion+One"> -->



  <!-- <link rel="stylesheet" href="<?php echo base_url() ?>plantillas/material/css/materialize.min.css"> -->
  <!-- <link rel="stylesheet" href="<?php echo base_url() ?>plantillas/materialize/css/main.css"> -->
  <!-- <link rel="stylesheet" type="text/css" href="<?php echo base_url()?>custom/datatable.css"> -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"> </script>
  <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> -->
  <!-- <script src="https://code.jquery.com/jquery-1.12.4.js"></script> -->
  <!-- <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script> -->
  <link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css">
  <link href="<?php echo base_url() ?>plantillas/css/bootstrap.min.css" rel="stylesheet">
  <script src="<?php echo base_url() ?>plantillas/js/bootstrap.min.js"></script>
<!-- Latest compiled and minified CSS -->
<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"> -->

<!-- Latest compiled and minified JavaScript -->
<!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script> -->

<link rel="stylesheet" href="https://formden.com/static/cdn/bootstrap-iso.css" />

<!--Font Awesome (added because you use icons in your prepend/append)-->
<link rel="stylesheet" href="https://formden.com/static/cdn/font-awesome/4.4.0/css/font-awesome.min.css" />


</head>
<body>
  <style>.bootstrap-iso .formden_header h2, .bootstrap-iso .formden_header p, .bootstrap-iso form{font-family: Arial, Helvetica, sans-serif; color: black}.bootstrap-iso form button, .bootstrap-iso form button:hover{color: white !important;} .asteriskField{color: red;}</style>
<script type="text/javascript">
	$(document).ready(function(){
		base_url = '<?php echo base_url(); ?>';
		rol_usuario = "<?php echo $_SESSION['usuario'][0]['ROLASISTENCIA']; ?>";
	})
</script>
<?php // debug($_SESSION); ?>