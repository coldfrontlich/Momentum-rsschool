const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');
const weatherError = document.querySelector('.weather-error');

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=7d447d5d5152f8d630947f0187f9c2c5&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  if(res.ok) {
    weatherError.textContent = "";
    let weatherIconClass = `owf-${data.weather[0].id}`;
    weatherIcon.classList.add(weatherIconClass);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    wind.textContent = `Wind speed: ${data.wind.speed.toFixed(0)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    weatherDescription.textContent = data.weather[0].description;
  } else {
    weatherError.textContent = "Error with city name!";
    temperature.textContent = ' ';
    wind.textContent = ' ';
    humidity.textContent = ' ';
    weatherDescription.textContent = '';
  }

}

function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);

function setLocalStorage() {
  localStorage.setItem('city', city.value);
  localStorage.setItem('temperature', temperature.textContent);
  localStorage.setItem('wind', wind.textContent);
  localStorage.setItem('humidity', humidity.textContent);
  localStorage.setItem('weatherDescription', weatherDescription.textContent);
}
window.addEventListener('beforeunload', setLocalStorage)
function getLocalStorage() {
  if(localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
    temperature.textContent = localStorage.getItem('temperature');
    wind.textContent = localStorage.getItem('wind');
    humidity.textContent = localStorage.getItem('humidity');
    weatherDescription.textContent = localStorage.getItem('weatherDescription');
  }
}
window.addEventListener('load', getLocalStorage)
