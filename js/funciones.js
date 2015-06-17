var lista_i = [];
var lista_i_2 = [];
function plegable() {
    if (document.getElementById("nombre").value.length > 0) {

        $("#lista").removeClass("oculto");
        $("#lista").addClass("ver");
        $("#barra").addClass("busqueda_plegado");
        $("#ico_u").addClass("ico_u");


        var n = document.getElementById('nombre').value;
        if (n === '') {
            document.getElementById("info").innerHTML = "";
            document.getElementById("load").innerHTML = "";
            return;
        }

        loadDoc("q=" + n, "include/usuario.php", function () {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                document.getElementById("info").innerHTML = xmlhttp.responseText;
                document.getElementById("load").innerHTML = "";

            } else {
                document.getElementById("load").innerHTML = '<svg style="margin: 0 auto; text-align: center;" width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#2C3E50"><g fill-rule="evenodd" stroke-width="1" fill="#F9F9F9"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="-0.9s" dur="1s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle></g></svg>';
            }
        });
    } else {
        $("#lista").removeClass("ver");
        $("#lista").addClass("oculto");
        $("#barra").removeClass("busqueda_plegado");
        $("#ico_u").removeClass("ico_u");
    }
}



function cargar_datos(id) {
    var nombre = document.getElementById("nombre_" + id).textContent;
    var direccion = document.getElementById("direccion_" + id).textContent;
    var telefono = document.getElementById("telefono_" + id).textContent;

    document.getElementById("id_c").innerHTML = id;
    document.getElementById("nombre").value = nombre;
    document.getElementById("direccion").value = direccion;
    document.getElementById("telefono").value = telefono;

    $("#lista").removeClass("ver");
    $("#barra").removeClass("busqueda_plegado");
    $("#ico_u").removeClass("ico_u");
}

function ico_efect(id) {
    var ingre_check = document.getElementById("ingrediente_" + id).checked;
    if (ingre_check === true) {
        $("#ingrediente_ico_" + id).removeClass("icon-add_2");
        $("#ingrediente_ico_" + id).addClass("icon-remove_2");
        lista_i.push(document.getElementById("nombre_i_" + id).textContent);
    } else {
        $("#ingrediente_ico_" + id).removeClass("icon-remove_2");
        $("#ingrediente_ico_" + id).addClass("icon-add_2");
        var index = lista_i.indexOf(document.getElementById("nombre_i_" + id).textContent);
        if (index >= 0) {
            lista_i.splice(index, 1);
        }
    }
    pedido_pizza();
}

function ico_efect_m2(id) {
    var x = document.getElementById("ingrediente_m2_"+id).checked;
    if (x == true) {
        $("#ingrediente_ico_m2_" + id).removeClass("icon-add_2");
        $("#ingrediente_ico_m2_" + id).addClass("icon-remove_2");
        lista_i_2.push(document.getElementById("nombre_i2_"+id).textContent);
    } else {
        $("#ingrediente_ico_m2_" + id).removeClass("icon-remove_2");
        $("#ingrediente_ico_m2_" + id).addClass("icon-add_2");
        lista_i_2.splice(document.getElementById("nombre_i2_"+id).textContent);
        var index = lista_i_2.indexOf(document.getElementById("nombre_i2_"+id).textContent);
        if (index >= 0) {
            lista_i_2.splice(index, 1);
        }
    }
    pedido_pizza();
}


function activar(id) {
    var y = "ingrediente_" + id;
    var x = document.getElementById(y).checked;
    if (x == false) {
        $("#ingrediente_ico_" + id).addClass("ico_color");
    }
}

function activar_m2(id) {
    var y = "ingrediente_m2_" + id;
    var x = document.getElementById(y).checked;
    if (x == false) {
        $("#ingrediente_ico_m2_" + id).addClass("ico_color");
    }
}

function desactivar(id) {
    var y = "ingrediente_" + id;
    var x = document.getElementById(y).checked;
    if (x == false) {
        $("#ingrediente_ico_" + id).removeClass("ico_color");
    }
}

function desactivar_m2(id) {
    var y = "ingrediente_m2_" + id;
    var x = document.getElementById(y).checked;
    if (x == false) {
        $("#ingrediente_ico_m2_" + id).removeClass("ico_color");
    }
}


function cerrar() {
    var contenido = document.getElementById("nombre").value;
    if (contenido.length > 0) {
        $("#lista").removeClass("ver");
        $("#barra").removeClass("busqueda_plegado");
        $("#ico_u").removeClass("ico_u");
        document.getElementById("info").innerHTML = "";
        document.getElementById("load").innerHTML = "";
    } else {
        $("#lista").addClass("ver");
        $("#barra").addClass("busqueda_plegado");
        $("#ico_u").addClass("ico_u");
        document.getElementById("load").innerHTML = '<svg style="margin: 0 auto; text-align: center;" width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#2C3E50"><g fill-rule="evenodd" stroke-width="1" fill="#F9F9F9"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="-0.9s" dur="1s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle></g></svg>';
    }
}

