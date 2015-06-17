<?php
include 'conexion.php';
$q = $_POST["q"];
if ($q == 1){
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
    }else{
        //loa
    }
    mysqli_free_result($resultado);
}
mysqli_close($mysqli);
}else if( $q == 2){
$consulta="select * from ingredientes";
if ($resultado = mysqli_query($mysqli, $consulta)) {
    $row_cnt = $resultado->num_rows;
    if($row_cnt > 0){
    echo '<div id="mitad1" class="seccion_2">';
    while ($row = mysqli_fetch_assoc($resultado)) {        
    echo '<span class="ingrediente" onclick="ico_efect('.$row["id_ingrediente"].')" onmouseover="activar('.$row["id_ingrediente"].')" onmouseout="desactivar('.$row["id_ingrediente"].')">
    <input id="ingrediente_'.$row["id_ingrediente"].'" type="checkbox">
    <i id="nombre_i_'.$row["id_ingrediente"].'">'.$row["nombre"].'</i>
    <span id="ingrediente_ico_'.$row["id_ingrediente"].'" class="icon-add_2 ico_ingrediente"></span>
    </span>';
    }
    echo "</div>";
    }else{
        //load
    }
    mysqli_free_result($resultado);
}

$consulta2="select * from ingredientes";
if ($resultado2 = mysqli_query($mysqli, $consulta2)) {
    $row_cnt2 = $resultado2->num_rows;
    if($row_cnt2 > 0){
    echo '<div id="mitad2" class="seccion_2">';
    while ($row2 = mysqli_fetch_assoc($resultado2)) {        
    echo '<span class="ingrediente" onclick="ico_efect_m2('.$row2["id_ingrediente"].')" onmouseover="activar_m2('.$row2["id_ingrediente"].')" onmouseout="desactivar_m2('.$row2["id_ingrediente"].')">
    <input id="ingrediente_m2_'.$row2["id_ingrediente"].'" type="checkbox">
    <i id="nombre_i2_'.$row2["id_ingrediente"].'">'.$row2["nombre"].'</i>
    <span id="ingrediente_ico_m2_'.$row2["id_ingrediente"].'" class="icon-add_2 ico_ingrediente"></span>
    </span>';
    }
    echo "</div>";
    }else{
        //load
    }
    mysqli_free_result($resultado2);
}  
mysqli_close($mysqli);    
}

?>