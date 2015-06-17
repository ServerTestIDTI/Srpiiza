<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="Expires" content="0" />
    <meta http-equiv="Pragma" content="no-cache" />
    <title>Sr. Pizza</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/main_style.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/tool_tip.css">
    <script src="js/jquery-1.3.2.min.js" type="text/javascript"></script>
    <script src="js/funciones.js" type="text/javascript"></script>
    <script src="js/ajax.js"></script>
</head>

<body>
    <nav>
        <h3>Sistema Sr. Pizza</h3>
        <span id="fecha_actual"></span>
    </nav>
    <div class="contenedor" role="main">
        <div class="armar_pedido">
            <div id="usuario" class="forms">
                <legend><span>Datos del cliente</span>
                    <a href="/config/"> <span style="font-size: 24px;float: right;" class="icon-config"></span>
                    </a>
                </legend>
                <div id="datos_usuario" class="contenido">
                    <span id="id_c" style="display: none;"></span>
                    <div class="nombre">
                        <div id="busqueda" class="busqueda">
                            <div id="barra" class="barra">
                                <span id="ico_u" class=" icon-d icon-buscar"></span>
                                <input id="nombre" name="nombre" class="c_nombre" type="text" placeholder="Nombre" onkeyup="plegable()" required>
                            </div>
                            <div id="lista" class="plegable oculto">
                                <div id="info">
                                </div>
                                <div id="load" style="text-align: center;">
                                </div>
                            </div>
                        </div>
                    </div>




                    <div class="direcciones">
                        <div class="borde_d">
                            <span class="icon-d icon-direccion"></span>
                            <input onfocus="cerrar()" id="direccion" name="direccion" type="text" placeholder="Dirección" size="30">
                        </div>
                    </div>


                    <div class="direcciones">
                        <div class="borde_d">
                            <span class="icon-d icon-telefono"></span>
                            <input onfocus="cerrar()" id="telefono" size="12" name="telefono" type="tel" placeholder="Teléfono" pattern="[0-9]{10}" title="Solo números">
                        </div>
                    </div>

                </div>
            </div>


            <div class="forms">
                <legend><span>Datos del pedido</span>
                    <a href="/config/"> <span style="font-size: 24px;float: right;" class="icon-config"></span>
                    </a>
                </legend>
                <div style="padding: 10px;">
                    <hr class="paquetes_hr">
                </div>
                <div class="seccion">
                    <?php include 'include/cargar_paquetes.php';?>
                </div>
                <div style="padding: 10px;">
                    <hr class="ingredientes_hr">
                </div>

                <div id="lista_ingredientes" class="contenedor_armado">
                    <?php include 'include/cargar_ingredientes.php'; ?>
                </div>
                <div class="mitad">
                    <span id="mitad">
                        <input  id="check_mitad" type="checkbox" onclick="mitad()" checked=false>
                        <span id="opcion_dividir">Dividir Pizza</span>
                    <span class="icon-mitadymitad"></span>
                    </span>
                    <p id="lista_ingredientes_pedido"></p>
                </div>
                <div style="padding: 10px;">
                    <hr class="size_hr">
                </div>
                <div class="pizza_s">
                    <div class="size_pizza_ico">
                        <span onclick="agregar_pedido_pizza('Chica');" class="tool_msg" data-tooltip="Pizza Chica" data-tooltip-position="top"></span>
                        <span style="font-size: 30px; margin-left: 35px; margin-top: 35px;" class="icon-pizza ico_size"></span>
                    </div>
                    <div class="size_pizza_ico">
                        <span onclick="agregar_pedido_pizza('Mediana');" class="tool_msg" data-tooltip="Pizza Mediana" data-tooltip-position="top"></span>
                        <span style="font-size: 60px; margin-left: 20px; margin-top: 20px;" class="icon-pizza ico_size"></span>
                    </div>
                    <div class="size_pizza_ico">
                        <span onclick="agregar_pedido_pizza('Grande');" class="tool_msg" data-tooltip="Pizza Grande" data-tooltip-position="top"></span>
                        <span style="font-size: 90px; margin-left: 5px; margin-top: 5px;" class="icon-pizza ico_size"></span>
                    </div>

                </div>

            </div>
        </div>

        <div class="orden_pedido">
            <div class="pedido">
                <div class="forms">
                    <legend><span>Orden</span>
                    </legend>
                    <div id="load_item" style="margin: 0 auto; text-align: center;">
                    </div>
                    <div id="lista_items" class="lista">
                    </div>
                    <div class="extras">
                       <span>Baguette italiana <span id="presio_extra">$20</span>
                       <br> 
                       <i>Jamón, Salami</i>
                       </span> 
                       <span>Baguette Pastor</span> 
                       <span>Baguette Hawaiana</span> 
                       <span>Calzone x1</span>
                       <span>Calzone x2</span>
                       <span>Calzone x3</span>
                       <span>Calzone Pastor</span>
                       <span>Refresco</span>
                    </div>
                    <div class="contenedor_final">
                    
                    <div class="d_alternativa">
                       <label for="">Enviar:</label>
                       <div id="direccion_alterna" contenteditable="true" dir="auto" placeholder="Direccion alternativa"></div>
                    </div>
                    
                    <div class="total">
                        <p class="total_numero">
                            <span>Total a pagar: $</span>
                            <output id="total">0</output>
                        </p>
                        <span>
                          <label for="pago">Pago.....$</label>
                          <input type="text" name="pago" size="10" onkeyup="cambio();" id="pago">
                        </span>
                        <span>
                          <label for="cambio">Cambio.$</label>
                          <input id="cambio" type="text" name="cambio" readonly size="10">
                        </span>
                        <span>
                           <button style="text-align:center;">Cobrar</button>
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php include "include/footer.php";?>
</body>

</html>