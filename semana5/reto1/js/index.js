const canciones = [
    {
        artista: "Seether",
        caratula: "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/71/75/b1/7175b1a8-d6ac-5213-11c6-f0b3b0da721d/14CMGIM00783.rgb.jpg/1000x1000bb-60.jpg",
        album: "Disclaimer II",
        titulo: "Fine Again",
        duracion: "4:03",
    },
    {
        artista: "Saliva",
        caratula: "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/4f/91/d7/4f91d7a4-961a-0619-e1e4-b441387203f3/06UMGIM75591.rgb.jpg/1200x1200bf-60.jpg",
        album: "Blood Stained Love Story",
        titulo: "Ladies And Gentlemen",
        duracion: "3:37",
    },
    {
        artista: "Five Finger Death Punch",
        caratula: "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/57/a2/2a/57a22aea-0bd4-2300-8736-a4f3a07b325f/813985010168_cover.jpg/1000x1000bb-60.jpg",
        album: "War is the Answer",
        titulo: "Bad Company",
        duracion: "4:22",
    },
    {
        artista: "Seether",
        caratula: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f9/c7/e3/f9c7e355-c1c0-10c3-3f6b-9bf42f5d7dfc/00888072357181.rgb.jpg/1000x1000bb-60.jpg",
        album: "Isolate And Medicate",
        titulo: "Nobody Praying For Me",
        duracion: "3:18",
    },
    {
        artista: "Alice In Chains",
        caratula: "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/91/5e/14/915e14a2-d0c2-8a10-88da-f8e116db0635/dj.ncevfnuh.jpg/1000x1000bb-60.jpg",
        album: "Dirt",
        titulo: "Rooster",
        duracion: "6:14",
    },
    {
        artista: "Seether",
        caratula: "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/db/b1/b0/dbb1b0b7-f894-cdbd-d96c-008f55e73a1e/14CMGIM00787.rgb.jpg/1000x1000bb-60.jpg",
        album: "Karma and Effect",
        titulo: "Remedy",
        duracion: "3:27",
    },
    {
        artista: "Godsmack",
        caratula: "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/f9/32/38/f93238da-ca7d-2420-0d01-9831c8e0e755/00602557810141.rgb.jpg/1000x1000bb-60.jpg",
        album: "Faceless",
        titulo: "I Stand Alone",
        duracion: "4:06",
    },
    {
        artista: "Limp Bizkit",
        caratula: "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/5b/fb/aa/5bfbaa5c-9530-9830-1ec4-b68b47a346b9/15UMGIM36851.rgb.jpg/1000x1000bb-60.jpg",
        album: "Chocolate Starfish",
        titulo: "Livin' It Up",
        duracion: "4:24",
    },
    {
        artista: "Audioslave",
        caratula: "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/9c/b6/c2/9cb6c246-3626-7789-26a9-79b787e5668d/dj.owymmnty.jpg/1000x1000bb-60.jpg",
        album: "Audioslave",
        titulo: "Show Me How to Live",
        duracion: "4:38",
    },
    {
        artista: "Theory of a Deadman",
        caratula: "https://is4-ssl.mzstatic.com/image/thumb/Music/67/9b/fc/mzi.clcpwmsf.jpg/1000x1000bb-60.jpg",
        album: "The Truth Is...",
        titulo: "Bitch Came Back",
        duracion: "3:39",
    },
]

const container = document.querySelector(".container");

canciones.map((cancion) => {

    container.innerHTML += `<div class="card">
    <img
      src=${cancion.caratula}
      alt=""
    />
    <h4 class="title">${cancion.titulo}</h4>
    <h5 class="artist">${cancion.artista}</h5>
    <div class="container2">
        <p class="duration">${cancion.duracion}</p>
        <button>REPRODUCIR</button>
    </div>
  </div>`

})