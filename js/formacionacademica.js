index = 2;

function agregarMasEduSup() {
  let html = `
    <div class="row mb-3">
            <div class="col-md-2">
                <label for="modalidad${index}">Modalidad Académica</label>
                <select class="form-control" id="modalidad${index}">
                        <option value="N/A">Seleccione</option>
                        <option value="Tecnico">Tecnico</option>
                        <option value="Tecnologico">Tecnologico</option>
                        <option value="Universitario">Universitario</option>
                        <option value="Especializacion">Especializacion</option>
                        <option value="Maestria">Maestria</option>
                        <option value="Doctorado">Doctorado</option>
                </select>
            </div>
            <div class="col-md-2">
                    <label for="semestresAprobados${index}">Semestres Aprobados</label>
                    <select class="form-control" id="semestresAprobados${index}">
                        <option value="0">Seleccione</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
            </div>
            <div class="col-md-2">
                <label>Graduado</label><br>
                <input type="radio" name="graduado${index}" id="graduadoSi${index}" value="Si"> <label for="graduadoSi${index}">Sí</label>
                <input type="radio" name="graduado${index}" id="graduadoNo${index}" value="No"> <label for="graduadoNo${index}" >No</label>
            </div>
            <div class="col-md-3">
                <label for="nombreEstudios${index}">Nombre del Título Obtenido</label>
                <input type="text" class="form-control" id="nombreEstudios${index}">
            </div>
            <div class="col-md-2">
                <label for="mesGradoBasica${index}">Mes de Grado</label>
                <select class="form-control" id="mesGradoBasica${index}">                    
                    <option value="N/A">Seleccione</option>
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
                <label for="anoGradoSuperior${index}">Año</label>
                <input type="text" class="form-control" id="anoGradoSuperior${index}" placeholder="Año">
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-12 text-left">                
            </div>
        </div>
         <div class="row" id="agregarMasEduSup${index}">
            
        </div>
        `;
  index += 1;
  pushEduSup(html);
}

function pushEduSup(elemento) {
  console.log(index);
  document.getElementById(`agregarMasEduSup${index - 2}`).innerHTML += elemento;
}

var indexIdiomas = 2;
function agregarIdiomas() {
  let html = `
    <div class="row mb-3">
            <div class="col-md-2">
                <label for="idioma${indexIdiomas}">Idioma</label>
                <input type="text" class="form-control" id="idioma${indexIdiomas}">
            </div>
            <div class="col-md-2">
                <label>Lo Habla</label><br>
                <input type="radio" name="habla${indexIdiomas}" id="hablaR${indexIdiomas}" value="Regular"> <label for="hablaR${indexIdiomas}">R</label>
                <input type="radio" name="habla${indexIdiomas}" id="hablaB${indexIdiomas}" value="Bien"> <label for="hablaB${indexIdiomas}">B</label>
                <input type="radio" name="habla${indexIdiomas}" id="hablaMB${indexIdiomas}" value="Muy_bien"> <label for="hablaMB${indexIdiomas}">MB</label>
            </div>
            <div class="col-md-2">
                <label>Lo Lee</label><br>
                <input type="radio" name="lee${indexIdiomas}" id="leeR${indexIdiomas}" value="Regular"> <label for="leeR${indexIdiomas}">R</label>
                <input type="radio" name="lee${indexIdiomas}" id="leeB${indexIdiomas}" value="Bien"> <label for="leeB${indexIdiomas}">B</label>
                <input type="radio" name="lee${indexIdiomas}" id="leeMB${indexIdiomas}" value="Muy_bien"> <label for="leeMB${indexIdiomas}">MB</label>
            </div>
            <div class="col-md-2">
                <label>Lo Escribe</label><br>
                <input type="radio" name="escribe${indexIdiomas}" id="escribeR${indexIdiomas}" value="Regular"> <label for="escribeR${indexIdiomas}">R</label>
                <input type="radio" name="escribe${indexIdiomas}" id="escribeB${indexIdiomas}" value="Bien"> <label for="escribeB${indexIdiomas}">B</label>
                <input type="radio" name="escribe${indexIdiomas}" id="escribeMB${indexIdiomas}" value="Muy_bien"> <label for="escribeMB${indexIdiomas}">MB</label>
            </div>
    </div>
    <div class="row" id="containerIdiomas${indexIdiomas}">
            
            </div>
    `;
  indexIdiomas += 1;
  pushIdiomas(html);
}
function indedice() {
  console.log(document.getElementById(`semestresAprobados${index - 1}`).value);
}
function pushIdiomas(elemento) {
  document.getElementById(`containerIdiomas${indexIdiomas - 2}`).innerHTML +=
    elemento;
}

// -------------------------------------------------OBTENER DATOS

