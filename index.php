<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/archivo.css">
    <script type="text/javascript" src="js/index.js"></script>
    <title>HojaVida</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body onload="cargaInicial()">
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
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="container">
                    <div class="row w-100">
                        <div class="col-3">
                            <a class="nav-link" href="index.html" id="hov">Datos Personales</a>
                        </div>
                        <div class="col-3">
                            <a class="nav-link" href="formacionacademica.html" id="hov">Formación Académica</a>
                        </div>
                        <div class="col-3">
                            <a class="nav-link" href="experiencialaboral.html" id="hov">Experiencia Laboral</a>
                        </div>
                        <div class="col-3">
                            <a class="nav-link" href="tiempototalexperiencia.html" id="hov">Experiencia Total</a>
                        </div>
                 
                    
                    </div>
                </div>
            </div>
        </nav>



        <div>
            <div class="row">
                <div class="col-sm-4" id="apartado">
                    <div class="title text-center">
                        1 - DATOS PERSONALES
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="row">
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="primer_apellido">PRIMER APELLIDO:</label>
                        <input type="text" class="form-control" id="primer_apellido">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="segundo_apellido">SEGUNDO APELLIDO (O DE CASADA):</label>
                        <input type="text" class="form-control" id="segundo_apellido">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="nombres">NOMBRES</label>
                        <input type="text" class="form-control" id="nombres">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-5">
                    <div class="form-group">
                        <label>DOCUMENTO DE IDENTIFICACION</label> <br>
                        <div class="d-inline-block">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="optidentificacion" id="ccRadio" value="CC">
                                <label class="form-check-label" for="ccRadio">C.C</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="optidentificacion" id="ceRadio" value="CE">
                                <label class="form-check-label" for="ceRadio">C.E</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="optidentificacion" id="pasRadio" value="PAS">
                                <label class="form-check-label" for="pasRadio">PAS</label>
                            </div>
                            <input type="text" class="form-control-inline" id="docNumber">
                        </div>
                    </div>
                </div>

                <div class="col-sm-2">
                    <div class="form-group">
                        <label>SEXO</label> <br>
                        <div class="d-inline-block">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="optsexo" id="femaleRadio" value="Femenino">
                                F<label class="form-check-label" for="femaleRadio"></label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="optsexo" id="maleRadio" value="Masculino">
                                M<label class="form-check-label" for="maleRadio"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="form-group">
                        <label for="nacionalidad">NACIONALIDAD</label> <br>
                        <div class="d-inline-block">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="optnacionalidad" id="colRadio" value="Colombiano"                                   >
                                COL<label class="form-check-label" for="colRadio"></label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="optnacionalidad" id="extRadio" value="Extranjero">
                                EXTRANJERO<label class="form-check-label" for="extRadio"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="form-group">
                        <label for="pais_nacionalidad">PAÍS</label>
                        <select class="paises form-control" id="pais_nacionalidad">
                            <option value="">Seleccione</option>
                        </select>
                    </div>
                </div>

            </div>

            <div class="row align-items-center">
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="libreta">LIBRETA MILITAR</label> <br>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="optlibreta" id="primeraClase"
                                value="Si">
                            <label class="form-check-label" for="primeraClase">SI</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="optlibreta" id="segundaClase"
                                value="No">
                            <label class="form-check-label" for="segundaClase">NO</label>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="form-group">
                        <label for="numeroLibreta">NÚMERO</label> <br>
                        <input type="text" class="form-control" id="numeroLibreta">
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="form-group">
                        <label for="dmLibreta">D.M</label> <br>
                        <input type="text" class="form-control" id="dmLibreta">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-6">
                    <h6>FECHA Y LUGAR DE NACIMIENTO</h6>
                    <div class="form-group">
                        <label for="fecha_nacimiento">FECHA</label>
                        <input type="date" class="form-control" id="fecha_nacimiento">
                    </div>
                    <div class="form-group">
                        <label for="pais_nacimiento">PAÍS</label>
                        <select class="paises form-control" id="pais_nacimiento">
                            <option value="">Seleccione</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="depto_nacimiento">DEPTO</label>
                        <select class="departamentos form-control" id="depto_nacimiento">
                            <option value="">Seleccione un departamento</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="municipio_nacimiento">MUNICIPIO</label>
                        <select class="municipios form-control" id="municipio_nacimiento">
                            <option value="">Seleccione un municipio</option>
                        </select>
                    </div>
                </div>

                <div class="col-sm-6">
                    <h6>DIRECCIÓN DE CORRESPONDENCIA</h6>
                    <div class="form-group">
                        <label for="pais_correspondencia">PAÍS</label>
                        <select class="paises form-control" id="pais_correspondencia">
                            <option value="">Seleccione un país</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="depto_correspondencia">DEPTO</label>
                        <select class="departamentos form-control" id="depto_correspondencia">
                            <option value="">Seleccione un departamento</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="municipio_correspondencia">MUNICIPIO</label>
                        <select class="municipios form-control" id="municipio_correspondencia">
                            <option value="">Seleccione un municipio</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="telefono">TELÉFONO</label>
                        <input type="text" class="form-control" id="telefono">
                    </div>
                    <div class="form-group">
                        <label for="email">EMAIL</label>
                        <input type="email" class="form-control" id="email">
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <button type="button" class="btn btn-primary" onclick="obtenerDatos()">Obtener Datos</button>
                <button type="button" class="btn btn-primary" onclick="agregarContenido()">agregarContenido</button>
                <a href="http://localhost/ParcialHojaDeVida/formacionacademica.php" class="btn btn-primary" role="button">Siguiente</a> 
             </div>
        </div>

        <div class="agregarContenido" id="agregarContenido">


        </div>        
    </div>
    </div>

    </div>
    <br>
</body>

</html>