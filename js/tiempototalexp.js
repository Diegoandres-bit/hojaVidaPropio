function calcularAnios() {
  var aniosServidorPublico =
    parseInt(document.getElementById("aniosServidorPublico").value) || 0;
  var aniosSectorPrivado =
    parseInt(document.getElementById("aniosSectorPrivado").value) || 0;
  var aniosIndependiente =
    parseInt(document.getElementById("aniosIndependiente").value) || 0;

  var mesesServidorPublico =
    parseInt(document.getElementById("mesesServidorPublico").value) || 0;
  var mesesSectorPrivado =
    parseInt(document.getElementById("mesesSectorPrivado").value) || 0;
  var mesesIndependiente =
    parseInt(document.getElementById("mesesIndependiente").value) || 0;

  var totalAnios =
    aniosServidorPublico + aniosSectorPrivado + aniosIndependiente;
  var totalMeses =
    mesesServidorPublico + mesesSectorPrivado + mesesIndependiente;

  console.log(totalAnios);
  console.log(totalMeses);

  document.getElementById("aniosTotal").value = totalAnios;
  document.getElementById("mesesTotal").value = totalMeses;
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
window.addEventListener("unload", function () {
  persistenciaAnosalm();
});
function persistenciaAnos() {
  var anos = {
    aniosServidorPublico: document.getElementById("aniosServidorPublico").value,
    aniosSectorPrivado: document.getElementById("aniosSectorPrivado").value,
    aniosIndependiente: document.getElementById("aniosIndependiente").value,
    mesesServidorPublico: document.getElementById("mesesServidorPublico").value,
    mesesSectorPrivado: document.getElementById("mesesSectorPrivado").value,
    mesesIndependiente: document.getElementById("mesesIndependiente").value,
  };
  if (validarObjeto(anos)) {
    json_anos = JSON.stringify(anos);
    console.log(json_anos);
    document.cookie =
      "anos=" + json_anos + "; max-age=" + 7 * 24 * 60 * 60 + "; path=/ParcialHojaDeVida/ ; domain=localhost;";
  }
}
function persistenciaAnosalm() {
  var anos = {
    aniosServidorPublico: document.getElementById("aniosServidorPublico").value,
    aniosSectorPrivado: document.getElementById("aniosSectorPrivado").value,
    aniosIndependiente: document.getElementById("aniosIndependiente").value,
    mesesServidorPublico: document.getElementById("mesesServidorPublico").value,
    mesesSectorPrivado: document.getElementById("mesesSectorPrivado").value,
    mesesIndependiente: document.getElementById("mesesIndependiente").value,
  };
  json_anos = JSON.stringify(anos);
  console.log(json_anos);
  document.cookie =
    "anosalm=" + json_anos + "; max-age=" + 7 * 24 * 60 * 60 + "; path=/ParcialHojaDeVida/ ; domain=localhost;";
}
function validarObjeto(obj) {
  const camposVacios = [];
  for (const [key, value] of Object.entries(obj)) {
    if (
      value === null ||
      value === undefined ||
      value === "" ||
      (typeof value === "string" && value.trim() === "")
    ) {
      camposVacios.push(key);
    }
  }
  const camp = camposVacios.length;
  if (camp > 0) {
    for (let i = 0; i < camp; i++) {
      alert("falta llenar" + camposVacios[i]);
    }

    return false;
  }
  return true;
}
window.onload = function cargarAnos() {
  var anitos = getCookie("anosalm");
  if (anitos) {
    var anos = JSON.parse(anitos);
    document.getElementById("aniosServidorPublico").value =
      anos.aniosServidorPublico;
    document.getElementById("aniosSectorPrivado").value =
      anos.aniosSectorPrivado;
    document.getElementById("aniosIndependiente").value =
      anos.aniosIndependiente;
    document.getElementById("mesesServidorPublico").value =
      anos.mesesServidorPublico;
    document.getElementById("mesesSectorPrivado").value =
      anos.mesesSectorPrivado;
    document.getElementById("mesesIndependiente").value =
      anos.mesesIndependiente;
  }
};
