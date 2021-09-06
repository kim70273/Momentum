const body =document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber){
    const image = new Image();
    //document.createElemant("img")를 통해 만들 수도 있음.
    image.src = `./images/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    //document.body.appendChild()를 통해서 body에 html을 추가할 수도 있다.

}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();

