import { generateSVG, generateBackgroundGif } from "./weather-processor";
import { formatDay, formatTime, isDateToday } from "./time-and-date-funcs";

const forecastCard = document.querySelector(".forecast-card");
const body = document.querySelector("body");

function generateElement(element, optionalClass = false) {
  const newElement = document.createElement(element);
  if (optionalClass) {
    newElement.classList.add(optionalClass);
  }
  return newElement;
}

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
  currentHourIcon.src = generateSVG(currentHour.hourIcon);
  currentHourForecast.append(currentHourIcon);

  const currentHourStats = generateElement("div", "current-hour-stats");
  const currentTemp = generateElement("div", "current-temp");
  const currentPrecip = generateElement("div", "current-precip");

  currentTemp.textContent = currentHour.hourTemp;
  currentPrecip.textContent = currentHour.hourPrecip;

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

    icon.src = generateSVG(hour.hourIcon);
    temp.textContent = hour.hourTemp;
    precip.textContent = hour.hourPrecip;
    if (hour === hourArray[0]) {
      time.textContent = "NOW";
    } else {
      time.textContent = formatTime(hour.hour);
    }

    nextHourCard.append(time, icon, temp, precip);
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

    const date = generateElement("p", "weekday");
    const icon = generateElement("img", "small-weather-icon");
    const maxTemp = generateElement("p", "max-temp");
    const minTemp = generateElement("p", "min-temp");

    if (isDateToday(day.date)) {
      date.textContent = "Today";
    } else {
      date.textContent = formatDay(day.date);
    }
    icon.src = generateSVG(day.dayIcon);
    maxTemp.textContent = day.dayTempMax;
    minTemp.textContent = day.dayTempMin;

    dayCard.append(date, icon, maxTemp, minTemp);
    dayCardBg.append(dayCard);
  }

  weekWrapper.append(dayCardBg);
  return weekWrapper;
}

function generateForecastCard(
  currentLocation,
  weekArray,
  hourArray,
  currentHourObject,
) {
  const currentHourWrapper = generateCurrentHourWrapper(
    currentHourObject,
    currentLocation,
  );
  const nextHoursWrapper = generateNextHoursWrapper(hourArray);
  const weekWrapper = generateWeekWrapper(weekArray);

  forecastCard.append(currentHourWrapper, nextHoursWrapper, weekWrapper);
}

function generateNewPage(forecastObj) {
  const currentLocation = forecastObj.location;
  const [weekArray, hourArray] = forecastObj.forecast;
  const currentHourObject = hourArray[0];

  clearForecastCard();
  generateForecastCard(
    currentLocation,
    weekArray,
    hourArray,
    currentHourObject,
  );

  generateBackgroundGif(currentHourObject.hourIcon, body);
}

export { generateNewPage };
