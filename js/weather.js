const city = document.querySelector('.city');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity')
const weatherDescription = document.querySelector('.weather-description')
city.addEventListener('change', getWeather) 


export default async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=220f1a20c077642d5fc05a18fee6d4d9&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed ${data.wind.speed} m/s `;
    humidity.textContent = `Humidity: ${data.main.humidity} %`
  }
 