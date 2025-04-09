index = 2;

function agregarMasEduSup() {

    let html = `
    <div class="row mb-3">
            <div class="col-md-2">
                <label for="modalidad${index}">Modalidad Académica</label>
                <select class="form-control" id="modalidad${index}">
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
                <label for="semestresAprobados${index}">No. de Semestres Aprobados</label>
                <input type="text" class="form-control" id="semestresAprobados${index}">
            </div>
            <div class="col-md-2">
                <label>Graduado</label><br>
                <input type="radio" name="graduado${index}" id="graduadoSi${index}"> <label for="graduadoSi${index}">Sí</label>
                <input type="radio" name="graduado${index}" id="graduadoNo${index}"> <label for="graduadoNo${index}">No</label>
            </div>
            <div class="col-md-3">
                <label for="nombreEstudios${index}">Nombre de los Estudios o Título Obtenido</label>
                <input type="text" class="form-control" id="nombreEstudios${index}">
            </div>
            <div class="col-md-2">
                <label for="mesGradoBasica${index}">Mes de Grado</label>
                <select class="form-control" id="mesGradoBasica${index}">                    
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
                <label for="anoGradoSuperior${index}">Año</label>
                <input type="text" class="form-control" id="anoGradoSuperior${index}" placeholder="Año">
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-12 text-left">                
            </div>
        </div>
        `
    index += 1;
    pushEduSup(html);

}

function pushEduSup(elemento) {
    document.getElementById("agregarMasEduSup").innerHTML += elemento;
}

let indexIdiomas = 2;

function agregarIdiomas() {
    let html = `
    <div class="row mb-3">
            <div class="col-md-2">
                <label for="idioma${indexIdiomas}">Idioma</label>
                <input type="text" class="form-control" id="idioma${indexIdiomas}">
            </div>
            <div class="col-md-2">
                <label>Lo Habla</label><br>
                <input type="radio" name="habla${indexIdiomas}" id="hablaR${indexIdiomas} value="Regular"> <label for="hablaR${indexIdiomas}">R</label>
                <input type="radio" name="habla${indexIdiomas}" id="hablaB${indexIdiomas} value="Bien"> <label for="hablaB${indexIdiomas}">B</label>
                <input type="radio" name="habla${indexIdiomas}" id="hablaMB${indexIdiomas} vale="Muy bien"> <label for="hablaMB${indexIdiomas}">MB</label>
            </div>
            <div class="col-md-2">
                <label>Lo Lee</label><br>
                <input type="radio" name="lee${indexIdiomas}" id="leeR${indexIdiomas} value="Regular"> <label for="leeR${indexIdiomas}">R</label>
                <input type="radio" name="lee${indexIdiomas}" id="leeB${indexIdiomas} value="Bien"> <label for="leeB${indexIdiomas}">B</label>
                <input type="radio" name="lee${indexIdiomas}" id="leeMB${indexIdiomas} value="Muy bien"> <label for="leeMB${indexIdiomas}">MB</label>
            </div>
            <div class="col-md-2">
                <label>Lo Escribe</label><br>
                <input type="radio" name="escribe${indexIdiomas}" id="escribeR${indexIdiomas} value="Regular"> <label for="escribeR${indexIdiomas}">R</label>
                <input type="radio" name="escribe${indexIdiomas}" id="escribeB${indexIdiomas} value="Bien"> <label for="escribeB${indexIdiomas}">B</label>
                <input type="radio" name="escribe${indexIdiomas}" id="escribeMB${indexIdiomas} value="Muy bien"> <label for="escribeMB${indexIdiomas}">MB</label>
            </div>
    </div>
    `
    index += 1;
    pushIdiomas(html);
}

function pushIdiomas(elemento) {
    document.getElementById("containerIdiomas").innerHTML += elemento;
}
