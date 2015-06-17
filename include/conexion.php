<?php
$mysqli = new mysqli("localhost", "root", "bdpass5.0", "sr_pizza");
//$mysqli = new mysqli("db580080117.db.1and1.com", "dbo580080117", "bdpass5.0", "db580080117");
if ($mysqli->connect_errno) {
    echo "Fallo al contenctar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
?>
