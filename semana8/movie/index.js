const containerMovies = document.querySelector("#container-movies");

function renderCards(movies) {
  containerMovies.innerHTML = "";
  movies.forEach((movie) => {
    containerMovies.innerHTML += `
          <div class="col">
            <div class="card my-3" >
            <span class="badge text-bg-${
              movie.programType === "series" ? "success" : "warning"
            } mb-2" style="position: absolute; width: 100%;">${
      movie.programType
    }</span>
              <img
                src="${movie.images["Poster Art"].url}"
                class="card-img-top"
                onerror="this.onerror=null;this.src='https://i.quotev.com/img/q/u/15/12/25/78a31e5f80-imag.jpg';"
                alt=""
              />
              <div class="card-body">
                <div class="card-title h3">${movie.title}</div>
                <span class="badge text-bg-info mb-2">${
                  movie.releaseYear
                }</span>
                <p class="card-text" style="line-height: 16px;">
                 ${movie.description}
                </p>
                <button type="button" class="btn btn-success">Ver ahora</button>
              </div>
            </div>
          </div>
      `;
  });
}

const url =
  "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json";

fetch(url)
  .then((respuestita) => respuestita.json())
  .then((datos) => renderCards(datos.entries));

// console.log(peticion);
// recordemos que fetch retorna una promesa esta tiene 2 escenario
//* resolve (resolver) => Es ocurre cuando la peticion esta ok
//! reject (rechazar) => Es cuando algo fallo

//* then() Es un callback, es una funcion que se ejecuta cuando algo terminar

// Ejemplo con el API de pokemon
// const urlPokemon = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

// fetch(urlPokemon)
//   .then((response) => response.json())
//   .then((data) => console.log(data));
