<?php
header('Content-Type: text/html; charset=UTF-8'); 
include 'conexion.php';
$id = $_POST["id"];
$consulta="select * from paquetes where id_paquete=".$id;
if ($resultado = mysqli_query($mysqli, $consulta)) {
    $row_cnt = $resultado->num_rows;
    if($row_cnt > 0){
    while ($row = mysqli_fetch_assoc($resultado)) {
        echo '<div class="item" id="item_'.$row["id_paquete"].'">
                    <div id="cantidad_'.$row["id_paquete"].'" class="cantidad">1</div>
                    <div class="contenido_item">
                        <span class="contenido_item_nombre">'.$row["nombre"].'</span>
                        <span>'.$row["contenido"].'</span>
                        <span><span>$</span><span id="precio_'.$row["id_paquete"].'">'.$row["precio"].'</span></span>
                    </div>
                    
                    <div class="opciones_item">
                        <span id="menos" class="icon-menos"  onclick="remover_item('.$row["id_paquete"].');"></span>
                        <span id="mas" class="icon-mas"  onclick="duplicar('.$row["id_paquete"].');"></span>
                    </div>
            </div>';
    }
    }else{
        echo "error";
    }
    mysqli_free_result($resultado);
}
mysqli_close($mysqli);       
?>