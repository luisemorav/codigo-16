// container:
const div_container = document.getElementById("container");

// Objetos
class Carro {
  constructor(_color, _velocidad) {
    this.setColor(_color);
    this.setVelocidad(_velocidad);
  }

  presentacion() {
    const texto =
      "Hola soy un carro de color " +
      this.color +
      " y tengo una velocidad de: " +
      this.velocidad;
    return texto;
  }
  //? Setter method: definir reglas para poder alterar esa propiedad
  setColor(_nuevo_color) {
   // el color en minuscilas
    this.color = String(_nuevo_color).toLowerCase();
  }

  setVelocidad(_nueva_velocidad) {
   // agregar km/h
    this.velocidad = _nueva_velocidad + "Km/h";
  }

  //? Getters method: obtiene valor de propiedad
  getColor() {
    return this.color;
  }

}

const carro_rojo = new Carro("ROJO", 200); // instanciar objeto
const carro_azul = new Carro("AZUL", 50); // dar vida al objeto
const carro_verde = new Carro("VERDE", 100); // crear el objeto

class Cuadrado {

    constructor(_lado) {
        this.lado = _lado;
    }

    get area() {
        return (this.lado * this.lado) + "m2";
    }

    set area(_area) {
        this.lado = Math.sqrt(_area);
    }

}

const c1 = new Cuadrado(4);

c1.lado = 5;

div_container.innerHTML += "<p>" + c1.area + "</p>";
div_container.innerHTML += "<hr>";

c1.area = 36;

div_container.innerHTML += "<p>" + c1.lado + "</p>";
div_container.innerHTML += "<hr>";

class User {
    constructor(_id, _first_name, _last_name) {
        this.id = _id;
        this.first_name = _first_name;
        this.last_name = _last_name;
    }

    get fullName() {
        return this.first_name + " " + this.last_name;
    }

    set fullName(_fullname) {
        this.first_name = _fullname.split(" ")[0];
        this.last_name = _fullname.split(" ")[1];
    }
}

const u1 = new User(1, "Luis", "Mora");

div_container.innerHTML += "<p>" + u1.fullName + "</p>";
div_container.innerHTML += "<hr>";

u1.fullName = "Jaime Farfan";

div_container.innerHTML += "<p>" + u1.first_name + "</p>";
div_container.innerHTML += "<hr>";

/* //? Inicia mute

//Sin restricciones
carro_rojo.color = 'GRIS';
//Setter
carro_rojo.setColor('NEGRO');

div_container.innerHTML += "<p>" + carro_rojo.getColor() + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>" + carro_azul.presentacion() + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>" + carro_verde.presentacion() + "</p>";

//! Utilizando FOR dentro una function "crearCarros(x, color)":
// - crear X carros.
// - todos del color que recibió la función.
// pero cada carro con velocidades diferentes.
// imprimir todos los carros en el container.

function crearCarros(cantidad, colores) {
  let x = Number(cantidad);
  let color_carro = colores;

  for (let i = 1; i <= x; i++) {
    const carro_x = new Carro(color_carro, 170 + i * 3); // crear el objeto

    div_container.innerHTML += "<hr>";
    div_container.innerHTML +=
      "<p>" + i + ".- " + carro_x.presentacion() + "</p>";
  }
}

*/