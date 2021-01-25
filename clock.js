const clockContainer = document.querySelector(".js-clock"),
      clockTitle=clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
                              minutes < 10 ? `0${minutes}` : minutes}:${
                              seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    getTime(); //우선 처음에 먼저 시작해줌.
    setInterval(getTime,1000);
    //첫번째 인자는 함수, 두번째 인자는 이 함수를 
    //몇 초마다 실행 시킬것 인지.
}

init();