function obtenerEduBasica() {
  let selectedRadio = document.querySelector('input[name="eduBasica"]:checked');
  if (selectedRadio) {
    let booleanColombiano = selectedRadio.value;
    console.log(booleanColombiano); // Muestra el valor en la consola
    return booleanColombiano;
  } else {
    console.log("No hay ninguna opción seleccionada");
    return null;
  }
}

function booleanGraduado(i) {
  let selectedRadio = document.querySelector(
    `input[name=graduado${i}]:checked`
  );
  if (selectedRadio) {
    let esGraduado = selectedRadio.value;
    console.log(esGraduado); // Muestra el valor en la consola
    return esGraduado;
  } else {
    console.log("No hay ninguna opción seleccionada");
    return null;
  }
}

function obtenerHabla(i) {
  let selectedRadio = document.querySelector(`input[name=habla${i}]:checked`);
  if (selectedRadio) {
    let valorHabla = selectedRadio.value;
    console.log(valorHabla); // Muestra el valor en la consola
    return valorHabla;
  } else {
    console.log("No hay ninguna opción seleccionada");
    return null;
  }
}

function obtenerLee(i) {
  let selectedRadio = document.querySelector(`input[name=lee${i}]:checked`);
  if (selectedRadio) {
    let valorLee = selectedRadio.value;
    console.log(valorLee); // Muestra el valor en la consola
    return valorLee;
  } else {
    console.log("No hay ninguna opción seleccionada");
    return null;
  }
}

function obtenerEscribe(i) {
  let selectedRadio = document.querySelector(`input[name=escribe${i}]:checked`);
  if (selectedRadio) {
    let valorEscribe = selectedRadio.value;
    console.log(valorEscribe); // Muestra el valor en la consola
    return valorEscribe;
  } else {
    console.log("No hay ninguna opción seleccionada");
    return null;
  }
}
function persistencia_educacionalm() {
  var eduBasica = obtenerEduBasica();
  var tituloObtenidoBasica = document.getElementById("tituloBasica").value;
  var mesGradoBasica = document.getElementById("mesGradoBasica").value;
  var anoGradoBasica = document.getElementById("anoGradoBasica").value;
  let idiomas = [];
  let edu_sup = [];
  for (let i = 1; i < index; i++) {
    let educacion_sup = {
      modalidad: document.getElementById("modalidad" + i).value,
      semestresAprobados: document.getElementById("semestresAprobados" + i).value,
      esGraduado: booleanGraduado(i),
      tituloObtenidoSuperior: document.getElementById("nombreEstudios" + i).value,
      mesGradoSuperior: document.getElementById("mesGradoBasica" + i).value,
      anioGradoSuperior: document.getElementById("anoGradoSuperior" + i).value,
    };
    console.log(document.getElementById("modalidad" + i).value)
    if(document.getElementById("modalidad" + i).value != "N/A" ){
      edu_sup.push(educacion_sup);
    }
   
  }

  for (let i = 1; i < indexIdiomas; i++) {
      let idioma = {
        nombreIdioma: document.getElementById("idioma" + i).value,
        habla: obtenerHabla(i),
        lee: obtenerLee(i),
        escribe: obtenerEscribe(i),
      };
      if(idioma.nombreIdioma != ""){
        idiomas.push(idioma);
      }
      
    }

  let educacion = {
    eduBasica: eduBasica,
    tituloObtenidoBasica: tituloObtenidoBasica,
    mesGradoBasica: mesGradoBasica,
    anoGradoBasica: anoGradoBasica,
    edu_sup: edu_sup,
    idiomas: idiomas,
  };
  let educacion_json = JSON.stringify(educacion);
  document.cookie =
    "educacionalm=" +
    educacion_json +
    "; max-age=" +
    7 * 24 * 60 * 60 +
    "; path=/ParcialHojaDeVida/; domain=localhost;";
}
function validarObjeto(obj) {
  const camposVacios = [];
      for (const [key, value] of Object.entries(obj)) {
          if (value === null || value === undefined || value === "" || (typeof value === "string" && value.trim() === "")) {
             camposVacios.push(key);
          }
      }
      const camp=camposVacios.length;
      if (camp>0){
        for (let i = 0; i < camp; i++) {
          alert("falta llenar" +camposVacios[i]) 
        
      }
      
        return false;
      }
      return true;
    }
