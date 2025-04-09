<?php
    $host="localhost";
    $usuario = "root";
    $contra = "pepealcachofa123";
    $base = "hojadevidaweb";
    $conn = mysqli_connect($host, $usuario, $contra, $base);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

?>