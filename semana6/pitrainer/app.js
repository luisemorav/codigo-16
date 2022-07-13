//? PLAYER:

const UserName = document.querySelector("#username");
const btnStart = document.querySelector("#start");
const Call = document.querySelector("#call");
const div_game = document.querySelector("#game");
const div_score = document.querySelector("#score");
let user = null;

// UserName.onkeyup = function () {
//     if (this.value !== "") {
//         btnStart.disabled = false;
//     } else {
//         btnStart.disabled = true;
//         Call.style.display = "none";
//     }
// }

// btnStart.onclick = function () {
//     Call.innerHTML = ("Hello " + UserName.value + ", let's play!");
//     Call.style.display = "block";
// }

UserName.addEventListener("keyup", function () {
  if (this.value !== "") {
    btnStart.disabled = false;
  } else {
    btnStart.disabled = true;
    Call.style.display = "none";
  }
});

// btnStart.onclick = function () {
//     Call.innerHTML = ("Hello " + UserName.value + ", let's play!");
//     Call.style.display = "block";
// }

//! Para poder recuperar un dato de Local Storage podemos usar lo funcion getItem

// console.log("username", localStorage.getItem("user_name"))

btnStart.addEventListener("click", function () {
  Call.innerText = "Hello " + UserName.value + ", let's play!";
  Call.style.display = "block";
  // creamos username en local storage
  user = new User(UserName.value);
  UserName.disabled = true;
  this.disabled = true;
  div_game.style.display = "flex"; //Muestra seccion Game
  div_score.style.display = "block";
  //! LOCAL STORAGE
  // localStorage.setItem("user_name", UserName.value);
});

//? GAME:

const pi_decimals =
  "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109";
let position = 0;

let attempts = 0;
let sattempts = 0;
let fattempts = 0;
let score = 0;
// Variables de tiempo
let last_attempt = null;

const container_modal = document.querySelector(".container-modal");
const lost_container = document.querySelector(".lost-container");
const container = document.querySelector("#container");

const input_pi = document.querySelector("#user_pi");
const result_pi = document.querySelector("#result_pi");

const h3_attempts = document.querySelector("#h3_attempts");
const h3_sattempts = document.querySelector("#h3_sattempts");
const h3_fattempts = document.querySelector("#h3_fattempts");
const h3_score = document.querySelector("#h3_score");
const h3_score_finish = document.querySelector("#h3_score_finish");
const reiniciar = document.querySelector("#btn-reiniciar");

input_pi.addEventListener("keyup", function () {
  this.value = "";
  this.focus();
});

input_pi.addEventListener("keydown", function (evt) {
  //   const decimal = this.value; // Muy lento
  const decimal = String.fromCharCode(evt.keyCode);

  let now_attempt = Date.now();

  attempts++;
  // evaluar;
  if (
    decimal == "" ||
    isNaN(decimal) ||
    decimal != pi_decimals.charAt(position)
  ) {
    div_game.style.backgroundColor = "red";
    fattempts++;
    showModal();
  } else {
    // SI paso las reglas
    if (position > 0) {
      // tenemos cuanto tiempo en milisegundos nos demoramos en escribir cada numero
      calcScore(now_attempt);
      console.log(score);
      // los primero 10 aciertos sera score = 10 - (diff-time * 0.01)
      // con 11 a 19 sera score = 10 + 1 - (diff-time * 0.01)
    }
    div_game.style.backgroundColor = "green";
    result_pi.innerText += decimal;
    position++;
    sattempts++;
  }

  last_attempt = now_attempt;

  // usar timeout para pintarlo de negro:
  setTimeout(function () {
    div_game.style.backgroundColor = "transparent";
  }, 250);

  //? SCORE

  h3_attempts.querySelector("span").innerText = attempts;
  h3_fattempts.querySelector("span").innerText = fattempts;
  h3_sattempts.querySelector("span").innerText = sattempts;
  h3_score.querySelector("span").innerText = score.toFixed(2);
});

function calcScore(now_attempt) {
  const diff_time = (now_attempt - last_attempt) * 0.01;
  const attempt_score =
    position > 10
      ? (score += 10 + Number(String(position).charAt(0)) - diff_time)
      : (score += 10 - diff_time);

  score += Math.max(attempt_score, -1);
}

function showModal() {
  if (fattempts >= 10) {
    // Activamos los estilos
    container_modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    container_modal.style.position = "relative";
    document.body.style.overflow = "hidden";
    container_modal.style.height = "100vh";
    container.style.position = "absolute";
    lost_container.style.display = "block";
    container.style.zIndex = -1;
    input_pi.disabled = true;
    h3_score_finish.querySelector("span").innerText = score.toFixed(2);
    // Crea el usuario y lo agrega al Local Storage
    if (user !== null) {
      // caso juanito
      const user_index = users.findIndex(
        (user_find) => user_find.username === user.username
      );

      // juanito no existe en el array de usuarios por ende la funcion findIndex retorna
      // -1, porque no encontro a la persona

      // nota: Si findIndex no encuentra lo busquedo retornara -1 porque no encontro
      // ni una posicion
      if (user_index === -1) {
        // si entra al if el usuario no existe
        user.games.push({
          score: score,
          attempts: attempts,
          sattempts: sattempts,
          fattempts: fattempts,
          gameover_at: user.gameover(),
        });

        addUserToLocalStorage(user);
      } else {
        // si entra ya exister
        users[user_index].games.push({
          score: score,
          attempts: attempts,
          sattempts: sattempts,
          fattempts: fattempts,
          gameover_at: user.gameover(),
        });

        updateUserLocalStorage(users);
        // debemos agregar este dato a locastorage
      }
    }
  }
}

reiniciar.onclick = () => window.location.reload();
