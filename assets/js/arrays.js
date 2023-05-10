/**
 * Practica Platzi Arreglos
 * @author: Carlos Duarte
 * @mail: david.duarte.gill@gmail.com
 * @url: https://platzi.com/cursos/basico-javascript/
 * 
 */

// Un array es una estructura de datos, es un objeto tipo lista de alto nivel.

// Los arrays son objetos de tipo lista cuyo prototipo tiene métodos para realizar operaciones de recorrido y mutación
//berrie.png, frambueza.png, naranja.png, tomate.png, zanahoria.png,cereza.png, fresa.png, maracuya.png, platano.png, uva.png,

let ARRAY_FRUTAS = []; // Array Literal Syntax 

ARRAY_FRUTAS = [
    { nombre: "berrie", costo: 200, oferta: false },
    { nombre: "frambueza", costo: 150, oferta: false },
    { nombre: "naranja", costo: 50, oferta: false },
    { nombre: "tomate", costo: 60, oferta: false },
    { nombre: "zanahoria", costo: 20, oferta: true },
    { nombre: "cereza", costo: 80, oferta: false },
    { nombre: "fresa", costo: 60, oferta: false },
    { nombre: "maracuya", costo: 30, oferta: true },
    { nombre: "platano", costo: 20, oferta: true },
    { nombre: "uva", costo: 50, oferta: false  }
];


/*

console.log(frutas); 
console.log(frutas.length); // length es una propiedad del array

// Acceder (por índice) a un elemento del Array
console.log(frutas[0]);   // Los arrays iician en "0" 
*/

// === Metodos para mutar arrays ===


// .push();
/*
 var masFrutas = frutas.push("Uvas"); // Esté metodo añadirá "Uvas" añ final del array
 console.log(frutas);

// .pop();

 var utlimo = frutas.pop("Uvas"); // Eliminará "Uvas" del final 
 console.log(frutas);

// unshift()

var nuevaLogitud = frutas.unshift("Uvas"); // Añade "Uvas" al inicio 
console.log(frutas);

// shift()

var borrarFruta = frutas.shift("Manzana"); // Elimina "Manzana" del inico
console.log(frutas);

// .indexOf();

var posicion = frutas.indexOf("Platano"); // te dará la posición de ese item en el array
console.log(frutas);
*/