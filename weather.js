const weather = document.querySelector(".js-weather");

const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";
const COORDS = "coords"

function getWeather(lat, lng){
    //fetch를 통해 데이터를 얻는다.
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response){
               return response.json();
           })
           .then(function(json){
               console.log(json);
               const temperature = json.main.temp;
               const place = json.name;
               weather.innerText = `${temperature} @ ${place}`;
           });
//then을 사용해서 fetch가 다 된다음 함수 실행.

}

function savaCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };//객체의 변수 이름과 객체의 key의 이름을 같게 저장할때는 이렇게 가능.
    savaCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){

}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError)
    //인자 두개 하나는 위치불러오기 성공했을 때, 실행하는 함수
    //하나는 위치 불러오기 실패했을 때 실행하는 함수
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();