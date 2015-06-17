<?php
include 'conexion.php';
$consulta="select * from paquetes ORDER BY id_paquete DESC";
if ($resultado = mysqli_query($mysqli, $consulta)) {
    $row_cnt = $resultado->num_rows;
    if($row_cnt > 0){
    while ($row = mysqli_fetch_assoc($resultado)) {
        
        echo '<div id="'.$row["id_paquete"].'" class="paquetes_edicion">
              <span>
              <span>Nombre: </span>
              <input id="nombre_'.$row["id_paquete"].'" onkeyup="mostrar_b('.$row["id_paquete"].')" type="text" value="'.$row["nombre"].'">
              </span>
              
              <span>
              <span>Decripción: </span>
              <input size="50" id="contenido_'.$row["id_paquete"].'" onkeyup="mostrar_b('.$row["id_paquete"].')" value="'.$row["contenido"].'" >
              </span>
              
              <span>
              <span>Precio:</span>
              <input id="precio_'.$row["id_paquete"].'" onkeyup="mostrar_b('.$row["id_paquete"].')" type="text" value="'.$row["precio"].'">
              </span>
              
              <span>
              <button class="icon-add_2 guardar_p" id="b'.$row["id_paquete"].'" style="display:none;" onclick="aplicar('.$row["id_paquete"].')"><i>Guardar</i></button >
              </span>
              
              <span>
              <button class="icon-remove_2 eliminar_p" onclick="eliminar_p('.$row["id_paquete"].')">
              <i>Eliminar</i>
              </button>
              </span>
              
              </div>
              <hr>';
    }
    }
    mysqli_free_result($resultado);
}
mysqli_close($mysqli);       
?>