function calcularAnios() {
    var aniosServidorPublico = parseInt(document.getElementById("aniosServidorPublico").value) || 0;
    var aniosSectorPrivado = parseInt(document.getElementById("aniosSectorPrivado").value) || 0;
    var aniosIndependiente = parseInt(document.getElementById("aniosIndependiente").value) || 0;

    var mesesServidorPublico = parseInt(document.getElementById("mesesServidorPublico").value) || 0;
    var mesesSectorPrivado = parseInt(document.getElementById("mesesSectorPrivado").value) || 0;
    var mesesIndependiente = parseInt(document.getElementById("mesesIndependiente").value) || 0;

    var totalAnios = aniosServidorPublico + aniosSectorPrivado + aniosIndependiente;
    var totalMeses = mesesServidorPublico + mesesSectorPrivado + mesesIndependiente;

    console.log(totalAnios);
    console.log(totalMeses);

    document.getElementById("aniosTotal").value = totalAnios;
    document.getElementById("mesesTotal").value = totalMeses;
}
var index=2;
function masEmpleo(){
    var html=`
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
                            <input class="form-check-input" type="radio" name="publicapriv${index}" id="ccRadio${index}" value="publica">
                            <label class="form-check-label" for="ccRadio${index}">PUBLICA</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="publicapriv${index}" id="ceRadio${index}" value="privada">
                            <label class="form-check-label" for="ceRadio${index}">PRIVADA</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="pais${index}">PAIS</label>
                    <input type="text" class="form-control" id="pais${index}">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="depto${index}">DEPARTAMENTO</label>
                    <input type="text" class="form-control" id="depto${index}">
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="muni${index}">MUNICIPIO</label>
                    <input type="text" class="form-control" id="muni${index}">
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
                    <input type="text" class="form-control" id="ingreso${index}">
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="retiro${index}">FECHA DE RETIRO</label>
                    <input type="text" class="form-control" id="retiro${index}">
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
       <br><br>
    `;
    index+=1;
ponerhtml(html);
}
function ponerhtml(html){
    document.getElementById("agregarmasexp").innerHTML+=html
}