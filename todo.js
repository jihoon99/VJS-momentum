//1.init(), loadToDos,    2.handlesubmit   3.painttodo.  , const toDos =[], 4. paintodo(const todoObj),   5.saveToDos  
//6. loadToDos(consolo.log(loadedToDos),, const parsedToDos) -> parseToDos.forEach(fn()
//7. paintToDo(... delBtn.addEventListener("", deleteToDo))
//8. deleteToDo -> cleanToDos => return.....
const toDoform = document.querySelector('.js-toDoForm'),
    toDoInput = toDoform.querySelector("input"),
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos'

let toDos = []; //todo들을 저장할 공간임. todo가 많기에 arry를 만들어야함.
// toDos = [{text :"txt", id : num}]
// function filterFn(toDo) {
//     return toDo.id === 1
// }//


function deleteToDo(evet) {
    //console.log(event.target);   여기에는 문제가 있는게 어떤 버튼이 눌렸는지 몰라. 하지만 아빠는 id를 가지고 있음.
    //console.dir(event.target); 이걸로 뭐 있나 봤는데, parentnode를 찾아냄.
    //console.log(event.target.parentNode); 이걸 어떻게 건들여야겟다라고 생각함.
    const btn = event.target;
    const li = btn.parentNode;   //클릭했을때 그때의 li id번호
    toDoList.removeChild(li); // 여기까지만 하면, 새로고침했을때 다시 나오는걸 알수 잇음.

    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id); //console.log(toDo.id, li.id); //해보면 하나는 string 하나는 number로 같아질수가 없게됨... 따라서 모두 number으로 변환해야함.
    }); //toDos.filter(fn)  모든 toDos에 대하여 fn을 함.
    //toDos[1].id와 같은결과물이 나옴.
    //console.log(cleanToDos);
    toDos = cleanToDos; //change old one to new one. update
    saveToDos();

}


function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    //이유 : javascript는 실제로는 데이터를 저장할수 없다. only string만 저장할수 있다.
    // 따라서 toDos를 string화해야함. 그래서 json.stringify화할거임.
    //jsonstingify는 javascript의 any object를 string화 한다.
    //JSON stands for JavaScript Object Notation. 데이터를 보낼때 자바스크립트가 인식할수 있게 함
}


function paintToDo(text) { //text is from currentvalue(<- toDoInput.value), which is 
    //console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button"); //create empty delbn
    const i = document.createElement("i");
    
    delBtn.innerText = 'x';//x라는 텍스트
    delBtn.addEventListener("click", deleteToDo);
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
        // console.log(loadToDos); //this is  not a fn, this is const loadtodo
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