
function cargaInicial() {
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
        .then(response => response.json())
        .then(data => obtenerPaises(data));

    const url2 = "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json";
    fetch(url2)
        .then(response => response.json())
        .then(data => { obtenerDepartamentos(data); obtenerMunicipios(data) });
}

function obtenerPaises(data) {
    console.log(data);
    console.log("tamano :" + data.length);
    let index = 0;
    let paises = [];
    data.forEach(element => {
        let pais = {
            id: index,
            name: element.name.common,
            region: element.region,
            continente: element.continents[0]
        };
        paises[index] = pais;
        if (pais.name != "Surinami" && pais.name != "French Guiana" && pais.name != "Falkland Island") {
            paises.push(pais);
            index += 1;
        }
    });

    const paisesF = paises.filter(e => e.continente == "South America");

    console.log(`la cantidad de paises filtrados son: ${paisesF.length} `);
    console.log(paisesF);

    //adicionar valores al select
    let selects = document.querySelectorAll(".paises");

    selects.forEach(select => {
        paisesF.forEach(pais => {
            option = new Option(pais.name, pais.id);
            select.appendChild(option);
        });
    })
}


function obtenerDepartamentos(data) {
    console.log("Mostrando departamentos");
    console.log(data);

    let selects = document.querySelectorAll(".departamentos");  // Selecciona todos los elementos 'select' con la clase 'departamentos'

    selects.forEach(select => {
        data.forEach(object => {
            let option = new Option(object.departamento, object.id);
            select.appendChild(option);
        });
    });
}

function obtenerMunicipios(data) {
    console.log("mostrando departamentos");
    console.log(data);
    let selects = document.querySelectorAll(".municipios");  // Selecciona todos los elementos 'select' con la clase 'departamentos'

    selects.forEach(select => {
        data.forEach(object => {
            let option = new Option(object.name, object.id);
            select.appendChild(option);

            object.ciudades.forEach(ciudad => {
                let option = new Option(ciudad, ciudad);
                select.appendChild(option);
            });
        });
    });
}

function obtenerTiposIdentificacion() {
    let selectedRadio = document.querySelector('input[name="optidentificacion"]:checked');
    if (selectedRadio) {
        let tipoIdentificacion = selectedRadio.value;
        console.log(tipoIdentificacion); // Muestra el valor en la consola
        return tipoIdentificacion;
    } else {
        console.log("No hay ninguna opción seleccionada");
        return null;
    }
}

function obtenerSexo() {
    let selectedRadio = document.querySelector('input[name="optsexo"]:checked');
    if (selectedRadio) {
        let sexo = selectedRadio.value;
        console.log(sexo); // Muestra el valor en la consola
        return sexo;
    } else {
        console.log("No hay ninguna opción seleccionada");
        return null;
    }
}

function booleanColombiano() {
    let selectedRadio = document.querySelector('input[name="optnacionalidad"]:checked');
    if (selectedRadio) {
        let booleanColombiano = selectedRadio.value;
        console.log(booleanColombiano); // Muestra el valor en la consola
        return booleanColombiano;
    } else {
        console.log("No hay ninguna opción seleccionada");
        return null;
    }
}

