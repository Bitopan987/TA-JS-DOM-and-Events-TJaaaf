function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

function generateRandomColor() {
  let hexCharacters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = getRandomNum(16);
    color = color + hexCharacters[randomNumber];
  }
  return color;
}

let parentBox = document.querySelector(".boxes");

// create 500 boxes

for (let i = 0; i < 600; i++) {
  let div = document.createElement("div");
  div.classList.add("box");
  let h3 = document.createElement("h3");
  let randomNo = getRandomNum(500);
  h3.innerText = randomNo;
  div.append(h3);
  parentBox.append(div);
}

let allBoxes = document.querySelectorAll(".box");
function handMouseMove() {
  allBoxes.forEach((box) => {
    box.style.backgroundColor = generateRandomColor();
    box.children[0].innerText = getRandomNum(500);
  });
}

parentBox.addEventListener("mousemove", handMouseMove);
