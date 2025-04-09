function mandardatos() {
  var datos_personales = getCookie("datos_personales");
  datospersona = JSON.parse(datos_personales);
  var primerApellido = datospersona.primerApellido;
  var segundoApellido = datospersona.segundoApellido;
  var nombres = datospersona.nombres;
  var documento = datospersona.documento;
  var numeroLibreta = datospersona.numeroLibreta;
  var dmLibreta = datospersona.dmLibreta;
  var telefono = datospersona.telefono;
  var email = datospersona.email;
  sexo = datospersona.sexo;
  esColombiano = datospersona.esColombiano;
  tipoIdentificacion = datospersona.tipoIdentificacion;
  tieneLibretaMilitar = datospersona.tieneLibretaMilitar;
  let paisNacionalidad = datospersona.paisNacionalidad;
  let paisNacimiento = datospersona.paisNacimiento;
  let deptoNacimiento = datospersona.deptoNacimiento;
  let municipioNacimiento = datospersona.municipioNacimiento;
  let paisCorrespondencia = datospersona.paisCorrespondencia;

  let deptoCorrespondencia = datospersona.deptoCorrespondencia;
  let municipioCorrespondencia = datospersona.municipioCorrespondencia;
  var fechaNacimiento = datospersona.fechaNacimiento;

  var educacion = getCookie("educacion");
  var edu = JSON.parse(educacion);

  var laboral = getCookie("laboral");
  var work = JSON.parse(laboral);

  var anos = getCookie("anos");
  var ano = JSON.parse(anos);
  fetch("http://localhosts/ParcialHojaDeVida/insert_index.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Cambiar a 'application/json'
    },
    body: JSON.stringify({
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
      fechaNacimiento: fechaNacimiento,
      eduBasica: edu.eduBasica,
      tituloObtenidoBasica: edu.tituloObtenidoBasica,
      mesGradoBasica: edu.mesGradoBasica,
      anoGradoBasica: edu.anoGradoBasica,
      edu_sup: edu.edu_sup,
      idiomas: edu.idiomas,
      empresaActual: work.empresaActual,
      esPrivadaActual: work.esPrivadaActual,
      pais: work.pais,
      depto: work.depto,
      municipio: work.municipio,
      correo_entidad: work.correo,
      telefono: work.telefono,
      ingreso: work.ingreso,
      retiro: work.retiro,
      cargo: work.cargo,
      dependencia: work.dependencia,
      direccion: work.direccion,
      exp_anterior: work.exp_anterior,
      aniosServidorPublico: ano.aniosServidorPublico,
      aniosSectorPrivado: ano.aniosSectorPrivado,
      aniosIndependiente: ano.aniosIndependiente,
      mesesServidorPublico: ano.mesesServidorPublico,
      mesesSectorPrivado: ano.mesesSectorPrivado,
      mesesIndependiente: ano.mesesIndependiente,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        borrarCookie();
        alert("Datos enviados correctamente");
        
      } else {
        alert("Error al enviar los datos");
        return;
      }
    });
    borrarCookie();
        alert("Datos enviados correctamente");
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
function borrarCookie() {
  document.cookie = "educacionalm" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/ParcialHojaDeVida/;domain=localhost;";
  document.cookie = "educacion" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/ParcialHojaDeVida/;domain=localhost;";
  document.cookie = "laboral" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/ParcialHojaDeVida/;domain=localhost;";
  document.cookie = "anos" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/ParcialHojaDeVida/;domain=localhost;";
  document.cookie = "laboralalm" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/ParcialHojaDeVida/;domain=localhost;";
  document.cookie = "anosalm" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/ParcialHojaDeVida/;domain=localhost;";
}

function buscarDatos() {
  const documento = document.getElementById("documento").value;

  if (!documento) {
    alert("Por favor, ingrese una cédula.");
    return;
  }

  $.ajax({
    url: "buscar.php",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({ documento: documento }),
    success: function (data) {
      mostrarResultados(data);
    },
  });
}

