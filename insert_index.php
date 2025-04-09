<?php
include 'bd.php';
$inputData = file_get_contents('php://input');

$POST = json_decode($inputData, true);

if ($POST === null) {
    echo json_encode(["status" => "error", "message" => "Error al decodificar el JSON"]);
    exit;
}

    $primerApellido = $POST['primerApellido'];
    $segundoApellido = $POST['segundoApellido'];
    $nombres = $POST['nombres'];
    $documento = $POST['documento'];
    
    $numeroLibreta = $POST['numeroLibreta'];
    $dmLibreta = $POST['dmLibreta'];
    $telefono = $POST['telefono'];
    $email = $POST['email'];
    $sexo = $POST['sexo'];
    $esColombiano = $POST['esColombiano'];
    $tipoIdentificacion = $POST['tipoIdentificacion'];
    $tieneLibretaMilitar = $POST['tieneLibretaMilitar'];
    $paisNacionalidad = $POST['paisNacionalidad'];
    $paisNacimiento = $POST['paisNacimiento'];
    $deptoNacimiento = $POST['deptoNacimiento'];
    $municipioNacimiento = $POST['municipioNacimiento'];
    $paisCorrespondencia = $POST['paisCorrespondencia'];
    $deptoCorrespondencia = $POST['deptoCorrespondencia'];
    $municipioCorrespondencia = $POST['municipioCorrespondencia'];
    $fechaNacimiento = $POST['fechaNacimiento'];

    $sql = "INSERT INTO datos_personales 
            (tipo_doc,numero_doc,nombre,primer_apellido, segundo_apellido,sexo,esColombiano,nacionalidad,tieneLibreta,numero_libreta,dm,fecha_nac,pais_nac,depto_nac,municipio_nac,pais_res,depto_res,municipio_res,telefono,correo )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)";
    if ($stmt = $conn->prepare($sql)) {

        $stmt->bind_param(
            "ssssssssssssssssssss",
            $tipoIdentificacion,
            $documento,
            $nombres,
            $primerApellido,
            $segundoApellido,
            $sexo,
            $esColombiano,
            $paisNacionalidad,
            $tieneLibretaMilitar,
            $numeroLibreta,
            $dmLibreta,
            $fechaNacimiento,
            $paisNacimiento,
            $deptoNacimiento,
            $municipioNacimiento,
            $paisCorrespondencia,
            $deptoCorrespondencia,
            $municipioCorrespondencia,
            $telefono,
            $email
        );


        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Datos insertados correctamente"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error al insertar los datos: " . $stmt->error]);
        }

    } else {
        echo json_encode(["status" => "error", "message" => "Error al preparar la consulta SQL"]);
    }

    $eduBasica = (int) $POST['eduBasica'];
    $tituloObtenidoBasica = $POST['tituloObtenidoBasica'];
    $mesGradoBasica = $POST['mesGradoBasica'];
    $anoGradoBasica = (int) $POST['anoGradoBasica'];
    $edu_sup = $POST['edu_sup']; 
    $idiomas = $POST['idiomas'];
    $sql_educacion_basica = 'INSERT INTO educacion_basica (numero_doc,grado_basico,titulo_obtenido,mes_grado,anio_grado)