function persistencia_educacion() {
  var eduBasica = obtenerEduBasica();
  var tituloObtenidoBasica = document.getElementById("tituloBasica").value;
  var mesGradoBasica = document.getElementById("mesGradoBasica").value;
  var anoGradoBasica = document.getElementById("anoGradoBasica").value;
  let idiomas = [];
  let edu_sup = [];
  for (let i = 1; i < index; i++) {
    let educacion_sup = {
      modalidad: document.getElementById("modalidad" + i).value,
      semestresAprobados: document.getElementById("semestresAprobados" + i).value,
      esGraduado: booleanGraduado(i),
      tituloObtenidoSuperior: document.getElementById("nombreEstudios" + i).value,
      mesGradoSuperior: document.getElementById("mesGradoBasica" + i).value,
      anioGradoSuperior: document.getElementById("anoGradoSuperior" + i).value,
    };
    if(validarObjeto(educacion_sup)){
      edu_sup.push(educacion_sup);
    }
    
  }

  for (let i = 1; i < indexIdiomas; i++) {
      let idioma = {
        nombreIdioma: document.getElementById("idioma" + i).value,
        habla: obtenerHabla(i),
        lee: obtenerLee(i),
        escribe: obtenerEscribe(i),
      };
      if(validarObjeto(idioma)){
        idiomas.push(idioma);
      }
      
    }

  let educacion = {
    eduBasica: eduBasica,
    tituloObtenidoBasica: tituloObtenidoBasica,
    mesGradoBasica: mesGradoBasica,
    anoGradoBasica: anoGradoBasica,
    edu_sup: edu_sup,
    idiomas: idiomas,
  };
  let educacion_json = JSON.stringify(educacion);
  document.cookie =
    "educacion=" +
    educacion_json +
    "; max-age=" +
    7 * 24 * 60 * 60 +
    "; path=/ParcialHojaDeVida/";
}
function getCookie(nombre) {
  let nombre_ig = nombre + "=";
  let split_cookie = document.cookie.split(";");
  for (let i = 0; i < split_cookie.length; i++) {
    let valor = split_cookie[i];
    while (valor.charAt(0) == " ") valor = valor.substring(1, valor.length);
    if (valor.indexOf(nombre_ig) == 0)
      return valor.substring(nombre_ig.length, valor.length);
  }
  return null;
}
function activareduBasica(valor) {
  switch (valor) {
    case "1":
      document.getElementById("primaria1").checked = true;
      break;
    case "2":
      document.getElementById("primaria2").checked = true;
      break;
    case "3":
      document.getElementById("primaria3").checked = true;
      break;
    case "4":
      document.getElementById("primaria4").checked = true;
      break;
    case "5":
      document.getElementById("primaria5").checked = true;
      break;
    case "6":
      document.getElementById("secundaria6").checked = true;
      break;
    case "7":
      document.getElementById("secundaria7").checked = true;
      break;
    case "8":
      document.getElementById("secundaria8").checked = true;
      break;
    case "9":
      document.getElementById("secundaria9").checked = true;
      break;
    case "10":
      document.getElementById("media10").checked = true;
      break;
    case "11":
      document.getElementById("media11").checked = true;
      break;
  }
}

window.onload = function cargareducacion() {
  let educacion = getCookie("educacionalm");

  if (educacion) {
    let edu = JSON.parse(educacion);
    activareduBasica(edu.eduBasica);
    document.getElementById("tituloBasica").value = edu.tituloObtenidoBasica;
    document.getElementById("mesGradoBasica").value = edu.mesGradoBasica;
    document.getElementById("anoGradoBasica").value = edu.anoGradoBasica;
    edusuperior(edu.edu_sup);
    cargarCoso(edu.idiomas);
    setTimeout(idiomaDif(edu.idiomas),0.5)
  }
};

window.addEventListener('unload', function() {
  persistencia_educacionalm();
});

function hablaidioma(i, valor) {
  if (valor === "Regular" && document.getElementById(`hablaR${i}`)) {
    document.getElementById(`hablaR${i}`).checked = true;
  } 
  if (valor === "Bien" && document.getElementById(`hablaB${i}`)) {
    document.getElementById(`hablaB${i}`).checked = true;
  } 
  if (valor === "Muy_bien" && document.getElementById(`hablaMB${i}`)) {
    document.getElementById(`hablaMB${i}`).checked = true;
  }
}
function leeidioma(i, valor) {
  if (valor === "Regular" && document.getElementById(`leeR${i}`)) {
    document.getElementById(`leeR${i}`).checked = true;
  } 
  if (valor === "Bien" && document.getElementById(`leeB${i}`)) {
    document.getElementById(`leeB${i}`).checked = true;
  } 
  if (valor === "Muy_bien" && document.getElementById(`leeMB${i}`)) {
    document.getElementById(`leeMB${i}`).checked = true;
  }
}
function escribeidioma(i, valor) {
  if (valor === "Regular" && document.getElementById(`escribeR${i}`)) {
    document.getElementById(`escribeR${i}`).checked = true;
  } 
  if (valor === "Bien" && document.getElementById(`escribeB${i}`)) {
    document.getElementById(`escribeB${i}`).checked = true;
  } 
  if (valor === "Muy_bien" && document.getElementById(`escribeMB${i}`)) {
    document.getElementById(`escribeMB${i}`).checked = true;
  }
}
function cargarCoso(idiomas){
  for (let i = 0; i < idiomas.length; i++) {
    if (i> 0) {
        agregarIdiomas();
      }
      
}
}
function idiomaDif(idiomas) {
  for (let i = 0; i < idiomas.length; i++) {
    
    document.getElementById(`idioma${i + 1}`).value = idiomas[i].nombreIdioma;
    
    setTimeout(hablaidioma(i + 1, idiomas[i].habla),0.5);
    setTimeout(leeidioma(i + 1, idiomas[i].lee),0.5);
    setTimeout(escribeidioma(i + 1, idiomas[i].escribe),0.5);
  }
  }

