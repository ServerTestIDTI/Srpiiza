<?php
include 'conexion.php';
$id = $_POST["id"];
$sql = "delete from paquetes where id_paquete=".$id;
	if ($mysqli->query($sql) === TRUE) {
    	include 'cargar_paquete_config.php';
	}else{
        include 'cargar_paquete_config.php';
    }
?>