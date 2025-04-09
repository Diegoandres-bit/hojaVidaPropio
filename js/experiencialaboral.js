
var index = 2;
function masEmpleo() {
    var html = `
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
                    <label for="empresa${index}">EMPRESA O ENTIDAD</label>
                    <input type="text" class="form-control" id="empresa${index}">
                </div>
            </div>
            <div class="col-sm-4 text-center">
                <div class="form-group">
                    <label for="usr">SELECCIONE</label> <br>
                    <div class="d-inline-block">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="publicapriv${index}" id="ccRadio${index}" value="Publica">
                            <label class="form-check-label" for="ccRadio${index}">PUBLICA</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="publicapriv${index}" id="ceRadio${index}" value="Privada">
                            <label class="form-check-label" for="ceRadio${index}">PRIVADA</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="pais${index}">PAIS</label>
                    <select class="paises form-control" id="pais${index}">
                            <option value="">Seleccione un país</option>
                        </select>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="depto${index}">DEPARTAMENTO</label>
                    <select class="departamentos form-control" id="depto${index}">
                            <option value="">Seleccione un departamento</option>
                        </select>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="muni${index}">MUNICIPIO</label>
                    <select class="municipios form-control" id="muni${index}">
                            <option value="">Seleccione un municipio</option>
                        </select>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="correo${index}">CORREO ELECTRÓNICO ENTIDAD</label>
                    <input type="text" class="form-control" id="correo${index}">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="telefono${index}">TELFONOS</label>
                    <input type="text" class="form-control" id="telefono${index}">
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="ingreso${index}">FECHA DE INGRESO</label>
                      <input type="date" class="form-control" id="ingreso${index}" max="2026-01-01" min="1970-01-01">
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="retiro${index}">FECHA DE RETIRO</label>
                    <input type="date" class="form-control" id="retiro${index}" max="2026-01-01" min="1970-01-01">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="cargo${index}">CARGO O CONTRATO ANTERIOR</label>
                    <input type="text" class="form-control" id="cargo${index}">
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="dependencia${index}">DEPENDENCIA</label>
                    <input type="text" class="form-control" id="dependencia${index}">
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="direccion${index}">DIRECCION</label>
                    <input type="text" class="form-control" id="direccion${index}">
                </div>
            </div>
        </div>
          <div class="row" id="agregarmasexp${index}">
            
            </div>
       <br><br>
    `;
    index += 1;
    ponerhtml(html);
    
    cargaInicial()
}
function ponerhtml(html) {
    document.getElementById(`agregarmasexp${index-2}`).innerHTML += html
    
}

  
// ....................................................................................................................
function esPrivadaActualValue() {
    let selectedRadio = document.querySelector('input[name="publicapriv"]:checked');
    if (selectedRadio) {
        let esPrivadaActual = selectedRadio.value;
        console.log(esPrivadaActual); // Muestra el valor en la consola
        return esPrivadaActual;
    } else {
        console.log("No hay ninguna opción seleccionada");
        return null;
    }
}

