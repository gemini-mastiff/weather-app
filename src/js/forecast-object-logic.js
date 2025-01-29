import { generateForecastCard } from "./DOM-generation";

function getCurrentHour() {
  const today = new Date();
  return today.getHours();
}

function convertWeekResponse(day) {
  const date = day.datetime;
  const dayIcon = day.icon;
  const dayTempMax = day.tempmax;
  const dayTempMin = day.tempmin;

  const dayHours = day.hours.map((h) => {
    const hour = h.datetime;
    const hourIcon = h.icon;
    const hourTemp = h.temp;
    const hourPrecip = h.precip;

    return { hour, hourIcon, hourTemp, hourPrecip };
  });

  return { date, dayIcon, dayTempMax, dayTempMin, dayHours };
}

function convertHourResponse(days) {
  const todayHrs = days[0].dayHours;
  const tomorrowHrs = days[1].dayHours;
  const todayAndTomorrowHours = todayHrs.concat(tomorrowHrs);
  const currentHourIndex = getCurrentHour();

  return todayAndTomorrowHours.slice(currentHourIndex, currentHourIndex + 5);
}

async function fetchForecast(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next6days?unitGroup=uk&key=LESUX8VAH9B76EXZ8PQA8WYE3&IconSet`,
  );
  const responseJSON = await response.json();

  console.log(responseJSON);

  const nextSevenDays = responseJSON.days.map((day) =>
    convertWeekResponse(day),
  );
  const nextFiveHours = convertHourResponse(nextSevenDays);

  return [nextSevenDays, nextFiveHours];
}

const forecastObj = {
  location: undefined,
  forecast: undefined,
  fahrenheit: false,
  async newForecast(newLocation) {
    this.location = newLocation;
    this.forecast = await fetchForecast(newLocation);
    generateForecastCard(forecastObj);
  },
};

export { forecastObj };
