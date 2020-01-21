const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
//querySelector는 맨처음 보이는것을 찾아옴. querySelectorAll은 모든것을 찾아옴. 근데 arry 형식이라 불편해.

// localStorage.setItem("nico", true); //inspect application 보면 있따. local storage에 있음. , key - nico, value - ture
//console.log(localStorage.getItem("nico"));//localstorage에서 받아올수 있음. - value인 true를 불러옴.

const USER_LS = "currentUser",
  SHOWING_CN = "showing"; //이거 index.css 의 showing과 연관이잇는데.

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function askForName() {
  form.classList.add(SHOWING_CN); //loadName함수에서 currentUser가 없으면 html.form에서 showing이라는 클래스를 추가할거임.
  form.addEventListener("submit", handleSubmit); //submit은 고유명사같은거네여기서, 왜냐하면 과거에 'click',fn 이 있었어.
}

function handleSubmit(event) {
  event.preventDefault(); //default는 이벤트가 발생했을시 go to the top until the document
  const currentValue = input.value;//askforname에 addeventlistener따라와서 input으로 들어간느것.
  //console.log(currentValue);
  paintGreeting(currentValue); // 여기까지만했을때는 기억을 못함. stroage에 저장한게 아니거든.
  saveName(currentValue);
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN); //askForname(showing class를 만듬) -> handlesubmit -> paintgreeting(showing class를 지움.)
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function init() {
  loadName();
}

init();