function mitad() {
    var x = document.getElementById("check_mitad").checked;
    if (x === true) {
        //Cargar las 2 mitades de ingredientes
        loadDoc("q=" + 2, "include/mitad_mitad.php", function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("lista_ingredientes").innerHTML = xmlhttp.responseText;
            } else {
                document.getElementById("lista_ingredientes").innerHTML = '<svg style="margin: 0 auto; text-align: center;" width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#2C3E50"><g fill-rule="evenodd" stroke-width="1" fill="#F9F9F9"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="-0.9s" dur="1s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle></g></svg>';
            }
        });
        document.getElementById("opcion_dividir").textContent = "Cancelar";
        lista_i = [];
        lista_i_2 = [];
        pedido_pizza();
        
    } else {
        loadDoc("q=" + 1, "include/mitad_mitad.php", function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("lista_ingredientes").innerHTML = xmlhttp.responseText;
            } else {
                document.getElementById("lista_ingredientes").innerHTML = '<svg style="margin: 0 auto; text-align: center;" width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#2C3E50"><g fill-rule="evenodd" stroke-width="1" fill="#F9F9F9"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="-0.9s" dur="1s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle></g></svg>';
            }
        });
        document.getElementById("opcion_dividir").textContent = "Dividir Pizza";
        lista_i = [];
        lista_i_2 = [];
        pedido_pizza();
    }
}

function eliminar(id) {
    loadDoc("id=" + id, "../include/eliminar.php", function () {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("load_i_config").innerHTML = "";
            document.getElementById("ingredientes_i").innerHTML = xmlhttp.responseText;
        } else {
            document.getElementById("load_i_config").innerHTML = '<svg style="margin: 0 auto; text-align: center;" width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#2C3E50"><g fill-rule="evenodd" stroke-width="1" fill="#F9F9F9"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="-0.9s" dur="1s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle></g></svg>';
        }
    });
}

function agregar_i(event) {
    var x = event.keyCode;
    var nombre = document.getElementById("nombre").value;
    if (x == 13) {
        if (nombre !== " ") {
            if (nombre.length > 3) {
                loadDoc("nombre=" + nombre, "../include/agregar_i.php", function () {

                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        document.getElementById("load_i_config").innerHTML = "";
                        document.getElementById("ingredientes_i").innerHTML = xmlhttp.responseText;
                        document.getElementById("nombre").value = "";
                    } else {
                        document.getElementById("load_i_config").innerHTML = '<svg style="margin: 0 auto; text-align: center;" width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#2C3E50"><g fill-rule="evenodd" stroke-width="1" fill="#F9F9F9"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="-0.9s" dur="1s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle></g></svg>';
                    }
                });
            }
        }
    }
}

function mostrar_b(id) {
    var aux = "b" + id;
    document.getElementById(aux).style.display = "inherit";
}

function aplicar(id) {
    var nombre = document.getElementById("nombre_" + id).value;
    var contenido = document.getElementById("contenido_" + id).value;
    var precio = document.getElementById("precio_" + id).value;
    loadDoc("id=" + id + "&nombre=" + nombre + "&precio=" + precio + "&contenido=" + contenido, "../include/modificar_p.php", function () {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("contenido_paquetes").innerHTML = "";
            document.getElementById("contenido_paquetes").innerHTML = xmlhttp.responseText;
        } else {
            document.getElementById("contenido_paquetes").innerHTML = '<svg style="margin: 0 auto; text-align: center;" width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#2C3E50"><g fill-rule="evenodd" stroke-width="1" fill="#F9F9F9"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="-0.9s" dur="1s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle></g></svg>';
        }
    });
}

function eliminar_p(id) {
    loadDoc("id=" + id, "../include/eliminar_p.php", function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("contenido_paquetes").innerHTML = "";
            document.getElementById("contenido_paquetes").innerHTML = xmlhttp.responseText;
        } else {
            document.getElementById("contenido_paquetes").innerHTML = '<svg style="margin: 0 auto; text-align: center;" width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#2C3E50"><g fill-rule="evenodd" stroke-width="1" fill="#F9F9F9"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="-0.9s" dur="1s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle></g></svg>';
        }
    });

}

function agregar_p() {
    var nombre = document.getElementById("nombre_a").value;
    var contenido = document.getElementById("contenido_a").value;
    var precio = document.getElementById("precio_a").value;
    loadDoc("nombre=" + nombre + "&precio=" + precio + "&contenido=" + contenido, "../include/guardar_p.php", function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("contenido_paquetes").innerHTML = "";
            document.getElementById("contenido_paquetes").innerHTML = xmlhttp.responseText;
        } else {
            document.getElementById("contenido_paquetes").innerHTML = '<svg style="margin: 0 auto; text-align: center;" width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#2C3E50"><g fill-rule="evenodd" stroke-width="1" fill="#F9F9F9"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="-0.9s" dur="1s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle></g></svg>';
        }
    });
    document.getElementById("nombre_a").value = "";
    document.getElementById("contenido_a").value = "";
    document.getElementById("precio_a").value = "";

}

