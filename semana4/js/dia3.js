// let edad = 20;

// switch (edad) {
//   case 0:
//     console.log("Reicien nacido");
//     break;
//   case 18:
//     console.log("Mayor de edad");
//     break;
//   case 20:
//     console.log("Entro a base 2");
//     break;
//   case 65:
//     console.log("Entro a la 3ra edad");
//     break;
//   default:
//     console.log("Este caso no esta conteplado");
//   // !Nota en el defaulta no hace falta poner break porque solo entra
//   // !ahi cuando ni una otra opcion funciona
// }

// let angulo = 20;
// document.write("<p>" + angulo + "</p>");

// let mensaje = "<p>INEXS.</p>";

// if (angulo === 0) {
//   mensaje = "<p>Nulo.</p>";
// } else if (angulo < 90) {
//   mensaje = "<p>Águdo.</p>";
// } else if (angulo === 90) {
//   mensaje = "<p>Recto.</p>";
// } else if (angulo < 180) {
//   mensaje = "<p>Obtuso.</p>";
// } else if (angulo === 180) {
//   mensaje = "<p>Llano.</p>";
// } else if (angulo < 360) {
//   mensaje = "<p>Concavo.</p>";
// } else if (angulo === 360) {
//   mensaje = "<p>Completo.</p>";
// }

// document.write(mensaje);

// switch (angulo) {
//     case 0:
//       document.write("<p>Nulo.</p>");
//       // despues de ejecutar lo que queremos
//       break;
//     case 90:
//       document.write("<p>React0.</p>");
//       break;
//     case 180:
//       document.write("<p>LLano.</p>");
//       break;
//     case 360:
//       document.write("<p>Completo.</p>");
//       break;
//   }

const nombres = ["Pepe", "Juan", "Maria", "Luisa", "Carlos", "Lucas"];

console.log(nombres);
console.log(nombres[3]);
console.log(nombres[6]);
//! Nota: Si queremos mostrar un dto en una posición que no existe, JS retorna undefined
//? Length => Esta funcion devuelve la cantidad de elementos
console.log("Nombres", nombres.length);

const datos = [1, true, false, -2, "Hola mundo"];

console.log("datos", datos.length);

//Si quieres acceder al ultimo elemento usando length
console.log("datos", datos[datos.length - 1]);

//? Push: Sirve para poder agregar un elemento al array
// Lo agrega en la ultima posición
datos.push("Agregando un dato");
console.log("Datos con Push", datos);
console.log("Agregando un array dentro de un array");
datos.push(["Pepe", "Juan", "Maria"]);
console.log(datos);

const datosPrueba = [
  1,
  true,
  false,
  -2,
  "Hola mundo",
  "Agregando un dato",
  ["Pepe", "Juan", [1, 2, 4, 5, [-1, -2, -4]], "Maria"],
];

console.log(datosPrueba[3]);
console.log(datosPrueba[6][0]);
console.log(datosPrueba[6][2][3]);
console.log(datosPrueba[6][2][4][2]);

console.log(datosPrueba[6][2].length)

console.log(datosPrueba[6][datosPrueba[6].length - 3])
console.log(datosPrueba[6][datosPrueba[6].length - 2][datosPrueba[6][2].length - 1])

// Pop es una funciona para poder eliminar el ultimo elemento de un array
const laptops = ["hp", "macbook", "asus", "lenovo"];
console.log("Laptops: ", laptops);
// Retorna el elemento eliminado
console.log("Elemento eliminado", laptops.pop());
console.log("Laptops: ", laptops);

// Supongamos que tengamos una lista de almunos
const alumnos = ["Luis", "Juan", "Maria", "Luciana", "Lucas"];
console.log("El alumno " + alumnos.pop() + " fue eliminado");
console.log("Alumnos", alumnos);

// Unshift: Esta funcion agrega un elemento a un array en la primera posición
alumnos.unshift("Daniel");
console.log("Unshift", alumnos);

// Shift: Esta funcion elimina el primer elemento de un array
console.log("Shift", alumnos.shift());
console.log(alumnos);
alumnos[2] = "Juanito";
console.log(alumnos);

// IndexOf : Esta funcion retorna la posicion en base a un dato
const colores = ["Rojo", "Verde", "Amarillo", "Azul", "Verde", "Morado"];
// Nota si tenemos elementos repetidos va encontrar al mas cercano
// en este casi es 1

//! Es case-sensitive
//! Si el valor no existe retorna -1
//* Podemos usar esto para ver si un elemento existe en un array
console.log(colores.indexOf("verde"));

// const busqueda = prompt("Ingrese un color");
// if (colores.indexOf(busqueda) !== -1) {
//     console.log("El color si existe y es " + colores[colores.indexOf(busqueda)]);
// } else {
//     alert("El color no existe")
// }