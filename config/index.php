<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Configuraciones</title>
    <link rel="stylesheet" href="../css/main_style.css">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/style_config.css">
    <script src="../js/funciones.js" type="text/javascript"></script>
    <script src="../js/ajax.js"></script>
</head>
<body>
    <?php include '../include/menu.php'; ?>
    <div class="forms">
           <legend id="config_leg"><span>Edición de Ingredientes</span></legend>
           <div class="agregar_i">
           <span id="ico_ingred" class="icon-ingrediente"></span>
           <label for="agregar">Agregar</label>
           <input id="nombre" type="text" autofocus onkeypress="agregar_i(event)">   
           </div>
           <div id="ingredientes_i" class="edicion_i">
            <?php include '../include/cargar_ingrediente_config.php'; ?>
           </div>
           <div id="load_i_config"></div>
    </div>
    <div class="forms">
        <legend><span>Agregar Paquete</span></legend>
        <div class="paquetes_edicion">
              <p>
              <span>Nombre: </span>
              <input id="nombre_a" type="text" required>
              </p>
              
              <p>
              <span>Decripción: </span>
              <input size="50" id="contenido_a" maxlength="200" required>
              </p>
              
              <p>
              <span>Precio:</span>
              <input id="precio_a" type="text" required>
              </p>
              
              <p>
              <button class="icon-add_2 guardar_p" onclick="agregar_p()"><i>Guardar</i></button>
              </p>
                            
              </div>
              
    </div>
    <div class="forms">
    <legend id="config_leg"><span>Edición de Paquetes</span></legend>
    <div id="contenido_paquetes">
        <?php include '../include/cargar_paquete_config.php'; ?>
    </div>
    </div>
    <?php include "../include/footer.php";?>
</body>
</html>