function mostrarResultados(data) {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = "";
  if (data.status !== "success") {
    resultadosDiv.innerHTML =
      "<div class='alert alert-danger'>No se encontraron datos para esta cédula.</div>";
    return;
  }

  let html = `<h2 class="mb-3">Datos Personales</h2>
                        <table class="table table-striped table-bordered">
                            <tr><th>Nombre</th><td>${data.datos_personales.nombre}</td></tr>
                            <tr><th>Primer Apellido</th><td>${data.datos_personales.primer_apellido}</td></tr>
                            <tr><th>Segundo Apellido</th><td>${data.datos_personales.segundo_apellido}</td></tr>
                            <tr><th>Sexo</th><td>${data.datos_personales.sexo}</td></tr>
                            <tr><th>Fecha de Nacimiento</th><td>${data.datos_personales.fecha_nac}</td></tr>
                            <tr><th>Correo</th><td>${data.datos_personales.correo}</td></tr>
                        </table>`;
  if (data.educacion_basica.length > 0) {
    html += `<h2 class="mb-3">Educación Básica</h2>
                         <table class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Grado Básico</th>
                                    <th>Título Obtenido</th>
                                    <th>Mes de Grado</th>
                                    <th>Año de Grado</th>
                                </tr>
                            </thead>
                            <tbody>`;
    data.educacion_basica.forEach((item) => {
      html += `<tr>
                                <td>${item.grado_basico}</td>
                                <td>${item.titulo_obtenido}</td>
                                <td>${item.mes_grado}</td>
                                <td>${item.anio_grado}</td>
                            </tr>`;
    });
    html += `</tbody></table>`;
  }

  if (data.educacion_superior.length > 0) {
    html += `<h2 class="mb-3">Educación Superior</h2>
                         <table class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Modalidad</th>
                                    <th>Semestres Aprobados</th>
                                    <th>Es Graduado</th>
                                    <th>Título Obtenido</th>
                                    <th>Mes de Grado</th>
                                    <th>Año de Grado</th>
                                </tr>
                            </thead>
                            <tbody>`;
    data.educacion_superior.forEach((item) => {
      html += `<tr>
                                <td>${item.modalidad}</td>
                                <td>${item.semestres}</td>
                                <td>${item.esGraduado ? "Sí" : "No"}</td>
                                <td>${item.nombre_titulo}</td>
                                <td>${item.mes_grado}</td>
                                <td>${item.anio_grado}</td>
                            </tr>`;
    });
    html += `</tbody></table>`;
  }

  if (data.idiomas.length > 0) {
    html += `<h2 class="mb-3">Idiomas</h2>
                         <table class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Idioma</th>
                                    <th>Habla</th>
                                    <th>Lee</th>
                                    <th>Escribe</th>
                                </tr>
                            </thead>
                            <tbody>`;
    data.idiomas.forEach((item) => {
      html += `<tr>
                                <td>${item.idioma}</td>
                                <td>${item.habla}</td>
                                <td>${item.lee}</td>
                                <td>${item.escribe}</td>
                            </tr>`;
    });
    html += `</tbody></table>`;
  }

  if (data.empleo_actual) {
    html += `<h2 class="mb-3">Empleo Actual</h2>
                         <table class="table table-striped table-bordered">
                            <tr><th>Empresa</th><td>${data.empleo_actual.empresa}</td></tr>
                            <tr><th>Cargo</th><td>${data.empleo_actual.cargo}</td></tr>
                            <tr><th>Fecha de Ingreso</th><td>${data.empleo_actual.fecha_ingreso}</td></tr>
                        </table>`;
  }

  if (data.tiempo_total) {
    html += `<h2 class="mb-3">Tiempo Total de Experiencia</h2>
                         <table class="table table-striped table-bordered">
                            <tr><th>Servidor Público Años</th><td>${data.tiempo_total.publico_anios}</td></tr>
                            <tr><th>Sector Privado Años</th><td>${data.tiempo_total.privado_anios}</td></tr>
                            <tr><th>Independiente Años</th><td>${data.tiempo_total.independiente_anios}</td></tr>
                        </table>`;
  }

  resultadosDiv.innerHTML = html;
}