function esPrivadaAnteriorValue(i) {
    let selectedRadio = document.querySelector(`input[name="publicapriv${i}"]:checked`);
    if (selectedRadio) {
        let esPrivadaAnterior = selectedRadio.value;
        console.log(esPrivadaAnterior); // Muestra el valor en la consola
        return esPrivadaAnterior;
    } else {
        console.log("No hay ninguna opción seleccionada");
        return null;
    }
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
 function carga_persistencia(){
    let persis=getCookie("laboralalm");
    if(persis){
        
        let labor=JSON.parse(persis);
        console.log(persis)
        document.getElementById('empresa').value=labor.empresaActual;
        activarprivpub(labor.esPrivadaActual);
        let paiz = document.getElementById('pais');
        paiz.options[paiz.selectedIndex].text=labor.pais;
        let departamento = document.getElementById('depto');
        departamento.options[departamento.selectedIndex].text=labor.depto;
        let municipio = document.getElementById('muni');
        municipio.options[municipio.selectedIndex].text=labor.municipio;
        document.getElementById('correo').value=labor.correo;
        document.getElementById('telefono').value=labor.telefono;
        document.getElementById('fecha_ingreso').value=labor.ingreso;
        document.getElementById('fecha_retiro').value=labor.retiro;
        document.getElementById('cargo').value=labor.cargo;
        document.getElementById('dependencia').value=labor.dependencia;
        document.getElementById('direccion').value=labor.direccion;
        cargarexp_anterior(labor.exp_anterior);
    }
}
function cargarexp_anterior(anteriores){
    for (let i = 0; i < anteriores.length; i++) {
        if(i>0){
            masEmpleo();
        }
        document.getElementById(`empresa${i+1}`).value=anteriores[i].empresaAnterior;
        activarAnterior(i,anteriores[i].esPrivadaAnterior);
        let paiz = document.getElementById(`pais${i+1}`);
        paiz.options[paiz.selectedIndex].text=anteriores[i].pais;
        let departamento = document.getElementById(`depto${i+1}`);
        departamento.options[departamento.selectedIndex].text=anteriores[i].depto;
        let municipio = document.getElementById(`muni${i+1}`);
        municipio.options[municipio.selectedIndex].text=anteriores[i].municipio;
        document.getElementById(`correo${i+1}`).value=anteriores[i].correo;
        document.getElementById(`telefono${i+1}`).value=anteriores[i].telefono;
        document.getElementById(`ingreso${i+1}`).value=anteriores[i].ingreso;
        document.getElementById(`retiro${i+1}`).value=anteriores[i].retiro;
        document.getElementById(`cargo${i+1}`).value=anteriores[i].cargo;
        document.getElementById(`dependencia${i+1}`).value=anteriores[i].dependencia;
        document.getElementById(`direccion${i+1}`).value=anteriores[i].direccion;
        
    }
}
function activarAnterior(i,valor){
    
    if(valor=== "Publica"){
        document.getElementById(`ccRadio${i+1}`).checked=true;
        }else if(valor ==="Privada"){
            document.getElementById(`ceRadio${i+1}`).checked=true;
        }
}
function activarprivpub(valor){
    if(valor === "Publica"){
        document.getElementById('ccRadio').checked=true
    }else if (valor === "Privada"){
        document.getElementById('ceRadio').checked=true
    }
}
window.addEventListener('unload', function() {
    persistencialaboralalm();
  });
function persistencialaboral(){
    
    var exp_anterior=[];
    for (let i = 1; i < index; i++) {
        let paiz = document.getElementById(`pais${i}`);
    let pais = paiz.options[paiz.selectedIndex].text
    let departamento = document.getElementById(`depto${i}`);
    let depto = departamento.options[departamento.selectedIndex].text
    let municipio = document.getElementById(`muni${i}`);
    let muni = municipio.options[municipio.selectedIndex].text
        var exp={

            empresaAnterior:document.getElementById(`empresa${i}`).value,
            esPrivadaAnterior:esPrivadaAnteriorValue(i),
            pais:pais,
            depto:depto,
            municipio:muni,
            correo:document.getElementById(`correo${i}`).value,
            telefono:document.getElementById(`telefono${i}`).value,
            ingreso:document.getElementById(`ingreso${i}`).value,
            retiro:document.getElementById(`retiro${i}`).value,
            cargo:document.getElementById(`cargo${i}`).value,
            dependencia:document.getElementById(`dependencia${i}`).value,
            direccion:document.getElementById(`direccion${i}`).value,

        }
        if(validarObjeto(exp)){
            exp_anterior.push(exp)
        }
      
    }
    let paiz = document.getElementById(`pais`);
    let pais = paiz.options[paiz.selectedIndex].text
    let departamento = document.getElementById(`depto`);
    let depto = departamento.options[departamento.selectedIndex].text
    let municipio = document.getElementById(`muni`);
    let muni = municipio.options[municipio.selectedIndex].text
    var laboral={   
        empresaActual:document.getElementById("empresa").value,
        esPrivadaActual:esPrivadaActualValue(),
        pais:pais,
        depto:depto,
        municipio:muni,
        correo:document.getElementById('correo').value,
        telefono:document.getElementById('telefono').value,
        ingreso:document.getElementById('fecha_ingreso').value,
        retiro:document.getElementById('fecha_retiro').value,
        cargo:document.getElementById('cargo').value,
        dependencia:document.getElementById('dependencia').value,
        direccion:document.getElementById('direccion').value,
        exp_anterior:exp_anterior

    }
   if(validarObjeto(laboral) ){
    let json_laboral=JSON.stringify(laboral);
    document.cookie =
    "laboral=" +
    json_laboral +
    "; max-age=" +
    7 * 24 * 60 * 60 +
    "; path=/ParcialHojaDeVida/; domain=localhost;";
   }
  
}
function persistencialaboralalm(){
    
    var exp_anterior=[];
    for (let i = 1; i < index; i++) {
        let paiz = document.getElementById(`pais${i}`);
    let pais = paiz.options[paiz.selectedIndex].text
    let departamento = document.getElementById(`depto${i}`);
    let depto = departamento.options[departamento.selectedIndex].text
    let municipio = document.getElementById(`muni${i}`);
    let muni = municipio.options[municipio.selectedIndex].text
        var exp={

            empresaAnterior:document.getElementById(`empresa${i}`).value,
            esPrivadaAnterior:esPrivadaAnteriorValue(i),
            pais:pais,
            depto:depto,
            municipio:muni,
            correo:document.getElementById(`correo${i}`).value,
            telefono:document.getElementById(`telefono${i}`).value,
            ingreso:document.getElementById(`ingreso${i}`).value,
            retiro:document.getElementById(`retiro${i}`).value,
            cargo:document.getElementById(`cargo${i}`).value,
            dependencia:document.getElementById(`dependencia${i}`).value,
            direccion:document.getElementById(`direccion${i}`).value,

        }
        if(document.getElementById(`empresa${i}`).value != ""){
            validarObjeto(exp);
            exp_anterior.push(exp);
        }   
    }
    let paiz = document.getElementById(`pais`);
    let pais = paiz.options[paiz.selectedIndex].text
    let departamento = document.getElementById(`depto`);
    let depto = departamento.options[departamento.selectedIndex].text
    let municipio = document.getElementById(`muni`);
    let muni = municipio.options[municipio.selectedIndex].text
    var laboral={   
        empresaActual:document.getElementById("empresa").value,
        esPrivadaActual:esPrivadaActualValue(),
        pais:pais,
        depto:depto,
        municipio:muni,
        correo:document.getElementById('correo').value,
        telefono:document.getElementById('telefono').value,
        ingreso:document.getElementById('fecha_ingreso').value,
        retiro:document.getElementById('fecha_retiro').value,
        cargo:document.getElementById('cargo').value,
        dependencia:document.getElementById('dependencia').value,
        direccion:document.getElementById('direccion').value,
        exp_anterior:exp_anterior

    }
    let json_laboral=JSON.stringify(laboral);
    document.cookie =
    "laboralalm=" +
    json_laboral +
    "; max-age=" +
    7 * 24 * 60 * 60 +
    "; path=/ParcialHojaDeVida/ ; domain=localhost;";
}


function obtenerDatosExperienciaLaboral() {
    index = 0;
    var empresaActual = document.getElementById("empresa").value;
    var esPrivadaActual = esPrivadaActualValue();
    var paisActual = document.getElementById("pais").value;
    var deptoActual = document.getElementById("depto").value;
    var municipioActual = document.getElementById("muni").value;
    var correoActual = document.getElementById("correo").value;
    var telefonoActual = document.getElementById("telefono").value;
    var ingresoActual = document.getElementById("ingreso").value;
    var retiroActual = document.getElementById("retiro").value;
    var cargoActual = document.getElementById("cargo").value;
    var dependenciaActual = document.getElementById("dependencia").value;
    var direccionActual = document.getElementById("direccion").value;

    var empresaAnterior = document.getElementById("empresa1").value;
    var esPrivadaAnterior = esPrivadaAnteriorValue();
    var paisAnterior = document.getElementById("pais1").value;
    var deptoAnterior = document.getElementById("depto1").value;
    var municipioAnterior = document.getElementById("muni1").value;
    var correoAnterior = document.getElementById("correo1").value;
    var telefonoAnterior = document.getElementById("telefono1").value;
    var ingresoAnterior = document.getElementById("ingreso1").value;
    var retiroAnterior = document.getElementById("retiro1").value;
    var cargoAnterior = document.getElementById("cargo1").value;
    var dependenciaAnterior = document.getElementById("dependencia1").value;
    var direccionAnterior = document.getElementById("direccion1").value;

    let html = `
        <div class="row">
            <div class="col-sm-6">
                <p>EMPRESA ACTUAL</p>
            </div>
            <div class="col-sm-6">
                <p>${empresaActual}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>ES PRIVADA ACTUAL</p>
            </div>
            <div class="col-sm-6">
                <p>${esPrivadaActual}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>PAIS ACTUAL:</p>
            </div>
            <div class="col-sm-6">
                <p>${paisActual}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>DEPARTAMENTO ACTUAL:</p>
            </div>
            <div class="col-sm-6">
                <p>${deptoActual}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>MUNICIPIO ACTUAL:</p>
            </div>
            <div class="col-sm-6">
                <p>${municipioActual}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>CORREO ACTUAL:</p>
            </div>
            <div class="col-sm-6">
                <p>${correoActual}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>TELEFONO ACTUAL:</p>
            </div>
            <div class="col-sm-6">
                <p>${telefonoActual}</p>
            </div>
        </div>        

        <div class="row">
            <div class="col-sm-6">
                <p>INGRESO ACTUAL:</p>
            </div>
            <div class="col-sm-6">
                <p>${ingresoActual}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>RETIRO ACTUAL:</p>
            </div>
            <div class="col-sm-6">
                <p>${retiroActual}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>CARGO ACTUAL:</p>
            </div>
            <div class="col-sm-6">
                <p>${cargoActual}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>DEPENDENCIA ACTUAL:</p>
            </div>
            <div class="col-sm-6">
                <p>${dependenciaActual}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>DIRECCION ACTUAL:</p>
            </div>
            <div class="col-sm-6">
                <p>${direccionActual}</p>
            </div>
        </div>

    


        <div class="row">
            <div class="col-sm-6">
                <p>EMPRESA ANTERIOR:</p>
            </div>
            <div class="col-sm-6">
                <p>${empresaAnterior}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>ES PRIVADA ANTERIOR:</p>
            </div>
            <div class="col-sm-6">
                <p>${esPrivadaAnterior}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>PAIS ANTERIOR:</p>
            </div>
            <div class="col-sm-6">
                <p>${paisAnterior}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>DEPARTAMENTO ANTERIOR:</p>
            </div>
            <div class="col-sm-6">
                <p>${deptoAnterior}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>MUNICIPIO ANTERIOR:</p>
            </div>
            <div class="col-sm-6">
                <p>${municipioAnterior}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>CORREO ANTERIOR:</p>
            </div>
            <div class="col-sm-6">
                <p>${correoAnterior}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>TELEFONO ANTERIOR:</p>
            </div>
            <div class="col-sm-6">
                <p>${telefonoAnterior}</p>
            </div>
        </div>        

        <div class="row">
            <div class="col-sm-6">
                <p>INGRESO ANTERIOR:</p>
            </div>
            <div class="col-sm-6">
                <p>${ingresoAnterior}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>RETIRO ANTERIOR:</p>
            </div>
            <div class="col-sm-6">
                <p>${retiroAnterior}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>CARGO ANTERIOR:</p>
            </div>
            <div class="col-sm-6">
                <p>${cargoAnterior}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>DEPENDENCIA ANTERIOR:</p>
            </div>
            <div class="col-sm-6">
                <p>${dependenciaAnterior}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <p>DIRECCION ANTERIOR:</p>
            </div>
            <div class="col-sm-6">
                <p>${direccionAnterior}</p>
            </div>
        </div>
    `
    index += 1;
    pushHTML(html);
}

function pushHTML(elemento) {
    document.getElementById("obtenerDatosExperienciaLaboral").innerHTML += elemento;
cargaInicial()
}

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
function obtenerPaises(data) {
    console.log(data);
    console.log("tamano :" + data.length);
    let index = 0;
    paises=[]
    data.forEach(element => {
        let pais = {
            id: index,
            name: element.name.common,
            region: element.region,
            continente: element.continents[0]
        };
        paises.push(pais);
    });
    let selects = document.querySelectorAll(".paises");

    selects.forEach(select => {
        paises.forEach(pais => {
            option = new Option(pais.name, pais.id);
            select.appendChild(option);
        })
            

    })
}