values (?,?,?,?,?)';
    if ($sup = $conn->prepare($sql_educacion_basica)) {
        $sup->bind_param(
            "sissi",
            $documento,
            $eduBasica,
            $tituloObtenidoBasica,
            $mesGradoBasica,
            $anoGradoBasica,
        );
        if ($sup->execute()) {
            echo json_encode(["status" => "success", "message" => "Datos insertados correctamente"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error al insertar los datos: " . $sup->error]);
            echo $edu_sup;
            
        }

    } else {
        echo json_encode(["status" => "error", "message" => "Error al preparar la consulta SQL"]);
    }

        foreach ($edu_sup as $index => $data) {
            $modalidad = $data['modalidad'];
            $semestresAprobados = (int)$data['semestresAprobados'];
            $esGraduado = $data['esGraduado'];
            $tituloObtenidoSuperior = $data['tituloObtenidoSuperior'];
            $mesGradoSuperior = $data['mesGradoSuperior'];
            $anioGradoSuperior = (int)$data['anioGradoSuperior'];
        $sql_sup = 'INSERT INTO educacion_superior (numero_doc,modalidad,semestres,esGraduado,nombre_titulo,mes_grado,anio_grado)
        VALUES (?,?,?,?,?,?,?)';
        if ($a = $conn->prepare($sql_sup)) {

            $a->bind_param(
                'ssisssi',
                $documento,
                $modalidad,
                $semestresAprobados,
                $esGraduado,
                $tituloObtenidoSuperior,
                $mesGradoSuperior,
                $anioGradoSuperior,
            );
            if ($a->execute()) {
                echo json_encode(["status" => "success", "message" => "Datos insertados correctamente"]);
            } else {
                echo json_encode(["status" => "error", "message" => "Error al insertar los datos: " . $a->error]);
            }

        } else {
            echo json_encode(["status" => "error", "message" => "Error al preparar la consulta SQL"]);
        }


    }
    foreach ($idiomas as $index => $idi) {
        $nombreidioma = $idi['nombreIdioma'];
        $habla = $idi['habla'];
        $lee = $idi['lee'];
        $escribe = $idi['escribe'];
        $sql_idioma = 'INSERT INTO idioma (numero_doc,idioma,habla,lee,escribe)
        values (?,?,?,?,?)';
        if ($idio = $conn->prepare($sql_idioma)) {
            $idio->bind_param(
                'sssss',
                $documento,
                $nombreidioma,
                $habla,
                $lee,
                $escribe,
            );
            if ($idio->execute()) {
                echo json_encode(["status" => "success", "message" => "Datos insertados correctamente"]);
            } else {
                echo json_encode(["status" => "error", "message" => "Error al insertar los datos: " . $idio->error]);
            }

        } else {
            echo json_encode(["status" => "error", "message" => "Error al preparar la consulta SQL"]);
        }
    }
    $sql_emActual = 'INSERT INTO empleo_actual (numero_doc ,empresa,caracter,pais,departamento,municipio,correo_entidad,telefono_entidad,fecha_ingreso,fecha_retiro,cargo,dependencia,direccion)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
    $empresaActual = $POST['empresaActual'];
    $esPrivadaActual = $POST['esPrivadaActual'];
    $pais = $POST['pais'];
    $depto = $POST['depto'];
    $municipio = $POST['municipio'];
    $correo_entidad = $POST['correo_entidad'];
    $telefono = $POST['telefono'];
    $ingreso = $POST['ingreso'];
    $retiro = $POST['retiro'];
    $cargo = $POST['cargo'];
    $dependencia = $POST['dependencia'];
    $direccion = $POST['direccion'];

    $exp_anterior = $POST['exp_anterior'];
    if ($actual = $conn->prepare($sql_emActual)) {
        $actual->bind_param(
            'sssssssssssss',
            $documento,
            $empresaActual,
            $esPrivadaActual,
            $pais,
            $depto,
            $municipio,
            $correo_entidad,
            $telefono,
            $ingreso,
            $retiro,
            $cargo,
            $dependencia,
            $direccion,
        );
        if ($actual->execute()) {
            echo json_encode(["status" => "success", "message" => "Datos insertados correctamente"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error al insertar los datos: " . $actual->error]);
            echo $exp_anterior;
         }

    } else {
        echo json_encode(["status" => "error", "message" => "Error al preparar la consulta SQL"]);
    }
    
    foreach ($exp_anterior as $index => $valor) {
        $empresaAnterior = $valor['empresaAnterior'];
        $esPrivadaAnterior = $valor['esPrivadaAnterior'];
        $pais = $valor['pais'];
        $depto = $valor['depto'];
        $municipio = $valor['municipio'];
        $correo = $valor['correo'];
        $telefono = $valor['telefono'];
        $ingreso = $valor['ingreso'];
        $retiro = $valor['retiro'];
        $cargo = $valor['cargo'];
        $dependencia = $valor['dependencia'];
        $direccion = $valor['direccion'];

        $sql_anterior = 'INSERT INTO empleo_anterior (numero_doc,empresa,caracter,pais,departamento,municipio,correo_entidad,telefono_entidad,fecha_ingreso,fecha_retiro,cargo,dependencia,direccion)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
    if($anter=$conn->prepare($sql_anterior)) {
        $anter->bind_Param(
            'sssssssssssss',
            $documento,
        $empresaAnterior,
            $esPrivadaAnterior,
            $pais,
            $depto,
            $municipio,
            $correo_entidad,
            $telefono,
            $ingreso,
            $retiro,
            $cargo,
            $dependencia,
            $direccion,
        );
        if ($anter->execute()) {
            echo json_encode(["status" => "success", "message" => "Datos insertados correctamente"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error al insertar los datos: " . $anter->error]);
        }

    } else {
        echo json_encode(["status" => "error", "message" => "Error al preparar la consulta SQL"]);
    }
     }
     $aniosServidorPublico=(int)$POST['aniosServidorPublico'];
     $aniosSectorPrivado=(int)$POST['aniosSectorPrivado'];
     $aniosIndependiente=(int)$POST['aniosIndependiente'];
     $mesesServidorPublico=(int)$POST['mesesServidorPublico'];
     $mesesSectorPrivado=(int)$POST['mesesSectorPrivado'];
     $mesesIndependiente=(int)$POST['mesesIndependiente'];
     $sql_anios='INSERT INTO tiempo_total(numero_doc ,publico_anios,publico_meses,privado_anios,privado_meses,independiente_anios,independiente_meses)
     VALUES(?,?,?,?,?,?,?)';
     if($anios=$conn->prepare($sql_anios)) {
        $anios->bind_param('siiiiii',
         $documento,
         $aniosServidorPublico,
         $mesesServidorPublico,
         $aniosSectorPrivado,
         $mesesSectorPrivado,
         $aniosIndependiente,
         $mesesIndependiente
     );
     if($anios->execute()) {
        echo json_encode(["status" => "success", "message" => "Datos insertados correctamente"]);
     }else {
        echo json_encode(["status" => "error", "message" => "Error al insertar los datos: " . $anios->error]);
    }
        }else {
            echo json_encode(["status" => "error", "message" => "Error al preparar la consulta SQL"]);
        }
  
?>