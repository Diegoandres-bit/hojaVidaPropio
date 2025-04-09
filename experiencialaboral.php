<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/archivo.css">
    <script type="text/javascript" src="js/experiencialaboral.js"></script>
    <title>HojaVida</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body onload="cargaInicial(),carga_persistencia()">
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
                        3 - EXPERIENCIA LABORAL
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="row">
                <div class="col-sm-12 text-center">
                    <p>
                        RELACIONE SU EXPERIENCIA LABORAL O DE PRESTACIÓN DE SERVICIOS DE ESTRICTO ORDEN CRONOLÓGICO
                        COMENZANDO POR EL ACTUAL
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 text-center experiencialaboralgray">
                    <p>
                        EMPLEO ACTUAL O CONTRATO VIGENTE
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="empresa">EMPRESA O ENTIDAD</label>
                        <input type="text" class="form-control" id="empresa">
                    </div>
                </div>
                <div class="col-sm-4 text-center">
                    <div class="form-group">
                        <label >SELECCIONE</label> <br>
                        <div class="d-inline-block">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="publicapriv" id="ccRadio" value="Publica">
                                <label class="form-check-label" for="ccRadio">PUBLICA</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="publicapriv" id="ceRadio" value="Privada">
                                <label class="form-check-label" for="ceRadio">PRIVADA</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="pais">PAIS</label>
                        <select class="paises form-control" id="pais">
                            <option value="">Seleccione un país</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="depto">DEPARTAMENTO</label>
                        <select class="departamentos form-control" id="depto">
                            <option value="">Seleccione un departamento</option>
                        </select>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="muni">MUNICIPIO</label>
                        <select class="municipios form-control" id="muni">
                            <option value="">Seleccione un municipio</option>
                        </select>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="correo">CORREO ELECTRÓNICO ENTIDAD</label>
                        <input type="text" class="form-control" id="correo">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="telefono">TELFONOS</label>
                        <input type="text" class="form-control" id="telefono">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="ingreso">FECHA DE INGRESO</label>
                        <input type="date" class="form-control" id="fecha_ingreso" max="2025-01-01" min="1970-01-01">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="retiro">FECHA DE RETIRO</label>
                        <input type="date" class="form-control" id="fecha_retiro" max="2026-01-01" min="1970-01-01">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="cargo">CARGO O CONTRATO ACTUAL</label>
                        <input type="text" class="form-control" id="cargo">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="dependencia">DEPENDENCIA</label>
                        <input type="text" class="form-control" id="dependencia">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="direccion">DIRECCION</label>
                        <input type="text" class="form-control" id="direccion">
                    </div>
                </div>
            </div>
        </div><br>

        <div class="row">
            <div class="col-sm-12 text-center experiencialaboralgray">
                <p>
                    EMPLEO O CONTRATO ANTERIOR
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="empresa1">EMPRESA O ENTIDAD</label>
                    <input type="text" class="form-control" id="empresa1">
                </div>
            </div>
            <div class="col-sm-4 text-center">
                <div class="form-group">
                    <label for="usr">SELECCIONE</label> <br>
                    <div class="d-inline-block">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="publicapriv1" id="ccRadio1" value="Publica">
                            <label class="form-check-label" for="ccRadio1">PUBLICA</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="publicapriv1" id="ceRadio1" value="Privada">
                            <label class="form-check-label" for="ceRadio1">PRIVADA</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="pais1">PAIS</label>
                    <select class="paises form-control" id="pais1">
                            <option value="">Seleccione un país</option>
                        </select>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="depto1">DEPARTAMENTO</label>
                    <select class="departamentos form-control" id="depto1">
                            <option value="">Seleccione un departamento</option>
                        </select>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="muni1">MUNICIPIO</label>
                    <select class="municipios form-control" id="muni1">
                            <option value="">Seleccione un municipio</option>
                        </select>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="correo1">CORREO ELECTRÓNICO ENTIDAD</label>
                    <input type="text" class="form-control" id="correo1">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="telefono1">TELFONOS</label>
                    <input type="text" class="form-control" id="telefono1">
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="ingreso1">FECHA DE INGRESO</label>
                    <input type="date" class="form-control" id="ingreso1" max="2024-11-20" min="1970-01-01">
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="retiro1">FECHA DE RETIRO</label>
                    <input type="date" class="form-control" id="retiro1" max="2025-01-01" min="1970-01-01">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="cargo1">CARGO O CONTRATO ANTERIOR</label>
                    <input type="text" class="form-control" id="cargo1">
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="dependencia1">DEPENDENCIA</label>
                    <input type="text" class="form-control" id="dependencia1">
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="direccion1">DIRECCION</label>
                    <input type="text" class="form-control" id="direccion1">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12" id="agregarmasexp1">
                
            </div>
        </div>
        <button type="button" class="btn btn-primary" onclick="masEmpleo()">+</button>
        <br><br>
        <div class="row">
            <div class="col-sm-12">
                <a href="http://localhost/ParcialHojaDeVida/formacionacademica.php" class="btn btn-primary"
                    role="button">Anterior</a>
                    <button type="button" class="btn btn-danger" onclick="persistencialaboral()">Guardar datis</button>
                <a href="http://localhost/ParcialHojaDeVida/tiempototalexperiencia.php" class="btn btn-primary"
                    role="button">Siguiente</a>
                   
            </div>
        </div>

        <div class="obtenerDatos" id="obtenerDatosExperienciaLaboral">
        </div>
    </div>



    </div>