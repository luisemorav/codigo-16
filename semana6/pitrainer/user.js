class User {
  constructor(_username) {
    this.username = _username;
    this.games = [];
  }

  gameover() {
    return new Date();
  }
}

// Arreglo de usuarios
let users = [];

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

function updateUserLocalStorage(users) {
  localStorage.removeItem("pitrainer.users");
  localStorage.setItem("pitrainer.users", JSON.stringify(users));
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
  // const table_history = document.querySelector("#history > table");
  const container_history = document.querySelector("#history_container");

  users.forEach((user) => {
    // crear los nombres
    const h4 = document.createElement("h4");
    h4.innerText = user.username;

    container_history.append(h4);
    // crear la table
    const table = document.createElement("table");
    const thead = document.createElement("thead");

    thead.innerHTML = `
        <tr>
            <th>Score</th>
            <th>Attempts</th>
            <th>✅ </th>
            <th>❌ </th>
            <th>Game Over</th>
        </tr>    
        `;

      const tbody = document.createElement("tbody");

      // Entonces debemos iterar user.games
      user.games.forEach(game => {
        tbody.innerHTML += `
          <tr>
            <td>${game.score.toFixed(2)}</td>
            <td>${game.attempts}</td>
            <td>${game.sattempts}</td>
            <td>${game.fattempts}</td>
            <td>${new Date(game.gameover_at).toLocaleString("es-PE", {
              weekday: "short",
              year: "2-digit",
              month: "short",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}</td>
          </tr>
        `;
      })

    table.append(thead);
    table.append(tbody);
    container_history.append(table);
  });

  // users.forEach(function (user) {
  //   // Creo un node object llamado ROW
  //   const row = document.createElement("tr");
  //   const gameover_at = new Date(user.gameover_at);
  //   // Personalizo el node:
  //   row.innerHTML = `
  //       <td>${user.username}</td>

  //       `;

  // <td>${user.score.toFixed(2)}</td>
  // <td>${user.success_attempts}</td>
  // <td>${gameover_at.toLocaleDateString("es-PE", {
  //   weekday: "short",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  //   hour: "numeric",
  //   minute: "numeric",
  // })}</td>
  // Lo agrega como un hijo de la tabla:
  // table_history.append(row);
  // });
}

const input_search = document.querySelector("#input-search");
const btn_search = document.querySelector("#btn-search");

btn_search.onclick = function() {
  const textSearch = input_search.value;
  if (textSearch === "") {
    alert("Debe escribir un Usuario para iniciar la busqueda");
    return;
  }
}