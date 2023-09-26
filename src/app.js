
function formatDate(timestamp) {
    let date = new Date (timestamp);
    let hours =date.getHours();
    if (hours<10){
        hours=`0${hours}`;
    }
    let minutes=date.getMinutes();
    if (minutes < 10){
        minutes =`0${minutes}`;
    }
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let day= days[date.getDay()];



return `${day} ${hours}:${minutes}`;
}


function displayTemperature(response) {
    
    let temperatureElement = document.querySelector(".temperature");
temperatureElement.innerHTML=Math.round(response.data.main.temp);
let cityElement = document.querySelector("#City");
cityElement.innerHTML = response.data.name;
let descriptionElement=document.querySelector(".condition");
descriptionElement.innerHTML= response.data.weather[0].description;
let humidityElement=document.querySelector("#Humidity");
humidityElement.innerHTML=response.data.main.humidity;
let windElement=document.querySelector("#Wind");
windElement.innerHTML=response.data.wind.speed;
let dateElement=document.querySelector("#date");
dateElement.innerHTML=formatDate(response.data.dt *1000);
let iconElement=document.querySelector("#icon");
iconElement.setAttribute("src",` https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("alt",response.data.weather[0].description);


}

function search(city){
    let apiKey ="22de9332fb541d849c849404a3205132";
    let City ="Nelspruit";
let apiUrl=` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);

}

function handleSubmit(event) {
event.preventDefault();
let cityInputElement = document.querySelector("#city-input");
search(cityInputElement.value);

}
search("Nelspruit");
let form=document.querySelector("#search-form");
form.addEventListener("submit",handleSubmit);
