const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".greetings");

const USER_LS = "currentUser";
const SHOWING = "showing";

function saveName(event) {
  event.preventDefault();
}

function askForName() {
  form.classList.remove("form");
  form.addEventListener("submit", saveName);
}

function paintName(text) {
  //   form.classList.remove("form");
  greeting.classList.add(SHOWING);
  greeting.innerText = text;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintName(currentUser);
  }
}

function init() {
  loadName();
}

init();
