function getRandomColor(elm) {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  elm.style.background = bgColor;
}

let btnClick = document.querySelector(".btn-click");
let btnMove = document.querySelector(".btn-move");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
btnClick.addEventListener("click", function () {
  getRandomColor(first);
});
btnMove.addEventListener("mousemove", function () {
  getRandomColor(second);
});