function booleanLibretaMilitar() {
    let selectedRadio = document.querySelector('input[name="optlibreta"]:checked');
    if (selectedRadio) {
        let tieneLibretaMilitar = selectedRadio.value;
        console.log(tieneLibretaMilitar); // Muestra el valor en la consola
        return tieneLibretaMilitar;
    } else {
        console.log("No hay ninguna opción seleccionada");
        return null;
    }
}
function almacenaDatos() {

    var primerApellido = document.getElementById("primer_apellido").value;
    var segundoApellido = document.getElementById("segundo_apellido").value;
    var nombres = document.getElementById("nombres").value;

    var documento = parseInt(document.getElementById("docNumber").value);

    var numeroLibreta = parseInt(document.getElementById("numeroLibreta").value);
    var dmLibreta = document.getElementById("dmLibreta").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;


    sexo = obtenerSexo();
    esColombiano = booleanColombiano();
    tipoIdentificacion = obtenerTiposIdentificacion();
    tieneLibretaMilitar = booleanLibretaMilitar();

    let pais_naci = document.getElementById('pais_nacionalidad');
    let paisNacionalidad = pais_naci.options[pais_naci.selectedIndex].text

    let pais = document.getElementById('pais_nacimiento');
    let paisNacimiento = pais.options[pais.selectedIndex].text

    let depto = document.getElementById('depto_nacimiento');
    let deptoNacimiento = depto.options[depto.selectedIndex].text

    let muni = document.getElementById('municipio_nacimiento');
    let municipioNacimiento = muni.options[muni.selectedIndex].text

    let pais_corre = document.getElementById('pais_correspondencia');
    let paisCorrespondencia = pais_corre.options[pais_corre.selectedIndex].text

    let depto_corre = document.getElementById('depto_correspondencia');
    let deptoCorrespondencia = depto_corre.options[depto_corre.selectedIndex].text

    let muni_corre = document.getElementById('municipio_correspondencia');
    let municipioCorrespondencia = muni_corre.options[muni_corre.selectedIndex].text

    var fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    validadorDatosPersonales();
    let datos_personales = {
        primerApellido: primerApellido,
        segundoApellido: segundoApellido,
        nombres: nombres,
        documento: documento,
        numeroLibreta: numeroLibreta,
        dmLibreta: dmLibreta,
        telefono: telefono,
        email: email,
        sexo: sexo,
        esColombiano: esColombiano,
        tipoIdentificacion: tipoIdentificacion,
        tieneLibretaMilitar: tieneLibretaMilitar,
        paisNacionalidad: paisNacionalidad,
        paisNacimiento: paisNacimiento,
        deptoNacimiento: deptoNacimiento,
        municipioNacimiento: municipioNacimiento,
        paisCorrespondencia: paisCorrespondencia,
        deptoCorrespondencia: deptoCorrespondencia,
        municipioCorrespondencia: municipioCorrespondencia,
        fechaNacimiento: fechaNacimiento
    }
        let datos_json = JSON.stringify(datos_personales)
        console.log(validarObjeto(datos_personales))
        console.log(datos_json)
        document.cookie = "datos_personalesalm=" + datos_json + "; max-age=" + (7 * 24 * 60 * 60) + "; path=/ParcialHojaDeVida/; domain=localhost;"
    
}


function persistencia() {
    
    var primerApellido = document.getElementById("primer_apellido").value;
    var segundoApellido = document.getElementById("segundo_apellido").value;
    var nombres = document.getElementById("nombres").value;

    var documento = parseInt(document.getElementById("docNumber").value);

    var numeroLibreta = parseInt(document.getElementById("numeroLibreta").value);
    var dmLibreta = document.getElementById("dmLibreta").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;


    sexo = obtenerSexo();
    esColombiano = booleanColombiano();
    tipoIdentificacion = obtenerTiposIdentificacion();
    tieneLibretaMilitar = booleanLibretaMilitar();

    let pais_naci = document.getElementById('pais_nacionalidad');
    let paisNacionalidad = pais_naci.options[pais_naci.selectedIndex].text

    let pais = document.getElementById('pais_nacimiento');
    let paisNacimiento = pais.options[pais.selectedIndex].text

    let depto = document.getElementById('depto_nacimiento');
    let deptoNacimiento = depto.options[depto.selectedIndex].text

    let muni = document.getElementById('municipio_nacimiento');
    let municipioNacimiento = muni.options[muni.selectedIndex].text

    let pais_corre = document.getElementById('pais_correspondencia');
    let paisCorrespondencia = pais_corre.options[pais_corre.selectedIndex].text

    let depto_corre = document.getElementById('depto_correspondencia');
    let deptoCorrespondencia = depto_corre.options[depto_corre.selectedIndex].text

    let muni_corre = document.getElementById('municipio_correspondencia');
    let municipioCorrespondencia = muni_corre.options[muni_corre.selectedIndex].text

    var fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    let datos_personales = {
        primerApellido: primerApellido,
        segundoApellido: segundoApellido,
        nombres: nombres,
        documento: documento,
        numeroLibreta: numeroLibreta,
        dmLibreta: dmLibreta,
        telefono: telefono,
        email: email,
        sexo: sexo,
        esColombiano: esColombiano,
        tipoIdentificacion: tipoIdentificacion,
        tieneLibretaMilitar: tieneLibretaMilitar,
        paisNacionalidad: paisNacionalidad,
        paisNacimiento: paisNacimiento,
        deptoNacimiento: deptoNacimiento,
        municipioNacimiento: municipioNacimiento,
        paisCorrespondencia: paisCorrespondencia,
        deptoCorrespondencia: deptoCorrespondencia,
        municipioCorrespondencia: municipioCorrespondencia,
        fechaNacimiento: fechaNacimiento
    }
    if (validarObjeto(datos_personales) && validadorDatosPersonales()) {
        let datos_json = JSON.stringify(datos_personales)
        console.log(validarObjeto(datos_personales))
        console.log(datos_json)
        document.cookie = "datos_personales=" + datos_json + "; max-age=" + (7 * 24 * 60 * 60) + "; path=/ParcialHojaDeVida/ ; domain=localhost;"
    }
}
function activarsex(valor) {
    if (valor === "Masculino") {
        document.getElementById("maleRadio").checked = true
    } else if (valor === "Femenino") {
        document.getElementById("femaleRadio").checked = true
    }
}
function activaresCol(valor) {
    if (valor === "Colombiano") {
        document.getElementById("colRadio").checked = true
    } else if (valor === "Extranjero") {
        document.getElementById("extRadio").checked = true
    }

}
function activarTipoID(valor) {
    if (valor === "CC") {
        document.getElementById("ccRadio").checked = true
    } else if (valor === "CE") {
        document.getElementById("ceRadio").checked = true
    } else if (valor === "PAS") {
        document.getElementById("pasRadio").checked = true
    }
}
function activarLibreta(valor) {
    if (valor === "Si") {
        document.getElementById("primeraClase").checked = true
    } else if (valor === "No") {
        document.getElementById("segundaClase").checked = true
    }
}
function indexselect(valor) {
    let pais_naci = document.getElementById('pais_nacionalidad');

    if (pais_naci.options[i].text === valor) {
        return i
    }

}



