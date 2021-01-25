const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");
const toDoDiv = document.querySelector(".toDoDiv");
const byeBtn = document.querySelector(".byeBtn")

const USER_LS = "currentUser",
     SHOWING_CN= "showing";

console.log(byeBtn.innerText);
function byeBtnhandle(){
    if(byeBtn.innerText=="Login"){
        const currentValue = input.value;
        paintGreeting(currentValue);
        saveName(currentValue);
    }
    else{
        localStorage.removeItem(USER_LS);
        localStorage.removeItem("toDos");
        form.classList.add(SHOWING_CN);
        greeting.classList.remove(SHOWING_CN);
        toDoDiv.classList.remove(SHOWING_CN);
        location.reload();//새로고침
    }
}

byeBtn.addEventListener('click', byeBtnhandle);

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();//기본동작인 event가 위로 쭉 올라가는것을 막는다
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    toDoDiv.classList.add(SHOWING_CN);
    byeBtn.innerHTML=`Logout`;
    greeting.innerText=`Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }
    else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();

