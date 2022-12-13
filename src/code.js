function showWeatherData(response) {
  //get the temperature
  let temperature = response.data.main.temp;
  let mainTemp = document.querySelector("#main-temp");
  mainTemp.innerHTML = `${Math.round(temperature)}°C`;
  //gete the wind speed
  let windSpeed = response.data.wind.speed;
  let windSpeedDisplay = document.querySelector("#wind-speed");
  windSpeedDisplay.innerHTML = `wind speed ${windSpeed} Km/h`;
}

function searchCity(event) {
  event.preventDefault();
  let chosenCity = document.querySelector("#chosen-city");
  let heading = document.querySelector("h1");
  heading.innerHTML = chosenCity.value;
  //get chosen city weather
  let apiKey = "1b9ef7be7e74fcaebc7534ce817e716c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeatherData);
}

// Displaying the real time and date on the screen
let currentTime = new Date();

let weekDays = ["Sun", "Mon", "Tue", "Wsd", "Thu", "Fri", "Sat"];
let day = weekDays[currentTime.getDay()];

let monthList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let month = monthList[currentTime.getMonth()];

let timePhrase = document.querySelector("#time");
timePhrase.innerHTML = `${day} ${month} ${currentTime.getDate()} ${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", searchCity);
