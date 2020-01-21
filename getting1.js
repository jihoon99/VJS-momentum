const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING = "showing"

function showName(text) {
  form.classList.remove(SHOWING); //askForname(showing class를 만듬) -> handlesubmit -> paintgreeting(showing class를 지움.)
  greeting.classList.add(SHOWING);
  greeting.innerText = `hello ${text}`;


}
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function hand(event) {
  event.preventDefault();
  const current = input.value;
  showName(current);
  saveName(current);

}

function askForName() {
  form.classList.add(SHOWING);
  form.addEventListener("submit", hand);
}

function name() {
  const currentValue = localStorage.getItem(USER_LS);
  if (currentValue === null) {
    askForName();

  } else {
    showname(currentValue);
  }
}



function init() {
  name();
}

init();