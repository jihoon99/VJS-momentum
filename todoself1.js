const toDoform = document.querySelector(".js-form");
const toDoInput = toDoform.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

function saveTodo() {
  //   const li = document.createElement("li");
  //   const delBtn = document.createElement("button");
  //   delBtn = "x";
  //   li.appendChild(delBtn);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  console.log(currentValue);
  toDoInput.value = "";
}

function init() {
  saveTodo();
  toDoform.addEventListener("submit", handleSubmit);
}

init();
