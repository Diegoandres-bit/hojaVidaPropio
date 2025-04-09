<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/archivo.css">
    <script type="text/javascript" src="js/tiempototalexp.js"></script>
    <title>HojaVida</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>
    <div class="col-sm-12 text-center border">
        <h1>Hoja de Vida</h1>
    </div>

    <div class="container text-left border">
        <div class="row">
            <div class="col-sm-4 border">
                <img src="images/escudo.jpg" alt="escudoColombia" class=".img-responsive" width="300px" height="300px">
            </div>
            <div class="col-sm-4 border">
                <p>FORMATO UNICO</p>
                <h1>HOJA DE VIDA</h1>
                <p>Persona Natural</p>
                <p>(Leyes 190 de 1995, 489 y 443 de 1998)</p>
            </div>
            <div class="col-sm-4 border">
                <img src="images/logobanco.png" alt="logoBanco" class=".img-responsive" width="300px" height="300px">
            </div>
        </div><br>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav w-100">
                <li class="nav-item col-3">
                    <a class="nav-link" href="index.php" id="hov">Datos Personales</a>
                </li>
                <li class="nav-item col-2">
                    <a class="nav-link" href="formacionacademica.php" id="hov">Formación Académica</a>
                </li>
                <li class="nav-item col-2">
                    <a class="nav-link" href="experiencialaboral.php" id="hov">Experiencia Laboral</a>
                </li>
                <li class="nav-item col-2">
                    <a class="nav-link" href="tiempototalexperiencia.php" id="hov">Experiencia Total</a>
                </li>
                <li class="nav-item col-3">
                    <a class="nav-link" href="mandar.php" id="hov">Mandar Datos</a>
                </li>
            </ul>
        </div>
    </nav>


        <div>
            <div class="row">
                <div class="col-sm-4" id="apartado">
                    <div class="title text-center">
                        4 - TIEMPO TOTAL DE EXPERIENCIA
                    </div>
                </div>
            </div>
        </div>



        <p>INDIQUE EL TIEMPO TOTAL DE SU EXPERIENCIA LABORAL EN NÚMERO DE AÑOS Y MESES.</p> <br>

        <div class="row font-weight-bold">
            <div class="col-md-6">Ocupación</div>
            <div class="col-md-3">Años</div>
            <div class="col-md-3">Meses</div>
        </div> <br>

        <div class="row mt-2">
            <div class="col-md-6">Servidor Público</div>
            <div class="col-md-3">
                <input type="text" class="form-control" id="aniosServidorPublico" placeholder="Años">
            </div>
            <div class="col-md-3">
                <input type="text" class="form-control" id="mesesServidorPublico" placeholder="Meses">
            </div>
        </div>


        <div class="row mt-2">
            <div class="col-md-6">Empleado del Sector Privado</div>
            <div class="col-md-3">
                <input type="text" class="form-control" id="aniosSectorPrivado" placeholder="Años">
            </div>
            <div class="col-md-3">
                <input type="text" class="form-control" id="mesesSectorPrivado" placeholder="Meses">
            </div>
        </div>

        <div class="row mt-2">
            <div class="col-md-6">Trabajador Independiente</div>
            <div class="col-md-3">
                <input type="text" class="form-control" id="aniosIndependiente" placeholder="Años">
            </div>
            <div class="col-md-3">
                <input type="text" class="form-control" id="mesesIndependiente" placeholder="Meses">
            </div>
        </div>

        <div class="row mt-4 font-weight-bold">
            <div class="col-md-6">Total Tiempo Experiencia</div>
            <div class="col-md-3">
                <input type="text" class="form-control" id="aniosTotal" placeholder="Años">
            </div>
            <div class="col-md-3">
                <input type="text" class="form-control" id="mesesTotal" placeholder="Meses">
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 text-center">
                <button type="button" class="btn btn-primary" onclick="calcularAnios()">Calcular Total</button>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <a href="http://localhost/ParcialHojaDeVida/experiencialaboral.php" class="btn btn-primary" role="button">Anterior</a>
                <button type="button" class="btn btn-danger" onclick="persistenciaAnos()">Guardar datos</button>
                <a  href="http://localhost/ParcialHojaDeVida/mandar.php" class="btn btn-primary" role="button" type="submit" >Siguiente</a> 
                
            </div>
        </div>

        <div class="obtenerDatos" id="porDefinirse">
        </div>


    </div>