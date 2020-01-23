const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = [];

function saveToDo(text) {
    localStorage.setItem(TODOS_LS, JSON.stringify(text));

}

// 여기 이벤트가 들어가는지도 모르고, click 했을때 몇번째 id인지도 모르고 다모름.
function removeToDo(event) {
    const btn = event.target.parentNode;
    toDoList.removeChild(btn);


}

function paintToDo(text) {
    const currentValue = text;
    // 체점 value 안넣었음...틀림.
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");

    delBtn.innerText = "x";
    span.innerText = currentValue;
    delBtn.addEventListener("click", removeToDo);


    let toDoId = toDos.length + 1;
    // i said length.toDos fuck
    li.id = toDoId;
    // this part list에 id넣는법 몰랐따.
    let toDoObj = {
        text: currentValue,
        id: toDoId
    }

    toDos.push(toDoObj)
    // #여기도 틀림

    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();

    paintToDo(toDoInput);
    // 여기 왜 따로 빼서 만들었는지 이해가감.

    saveToDo(toDos);
    toDoInput.value = "";
    // 여기도 틀림

}



function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        // console.log(loadToDos); //this is  not a fn, this is const loadtodo
        const parsedToDos = JSON.parse(loadedToDos); //parse means analysis
        //console.log(loadtoDos);
        parsedToDos.forEach(function (potato) {
            //console.log(potato.text); // 각각의 어레이의 text들을 불러옴.
            // .forEach calls a function and puts the current item on the FIRST argument, the name does not matter.
            handleSubmit(potato.text);
        })
    }
}
function init() {

    toDoForm.addEventListener("submit", handleSubmit);
    // 체점: 틀림 여기서 form이 들어와야함.
}

init();