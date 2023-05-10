/**
 * Practica Platzi Arreglos
 * @author: Carlos Duarte
 * @mail: david.duarte.gill@gmail.com
 * @url: https://platzi.com/cursos/basico-javascript/
 * 
 */

let displaySwitch = false;
let displayFrutas = [];
let frutaObj, itemFruta;
let frutasFiltratas = [];
let frutaEncontrada = {};
let NEW_ARRAY_FRUTAS = [];
let salidaConsola = '';

let opciones = [];
//  opciones = [0 - 1 - 2]
let usuario;
let maquina;
let random;
let contadorUser = 0;
let contadorMaquina = 0;
let resultado = '';

const contadorUserObj = document.getElementById("contadorUser");
const contadorMaquinaObj = document.getElementById("contadorMaquina");
const restarGameObj = document.getElementById("restarGame");

const displayFrutasObj = document.getElementById("displayFrutas");
const filterFrutasObj = document.getElementById("filterFrutas");
const filterPreciosObj = document.getElementById("filterPrecios");
const listaFrutasObj = document.getElementById("listaFrutas");
const cantidadFrutasObj = document.getElementById("cantidadFrutas");
const listaPreciosObj = document.getElementById("listaPrecios");
const precioTotalObj = document.getElementById("precioTotal");
const checkOfertasBtn = document.getElementById("checkOfertas");
const botonesAcciones = document.getElementsByClassName("boton");
const consola = document.getElementById("consola");

const resultAvisoObj = document.getElementById("resultAviso");



// Get the modal
const modal = document.getElementById("modalGame");
const modalShadow = document.getElementsByClassName("modalShadow")[0];
const spanClose = document.getElementsByClassName("close")[0];

const FRUITS_PROPS = Object.freeze({
        OFERTA: 'oferta',
        TEMPORADA: 'temporada' 
});


document.addEventListener("DOMContentLoaded", () => {
  console.log("Arregos Platzi!");
  consola.innerHTML += "Arregos Platzi!";
  main();
});

function main() {

    console.log(ARRAY_FRUTAS);
    terminal(ARRAY_FRUTAS,"array");
    resetShowListaFrutas();

    filterFrutasObj.addEventListener('keyup', function() {
        findFruta(this.value);
        filterPreciosObj.value = '10000';
    });

    filterPreciosObj.addEventListener('change', function() {
        filterPreciosFrutas(this.value);
        filterFrutasObj.value = '';
    });

    checkOfertasBtn.addEventListener("click", (event) => {
        checkOferts();
    });
    
    // When the user clicks on <span> (x), close the modal
    spanClose.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    modalShadow.onclick = function(event) {
        modal.style.display = "none";
        modalShadow.style.display = "none";
    }

    Array.from(botonesAcciones).forEach(function(element) {
        element.addEventListener("click", (event) => {
            accionesArray(element);
        });
    });


    setAtrr();
    // create a new instance of `MutationObserver` named `observer`,
    // passing it a callback function
    const observer = new MutationObserver(() => {
      setAtrr();
    });

    // call `observe()` on that MutationObserver instance,
    // passing it the element to observe, and the options object
    observer.observe(displayFrutasObj, { subtree: true, childList: true });
}

function setAtrr() {
    let todas = document.getElementsByClassName("frutaObj");

    Array.from(todas).forEach(function(element) {
        element.addEventListener("click", (event) => {
            myfn(element);
        });
    });

}

function myfn(obj) {
    console.log(obj.id);
    terminal(obj.id,"msj");
}

function accionesArray(obj) {
    switch (obj.id) {
        case "btnAddInicio":
            addFruta(ARRAY_FRUTAS,"inicio");
            break;
        case "btnAddFinal":
            addFruta(ARRAY_FRUTAS,"fin");
            break;
        case "btnDelInicio":
            deleteFruta(ARRAY_FRUTAS,"inicio");
            break;
        case "btnDelFinal":
            deleteFruta(ARRAY_FRUTAS,"fin");
            break;
        default:
            resetFruits();
            break;
    }
}

function resetFruits() {
    ARRAY_FRUTAS = JSON.parse(localStorage.getItem("ARRAY_FRUTAS"));
    showListaFrutas(ARRAY_FRUTAS);
    console.log(ARRAY_FRUTAS);    
    terminal(ARRAY_FRUTAS,"array");
}

function deleteFruta(frutas,position) {
    let frutaEliminada;
    if (ARRAY_FRUTAS.length > 0) {
        switch (position) {
            case "inicio":
                frutaEliminada = frutas.shift(); // Elimina "fruta" del inico
                break;
            default:
                frutaEliminada = frutas.pop(); // Eliminará "fruta" del final 
                break;
        }
        NEW_ARRAY_FRUTAS.push(frutaEliminada);
        showListaFrutas(frutas);
        console.log(NEW_ARRAY_FRUTAS);  
        terminal(NEW_ARRAY_FRUTAS,"array");
    }
}

function addFruta(frutas,position) {
    let frutaAdd;
    if (NEW_ARRAY_FRUTAS.length > 0) {
        switch (position) {
        case "inicio":
            frutaAdd = frutas.unshift(NEW_ARRAY_FRUTAS.pop());  // Añade "fruta" al inicio 
            break;
        default:
            frutaAdd = frutas.push(NEW_ARRAY_FRUTAS.pop()); // Esté metodo añadirá "fruta" al final del array
            break;
        }

        showListaFrutas(frutas);
        console.log(NEW_ARRAY_FRUTAS);
        terminal(NEW_ARRAY_FRUTAS,"array");
    }
    
}



