/* 3- Haga un programa que lea N tarjetas de datos A, B, C, D, E
A = Número de cedula de identidad del alumno 
B = Nombre del alumno 
C = Nota de matemáticas
D = Nota de física
E = Nota de programación
Hallar:
- Nota promedio de cada materia
- Número de alumnos aprobados en cada materia 
- Número de alumnos aplazados en cada materia
- Número de alumnos que aprobaron todas las materias 
- Número de alumnos que aprobaron una sola materia 
- Número de alumnos que aprobaron dos materias 
- Nota máxima en cada materia
*/

//Declaracion de las variables correspondientes
var a = [50];
var b = [50];
var c = 0;
var d = 0;
var e = 0;

let c_n = [100]; 
let d_n = [100];
let e_n = [100];

var promedioC = 0;
var promedioD = 0;
var promedioE = 0;

var sumaC = 0, sumaD = 0,sumaE = 0;

var aprobadosC = 0;
var aprobadosD = 0;
var aprobadosE = 0;

var aplazadosE = 0;
var aplazadosC = 0;
var aplazadosD = 0;

var todasmaterias = 0;
var unamateria = 0;
var dosmateria = 0;

var notaMaxC = 0;
var notaMaxD = 0;
var notaMaxE = 0;
//cantidad = prompt("USUARIO, DIGITE LA CANTIDAD DE TARJETAS: ");

//Funcion para bloquear numeros negativos
var number = document.getElementById('idTargetas');

number.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}

//Funcion para generar targetas
function magic(){
    var need = document.getElementById('idTargetas').value;

    if(need == 0 ){
        alert('Usuario, el cero ( 0 ) no es valido')
    }else if(need == ""){
        alert('Usuario, no puso un valor en el formulario')
    }else{
        const byeCard = document.getElementById('byeCard');
        byeCard.remove();

        for(let i = 0; i < need; i++){

            document.getElementById('tarjetas').innerHTML += 
            `
            
                <div class="card my-2" id="alumno${i}">
                            <div class="card-body">
                                <label for="idName${i}">Escriba el nombre del alumno</label>
                                <input 
                                class="form-control" 
                                type="text" 
                                id="idName${i}" 
                                name="idName${i}" 
                                required>

                                <label for="idCedula${i}">Cedula del alumno</label>
                                <input 
                                type="number"
                                class="form-control"
                                min="1"
                                maxlength="8"
                                id="idCedula${i}"
                                name="idCedula${i}"
                                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                required>

                                <label for="idProg${i}">Nota de Programacion</label>
                                <input 
                                type="number"
                                class="form-control"
                                min="0"
                                max="20"
                                maxlength="2"
                                id="idProg${i}"
                                name="idProg${i}"
                                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                required>

                                <label for="idMat${i}">Nota de Matematicas</label>
                                <input 
                                type="number"
                                class="form-control"
                                min="0"
                                max="20"
                                maxlength="2"
                                id="idMat${i}"
                                name="idMat${i}"
                                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                required>

                                <label for="idFis${i}">Nota de Fisica</label>
                                <input 
                                type="number"
                                class="form-control"
                                min="0"
                                max="20"
                                maxlength="2"
                                id="idFis${i}"
                                name="idFis${i}"
                                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                required>

                            </div>
                        </div>
            
            `
            
        }

        document.getElementById('tarjetas').innerHTML += `<button type="button" id="enviar" onclick="collect()" class="btn btn-primary mt-2 px-5">Enviar!</button>`

    }
}

var mat1, mat2, mat3, mat4, mat5, mat6, mat7, mat8;
var fis1, fis2, fis3, fis4, fis5, fis6, fis6, fis8;
var pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8;

let c_n1;
let d_n1;
let e_n1;

