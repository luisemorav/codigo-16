class User {
  constructor(_username) {
    this.username = _username;
    this.created_at = new Date();
    this.attempts = 0;
    this.sattempts = 0;
    this.fattempts = 0;
    this.score = 0;
    this.gameover_at = null;
  }

  gameover() {
    this.gameover_at = new Date();
  }

}

// Arreglo de usuarios
let users = null;

// const u1 = new User("brunodiaz");
// u1.score = 500;
// u1.sattempts = 20;
// u1.gameover();

// const u2 = new User("linderhass");
// u2.score = 600;
// u2.sattempts = 30;
// u2.gameover();


// const u3 = new User("luismora");
// u3.score = 1000;
// u3.sttempts = 50;
// u3.gameover();

// users.push(u1);
// users.push(u2);
// users.push(u3);

// localStorage.setItem("pitrainer.users", JSON.stringify(users));


// Comprobar si existe el item "pitrainer.users"
if (localStorage.getItem("pitrainer.users") !== null) {
    users = JSON.parse(localStorage.getItem("pitrainer.users"));
}

function addUserToLocalStorage(user) {
// Comprobar si existe una lista de usuarios LS

    if (users === null) {
        users = [];
    }
    users.push(user);
    // lo sobreescribo en el LS
    localStorage.setItem("pitrainer.users", JSON.stringify(users))
}

const button_clear = document.querySelector("#clear");

if (users.length !== 0) {
    div_history = document.querySelector('#history');
    div_history.style.display = 'block';
    createTableHistoric();
    button_clear.disabled = false;
}

// Botón para reiniciar la tabla de historic:
button_clear.addEventListener('click', function () {
    localStorage.removeItem("pitrainer.users");
    window.location.reload();
});

function createTableHistoric() {
  const table_history = document.querySelector("#history > table");

  users.forEach(function (user) {
    // Creo un node object llamado ROW
    const row = document.createElement("tr");
    // Personalizado el node:
    row.innerHTML = `
        <td>${user.username}</td>
        <td>${user.score.toFixed(2)}</td>
        <td>${user.sattempts}</td>
        <td>${user.gameover_at.toLocaleString()}</td>
        `;
    // Lo agrega como un hijo de la tabla
    table_history.appendChild(row);
  });
}
