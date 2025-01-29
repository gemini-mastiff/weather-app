function generateElement(element, optionalClass = false) {
  const newElement = document.createElement(element);
  if (optionalClass) {
    newElement.classList.add(optionalClass);
  }
  return newElement;
}

const forecastCard = document.querySelector(".forecast-card");
function clearForecastCard() {
  forecastCard.textContent = "";
}

function generateCurrentHourWrapper() {
  const currentHourWrapper = generateElement("div", "current-hour-wrapper");

  const currentHourHeader = generateElement("div", "current-hour-header");
  const locationHeader = generateElement("h1");
  const timeHeader = generateElement("h1");
  // Will be replaced with forecast content
  locationHeader.textContent = "LOCATION";
  timeHeader.textContent = "TIME";
  currentHourHeader.append(locationHeader, timeHeader);

  const currentHourForecast = generateElement("div", "current-hour-forecast");
  const currentHourIcon = generateElement("img", "weather-icon");
  // Will hook up images later
  // currentHourIcon.src = ""
  currentHourForecast.append(currentHourIcon);

  const currentHourStats = generateElement("div", "current-hour-stats");
  const currentTemp = generateElement("div", "current-temp");
  const currentPrecip = generateElement("div", "current-precip");
  const currentTempHeader = generateElement("h3");
  const currentPrecipHeader = generateElement("h3");
  // Will generate this content
  currentTempHeader.textContent = "10°C";
  currentPrecipHeader.textContent = "10%";
  currentTemp.append(currentTempHeader);
  currentPrecip.append(currentPrecipHeader);
  currentHourStats.append(currentTemp, currentPrecip);

  currentHourWrapper.append(
    currentHourHeader,
    currentHourForecast,
    currentHourStats,
  );

  return currentHourWrapper;
}

function generateNextHoursWrapper() {
  const nextHoursWrapper = generateElement("div", "next-hours-wrapper");
  const nextHoursBg = generateElement("div", "next-hours-bg");

  for (let i = 0; i < 5; i++) {
    const nextHourCard = generateElement("div", "next-hour-card");

    const icon = generateElement("img", "small-weather-icon");
    const temp = generateElement("p");
    const precip = generateElement("p");
    const time = generateElement("p");

    // Will update this with data
    icon.src = "";
    temp.textContent = "10°C";
    precip.textContent = "10%";
    time.textContent = "11:00";

    nextHourCard.append(icon, temp, precip, time);
    nextHoursBg.append(nextHourCard);
  }

  nextHoursWrapper.append(nextHoursBg);
  return nextHoursWrapper;
}

function generateWeekWrapper() {
  const weekWrapper = generateElement("div", "week-wrapper");
  const dayCardBg = generateElement("div", "day-card-bg");

  for (let i = 0; i < 7; i++) {
    const dayCard = generateElement("div", "day-card");

    const date = generateElement("p");
    const icon = generateElement("img", "small-weather-icon");
    const temp = generateElement("p");
    const precip = generateElement("p");

    // Will generate this with data
    date.textContent = "DAY";
    icon.src = "";
    temp.textContent = "10°C";
    precip.textContent = "10%";

    dayCard.append(date, icon, temp, precip);
    dayCardBg.append(dayCard);
  }

  weekWrapper.append(dayCardBg);
  return weekWrapper;
}

function generateForecastCard() {
  clearForecastCard();

  const currentHourWrapper = generateCurrentHourWrapper();
  const nextHoursWrapper = generateNextHoursWrapper();
  const weekWrapper = generateWeekWrapper();

  forecastCard.append(currentHourWrapper, nextHoursWrapper, weekWrapper);
}

{
  /* 
<div class="forecast-card">
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

export { generateForecastCard };
