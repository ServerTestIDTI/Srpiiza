<?php
include 'conexion.php';
$consulta="select * from ingredientes";
if ($resultado = mysqli_query($mysqli, $consulta)) {
    $row_cnt = $resultado->num_rows;
    if($row_cnt > 0){
    echo '<div id="mitad1" class="seccion">';
    while ($row = mysqli_fetch_assoc($resultado)) {        
    echo '<span class="ingrediente" onclick="eliminar('.$row["id_ingrediente"].')">
    <i>'.$row["nombre"].'</i>
    <span class="icon-remove_2 ico_ingrediente"></span>
    </span>';
    }
    echo "</div>";
    }
    mysqli_free_result($resultado);
}
mysqli_close($mysqli);    
?>