//Funcion para recolectar los datos registrados
function collect(){
    const byeButton = document.getElementById('enviar');
    byeButton.remove();
    let i;
    
    const c1 = document.getElementById('idMat1');
    if(c1 != null){
        mat1 = document.getElementById('idMat1').value;
    }else{
        mat1 = null;
    }

    const c2 = document.getElementById('idMat2');
    if(c2 != null){
        mat2 = document.getElementById('idMat2').value;
    }else{
        mat2 = null;
    }

    const c3 = document.getElementById('idMat3');
    if(c3 != null){
        mat3 = document.getElementById('idMat3').value;
    }else{
        mat3 = null;
    }

    const c4 = document.getElementById('idMat4');
    if(c4 != null){
        mat4 = document.getElementById('idMat4').value;
    }else{
        mat4 = null;
    }

    const c5 = document.getElementById('idMat5');
    if(c5 != null){
        mat5 = document.getElementById('idMat5').value;
    }else{
        mat5 = null;
    }

    const c6 = document.getElementById('idMat6');
    if(c6 != null){
        mat6 = document.getElementById('idMat6').value;
    }else{
        mat6 = null;
    }

    const c7 = document.getElementById('idMat7');
    if(c7 != null){
        mat7 = document.getElementById('idMat7').value;
    }else{
        mat7 = null;
    }

    const c8 = document.getElementById('idMat8');
    if(c8 != null){
        mat8 = document.getElementById('idMat8').value;
    }else{
        mat8 = null;
    }

    c_n1 = [
        document.getElementById('idMat0').value,
        mat1,
        mat2,
        mat3,
        mat4,
        mat5,
        mat6,
        mat7,
        mat8
    ];

    c_n = c_n1.filter( element => {
        return element !== null;
    });

    const d1 = document.getElementById('idFis1');
    if(d1 != null){
        fis1 = document.getElementById('idFis1').value;
    }else{
        fis1 = null;
    }

    const d2 = document.getElementById('idFis2');
    if(d2 != null){
        fis2 = document.getElementById('idFis2').value;
    }else{
        fis2 = null;
    }

    const d3 = document.getElementById('idFis3');
    if(d3 != null){
        fis3 = document.getElementById('idFis3').value;
    }else{
        fis3 = null;
    }

    const d4 = document.getElementById('idFis4');
    if(d4 != null){
        fis4 = document.getElementById('idFis4').value;
    }else{
        fis4 = null;
    }

    const d5 = document.getElementById('idFis5');
    if(d5 != null){
        fis5 = document.getElementById('idFis5').value;
    }else{
        fis5 = null;
    }

    const d6 = document.getElementById('idFis6');
    if(d6 != null){
        fis6 = document.getElementById('idFis6').value;
    }else{
        fis6 = null;
    }

    const d7 = document.getElementById('idFis7');
    if(d7 != null){
        fis7 = document.getElementById('idFis7').value;
    }else{
        fis7 = null;
    }

    const d8 = document.getElementById('idFis8');
    if(d8 != null){
        fis8 = document.getElementById('idFis8').value;
    }else{
        fis8 = null;
    }

    d_n1 = [
        document.getElementById('idFis0').value,
        fis1,
        fis2,
        fis3,
        fis4,
        fis5,
        fis6,
        fis7,
        fis8
    ];

    d_n = d_n1.filter( element => {
        return element !== null;
    });

    const e1 = document.getElementById('idProg1');
    if(e1 != null){
        pro1 = document.getElementById('idProg1').value;
    }else{
        pro1 = null;
    }

    const e2 = document.getElementById('idProg2');
    if(e2 != null){
        pro2 = document.getElementById('idProg2').value;
    }else{
        pro2 = null;
    }

    const e3 = document.getElementById('idProg3');
    if(e3 != null){
        pro3 = document.getElementById('idProg3').value;
    }else{
        pro3 = null;
    }

    const e4 = document.getElementById('idProg4');
    if(e4 != null){
        pro4 = document.getElementById('idProg4').value;
    }else{
        pro4 = null;
    }

    const e5 = document.getElementById('idProg5');
    if(e5 != null){
        pro5 = document.getElementById('idProg5').value;
    }else{
        pro5 = null;
    }

    const e6 = document.getElementById('idProg6');
    if(e6 != null){
        pro6 = document.getElementById('idProg6').value;
    }else{
        pro6 = null;
    }

    const e7 = document.getElementById('idProg7');
    if(e7 != null){
        pro7 = document.getElementById('idProg7').value;
    }else{
        pro7 = null;
    }

    const e8 = document.getElementById('idProg8');
    if(e8 != null){
        pro8 = document.getElementById('idProg8').value;
    }else{
        pro8 = null;
    }

    e_n1 = [
        document.getElementById('idProg0').value,
        pro1,
        pro2,
        pro3,
        pro4,
        pro5,
        pro6,
        pro7,
        pro8
    ];

    e_n = e_n1.filter( element => {
        return element !== null;
    });

    //Calculo del promedio de la materia a traves del método estático Math.floor()
    for(i = 0; i < c_n.length; i++){
        sumaC = sumaC + Math.floor(c_n[i]);
        sumaD = sumaD + Math.floor(d_n[i]);
        sumaE = sumaE + Math.floor(e_n[i]);

        for(let j = 0; j < c_n.length; j++){

            //Uso de la sentencia if y else para determinar los alumnos aprobados y aplazados
            if(c_n[j] >= 10 && c_n[j] <=20 || c_n[j] > 20){
                aprobadosC = aprobadosC +1;
            }
            else {(c_n[j] < 10)
                aplazadosC = aplazadosC+1;
            }

            if(d_n[j] >= 10 && d_n[j] <=20 || d_n[j] > 20){
                aprobadosD = aprobadosD +1;
            }
            else {(d_n[j] < 10)
                aplazadosD = aplazadosD+1;
            }

            if(e_n[j] >= 10 && e_n[j] <=20 || e_n[j] > 20){
                aprobadosE = aprobadosE +1;
            }
            else {(e_n[j] < 10)
                aplazadosE = aplazadosE+1;
            }

            //Uso de la sentencia if para determinar los alumnos que aprobaron todas las materias 
            if(c_n[j] >=10 && d_n[j] >=10 && e_n[j] >=10){
                todasmaterias = todasmaterias +1;
            }

            //Uso de la sentencia if para determinar los alumnos que aprobaron solo una materia
            if(c_n[j] >=10 && d_n[j] <10 && e_n[j] <10 ||
                c_n[j] <10 && d_n[j] >= 10 && e_n[j] < 10 ||
                c_n[j] <10 && d_n[j] <10 && e_n[j] >=10){
                unamateria = unamateria + 1; 
            }

            //Uso de la sentencia if para determinar los alumnos que aprobaron solo dos materias 
            if(c_n[j] >=10 && d_n[j] >=10 && e_n[j] <10 ||
                c_n[j] >=10 && d_n[j] < 10 && e_n[j] >= 10 ||
                c_n[j] <10 && d_n[j] >=10 && e_n[j] >=10){
                dosmateria = dosmateria + 1; 
            }

            //Uso de la sentencia if para determinar la nota maxima en cada materia
            if(j==0){
                notaMaxC = c_n[j];
                notaMaxD = d_n[j];
                notaMaxE = e_n[j];
            }
            if(j > 0){
                if (c_n > notaMaxC){
                    notaMaxC = c_n[j];
                }
                if(d_n > notaMaxD) {
                    notaMaxD = d_n[j];
                }
                if (c_n > notaMaxC){
                    notaMaxC = c_n[j];
                }
                if(e_n > notaMaxE) {
                    notaMaxE = e_n[j];
                }
            }
        }
    }

    promedioC = (sumaC) / i;
    promedioD = (sumaD) / i;
    promedioE = (sumaE) / i;

    document.getElementById('resp').innerHTML = `
    <h4>Resultado del calculo</h4>

                <h5 class="pt-2">Notas promedio:</h5>
                <h6 class="ps-3">- Matemáticas: ${promedioC}</h6>
                <h6 class="ps-3">- Física: ${promedioD}</h6>
                <h6 class="ps-3">- Programación: ${promedioE}</h6>

                <h5 class="pt-2">Alumnos aprobados:</h5>
                <h6 class="ps-3">- En Matemáticas: ${aprobadosC}</h6>
                <h6 class="ps-3">- En Física: ${aprobadosD}</h6>
                <h6 class="ps-3">- En Programación: ${aprobadosE}</h6>

                <h5 class="pt-2">Alumnos que:</h5>
                <h6 class="ps-3">- Solo aprobaron una materia: ${unamateria}</h6>
                <h6 class="ps-3">- Solo aprobaron dos materias: ${dosmateria}</h6>
                <h6 class="ps-3">- Aprobaron todas la materias: ${todasmaterias}</h6>

                <h5 class="pt-2">Nota maxima:</h5>
                <h6 class="ps-3">- Matemáticas: ${notaMaxC}</h6>
                <h6 class="ps-3">- Física: ${notaMaxD}</h6>
                <h6 class="ps-3">- Programación: ${notaMaxE}</h6>

                <button type="button" onclick="window.location.reload()" class="btn btn-secondary mt-5 px-3">Recargar Pagina </button>
    `;

}