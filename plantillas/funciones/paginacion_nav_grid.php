<?php
class PaginacionNavGrid {
	var $id = 0;
	var $columnas = null;
	var $matriz;
	public $responce;
	private $claves_default = array();
	
	public function PaginacionNavGrid() {
		$this->responce = new stdClass();
	}
	
	public function paginarSinNavegacion() {	
		$count	=	sizeof($this->matriz);			
		
		//print_r($this->matriz);		
		
		$this->responce->page = 1;
		$this->responce->total = 1;
		$this->responce->records = $count;
		
		$this->prepararClavesDefault();
		
		for ($i=0;$i<$count;$i++) {
			$this->responce->rows[$i]['id']=$this->matriz[$i][$this->id];
			$this->responce->rows[$i]['cell']=$this->obtenerFila($i);
		}
		return json_encode($this->responce);
	}
	
	public function paginar() {
		$page 	= $_REQUEST['page']; // get the requested page
		$limit 	= $_REQUEST['rows']; // get how many rows we want to have into the grid
		//$sidx 	= $_REQUEST['sidx']; // get index row - i.e. user click to sort
		//$sord	= $_REQUEST['sord']; // get the direction

		//if(!$sidx) $sidx =1;		
		$count	=	sizeof($this->matriz);		
		if($count>0 && $limit>0)
			$total_pages = ceil($count/$limit); 
		else 
			$total_pages = 0; 
		if ($page > $total_pages) $page=$total_pages;
		$start = $limit*$page - $limit;
		if($start <0) $start = 0; 

		$this->responce->page = $page;
		$this->responce->total = $total_pages;
		$this->responce->records = $count;
		$contador=0;
		$limite = $start + $limit;
		if ($limite>$count)	$limite = $limite - ($limite - $count);
		
		$this->prepararClavesDefault();	
		
		for ($i=$start;$i<$limite;$i++) {			
			$this->responce->rows[$contador]['id']=$this->matriz[$i][$this->id];
			$this->responce->rows[$contador]['cell']=$this->obtenerFila($i);
			//$this->responce->rows[$contador]['cell']=$this->matriz[$i];
			//$this->responce->rows[$contador]['cell']=PaginacionNavGrid::matrizUTF($this->matriz[$i]);
			$contador++;
		}
		return json_encode($this->responce);
	}
	
	private function prepararClavesDefault() {
		//print_r(array_keys($this->matriz[0]));
		//echo "_<br />_";
		//print_r($this->matriz);
		if (sizeof($this->matriz)) {
			$claves = array_keys($this->matriz[0]);
			foreach($claves as $clave) {
				//if (is_numeric($clave))
					$this->claves_default[] = $clave;
			}
		}
		/*print_r(array_keys($this->matriz[0]));
		echo "\n\n";
		if (!is_array($this->columnas)) {
			if (sizeof($this->matriz))
				while (current($this->matriz[0])) {
					echo "\n".key($this->matriz[0])."\n";
					if (is_numeric(key($this->matriz[0])))
						$this->claves_default[] = key($this->matriz[0]);		
					next($this->matriz[0]);					
				}
		}*/
		//print_r($this->claves_default);
		/*echo "\n\n";
		print_r($this->matriz);
		echo "\n\n";*/
	}
	
	private function obtenerFila($indice) {
		/*print_r($this->columnas);
		echo ".<br />.";
		print_r($this->claves_default);*/
		$fila = array();
		if (is_array($this->columnas))
			foreach ($this->columnas as $fila_columnas)
				$fila[] = $this->matriz[$indice][$fila_columnas];
		else
			foreach($this->claves_default as $temp_clave) {
				//echo utf8_encode($this->matriz[$indice][$temp_clave]);
				//echo "<br />";
				//echo $this->matriz[$indice][$temp_clave];
				
				$fila[] = $this->matriz[$indice][$temp_clave];
				//$fila[] = utf8_encode($this->matriz[$indice][$temp_clave]);
			}
		//print_r($fila);
		return $fila;
	}
	
	public static function matrizUTF($matriz) {
		$fila = array();
		foreach($matriz as $valor)
			$fila[] = utf8_encode($valor);
		return $fila;
	}
	
}
?>