//1. init -> loadCoords -> COORDS -> loadCoords(if(){}else{}) ->
//2 askForCoords => navigator => handleGeoSuccess
//3  handleGeoSuccess -> console.log() 안에 살펴봄. -> latitude, longitude 설정함. -> 
//4 devide conquare 좋아해서. saveCoords를 따로만듬.
//5 sign up for api /// after login -> sign up -> api key 
//6 openweatherMap site get api.  //api call : api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
//7 fn getweather -> put it inside of saveCoords -> getweather( fetch  )

//8 parseCoords(let's build when we have coords on storage)
//9 put   'getweather' inside else part


const API_KEY = "fbba885983efb2febbf5411e1c28dfee"
const COORDS = "coords";
//자바스크립트의 강점 :  자바스크립트는 웹사이트로 request보내고 응답을 통해 데이터를 얻을수 있는데, 가져온 데이터를 refresh없이도 나의 웹사이트에 적용시킬수 있다. 

function getweather(lat, lng) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}$appid=${API_KEY}`);
  //use `` not ''   and  //this part is newly put ,https:// &&&& $appid=${API_KEY}
}



function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));;
}

function handleGeoSucces(position) {
  console.log(position);//latitude, longditude등등이 들어잇음.
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    //원래는 이러헤 하려햇음
    // latitude: latitude,
    // longitude: longitude
    // 하지만 js Obj에서 같은 이름으로 저장할거면
    latitude,
    longitude
    //이렇게 해도됨.
  };
  //여기다가 localStorage해도 되지만... devide and conqure is preferred
  saveCoords(coordsObj);
  getweather(latitude, longitude);
}

function handleGeoError() {
  console.log("Can't access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords); //sting형태로 저장되있으니까 부를때 parse해야함.
    // console.log(parseCoords);
    getweather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
