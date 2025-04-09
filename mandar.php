<!DOCTYPE html>
<html lang="en">
<head>
    <script type="text/javascript" src="js/mander.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> 
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
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
    <div class="row">
    <div class="col-6">
        <button onclick="mandardatos()">MANDAR HOJA DE VIDA</button>
    </div>
    </div>
       
    <div class="container">
        <h1 class="text-center mb-4">Buscar Datos por Cédula</h1>

        <!-- Formulario de búsqueda -->
        <div class="mb-4">
            <label for="documento" class="form-label">Ingrese su cédula:</label>
            <input type="text" id="documento" class="form-control" placeholder="Cédula" required>
        </div>
        <button class="btn btn-primary w-100" onclick="buscarDatos()">Buscar</button>

        <div id="resultados" class="mt-4">

        </div>
    </div>

</body>
</html>