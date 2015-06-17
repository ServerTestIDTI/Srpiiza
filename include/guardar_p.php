<?php 
include 'conexion.php';
$nombre = $mysqli->real_escape_string ($_POST["nombre"]);
$contenido = $mysqli->real_escape_string ($_POST["contenido"]);
$precio = $mysqli->real_escape_string ($_POST["precio"]);

    $sql = "insert into paquetes values (null,'".$nombre."','".$contenido."','".$precio."');";
	if ($mysqli->query($sql) === TRUE) {
    	include 'cargar_paquete_config.php';
	}else{
        include 'cargar_paquete_config.php';
    } 
?>