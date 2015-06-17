<?php
include 'conexion.php';
$id = $_POST["id"];
$sql = "delete from ingredientes where id_ingrediente=".$id;
	if ($mysqli->query($sql) === TRUE) {
    	include 'cargar_ingrediente_config.php';
	}else{
        include 'cargar_ingrediente_config.php';
    }
?>