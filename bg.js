//unsplash.com에서 사진을 몇개 다운받아.
//1. body => backgrond 바디에 백그라운드 할거야
//2. init.. genRandom.
//3. img_number
//4. paintImage()
//5. go to css.     .bgImage{}


const body = document.querySelector("body");
const IMG_NUMBER = 8;//유지보수 편하기 위해서 이렇게 설정함.

// function handleImgLoad() {
//     console.log("finished loading");
// }


function paintImage(imgNumber) {
    const image = new Image(); //same as document.createElement ()
    image.src = `img/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);

    //gonna show some trick
    // image.addEventListener("loadend", handleImgLoad);
    // this trick, when i use api things
}


function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);

}


init();