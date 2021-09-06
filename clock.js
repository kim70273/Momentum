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
//"1".padStart(2,"0"); 이런식으로 2글자가 아니면 앞에 0을 채우는것도 가능하다.
//padEnd는 끝에 채운다.
//padStart는 String에 쓸 수 있기때문에
//String(date.getHouts()).padStart() 이런식으로 써야한다. number을 string으로 바꿔야 됨.

function init(){
    getTime(); //우선 처음에 먼저 시작해줌.
    setInterval(getTime,1000);
    //첫번째 인자는 함수, 두번째 인자는 이 함수를 
    //몇 초마다 실행 시킬것 인지.
}

init();