<?php
include 'conexion.php';
$nombre = $mysqli->real_escape_string ($_POST["nombre"]);

$sql = "INSERT INTO ingredientes VALUES (null,'".$nombre."');";
	if ($mysqli->query($sql) === TRUE) {
    	include 'cargar_ingrediente_config.php';
	}else{
    echo $sql;
        include 'cargar_ingrediente_config.php';
    }
?>