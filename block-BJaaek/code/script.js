function getRandomColor(elm) {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  elm.style.background = bgColor;
}

let first = document.querySelector(".first");
let second = document.querySelector(".second");
first.addEventListener("click", function () {
  getRandomColor(first);
});
second.addEventListener("mousemove", function () {
  getRandomColor(second);
});