function validadorDatosPersonales() {
    const a = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/;
    const limitescedula = /\d{10,16}/g;
    const cedula = document.getElementById('docNumber').value;
    const cedulaVAli = cedula.match(limitescedula);
    const email = document.getElementById('email').value;

    console.log(cedulaVAli);
    if (!cedula.match(limitescedula)) {
        alert("la cedula no cumple con los digitos necesarios 10-16")
        return false;
    }
    if (!email.toUpperCase().match(a)) {
        alert("el correo no es valido")
        return false;
    }
    return true;
}
window.addEventListener('unload', function () {
    almacenaDatos();
});
function cargarDatosPersonales() {

    let datosJson = getCookie('datos_personalesalm');
    
    if (datosJson) {
        let datosPersonales = JSON.parse(datosJson);
        document.getElementById("primer_apellido").value = datosPersonales.primerApellido;
        document.getElementById("segundo_apellido").value = datosPersonales.segundoApellido;
        document.getElementById("nombres").value = datosPersonales.nombres;
        document.getElementById("docNumber").value = datosPersonales.documento;
        document.getElementById("numeroLibreta").value = datosPersonales.numeroLibreta;
        document.getElementById("dmLibreta").value = datosPersonales.dmLibreta;
        document.getElementById("telefono").value = datosPersonales.telefono;
        document.getElementById("email").value = datosPersonales.email;
        activarsex(datosPersonales.sexo);
        activaresCol(datosPersonales.esColombiano);
        activarTipoID(datosPersonales.tipoIdentificacion);
        activarLibreta(datosPersonales.tieneLibretaMilitar)

        let pais_naci = document.getElementById('pais_nacionalidad');
        pais_naci.options[pais_naci.selectedIndex].text = datosPersonales.paisNacionalidad;

        let pais = document.getElementById('pais_nacimiento');
        let paisNacimiento = pais.options[pais.selectedIndex].text = datosPersonales.paisNacimiento;

        let depto = document.getElementById('depto_nacimiento');
        let deptoNacimiento = depto.options[depto.selectedIndex].text = datosPersonales.deptoNacimiento;

        let muni = document.getElementById('municipio_nacimiento');
        let municipioNacimiento = muni.options[muni.selectedIndex].text = datosPersonales.municipioNacimiento;

        let pais_corre = document.getElementById('pais_correspondencia');
        let paisCorrespondencia = pais_corre.options[pais_corre.selectedIndex].text = datosPersonales.paisCorrespondencia;

        let depto_corre = document.getElementById('depto_correspondencia');
        let deptoCorrespondencia = depto_corre.options[depto_corre.selectedIndex].text = datosPersonales.deptoCorrespondencia

        let muni_corre = document.getElementById('municipio_correspondencia');
        let municipioCorrespondencia = muni_corre.options[muni_corre.selectedIndex].text = datosPersonales.municipioCorrespondencia;

        document.getElementById('fecha_nacimiento').value = datosPersonales.fechaNacimiento;

    } else {
        alert('No se encontraron datos guardados');
    }
}

