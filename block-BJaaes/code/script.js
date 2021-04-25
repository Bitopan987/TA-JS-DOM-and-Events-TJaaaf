let form = document.querySelector("form");
let errorMessage = {};

function displayError(name) {
  let elm = form.elements[name];
  elm.nextElementSibling.innerText = errorMessage[name];
  elm.parentElement.classList.add("error");
}

function displaySuccess(name) {
  let elm = form.elements[name];
  elm.nextElementSibling.innerText = " ";
  errorMessage[name] = "";
  elm.parentElement.classList.remove("error");
  elm.parentElement.classList.add("success");
}

function handleClick(event) {
  event.preventDefault();
  let elements = event.target.elements;
  const username = elements.username.value;
  const name = elements.name.value;
  const email = elements.email.value;
  const phone = elements.phone.value;
  const password = elements.password.value;
  const passcheck = elements.passcheck.value;

  //   Username can't be less than 4 characters
  if (username.length <= 4) {
    errorMessage.username = "username can't be less than 4 character";
    displayError("username");
  } else {
    displaySuccess("username");
  }
  //   Name can't be numbers
  if (!isNaN(name)) {
    errorMessage.name = "name can't be numbers";
    displayError("name");
  } else {
    displaySuccess("name");
  }
  //   Email must contain the symbol @
  //   Email must be at least 6 characters
  if (!email.includes("@")) {
    errorMessage.email = "email must contain the symbol @";
    displayError("email");
  } else if (email.length < 6) {
    errorMessage.email = "Email must be at least 6 characters";
    displayError("email");
  } else {
    displaySuccess("email");
  }

  //   Phone numbers can only be a number
  //   Length of phone number can't be less than 7
  if (isNaN(phone)) {
    errorMessage.phone = "phone numbers can only be a number";
    displayError("phone");
  } else if (phone.length < 7) {
    errorMessage.phone = "length of phone number can't be less than 7r";
    displayError("phone");
  } else {
    displaySuccess("phone");
  }

  //   Password and confirm password must be same.
  if (password !== passcheck) {
    errorMessage.password = "Password and confirm password must be same";
    errorMessage.passcheck = "Password and confirm password must be same";
    displayError("password");
    displayError("passcheck");
  } else {
    displaySuccess("password");
    displaySuccess("passcheck");
  }
}

form.addEventListener("submit", handleClick);
