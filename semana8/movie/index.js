const containerMovies = document.querySelector("#container-movies");

function renderCards(movies) {
  containerMovies.innerHTML = "";
  movies.forEach((movie) => {
    const { title: titulo, programType: tipo, images: imagenes } = movie;
    containerMovies.innerHTML += `
        <div class="col">
          <div class="card my-3">
            <div class="into-photo">
              <span class="badge text-bg-${
                tipo === "series" ? "success" : "warning"
              }">${tipo}</span>
              <img
                src="${imagenes["Poster Art"].url}"
                class="card-img-top"
                onerror="this.onerror=null;this.src='https://i.quotev.com/img/q/u/15/12/25/78a31e5f80-imag.jpg';"
                alt=""
              />
            </div>
            <div class="card-body">
              <div class="card-title">${titulo}</div>
            </div>
          </div>
        </div>
    `;
  });
}

let currentMovies_Title = [];

function sortMovies(movies) {
  // movies = movies.sort(() => 0.5 - Math.random()).slice(0, 10);
  // currentMovies_Title = currentMovies_Title.concat(
  // 	movies.map((movie) => movie.title)
  // );
  // return movies;
  return movies.sort(() => 0.5 - Math.random()).slice(0, 10);
}

const url =
  "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json";

fetch(url)
  .then((response) => response.json()) // espero que el response se convierta a una collection
  .then((movies) => sortMovies(movies.entries))
  .then((movies_random) => renderCards(movies_random));

// async function getJson() {
// 	const response = await fetch(url);
// 	const { entries } = await response.json();
// 	renderCards(entries);
// }

// getJson();

// (async () => {
// 	renderCards((await (await fetch(url)).json()).entries);
// })();

// console.log(peticion);
// recordemos que fetch retorna una promesa esta tiene 2 escenario
//* resolve (resolver) => Es ocurre cuando la peticion esta ok
//! reject (rechazar) => Es cuando algo fallo

//* then() Es un callback, es una funcion que se ejecuta cuando algo terminar

// Ejemplo con el API de pokemon
// const urlPokemon = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

// fetch(urlPokemon)
// 	.then((response) => response.json())
// 	.then((data) => console.log(data));
