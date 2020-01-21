const toDoform = document.querySelector(".js-toDoForm"),
  toDoInput = toDoform.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];



function delToDos(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);

  const cleanToDos = toDos.filter(function (toDo) {
    return console.log(toDo)
  })


});
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function loadToDos() {
  const serverSave = localStorage.getItem(TODOS_LS);
  if (serverSave !== null) {

  }
}

function paintList(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.addEventListener("click", delToDos);
  const span = document.createElement("span");
  span.innerText = text;


  const newId = toDos.length + 1;
  li.id = newId;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);


  const toDosObj = {
    text: text,
    id: toDos.length + 1
  };
  toDos.push(toDosObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintList(currentValue);
  toDoInput.value = "";
}

function init() {
  loadToDos();
  toDoform.addEventListener("submit", handleSubmit);
}

init();