function findFruta(txt){
     //   Metodo Find
    /* De igual forma, con este método se valida un true o false para encontrar un elemento y si está lo regresa y si no, no pasa nada */
    frutaEncontrada = ARRAY_FRUTAS.find(function(fruta){
        return fruta.nombre === txt;
    });

    if (frutaEncontrada){
        displayFrutasObj.innerHTML = '';
        
        showFrutaEncontrada(frutaEncontrada);
        showCostoFruta(frutaEncontrada);
        displaySwitch = false;
    }else{
        if (!displaySwitch) {
            resetShowListaFrutas();
        }
    }
}


function showFrutaEncontrada(fruta) {
    console.log(fruta);
    terminal(fruta,"objeto");
        frutaObj = '<div class="frutaObj" id="' + fruta.nombre +'">';
        frutaObj += '<img src="assets/img/' + fruta.nombre + '.png" class="imgFrutas">';
        frutaObj += '<span class="nombreFruta">' + fruta.nombre + '<br>';
        frutaObj += '$' + fruta.costo + '</span></div>';
        displayFrutasObj.innerHTML += frutaObj;
}

function showCostoFruta(fruta) {
    listaFrutasObj.innerHTML = '<li>' + fruta.nombre + '</li>';
    listaPreciosObj.innerHTML = '<li>' + fruta.costo + '</li>';
    precioTotalObj.innerHTML = 'Precio Total: $'+fruta.costo;
    cantidadFrutasObj.innerHTML = '(1)';
}


function showListaFrutas(newArrayFruits) {
    //console.log(newArrayFruits);
    displayFrutasObj.innerHTML = '';
    
    newArrayFruits.forEach(function(fruta){
        showFrutaEncontrada(fruta);
    }); 

    resetListaFrutasPrecios(newArrayFruits);
}

function filterPreciosFrutas(costo){
    //   Metodo Filter  
    /* Válida si es un true o false para poder meterlos al nuevo array, y éste método no modifica el array original */
    frutasFiltratas = ARRAY_FRUTAS.filter(function(fruta){
        return fruta.costo < costo;
    });

    if (frutasFiltratas){
        showListaFrutas(frutasFiltratas);
        displaySwitch = false;
    }else{
        if (!displaySwitch) {
            resetShowListaFrutas();
        }
    }
}


function resetShowListaFrutas() {
    displaySwitch = true;
    displayFrutasObj.innerHTML = ''
    
    ARRAY_FRUTAS.forEach(function(fruta){
        showFrutaEncontrada(fruta);
    });

    resetListaFrutasPrecios(ARRAY_FRUTAS);
}


function resetListaFrutasPrecios(fruits){
    listaFrutasObj.innerHTML = '';
    listaPreciosObj.innerHTML = '';
     //   Metodo Map 
    let nombreFrutas = fruits.map(function(fruta){
        return fruta.nombre;
    });

    let precioFrutas = fruits.map(function(fruta){
        return fruta.costo;
    });

    //   Metodo Reduce
    /* Este método corre una función en cada elemento del array, para comenzar a sumar los costos de cada elemento. */
    let costoTotal = fruits.reduce(function(totalActual, fruta){
        return fruta.costo + totalActual;
    }, 0); // El 0 será la cantidad inicial con la que comenzará el totalActual

    console.log(nombreFrutas);
    console.log(precioFrutas);
    console.log(costoTotal);
    
    terminal(nombreFrutas,"array");
    terminal(precioFrutas,"array");
    terminal("\nCosto Total: " + costoTotal,"msj");

    nombreFrutas.forEach(fruta => listaFrutasObj.innerHTML += '<li>' + fruta + '</li>');
    precioFrutas.forEach(precio => listaPreciosObj.innerHTML += '<li>' + precio + '</li>');
    precioTotalObj.innerHTML = 'Precio Total: $'+costoTotal;
    cantidadFrutasObj.innerHTML = '(' + fruits.length + ')';

}


function checkOferts() {

    //   Metodo Some
    /* Este método nos regresa un false o un true para validar si hay o no artículos que cumplan la validación */
    let frutasOferta = ARRAY_FRUTAS.some(function(frutas){
        return frutas.oferta;
    });

    if (frutasOferta) {
        console.log("Frutas en oferta: " + frutasOferta);
        terminal("\nFrutas en oferta: " + frutasOferta,"msj");
        resultAvisoObj.style.color = "red";
        resultAvisoObj.innerHTML = "¡Frutas en Oferta!";

    }else{
        resultAvisoObj.style.color = "black";
        resultAvisoObj.innerHTML = "Sin Ofertas";
    } 
    modal.style.display = "block";
    modalShadow.style.display = "block";
    
}

function terminal(argument,type) {
    consola.innerHTML += "\n------------------------------------------------------------------------------------------------";
    switch (type) {
        case "array":
            argument.forEach(function (element, i) {consola.innerHTML += '\n' + '> ' + i + ' ' + JSON.stringify(element) + ''});
            break;
        case "objeto":
            consola.innerHTML += '\n' + '> ' + JSON.stringify(argument) + '';
            break;
        default:
            consola.innerHTML += '\n' + argument;
            break;
    }
}
