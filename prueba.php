<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Validación</title>
    <style>
        .mensaje {
            padding: 5px;
            font-size: 14px;
            margin-top: 5px;
            border-radius: 3px;
        }
        .error {
            color: #f44336;
            background-color: #ffdada;
        }
        .exito {
            color: #4CAF50;
            background-color: #d4edda;
        }
    </style>
</head>
<body>

    <h1>Formulario de Validación</h1>
    
    <label for="email">Correo electrónico:</label>
    <input type="text" id="email" placeholder="Introduce tu correo">
    <button onclick="validarEmail()">Validar Correo</button>
    
    <div id="mensaje-email" class="mensaje"></div>

    <script>
        // Expresión regular para validar el correo electrónico
        const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;

        // Función para mostrar el mensaje debajo del input
        function mostrarMensaje(mensaje, tipo) {
            // Obtener el contenedor del mensaje (div debajo del input)
            const mensajeElemento = document.getElementById('mensaje-email');
            
            // Limpiar cualquier mensaje previo
            mensajeElemento.textContent = '';
            
            // Establecer el texto y el estilo según el tipo de mensaje
            mensajeElemento.textContent = mensaje;
            mensajeElemento.className = `mensaje ${tipo}`;
        }

        // Función para validar el correo electrónico
        function validarEmail() {
            const email = document.getElementById('email').value;

            if (regexEmail.test(email)) {
                mostrarMensaje("Correo electrónico válido.", "exito");
            } else {
                mostrarMensaje("Correo electrónico inválido.", "error");
            }
        }
    </script>

</body>
</html>