function getCookie(nombre) {
    let nombre_ig = nombre + "=";
    let split_cookie = document.cookie.split(';');
    for (let i = 0; i < split_cookie.length; i++) {
        let valor = split_cookie[i];
        while (valor.charAt(0) == ' ') valor = valor.substring(1, valor.length);
        if (valor.indexOf(nombre_ig) == 0) return valor.substring(nombre_ig.length, valor.length);
    }
    return null;
}

function validarObjeto(obj) {
    console.log(obj.tieneLibretaMilitar);
    const camposVacios = [];
    if (obj.tieneLibretaMilitar === null || obj.tieneLibretaMilitar === undefined || obj.tieneLibretaMilitar === "") {
        alert("Debe seleccionar si tienes libreta militar o no.");
        return false;
    }

    if (obj.tieneLibretaMilitar === "Si") {
        for (const [key, value] of Object.entries(obj)) {
            if (value === null || value === undefined || value === "" || (typeof value === "string" && value.trim() === "")) {
                camposVacios.push(key);
            }
        }
    } else if (obj.tieneLibretaMilitar === "No" && (obj.numeroLibreta || obj.dmLibreta)) {
        alert("Estás seleccionando que no tienes libreta militar, pero has llenado el campo de número o DM de libreta militar.");
        return false;
    }

    if (camposVacios.length > 0) {
        alert("Debe diligenciar todos los campos: " + camposVacios.join(", "));
        return false;
    }

    return true;
}





function obtenerDatos() {
    index = 0;
    var primerApellido = document.getElementById("primer_apellido").value.trim();
    var segundoApellido = document.getElementById("segundo_apellido").value.trim();
    var nombres = document.getElementById("nombres").value.trim();

    var documento = parseInt(document.getElementById("docNumber").value.trim());

    var numeroLibreta = parseInt(document.getElementById("numeroLibreta").value.trim());
    var dmLibreta = document.getElementById("dmLibreta").value;
    var telefono = document.getElementById("telefono").value.trim();
    var email = document.getElementById("email").value.trim();


    sexo = obtenerSexo();
    esColombiano = booleanColombiano();
    tipoIdentificacion = obtenerTiposIdentificacion();
    tieneLibretaMilitar = booleanLibretaMilitar();

    let pais_naci = document.getElementById('pais_nacionalidad');
    let paisNacionalidad = pais_naci.options[pais_naci.selectedIndex].text

    let pais = document.getElementById('pais_nacimiento');
    let paisNacimiento = pais.options[pais.selectedIndex].text

    let depto = document.getElementById('depto_nacimiento');
    let deptoNacimiento = depto.options[depto.selectedIndex].text

    let muni = document.getElementById('municipio_nacimiento');
    let municipioNacimiento = muni.options[muni.selectedIndex].text

    let pais_corre = document.getElementById('pais_correspondencia');
    let paisCorrespondencia = pais_corre.options[pais_corre.selectedIndex].text

    let depto_corre = document.getElementById('depto_correspondencia');
    let deptoCorrespondencia = depto_corre.options[depto_corre.selectedIndex].text

    let muni_corre = document.getElementById('municipio_correspondencia');
    let municipioCorrespondencia = muni_corre.options[muni_corre.selectedIndex].text

    var fechaNacimiento = document.getElementById('fecha_nacimiento').value;



    let html = `
    <div class="row">
            <div class="col-sm-6">
                <p>NOMBRE</p>
            </div>
            <div class="col-sm-6">
                <p>${nombres}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>PRIMER APELLIDO:</p>
            </div>
            <div class="col-sm-6">
                <p>${primerApellido}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>SEGUNDO APELLIDO:</p>
            </div>
            <div class="col-sm-6">
                <p>${segundoApellido}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>TIPO DOCUMENTO</p>
            </div>
            <div class="col-sm-6">
                <p>${tipoIdentificacion}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>DOCUMENTO IDENTIFICACION:</p>
            </div>
            <div class="col-sm-6">
                <p>${documento}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>SEXO:</p>
            </div>
            <div class="col-sm-6">
                <p>${sexo}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>NACIONALIDAD:</p>
            </div>
            <div class="col-sm-6">
                <p>${esColombiano}</p>
            </div>
        </div>        

        <div class="row">
            <div class="col-sm-6">
                <p>TIENE LIBRETA MILITAR:</p>
            </div>
            <div class="col-sm-6">
                <p>${tieneLibretaMilitar}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>NUMERO LIBRETA MILITAR</p>
            </div>
            <div class="col-sm-6">
                <p>${numeroLibreta}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>PAIS NACIONALIDAD</p>
            </div>
            <div class="col-sm-6">
                <p>${paisNacionalidad}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>DM</p>
            </div>
            <div class="col-sm-6">
                <p>${dmLibreta}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>FECHA NACIMIENTO</p>
            </div>
            <div class="col-sm-6">
                <p>${fechaNacimiento}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>PAIS NACIMIENTO</p>
            </div>
            <div class="col-sm-6">
                <p>${paisNacimiento}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>DEPARTAMENTO NACIMIENTO</p>
            </div>
            <div class="col-sm-6">
                <p>${deptoNacimiento}</p>  
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>MUNICIPIO NACIMIENTO</p>
            </div>
            <div class="col-sm-6">
                <p>${municipioNacimiento}</p>  
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>PAIS RESIDENCIA</p>
            </div>
            <div class="col-sm-6">
                <p>${paisCorrespondencia}</p>  
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>DEPARTAMENTO RESIDENCIA</p>
            </div>
            <div class="col-sm-6">
                <p>${deptoCorrespondencia}</p>  
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>MUNICIPIO RESIDENCIA</p>
            </div>
            <div class="col-sm-6">
                <p>${municipioCorrespondencia}</p>  
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>TELEFONO</p>
            </div>
            <div class="col-sm-6">
                <p>${telefono}</p>  
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>EMAIL</p>
            </div>
            <div class="col-sm-6">
                <p>${email}</p>  
            </div>
        </div>
    `
    index += 1;
    pushHTML(html);
}

