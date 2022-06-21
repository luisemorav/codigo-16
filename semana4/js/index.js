// Variable que pueda cambiar de tipo
let numero = 10;

//podemos cambiar el tipo de dato? si

console.log("Primer tipo", numero);

// let o const solo va cuando se crea la variable, cuando se cambia el valor no hace falta ponerle porque ya existe la variable
numero = "Pepe";
console.log("Segundo tipo", numero);

// Vamos a ver el console.log()
// permite imprimir un valor en la consola del navegador
// console.log(numero);

//! Const

const igv = 0.18;
console.log("Primer igv", igv);

//! Esto no es posible
// igv = 0.2;
// console.log("Segundo igv", igv);

//Existe otra forma de poder mostrar una variable
// alert: Dispara un msg

// alert(igv);

// ? Concatenación : Basicamente es juntar 2 o mas variables
const primerNombre = "Linder";
const primerApellido = "Hassinger";
let edad = 22;
let dias = 20;

// Para poder concatenar 2 o mas strings usamos el operador +
console.log("Concatenación");
console.log(primerNombre + " " + primerApellido + edad); //Para efectospracticos string + number = string
console.log(edad + dias); // number + number = number
// En Js se puede hacer cualquier tipo de operación matemática

//number a string: Sepamos que en JS existen las clases string y number
// ? Al hacer esto estamos transformando un entero a un string
console.log("Edad", String(edad));
console.log(String(edad) + String(dias));