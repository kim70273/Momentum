const header = document.querySelector("header"),
    h2 = header.querySelector("h2");


function getday(){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const day = today.getDate();

    h2.innerText = `${year} ${
                month<9 ? `0${month}`:month} ${
                day<9 ? `0${day}`:day}`;
}
  
function init(){
    getday();
}

init();
