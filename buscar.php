<?php
include 'bd.php'; 
header('Content-Type: application/json');

$inputData = file_get_contents('php://input');
$POST = json_decode($inputData, true);

if ($POST === null) {
    echo json_encode(["status" => "error", "message" => "Error al decodificar el JSON"]);
    exit;
}

$documento = $POST['documento'];  
$sql_datos_personales = "SELECT * FROM datos_personales WHERE numero_doc = ?";
$stmt_datos_personales = $conn->prepare($sql_datos_personales);
$stmt_datos_personales->bind_param('s', $documento);
$stmt_datos_personales->execute();
$result_datos_personales = $stmt_datos_personales->get_result();
$datos_personales = $result_datos_personales->fetch_assoc();

$sql_educacion_basica = "SELECT * FROM educacion_basica WHERE numero_doc = ?";
$stmt_educacion_basica = $conn->prepare($sql_educacion_basica);
$stmt_educacion_basica->bind_param('s', $documento);
$stmt_educacion_basica->execute();
$result_educacion_basica = $stmt_educacion_basica->get_result();
$educacion_basica = $result_educacion_basica->fetch_all(MYSQLI_ASSOC);

$sql_educacion_superior = "SELECT * FROM educacion_superior WHERE numero_doc = ?";
$stmt_educacion_superior = $conn->prepare($sql_educacion_superior);
$stmt_educacion_superior->bind_param('s', $documento);
$stmt_educacion_superior->execute();
$result_educacion_superior = $stmt_educacion_superior->get_result();
$educacion_superior = $result_educacion_superior->fetch_all(MYSQLI_ASSOC);

$sql_idiomas = "SELECT * FROM idioma WHERE numero_doc = ?";
$stmt_idiomas = $conn->prepare($sql_idiomas);
$stmt_idiomas->bind_param('s', $documento);
$stmt_idiomas->execute();
$result_idiomas = $stmt_idiomas->get_result();
$idiomas = $result_idiomas->fetch_all(MYSQLI_ASSOC);

$sql_empleo_actual = "SELECT * FROM empleo_actual WHERE numero_doc = ?";
$stmt_empleo_actual = $conn->prepare($sql_empleo_actual);
$stmt_empleo_actual->bind_param('s', $documento);
$stmt_empleo_actual->execute();
$result_empleo_actual = $stmt_empleo_actual->get_result();
$empleo_actual = $result_empleo_actual->fetch_assoc();

$sql_empleo_anterior = "SELECT * FROM empleo_anterior WHERE numero_doc = ?";
$stmt_empleo_anterior = $conn->prepare($sql_empleo_anterior);
$stmt_empleo_anterior->bind_param('s', $documento);
$stmt_empleo_anterior->execute();
$result_empleo_anterior = $stmt_empleo_anterior->get_result();
$empleo_anterior = $result_empleo_anterior->fetch_all(MYSQLI_ASSOC);

$sql_tiempo_total = "SELECT * FROM tiempo_total WHERE numero_doc = ?";
$stmt_tiempo_total = $conn->prepare($sql_tiempo_total);
$stmt_tiempo_total->bind_param('s', $documento);
$stmt_tiempo_total->execute();
$result_tiempo_total = $stmt_tiempo_total->get_result();
$tiempo_total = $result_tiempo_total->fetch_assoc();

$response = [
    'status' => 'success',
    'datos_personales' => $datos_personales,
    'educacion_basica' => $educacion_basica,
    'educacion_superior' => $educacion_superior,
    'idiomas' => $idiomas,
    'empleo_actual' => $empleo_actual,
    'empleo_anterior' => $empleo_anterior,
    'tiempo_total' => $tiempo_total
];

echo json_encode($response);
?>
