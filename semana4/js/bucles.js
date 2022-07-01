//* usaremos document.getelementbyId()

const div_container = document.getElementById('container');
div_container.innerHTML = "<h1>Bucles</h1>";

// += (numeros) suma al valor actual;
// += (string / cadena) concatena sobre el valor actual
// += NO REEMPLAZA EL ACTUAL VALOR

// let frutas = ["pera", "manzana", "limon", "fresa", "naranja"];

// let iter = 0;
// while (iter < frutas.length) {
//     div_container.innerHTML += "<p>" + frutas[iter] + "</p>";
//     if (frutas[iter] == 'limon') {
//         break;
//     }
//     iter++; // igual a iter = iter + 1;
// }

div_container.innerHTML += "<hr>";

//? break:

// const numero = 15;

// for(let iter = 1; iter <= 20; iter++) {
//     div_container.innerHTML += "<p>" + iter + " x " + numero + " = " + iter * numero + "</p>";
// }



// const numero_tablas = 8;

// for (let i = 1; i <= numero_tablas; i++) {
//     div_container.innerHTML += "<h2>Tabla del " + i + ":</h2>";
//     for (let j = 1; j <= 10; j++) {
//         let texto = i + " x " + j + " = " + (i * j);
//         div_container.innerHTML += "<p>" + texto + "</p>";
//     }
// }


const numero_tablas = 1;
// Utilizando for:
// imprimir cada tabla del 1 al "numero_tablas", del 1 al 10
for (let i = 1; i <= numero_tablas; i++) {
    if (i == 3 || i == 6 || i == 9) continue;
    div_container.innerHTML += "<h2>Tabla del " + i + ":</h2>";
    div_container.innerHTML += "<p>i x j = (i * j)</p>";
    // queremos 10 mltiplicadores de "i"
    for (let j = 1; j <= 10; j++) {
        if (j == 2 || j == 4 || j == 6 || j == 8 || j == 10) continue;
        let texto = i + " x " + j + " = " + (i * j);
        div_container.innerHTML += "<p>" + texto + "</p>";
    }
}

div_container.innerHTML += "<hr>";


/*
FOR OF: estructura de control para poder recorrer objetos iterables
(Array, String, Map, Set)
*/

let productos = [
    'mouse',
    'teclado',
    'parlante',
    'monitor',
    'celular',
    'adaptador',
    'cargador'
];

// for (var iter of objetoIterable) { ... }

for (let producto of productos) {
    div_container.innerHTML += "<p> - " + producto + "</p>"
}

div_container.innerHTML += "<hr>";

const frase = "Amo programar"; //String
for (let letra of frase) {
    if (letra == " ") continue; //! Salta los espacios
    div_container.innerHTML += "<p> - " + letra + "</p>"
}

div_container.innerHTML += "<hr>";

// FOR IN: structura de control para poder recorrer objetos iterables capturando el índice
// (o llave o propiedad)

for (let x in productos) {
    div_container.innerHTML += "<p> - " + x + "</p>"
}

for (let x in productos) {
    div_container.innerHTML += "<p> - " + productos[x] + "</p>"
}


div_container.innerHTML += "<hr>";