function pedido_p(id) {
    var item = document.getElementById("item_" + id);
    if (!item) {
        loadDoc("id=" + id, "include/agregar_item_paquete.php", function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("load_item").innerHTML = "";
                document.getElementById("lista_items").innerHTML = document.getElementById("lista_items").innerHTML + xmlhttp.responseText;
                var precio_n = parseInt(document.getElementById("precio_" + id).textContent);
                var total = parseInt(document.getElementById("total").textContent);
                document.getElementById("total").textContent = total + precio_n;
            } else {
                document.getElementById("load_item").innerHTML = '<svg style="margin: 0 auto; text-align: center;"  width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#2C3E50"><g fill-rule="evenodd" stroke-width="1" fill="#F9F9F9"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="-0.9s" dur="1s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle></g></svg>';
            }
        });
    } else {
        duplicar(id);
    }

}

function pedido_pizza() {
    var texto = "";
    document.getElementById("lista_ingredientes_pedido").innerHTML = "";
    var mitad = document.getElementById("check_mitad").checked;
    if (mitad == true) {
        texto = "Ingredientes mitad 1: " + lista_i.valueOf();
        texto = texto + "<br/>Ingredientes mitad 2: " + lista_i_2.valueOf();;
    } else {
        texto = "Ingredientes: " + lista_i.valueOf();
    }
        document.getElementById("lista_ingredientes_pedido").innerHTML = texto;
}
function agregar_pedido_pizza(tamaño){
    var aux = 2;
    var id = 0;
    do{
    id = Math.random();
    var existe = document.getElementById("item_"+id);
    if(!existe){
        aux = 0;
    }else{
    }
    }while(aux==2);
    var contenido_pizza = document.getElementById("lista_ingredientes_pedido").innerHTML;
    var costo = 100 + (lista_i.length * 8) + (lista_i_2.length*8);
    var bloque = '<div class="item" id="item_'+id+'"><div id="cantidad_'+id+'" class="cantidad">1</div><div class="contenido_item"><span class="contenido_item_nombre">Pizza '+tamaño+' </span><span>'+contenido_pizza+'</span><span><span>$</span><span id="precio_'+id+'">'+costo+'</span></span></div><div class="opciones_item"><span id="menos" class="icon-menos"  onclick="remover_item('+id+');"></span><span id="mas" class="icon-mas"  onclick="duplicar('+id+');"></span></div></div>';
    document.getElementById("lista_items").innerHTML = document.getElementById("lista_items").innerHTML + bloque;
    document.getElementById("total").innerHTML = parseInt(document.getElementById("total").innerHTML) + costo;
    limpiar();
}
function duplicar(elemento) {
    var cantidad = parseInt(document.getElementById("cantidad_"+elemento).textContent);
    document.getElementById("cantidad_" + elemento).textContent = cantidad + 1;
    var precio_n = parseInt(document.getElementById("precio_"+elemento).textContent);
    var total = parseInt(document.getElementById("total").textContent);
    document.getElementById("total").textContent = total + precio_n;
}

function remover_item(id) {
    var cantidad = parseInt(document.getElementById("cantidad_" + id).textContent);
    cantidad = cantidad - 1;
    document.getElementById("cantidad_" + id).textContent = cantidad;
    var precio_n = parseInt(document.getElementById("precio_" + id).textContent);
    var total = parseInt(document.getElementById("total").textContent);
    document.getElementById("total").textContent = total - precio_n;
    if (cantidad == 0) {
        borrarcodigo(id);
    }
}

function cambio() {
    var pago = parseInt(document.getElementById("pago").value);
    if (pago > 0) {
        var x = pago - parseInt(document.getElementById("total").value);
        if (x == " ") {
            document.getElementById("cambio").value = "0";
        } else {
            if (x < 0) {
                document.getElementById("cambio").style.borderColor = "red";
                document.getElementById("cambio").value = "0";
            } else {
                document.getElementById("cambio").value = x;
                document.getElementById("cambio").style.borderColor = "green";
            }
        }
    } else {
        document.getElementById("cambio").value = "0";
    }
}
function borrarcodigo(id) {
    var item = document.getElementById("item_" + id);
    var padre = item.parentNode;
    padre.removeChild(item);
}

function limpiar(){
    document.getElementById("check_mitad").checked = false;
    mitad();
    document.getElementById("lista_ingredientes_pedido").textContent = "";
}