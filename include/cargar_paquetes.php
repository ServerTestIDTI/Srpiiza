<?php
header('Content-Type: text/html; charset=UTF-8'); 
include 'conexion.php';
$consulta="select * from paquetes";
if ($resultado = mysqli_query($mysqli, $consulta)) {
    $row_cnt = $resultado->num_rows;
    if($row_cnt > 0){
    while ($row = mysqli_fetch_assoc($resultado)) {
        
        echo '<div id="'.$row["id_paquete"].'" class="paquete">
              <legend>'.$row["nombre"].'</legend>
              <div style="height: 50px;">
               <p>'.$row["contenido"].'</p>
               </div>
               <div style="height: 20px;">
               <button onclick="pedido_p('.$row["id_paquete"].')">Agregar $'.$row["precio"].'</button>
               </div>
           </div>';
    }
    }
    mysqli_free_result($resultado);
}
mysqli_close($mysqli);       
?>