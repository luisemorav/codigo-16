// EVENTOS

// Un evento es una accion que el usuario o el navegador puede activar
// onClick -> Se activa cuando el usuario usa el mouse y clickea un elemento
// para activar los eventos podemos hacerlo desde JS o desde el HTML

// onChange
// onKeyUp
// onKeydown
// onSubmit
// onMouseOver
// onFocus
// onBlur
// onMouseMove
// onMouseLeave

const btnTest = document.querySelector("#btn-test");

// evento onclick con arrow function
btnTest.onclick = () => {
    console.log("Es un click");
};

// evento onclick con function
// btnTest.onclick = function () {
//   console.log("Es un click");
// };

const variableH1 = document.querySelector("#h1-test");
variableH1.onclick = () => {
    console.log("Click desde el H1");
    variableH1.innerText = "Cambiando el texto";
};

// Vamos a captura los datos de nuestro formulario y guardarlo
// en un array de objetos
const users = [];

const form = document.querySelector("#form-store-user");

// vamos agregar el evento onsubmit

//! NOTA el evento onsubmit tiene una prepiedad
//! la cual nos da un parametro que esta implicito
//! este parametro contiene la informacion del evento
//! y se suele event o e
form.onsubmit = (event) => {
  // * NOTA Un formulario al tener el evento submit va a recargar la pagina
  //? Para evitar que el evento onsubmit recargue la pagina podemos usar el
  //? evento.preventDefault() esta funcion bloquea esa accion de recargar la pagina
  event.preventDefault();
  // console.log(event.target);

  //!Nota La informacion de los inputs siempre estara en el target

  // * Existe la clase FormData
  const formData = new FormData(event.target);

  // vamos a crar un objeto user
  const user = {};

  for (let dato of formData.entries()) {
    // ['name', 'Linder']
    // ['last_name', 'Hassinger']
    console.log("key", dato[0]);
    console.log("value", dato[1]);
    console.log("---------------");
    // en el for vamos a agregar los campos a user
    //car["doors"] = 5
    user[dato[0]] = dato[1];
  }

  users.push(user);
};

//! NOTA Dos objetos nunca pueden ser igual
// ejemplo
const car = {
    modelo: "BMW i18",
  };
  
  const car2 = {
    modelo: "BMW i18",
  };
  
  //!La teoria dice que un objeto nunca sera igual a otro, es decir
  //!asi los objetas tengan el mismo contenido nunca sera iguales
  
  // FOR

// RECORDEMOS QUE UN FOR NOS PERMITE ITERAR(RECORRER) UN ARRAY
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

for (let i of ["aaa", "bbb"]) {
}

for (let i in ["aaa", "bbb"]) {
}

// Lo que sigue del for es el ForEach
// Este forEach es usando para poder iterar elementos sin retornar nada
// en forEach no existe el return
const alumnos = ["juan", "pepe", "luis", "maria", "carla", "ale"];
// La forma en la cual usamos forEach es la siguiente
// el forEach es una funcion de los arrays

// Es esta fumcion forEach tenemos 2 cosas,
//1: El value => Es el valor que extraemos en cada interacion
//2: El index => Es la posicion del elemento
alumnos.forEach((value, index) => {
  console.log("index =>", index);
  console.log("value =>", value);
});

//! Nota esta forma de recorrer un arreglo es moderna
//! Tener en cuenta que el return no es posible en el forEach
const carros = [
  {
    modelo: "Nissan GTR",
    price: 10000,
  },
  {
    modelo: "Mercedez GLA 2000",
    price: 20000,
  },
  {
    modelo: "BMW x6",
    price: 30000,
  },
];

carros.forEach((carro, index) => {
  console.log(carro);
});