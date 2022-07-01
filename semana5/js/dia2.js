const products = [
  {
    name: "Laptop HP",
    price: 1300,
    brand: "HP",
  },
  {
    name: "Laptop Gamer",
    price: 2100,
    brand: "Lenovo",
  },
  {
    name: "Laptop Super Poderosa",
    price: 5300,
    brand: "Alien Ware",
  },
  {
    name: "Laptop/Tablet",
    price: 2400,
    brand: "ASUS",
  },
];

// users.forEach(user)
// movies.forEach(movie)

// products.forEach((product, index) => {});

// * forEach

const productsIterForEach = products.forEach((product) => {
  // Recurden que product es cada elemento de mi array
  // console.log(product.name);
  return product.price - 100;
});

//* map
// queremos agregar un nuevo campo al array de objetos
// ese campo se llamara descuente que sera el precio - 100 soles

// En este caso estamos calculado el campo discount y lo estamos
// guardando en productsIterMap

// Los valores que esta capturando nuestro map los esta guardando en
// la varable productsIterMap y esto sera un arreglo de los
// resultados
const productsIterMap = products.map((product) => {
  // 1200
  // 2000
  // 5200
  // 2300
  return product.price - 100;
});

// Resument: Siempre el map retorna un array de elementos

console.log("forEach", productsIterForEach);
console.log("map", productsIterMap);
// Cuando decimos que forEach no retorna nada quiere decir que no se
// puede guardar dentro de una variable

const edades = [23, 21, 34, 45, 28, 30];

// Esto es conocido como un arrow function inline
// En el arrow function inline el return enstá implicito
// Se usa solo cuando tengamos una sola linea de codigo a ejecutar

// const edadesAlCuadra = edades.map(edad => {
//     return Math.pow(edad, 2);
// });

const edadesAlCuadrado = edades.map((edad) => Math.pow(edad, 2));
console.log(edadesAlCuadrado);

// Reto
// Creen un array de edades
// Y usando for o forEach hagan que una variable guarde el cuadrado de las edades
const edadesCuadrado = [];
edades.forEach((edad2) => {
  edadesCuadrado.push(Math.pow(edad2, 2));
});

console.log(edadesCuadrado);

const clothes = [
  {
    brand: "Mango",
    type: "Shirt",
    price: 200,
    store: "Falabella",
    rating: 4.3,
    features: {
      color: "green",
      size: "small",
    },
  },
  {
    brand: "Zara",
    type: "Pants",
    price: 300,
    store: "Zara",
    rating: 3.9,
    features: {
      color: "black",
      size: 32,
    },
  },
  {
    brand: "Tommy",
    type: "T-shirt",
    price: 120,
    store: "Tommy",
    rating: 4.3,
    features: {
      color: "blue",
      size: "M",
    },
  },
];

// Filter: Es el hermano de map
// porque tambien retorna un array de elementos, sin embargo sirve para
// poder crear filtros en base a una condicion

// Queremos solo los productos que tengan como precio mayor a 150 soles
//* Filtro de Precio
const filtro1 = clothes.filter((clothe) => clothe.price > 150);
console.log("Filtro", filtro1);

//* Filtro de 2 condiciones
// Pedimos que el precio sea >150 y rating > 4
const filtro2 = clothes.filter(
  (clothe) => clothe.price > 150 && clothe.rating > 4
);
console.log("Filtro 2 condiciones", filtro2);

// Vamos a buscar en el array de ibjeros las prendas que contengan "shirt"

//?Quiero que en el string clothe.type busques si "shirt" existe
// Un truco para evitarnos el tema de las mayusculas o minusculas es convertir el texto
// a mayusculas o minusculas
const filtroShirt = clothes.filter((clothe) =>
  clothe.type.toLocaleLowerCase().includes("shirt")
);
console.log("filtroShirt", filtroShirt);

const frase = "Hola me llamo carlos";
console.log(frase.toLocaleLowerCase().includes("llamo"));

//* FIND

const numbers = [10, 20, 30, 40, 50, 60, 70];
const numerosMayores = numbers.filter((number, index) => number > 30);
console.log(numerosMayores);

// Solo retorna un elemento, es decir no da una busqueda de solamente 1 elemento
// ojo: Find no retorna un array el solo retorna 1 elemento
// el elemnto que retorne find sera el primero que encuentre
// por ende como en la condicion dice > 30
// va a buscar al numero mayor a este y al primero que encuentro lo va a retornar
const numeroMayoresFind = numbers.find((number) => number > 30);
console.log("numeroMayoresFind", numeroMayoresFind);

// Ejmplo2
const cars = [
  {
    model: "GLA 200",
    price: 34000,
    brand: "Mercedez",
  },
  {
    model: "A 200",
    price: 14000,
    brand: "Mercedez",
  },
  {
    model: "X6",
    price: 34000,
    brand: "BMW",
  },
];
// Queremos el primero elemento de lista que sea de la marca mercedez
const filtroMercedez = cars.find((car) => car.brand === "Mercedez");
console.log("filtroMercedez", filtroMercedez.model);

// Find tiene un hermanito llamado findIndex
// El es lo mismo que find sin embar lo que retorna es el indice
const filtroIndice = cars.findIndex((car) => car.brand === "Mercedez");
const filtroBMW = cars.findIndex((car) => car.brand === "BMW");
console.log("filtroIndice", filtroIndice);
console.log("filtoBMW", filtroBMW);
