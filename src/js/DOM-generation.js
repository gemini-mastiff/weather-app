function generateElement(element, optionalClass = false) {
  const newElement = document.createElement(element);
  if (optionalClass) {
    newElement.classList.add(optionalClass);
  }
  return newElement;
}

function formatTime(time) {
  return time.substring(0, 5);
}

function formatDay(day) {
  const date = new Date(day);
  const index = date.getDay();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekday = weekdays[index];
  return weekday.substring(0, 3);
}

function isDateToday(date) {
  const today = new Date();
  // Formats the new date to be the same as the data's date
  const currentDate = today.toISOString().substring(0, 10);
  return date === currentDate;
}

const forecastCard = document.querySelector(".forecast-card");
function clearForecastCard() {
  forecastCard.textContent = "";
}

function generateCurrentHourWrapper(currentHour, currentLocation) {
  const currentHourWrapper = generateElement("div", "current-hour-wrapper");

  const currentHourHeader = generateElement("div", "current-hour-header");
  const locationHeader = generateElement("h1");
  const timeHeader = generateElement("h1");
  locationHeader.textContent = currentLocation;
  timeHeader.textContent = formatTime(currentHour.hour);
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
  currentTempHeader.textContent = `${currentHour.hourTemp}°C`;
  currentPrecipHeader.textContent = `${currentHour.hourPrecip}%`;
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

function generateNextHoursWrapper(hourArray) {
  const nextHoursWrapper = generateElement("div", "next-hours-wrapper");
  const nextHoursBg = generateElement("div", "next-hours-bg");

  for (const hour of hourArray) {
    const nextHourCard = generateElement("div", "next-hour-card");

    const icon = generateElement("img", "small-weather-icon");
    const temp = generateElement("p");
    const precip = generateElement("p");
    const time = generateElement("p");

    icon.src = "";
    temp.textContent = `${hour.hourTemp}°C`;
    precip.textContent = `${hour.hourPrecip}%`;
    if (hour === hourArray[0]) {
      time.textContent = "NOW";
    } else {
      time.textContent = formatTime(hour.hour);
    }

    nextHourCard.append(icon, temp, precip, time);
    nextHoursBg.append(nextHourCard);
  }

  nextHoursWrapper.append(nextHoursBg);
  return nextHoursWrapper;
}

function generateWeekWrapper(weekArray) {
  const weekWrapper = generateElement("div", "week-wrapper");
  const dayCardBg = generateElement("div", "day-card-bg");

  for (const day of weekArray) {
    const dayCard = generateElement("div", "day-card");

    const date = generateElement("p");
    const icon = generateElement("img", "small-weather-icon");
    const maxTemp = generateElement("p");
    const minTemp = generateElement("p");

    if (isDateToday(day.date)) {
      date.textContent = "Today";
    } else {
      date.textContent = formatDay(day.date);
    }
    icon.src = "";
    maxTemp.textContent = `${day.dayTempMax}°C`;
    minTemp.textContent = `${day.dayTempMin}°C`;

    dayCard.append(date, icon, maxTemp, minTemp);
    dayCardBg.append(dayCard);
  }

  weekWrapper.append(dayCardBg);
  return weekWrapper;
}

function generateForecastCard(forecastObj) {
  const currentLocation = forecastObj.location;
  const fahrenheit = forecastObj.fahrenheit;
  const [weekArray, hourArray] = forecastObj.forecast;
  const currentHourObject = hourArray[0];

  clearForecastCard();

  const currentHourWrapper = generateCurrentHourWrapper(
    currentHourObject,
    currentLocation,
  );
  const nextHoursWrapper = generateNextHoursWrapper(hourArray);
  const weekWrapper = generateWeekWrapper(weekArray);

  forecastCard.append(currentHourWrapper, nextHoursWrapper, weekWrapper);
}

export { generateForecastCard };
