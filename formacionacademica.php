<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/archivo.css">
    <script type="text/javascript" src="js/formacionacademica.js"></script>
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
        </nav>



        <div>
            <div class="row">
                <div class="col-sm-4" id="apartado">
                    <div class="title text-center">
                        2 - FORMACIÓN ACADÉMICA
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col-12">
                <h5>EDUCACIÓN BÁSICA Y MEDIA</h5>
                <p>Marque con una X el último grado aprobado (Los grados de 1o. a 6o. de bachillerato equivalen a los
                    grados 6o. a 11o. de educación básica secundaria y media)</p>
            </div>
        </div>

        <div class="row mb-3">
            <!-- Educación básica -->
            <div class="col-md-3">
                <label>Primaria</label>
                <div>
                    <input type="checkbox" id="primaria1" value="1"> <label for="primaria1">1o.</label>
                    <input type="checkbox" id="primaria2" value="2"> <label for="primaria2">2o.</label>
                    <input type="checkbox" id="primaria3" value="3"> <label for="primaria3">3o.</label>
                    <input type="checkbox" id="primaria4" value="4"> <label for="primaria4">4o.</label>
                    <input type="checkbox" id="primaria5" value="5"> <label for="primaria5">5o.</label>
                </div>
            </div>

            <!-- Secundaria -->
            <div class="col-md-3">
                <label>Secundaria</label>
                <div>
                    <input type="checkbox" id="secundaria6" value="6"> <label for="secundaria6">6o.</label>
                    <input type="checkbox" id="secundaria7" value="7"> <label for="secundaria7">7o.</label>
                    <input type="checkbox" id="secundaria8" value="8"> <label for="secundaria8">8o.</label>
                    <input type="checkbox" id="secundaria9" value="9"> <label for="secundaria9">9o.</label>
                </div>
            </div>

            <!-- Media -->
            <div class="col-md-3">
                <label>Media</label>
                <div>
                    <input type="checkbox" id="media10" value="10"> <label for="media10">10</label>
                    <input type="checkbox" id="media11" value="11"> <label for="media11">11</label>
                </div>
            </div>

            <!-- Título obtenido -->
            <div class="col-md-3">
                <label for="tituloBasica">Título Obtenido</label>
                <input type="text" class="form-control" id="tituloBasica" placeholder="Título">
            </div>
        </div>

        <!-- Fecha de Grado -->
        <div class="row mb-3">
            <div class="col-md-3">
                <label for="mesGradoBasica">Mes de Grado</label>
                <select class="form-control" id="mesGradoBasica">
                    <option value="Null">Seleccione</option>
                    <option value="Enero">Enero</option>
                    <option value="Febrero">Febrero</option>
                    <option value="Marzo">Marzo</option>
                    <option value="Abril">Abril</option>
                    <option value="Mayo">Mayo</option>
                    <option value="Junio">Junio</option>
                    <option value="Julio">Julio</option>
                    <option value="Agosto">Agosto</option>
                    <option value="Septiembre">Septiembre</option>
                    <option value="Octubre">Octubre</option>
                    <option value="Noviembre">Noviembre</option>
                    <option value="Diciembre">Diciembre</option>
                </select>
            </div>

            <div class="col-md-3">
                <label for="anoGradoBasica">Año de Grado</label>
                <input type="text" class="form-control" id="anoGradoBasica" placeholder="Año">
            </div>
        </div>

        <!-- Sección: Educación Superior (Pregrado y Postgrado) -->
        <div class="row mb-3">
            <div class="col-12">
                <h5>EDUCACIÓN SUPERIOR (PREGRADO Y POSTGRADO)</h5>
                <p>Diligencie este punto en estricto orden cronológico, en modalidad académica.</p>
            </div>
        </div>

        <div class="row" id="agregarMasEduSup">
            <div class="row mb-3">
                <div class="col-md-2">
                    <label for="modalidad1">Modalidad Académica</label>
                    <select class="form-control" id="modalidad1">
                        <option>TC (Técnica)</option>
                        <option>TL (Tecnológica)</option>
                        <option>TE (Tecnología Especializada)</option>
                        <option>UN (Universitaria)</option>
                        <option>ES (Especialización)</option>
                        <option>MG (Maestría o Magister)</option>
                        <option>DOC (Doctorado o PhD)</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="semestresAprobados1">No. de Semestres Aprobados</label>
                    <input type="text" class="form-control" id="semestresAprobados1">
                </div>
                <div class="col-md-2">
                    <label>Graduado</label><br>
                    <input type="radio" name="graduado1" id="graduadoSi1"> <label for="graduadoSi1">Si</label>
                    <input type="radio" name="graduado1" id="graduadoNo1"> <label for="graduadoNo1">No</label>
                </div>
                <div class="col-md-3">
                    <label for="nombreEstudios1">Nombre de los Estudios o Título Obtenido</label>
                    <input type="text" class="form-control" id="nombreEstudios1">
                </div>
                <div class="col-md-2">
                    <label for="mesGradoBasica1">Mes de Grado</label>
                    <select class="form-control" id="mesGradoBasica1">
                        <option value="Null">Seleccione</option>
                        <option value="Enero">Enero</option>
                        <option value="Febrero">Febrero</option>
                        <option value="Marzo">Marzo</option>
                        <option value="Abril">Abril</option>
                        <option value="Mayo">Mayo</option>
                        <option value="Junio">Junio</option>
                        <option value="Julio">Julio</option>
                        <option value="Agosto">Agosto</option>
                        <option value="Septiembre">Septiembre</option>
                        <option value="Octubre">Octubre</option>
                        <option value="Noviembre">Noviembre</option>
                        <option value="Diciembre">Diciembre</option>
                    </select>
                </div>
                <div class="col-md-1">
                    <label for="anoGradoSuperior1">Año</label>
                    <input type="text" class="form-control" id="anoGradoSuperior1" placeholder="Año">
                </div>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-12 text-left">
                <button type="button" class="btn btn-primary" onclick="agregarMasEduSup()">+</button>
            </div>
        </div>

        <!-- Sección: Idiomas -->
        <div class="row mb-3">
            <div class="col-12">
                <h5>ESPECIFIQUE LOS IDIOMAS DIFERENTES AL ESPAÑOL QUE HABLA, LEE, ESCRIBE</h5>
            </div>
        </div>

        <div class="row" id="containerIdiomas">
            <div class="row mb-3">
                <div class="col-md-2">
                    <label for="idioma1">Idioma</label>
                    <input type="text" class="form-control" id="idioma1">
                </div>
                <div class="col-md-2">
                    <label>Lo Habla</label><br>
                    <input type="radio" name="habla1" id="hablaR1" value="Regular"> <label for="hablaR1">R</label>
                    <input type="radio" name="habla1" id="hablaB1" value="Bien"> <label for="hablaB1">B</label>
                    <input type="radio" name="habla1" id="hablaMB1" vale="Muy bien"> <label for="hablaMB1">MB</label>
                </div>
                <div class="col-md-2">
                    <label>Lo Lee</label><br>
                    <input type="radio" name="lee1" id="leeR1" value="Regular"> <label for="leeR1">R</label>
                    <input type="radio" name="lee1" id="leeB1" value="Bien"> <label for="leeB1">B</label>
                    <input type="radio" name="lee1" id="leeMB1" value="Muy bien"> <label for="leeMB1">MB</label>
                </div>
                <div class="col-md-2">
                    <label>Lo Escribe</label><br>
                    <input type="radio" name="escribe1" id="escribeR1" value="Regular"> <label for="escribeR1">R</label>
                    <input type="radio" name="escribe1" id="escribeB1" value="Bien"> <label for="escribeB1">B</label>
                    <input type="radio" name="escribe1" id="escribeMB1" value="Muy bien"> <label for="escribeMB1">MB</label>
                </div>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-12 text-left">
                <button type="button" class="btn btn-primary" onclick="agregarIdiomas()">+</button>
            </div>
        </div><br><br>

        <div class="row">
            <div class="col-sm-12">
            <a href="http://localhost/ParcialHojaDeVida/index.php" class="btn btn-primary" role="button">Anterior</a>  
                <a href="http://localhost/ParcialHojaDeVida/experiencialaboral.php" class="btn btn-primary" role="button">Siguiente</a>
                
             </div>
        </div>

    </div>