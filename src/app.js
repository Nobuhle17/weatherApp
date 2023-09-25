function displayTemperature(response) {
    console.log(response.data.main);
    let temperatureElement = document.querySelector(".temperature");
temperatureElement.innerHTML=Math.round(response.data.main.temp);
let cityElement = document.querySelector("#City");
cityElement.innerHTML = response.data.name;
let descriptionElement=document.querySelector(".condition");
descriptionElement.innerHTML= response.data.weather[0].description;

}







let apiKey ="22de9332fb541d849c849404a3205132";
let apiUrl=` https://api.openweathermap.org/data/2.5/weather?q=Mbombela&appid=${apiKey}&units=metrics`;


console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);