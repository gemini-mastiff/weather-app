const forecastCard = document.querySelector(".forecast-card");
function clearForecastCard() {
  forecastCard.textContent = "";
}

{
  /* 
<div class="forecast-card">
  <div class="current-hour-wrapper">
    <div class="current-hour-header">
      <h1 id="currentLocation">LOCATION</h1>
      <h1 id="currentTime">TIME</h1>
    </div>
    <div class="current-hour-forecast">
      <img class="weatherIcon" src="./svg/weather-cloudy.svg" />
    </div>
    <div class="current-hour-stats">
      <div class="current-temp">
        <h3>10°C</h3>
      </div>
      <div class="current-hour-precip">
        <h3>10%</h3>
      </div>
    </div>
  </div>
  <div class="next-hours-wrapper">
    <div class="next-hours-bg">
      <div class="next-hour-card">
        <img src="./svg/weather-cloudy.svg" alt="" class="smallWeatherIcon" />
        <p>10°C</p>
        <p>10%</p>
        <p>11:00</p>
      </div>
      <div class="next-hour-card">
        <img src="./svg/weather-cloudy.svg" alt="" class="smallWeatherIcon" />
        <p>10°C</p>
        <p>10%</p>
        <p>12:00</p>
      </div>
      <div class="next-hour-card">
        <img src="./svg/weather-cloudy.svg" alt="" class="smallWeatherIcon" />
        <p>10°C</p>
        <p>10%</p>
        <p>13:00</p>
      </div>
      <div class="next-hour-card">
        <img src="./svg/weather-cloudy.svg" alt="" class="smallWeatherIcon" />
        <p>10°C</p>
        <p>10%</p>
        <p>14:00</p>
      </div>
      <div class="next-hour-card">
        <img src="./svg/weather-cloudy.svg" alt="" class="smallWeatherIcon" />
        <p>10°C</p>
        <p>10%</p>
        <p>15:00</p>
      </div>
    </div>
  </div>
  <div class="week-wrapper">
    <div class="day-card-bg">
      <div class="day-card">
        <p>TODAY</p>
        <img src="./svg/weather-cloudy.svg" alt="" class="smallWeatherIcon" />
        <p>10°C</p>
        <p>10%</p>
      </div>
      <div class="day-card">
        <p>WED</p>
        <img src="./svg/weather-cloudy.svg" alt="" class="smallWeatherIcon" />
        <p>10°C</p>
        <p>10%</p>
      </div>
      <div class="day-card">
        <p>THU</p>
        <img src="./svg/weather-cloudy.svg" alt="" class="smallWeatherIcon" />
        <p>10°C</p>
        <p>10%</p>
      </div>
      <div class="day-card">
        <p>FRI</p>
        <img src="./svg/weather-cloudy.svg" alt="" class="smallWeatherIcon" />
        <p>10°C</p>
        <p>10%</p>
      </div>
      <div class="day-card">
        <p>SAT</p>
        <img src="./svg/weather-cloudy.svg" class="smallWeatherIcon" />
        <p>10°C</p>
        <p>10%</p>
      </div>
      <div class="day-card">
        <p>SUN</p>
        <img src="./svg/weather-cloudy.svg" alt="" class="smallWeatherIcon" />
        <p>10°C</p>
        <p>10%</p>
      </div>
      <div class="day-card">
        <p>MON</p>
        <img src="./svg/weather-cloudy.svg" alt="" class="smallWeatherIcon" />
        <p>10°C</p>
        <p>10%</p>
      </div>
    </div>
  </div>
</div>; */
}

export { clearForecastCard };
