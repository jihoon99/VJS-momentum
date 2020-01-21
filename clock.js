// ----------how to get a real-time 
// const date = new Date();
// console.log(date);

// const dateDay = date.getDay();
// console.log(dateDay);
// //day 1,2,3,4,5은 월화수목금 차례대로 해당됨.


// const dateDate = date.getDate();
// console.log(dateDate);
// //이건 날짜

// const dateHour = date.getHours();
// console.log(dateHour);

// const dateMin = date.getMinutes();
// console.log(dateMin);


const clockContainer = document.querySelector(".js-clock"); //컴마로해서 clocktitle도 const로 설정됨.
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
        //if seconds is less than 10, then put (0,seconds), else(:) put seconds
        }`;

}


//----------------------- ternary Operator(삼항연산자)
// console.log(
//     5 < 10 ? "1" : "2"
// );






// function sayHi() {
//     console.log("say hi");
// }
// setInterval(sayHi, 1000);


function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();