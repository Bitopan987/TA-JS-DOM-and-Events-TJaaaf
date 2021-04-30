const game = document.getElementById("game");
const cardsArray = [
  {
    name: "baloon",
    img: "img/baloon.png",
  },
  {
    name: "bear",
    img: "img/bear.png",
  },
  {
    name: "fox",
    img: "img/fox.png",
  },
  {
    name: "cartoon",
    img: "img/cartoon.png",
  },
  {
    name: "cat",
    img: "img/cat.png",
  },
  {
    name: "clock",
    img: "img/clock.png",
  },
  {
    name: "insta",
    img: "img/insta.png",
  },
  {
    name: "mango",
    img: "img/mango.png",
  },
  {
    name: "orange",
    img: "img/orange.png",
  },
  {
    name: "snack",
    img: "img/snack.png",
  },
  {
    name: "tree",
    img: "img/tree.jpg",
  },
  {
    name: "whatsapp",
    img: "img/whatsapp.png",
  },
];

let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

let firstGuess = "";
let secondGuess = "";
let count = 0;
let previousTarget = null;

const grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.appendChild(grid);

gameGrid.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = item.name;
  card.style.backgroundImage = `url(${item.img})`;
  grid.appendChild(card);
});

// Add match CSS
const match = () => {
  let selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.add("match");
  });
};

// grid.addEventListener("click", function (event) {
//   let clicked = event.target;
//   if (clicked.nodeName === "SECTION" || clicked === previousTarget) {
//     return;
//   }
//   if (count < 2) {
//     count++;
//     if (count === 1) {
//       firstGuess = clicked.dataset.name;
//       console.log(firstGuess);
//       clicked.classList.add("selected");
//     } else {
//       secondGuess = clicked.dataset.name;
//       console.log(secondGuess);
//       clicked.classList.add("selected");
//     }
//     if (firstGuess !== "" && secondGuess !== "") {
//       if (firstGuess === secondGuess) {
//         match();
//       }
//       previousTarget = clicked;
//     }
//   }
// });
