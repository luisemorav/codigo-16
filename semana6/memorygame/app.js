const cardArray = [
  {
    nombre: "fries",
    img: "images/fries.png",
  },
  {
    nombre: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    nombre: "hotdog",
    img: "images/hotdog.png",
  },
  {
    nombre: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    nombre: "milkshake",
    img: "images/milkshake.png",
  },
  {
    nombre: "pizza",
    img: "images/pizza.png",
  },
  {
    nombre: "fries",
    img: "images/fries.png",
  },
  {
    nombre: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    nombre: "hotdog",
    img: "images/hotdog.png",
  },
  {
    nombre: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    nombre: "milkshake",
    img: "images/milkshake.png",
  },
  {
    nombre: "pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result")

let cardChosen = [];


function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}

createBoard();

function checkForMatch() {
  console.log(cardChosen);
  if (cardChosen[0] == cardChosen[1]) {
    alert("Match!");
  }

  cardChosen = [];
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  this.setAttribute("src", cardArray[cardId].img);
  cardChosen.push(cardArray[cardId].nombre);

  if (cardChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}
