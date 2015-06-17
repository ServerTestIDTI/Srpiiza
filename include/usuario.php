<?php
include 'conexion.php';
$q = $mysqli->real_escape_string ($_POST["q"]);
$aux = "'%".$q."%'";
$consulta="select * from clientes where nombre LIKE ".$aux." or direccion LIKE ".$aux."  or telefono LIKE ".$aux."  LIMIT 0 , 5";
if ($resultado = mysqli_query($mysqli, $consulta)) {
    $row_cnt = $resultado->num_rows;
    if($row_cnt > 0){
    while ($row = mysqli_fetch_assoc($resultado)) {
        echo '<div class="res hvr-back-pulse" onclick="cargar_datos('.$row["id_c"].')" >';
        echo '<span id="nombre_'.$row["id_c"].'">'.$row["nombre"].'</span>';
        echo '<i id="direccion_'.$row["id_c"].'">'.$row["direccion"].'</i>';
        echo '<i id="telefono_'.$row["id_c"].'">'.$row["telefono"].'</i>';
        echo '</div>';
    }
    }else{
        echo '<div class="res hvr-back-pulse">';
        echo '<span>Ningun Nombre</span>';
        echo '<i>Ninguna Dirección</i>';
        echo '<i>Ningun Teléfono</i>';
        echo '</div>';
        echo '<div id="load" style="text-align: center;">';
        echo '<svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#2C3E50"><g fill-rule="evenodd" stroke-width="1" fill="#F9F9F9"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="-0.9s" dur="1s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle></g></svg>';
        echo '</div>';
            
    }
    mysqli_free_result($resultado);
}
mysqli_close($mysqli);       
?>