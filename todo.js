const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");
      //HTML에서 필요한것을 얻는 과정.

const TODOS_LS = "toDos";

let toDos = []; //해야 할 일들이 배열로 되어있어야 한다.

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);//string을 num으로 바꾼다.
    })
    //각각의 item과 같이 실행된다.
    //filter는 array의 모든 아이템을 통해 함수를 실행하고
    //true인것을 새로운 array를 만든다.
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
    //JSON.stringify로 자바스크립트 object를 string으로 바꿔줌
}

function paintToDo(text){
    const li = document.createElement("li");//HTML에 필요한것을 생성.
    const delBtn = document.createElement("button"); 
    delBtn.innerText = "❌"; //이모지를 위해서 html의 charset을 수정 하였음.
    delBtn.addEventListener("click",deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length+1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos(toDos);//자바 스크립트는 local storage에 있는 모든 데이터를
                     //string으로 저장하려 함.
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        //parsedToDos의 안에 있는 것들에 대해서
        //paintToDo를 실행 해줘야한다.
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
        //array에 담겨있는 것들 각각에 한번씩 함수를 실행한다.
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();