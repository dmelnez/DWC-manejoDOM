import { imagen, parrafo, tabla, lista } from "./creacion.js";

let contadorCasillas = 1;

function insertarTabla() {
    let cuadro = selecCuadro();
    cuadro.append(tabla());
    contadorCasillas++;
}

function insertarImagen() {
    let cuadro = selecCuadro();
    cuadro.append(imagen());
    contadorCasillas++;
}

function insertarLista() {
    let numero = parseInt(prompt('Numero de Elementos de la Lista'));
    let elementosLista = [];
    for(let i=0;i<numero;i++) {
        arrayItems.push(prompt(`Elemento Lista ${i + 1}`));
    };
    let cuadro = selecCuadro();
    cuadro.append(lista(elementosLista));
    contadorCasillas++;
}

function insertarParrafo() {
    let cuadro = selecCuadro();
    cuadro.append(parrafo());
    cuadro.appendChild(parrafo());
    contadorCasillas++;
}


function seleccionCuadrado() {
    if(contadorCasillas > 4) contadorCasillas=1;
    switch (contadorCasillas) {
        case 1:
            return document.querySelector('#casilla01');
            break;
        case 2:
            return document.querySelector('#casilla02');
            break;
        case 3:
            return document.querySelector('#casilla03');
            break;
        case 4:
            return document.querySelector('#casilla04');
            break;
    }
    
}

window.crearTabla = crearTabla;
window.crearImagen = crearImagen;
window.crearParrafos = crearParrafos;
window.crearLista = crearLista;