<footer>
        <p>Sistema de Información y Punto de Venta Sr. Pizza &#8471;</p>
        <span> Copyright &copy; <?php echo (date("Y"));?> Todos los derechos reservados  <br>
        Investigación, Innovación y Desarrollo de Tecnologías de Información S.A. de C.V</span>
    </footer>
    <script>
        var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
        var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
        var f = new Date();
        document.getElementById("fecha_actual").innerHTML = diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
        limpiar();
    </script>


    <script type="text/javascript">
        {
            if (history.forward(1))
                location.replace(history.forward(1))
        }
    </script>