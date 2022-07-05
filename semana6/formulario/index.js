const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-password");
const inputPasswordConfirm = document.querySelector("#input-password-confirm");
const checkBoxShowPassword = document.querySelector("#checkbox-show-password");
const inputPhoneNumber = document.querySelector("#input-phone-number");
const textError = document.querySelector(".text-error");
const emailError = document.querySelector(".email-error");

checkBoxShowPassword.onchange = function () {
  // if (this.checked) {
  //     inputPassword.type = "text";
  // } else {
  //     inputPassword.type = "password";
  // }
  // Conversion en ternario
  inputPassword.type = this.checked ? "text" : "password";
};

// Cuando hablamos de evento del teclado
// * onkeydown -> Es el primer evento que se ejecuta al presionar la tecla
// * onkeyup -> Es el ultimo evento que se ejecuta cuando se levanta la tecla
// * onkeypress -> Es el evento que se ejecuta mientras se presiona la tecla

inputPasswordConfirm.onkeyup = function () {
  //? Paso 1: Validar que el password tenga contenido, si esta vacío lanzar alerta para completar
  //? el password para imprimir en el input confirm
  const password = inputPassword.value;
  const confirmPassword = this.value;
  if (inputPassword.value === "") {
    alert("Debe completar el password para poder escribir en este input");
    this.value = "";
    inputPassword.focus();
    return;
  }

  //? Paso 2: Verificar que el texto  sea igual al de la contraseña

  if (confirmPassword !== password) {
    // debemos mostrar un error
    console.log("Los password no son iguales");
    textError.style.display = "block";
  } else {
    console.log("Si son iguales");
    textError.style.display = "none";
  }
};

inputPhoneNumber.onkeyup = function () {
  const valor = this.value;
  //? Podemos convertir el texto a un array y evaluar si alguno de ellos es un string
  //? Si es asi eliminar del array y luego convertir ese array a un string que sea
  //? el value del input
  const caracteres = valor.split("");
  let newValue = "";
  caracteres.forEach((caracter) => {
    // Si es un número entonces agregalo al newValue
    if (!isNaN(Number(caracter))) {
      newValue += caracter;
    }
  });
  // Luego de iterar el array y verificar que solo agregue los numeros a la
  // variable newValue, decimos que el valor del input será newValue
  this.value = newValue;
};

/* VERSION CORTA
inputPhoneNumber.onkeyup = function () {
    this.value = this.value
      .split("")
      .filter((caracter) => !isNaN(Number(caracter)))
      .join("");
  }; */

inputEmail.onkeyup = function () {
  const value = this.value;

  const regex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gm;

  const validacion = regex.test(value);
  if (validacion) {
    emailError.style.display = "none";
    console.log(regex.test(value));
  } else {
    emailError.style.display = "block";
    console.log(regex.test(value));
  }
};

//* Existe una opcion llamada expresiones regulares en ingles REGEX
// Esto es un conjunto de caracteres que nos permite validar sintaxis
