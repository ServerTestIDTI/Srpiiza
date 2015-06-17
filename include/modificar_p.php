<?php 
include 'conexion.php';
$id = $_POST["id"];
$nombre = '"'.$_POST["nombre"].'"';
$contenido = '"'.$_POST["contenido"].'"';
$precio = '"'.$_POST["precio"].'"';
$sql = "UPDATE paquetes SET nombre=".$nombre.", contenido=".$contenido.", precio=".$precio."  WHERE  id_paquete=".$id;
	if ($mysqli->query($sql) === TRUE) {
    	include 'cargar_paquete_config.php';
	}else{
        include 'cargar_paquete_config.php';
    } 
?>