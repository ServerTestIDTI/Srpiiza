<?php
include 'conexion.php';
$consulta="select * from ingredientes";
if ($resultado = mysqli_query($mysqli, $consulta)) {
    $row_cnt = $resultado->num_rows;
    if($row_cnt > 0){
    echo '<div id="mitad1" class="seccion">';
    while ($row = mysqli_fetch_assoc($resultado)) {        
    echo '<span class="ingrediente" onclick="ico_efect('.$row["id_ingrediente"].')" onmouseover="activar('.$row["id_ingrediente"].')" onmouseout="desactivar('.$row["id_ingrediente"].')">
    <input id="ingrediente_'.$row["id_ingrediente"].'" type="checkbox">
    <i id="nombre_i_'.$row["id_ingrediente"].'">'.$row["nombre"].'</i>
    <span id="ingrediente_ico_'.$row["id_ingrediente"].'" class="icon-add_2 ico_ingrediente"></span>
    </span>';
    }
    echo "</div>";
    }
    mysqli_free_result($resultado);
}
mysqli_close($mysqli);    
?>