function edusuperior(educaciones) {
  console.log(educaciones.length);
  for (let i = 0; i < educaciones.length; i++) {
    if (i > 0) {
      agregarMasEduSup();
    }

    document.getElementById(`modalidad${i + 1}`).value =
      educaciones[i].modalidad;
    document.getElementById(`semestresAprobados${i + 1}`).value =
      educaciones[i].semestresAprobados;
    document.getElementById(`nombreEstudios${i + 1}`).value =
      educaciones[i].tituloObtenidoSuperior;
    document.getElementById(`mesGradoBasica${i + 1}`).value =
      educaciones[i].mesGradoSuperior;
    document.getElementById(`anoGradoSuperior${i + 1}`).value =
      educaciones[i].anioGradoSuperior;
    activaersup(i + 1, educaciones[i].esGraduado);
  }
}

function activaersup(i, valor) {
  if (valor === "Si") {
    document.getElementById(`graduadoSi${i}`).checked = true;
  } else if (valor === "No") {
    document.getElementById(`graduadoNo${i}`).checked = true;
  }
}
function obtenerDatosFormacionAcademica() {
  index = 0;

  var eduBasica = obtenerEduBasica();
  var tituloObtenidoBasica = document.getElementById("tituloBasica").value;
  var mesGradoBasica = document.getElementById("mesGradoBasica").value;
  var anoGradoBasica = document.getElementById("anoGradoBasica").value;
  var modalidad = document.getElementById("modalidad1").value;
  var semestresAprobados = document.getElementById("semestresAprobados1").value;
  var esGraduado = booleanGraduado(1);
  var tituloObtenidoSuperior = document.getElementById("nombreEstudios1").value;
  var anioGradoSuperior = document.getElementById("anoGradoSuperior1").value;
  var idioma = document.getElementById("idioma1").value;
  var habla = obtenerHabla();
  var lee = obtenerLee();
  var escribe = obtenerEscribe();

  let html = `
    <div class="row">
            <div class="col-sm-6">
                <p>EDUCACION BASICA</p>
            </div>
            <div class="col-sm-6">
                <p>${eduBasica}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>TITULO OBTENIDO</p>
            </div>
            <div class="col-sm-6">
                <p>${tituloObtenidoBasica}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>MES GRADO BASICA:</p>
            </div>
            <div class="col-sm-6">
                <p>${mesGradoBasica}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>AÑO GRADO BASICA</p>
            </div>
            <div class="col-sm-6">
                <p>${anoGradoBasica}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>MODALIDAD</p>
            </div>
            <div class="col-sm-6">
                <p>${modalidad}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>SEMESTRES APROBADOS:</p>
            </div>
            <div class="col-sm-6">
                <p>${semestresAprobados}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>ES GRADUADO:</p>
            </div>
            <div class="col-sm-6">
                <p>${esGraduado}</p>
            </div>
        </div>        

        <div class="row">
            <div class="col-sm-6">
                <p>TITULO OBTENIDO SUPERIOR:</p>
            </div>
            <div class="col-sm-6">
                <p>${tituloObtenidoSuperior}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>AÑO GRADO SUPERIOR:</p>
            </div>
            <div class="col-sm-6">
                <p>${anioGradoSuperior}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>IDIOMA</p>
            </div>
            <div class="col-sm-6">
                <p>${idioma}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>LO HABLA:</p>
            </div>
            <div class="col-sm-6">
                <p>${habla}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>LO LEE:</p>
            </div>
            <div class="col-sm-6">
                <p>${lee}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>LO ESCRIBE:</p>
            </div>
            <div class="col-sm-6">
                <p>${escribe}</p>
            </div>
        </div>
    `;
  index += 1;
  pushHTML(html);
}

function pushHTML(elemento) {
  document.getElementById("obtenerDatosFormacionAcademica").innerHTML +=
    elemento;
}
