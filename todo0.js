const toDoform = document.querySelector('.js-toDoForm'),
    toDoInput = toDoform.querySelector("input"),
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos'

const toDos = []; //todo들을 저장할 공간임. todo가 많기에 arry를 만들어야함.



function paintToDo(text) { //text is from currentvalue(<- toDoInput.value), which is 
    //console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button"); //create empty delbn
    delBtn.innerText = 'x';//x라는 텍스트
    const span = document.createElement("span");//create empty span
    span.innerText = text;//text is toDoInput.value
    const newId = toDos.length + 1; //왜 아이디를 li를 부여하며 만드냐면, 나중에 버튼들 지울때 몇번째 li이를 지울건지 알기위해서.

    li.id = newId; //새로만든 li에 id를 부여
    li.appendChild(delBtn); //put delbtn inside of li
    li.appendChild(span); //sppendchild  put something inside of the father
    toDoList.appendChild(li);//toDolist에 li를 넣는다


    const toDoObj = {
        text: text,//padint(text)안에잇는 텍스트가 받아줌.
        id: newId
        // id: toDos.length + 1
    }
    toDos.push(toDoObj);//toDos만드는이유는 localstorage에 저장하기 위해서다.
    saveToDos();//실제로 실행해보니까 [obj obj], [obj obj]이렇게 나옴.
    //이유 : javascript는 실제로는 데이터를 저장할수 없다. only string만 저장할수 있다.
    // 따라서 toDos를 string화해야함. 그래서 json.stringify화할거임.
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;//input값을 current value에
    paintToDo(currentValue);//currentvalue를 저장해서 toDos에 넣어.
    toDoInput.value = ""; //섭밋이 끝나면, 제출부분을 블랭크로 만듬. like 새로고침
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        // console.log(loadToDos);
        const parsedToDos = JSON.parse(loadedToDos); //parse means analysis
        //console.log(loadtoDos);
        parsedToDos.forEach(function (potato) {
            //console.log(potato.text); // 각각의 어레이의 text들을 불러옴.
            // .forEach calls a function and puts the current item on the FIRST argument, the name does not matter.
            paintToDo(potato.text);
        })
    }
}


function init() {
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit);
}



init();