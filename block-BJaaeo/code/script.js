let display = document.querySelector(".display");
let initialValue = 0;
display.innerText = initialValue;
let allBtns = document.querySelectorAll("input");

function handleButtonClick(event) {
  if (event.target.classList.contains("equal")) {
    display.innerText = eval(display.innerText);
    return;
  }
  if (event.target.classList.contains("clear")) {
    display.innerText = initialValue;
    return;
  }
  if (display.innerText == initialValue) {
    display.innerText = event.target.value;
  } else {
    display.innerText += event.target.value;
  }
}

allBtns.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});
