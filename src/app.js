
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
    console.log(response.data.main);
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
}














let apiKey ="22de9332fb541d849c849404a3205132";
let apiUrl=` https://api.openweathermap.org/data/2.5/weather?q=Mbombela&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);