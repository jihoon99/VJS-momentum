const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function fn(event) {

    const currentValue = input.value;
    showName(currentValue);
    saveName(currentValue);

}



function getName() {
    form.classList.add(SHOWING);
    form.addEventListener("submit", fn);
}



function showName(text) {

    greeting.classList.add(SHOWING);
    greeting.innerText = `hello ${text}`;
}


function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        getName();
    } else {
        showName(currentUser);
    }
}

function init() {
    loadName();
}

init();