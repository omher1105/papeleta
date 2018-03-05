<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

/*
* Excel library for Code Igniter applications
* Author: Derek Allard
*/

function to_excel($sql, $filename='exceloutput')
{
     $headers = ''; // just creating the var for field headers to append to below
     $data = ''; // just creating the var for field data to append to below

     $obj =& get_instance();

     $query = $sql["query"];

     $fields = $sql["fields"];

     if ($query->num_rows() == 0) {
          echo '<p>NO HAY DATOS.</p>';
     } else {

          echo '<table border="1"><tr>';

          foreach ($fields as $field) {

           //  $headers .= $field->name . "\t";

                echo '<th>'.$field->name .'</th>';

          }
          echo '</tr>';

          foreach ($query->result() as $row) {
              // $line = '';
           echo '<tr>';

               foreach($row as $value) {                                            
                    if ((!isset($value)) OR ($value == "")) {
                         //$value = "\t";
                          echo '<th></th>';
                    } else {
                        // $value = str_replace('"', '""', $value);
                        // $value = '"' . $value . '"' . "\t";
                          echo '<th  class="xl65">'.$value .'</th>';
                    }
                   // $line .= $value;
                    
               }
              // $data .= trim($line)."\n";
           echo '</tr>';
          }

          echo '</table>';

          $data = str_replace("\r","",$data);

          header("Content-type: application/x-msdownload");
          header("Content-Disposition: attachment; filename=$filename.xls");
          echo mb_convert_encoding("$headers\n$data",'utf-16','utf-8');
     }
}
?>

<style type="text/css">
.xl65
{
    mso-style-parent:style0;
    mso-number-format:"\@";
}

</style>
