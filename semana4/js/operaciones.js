let numero1 = 10
let numero2 = 20

// Para sumar 2 numeros suamos +
console.log("Suma", numero1 + numero2)
// Para restar
console.log("Resta", numero1 - numero2)
// Para multiplicar
console.log("Multiplicar", numero1 * numero2)
// Para dividir
console.log("Dividir", numero1 / numero2)

// ? Asi como podemos transformar un dato a string, tambien existe
// ? la clase number la cual puede trasnformar un string a number

let numero3 = "22"
console.log(Number(numero3))

// Cuando queramos transformar un string a number y no sea posible, tendremos de respuesta NaN= Not A Number
let numero4 = "Luis"
console.log(Number(numero4))

//Ejemplo
//En un registro solicitamos la edad
//veintidós 
console.log(Number("veintidos"))
console.log(Number("one"))

// Otras formas de transformar un string a number

let numero5 = "33.5"
// Forma 1
console.log("Forma 1", Number(numero5))
// Forma 2
console.log("Forma 2", parseInt(numero5))
// Forma 3
console.log("Forma 3", +numero5)
// Forma 4
console.log("Forma 4", parseFloat(numero5))

//! Math
// const operacion = 3 * 2 + 10 - 5 / 2
// // Math.sqrt raiz cuadrada
// console.log(Math.sqrt(operacion))
// // Math.pow = potencia
// console.log(Math.pow(6, 3))

// //Ejemplo pitagoras
// //Vamos a ver como solicitar un dato del navegador
// const catetoA = Number(prompt("Ingrese el valor de A"))
// //El valor que colocamos se guarda en la variable
// const catetoB = Number(prompt("Ingrese el valor de B"))
//! Nota: Todo valor recibido en prompt es un string
// const operacion2 = Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2))
// console.log("La hipotenusa es", operacion2)

// Problema 1
// Hacer un algoritmo que halle el area de un rectángulo
// A = B * H
// const base = Number(prompt("Ingrese la Base del rectángulo"))
// const altura = Number(prompt("Ingrese la altura del rectángulo"))

// const areaRectangulo = base * altura
// console.log("El área del rectángulo es", areaRectangulo)

// Problema 2
// Área de un circulo
// A = Math.pi * Math.pow(R, 2)

const radio = Number(prompt("Ingrese el radio del círculo"))

const areaCirculo = Math.PI * Math.pow(radio, 2)
console.log("El área del círculo es", areaCirculo)