function agregarContenido() {
    let html = `
    <div class="row">
        <div class="col-sm-6">
            <p><strong>NOMBRE</strong></p>
        </div>
        <div class="col-sm-6">
            <p>nombreDato</p>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <p><strong>PRIMER APELLIDO:</strong></p>
        </div>
        <div class="col-sm-6">
            <p>primerApellidoDato</p>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <p><strong>SEGUNDO APELLIDO:</strong></p>
        </div>
        <div class="col-sm-6">
            <p>segundoApellidoDato</p>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <p><strong>DOCUMENTO IDENTIFICACIÓN:</strong></p>
        </div>
        <div class="col-sm-6">
            <p>documentoIdentificacion</p>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <p><strong>PAÍS NACIONALIDAD:</strong></p>
        </div>
        <div class="col-sm-6">
            <p>paisNacionalidad</p>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <p><strong>LIBRETA MILITAR:</strong></p>
        </div>
        <div class="col-sm-6">
            <p>libretaMilitar</p>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <p><strong>DM:</strong></p>
        </div>
        <div class="col-sm-6">
            <p>dmDato</p>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <p><strong>FECHA DE NACIMIENTO:</strong></p>
        </div>
        <div class="col-sm-6">
            <p>fechaNacimiento</p>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <p><strong>PAÍS DE NACIMIENTO:</strong></p>
        </div>
        <div class="col-sm-6">
            <p>paisNacimiento</p>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <p><strong>DEPARTAMENTO DE NACIMIENTO:</strong></p>
        </div>
        <div class="col-sm-6">
            <p>departamentoNacimiento</p>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <p><strong>MUNICIPIO DE NACIMIENTO:</strong></p>
        </div>
        <div class="col-sm-6">
            <p>municipioNacimiento</p>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <p><strong>PAÍS DE RESIDENCIA:</strong></p>
        </div>
        <div class="col-sm-6">
            <p>paisResidencia</p>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <p><strong>DEPARTAMENTO DE RESIDENCIA:</strong></p>
        </div>
        <div class="col-sm-6">
            <p>departamentoResidencia</p>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <p><strong>MUNICIPIO DE RESIDENCIA:</strong></p>
        </div>
        <div class="col-sm-6">
            <p>municipioResidencia</p>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <p><strong>TELÉFONO:</strong></p>
        </div>
        <div class="col-sm-6">
            <p>telefonoDato</p>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <p><strong>EMAIL:</strong></p>
        </div>
        <div class="col-sm-6">
            <p>emailDato</p>
        </div>
    </div>
    `;

    pushHTML(html); // Se asume que pushHTML es la función que agrega el contenido al DOM
}


function pushHTML(elemento) {
    document.getElementById("agregarContenido").innerHTML += elemento;
}

