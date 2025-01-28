import "./styles.css";

console.log("Hello World!");

function getCurrentHour() {
  const today = new Date();
  return today.getHours();
}

function convertWeekResponse(day) {
  const date = day.datetime;
  const dayConditions = day.conditions;
  const dayTempMax = day.tempmax;
  const dayTempMin = day.tempmin;

  const dayHours = day.hours.map((h) => {
    const hour = h.datetime;
    const hourConditions = h.conditions;
    const hourTemp = h.temp;
    const hourPrecip = h.precip;

    return { hour, hourConditions, hourTemp, hourPrecip };
  });

  return { date, dayConditions, dayTempMax, dayTempMin, dayHours };
}

function convertHourResponse(days) {
  const todayHrs = days[0].dayHours;
  const tomorrowHrs = days[1].dayHours;
  const todayAndTomorrowHours = todayHrs.concat(tomorrowHrs);
  const currentHourIndex = getCurrentHour();

  return todayAndTomorrowHours.slice(currentHourIndex, currentHourIndex + 5);
}

async function newForecast(location, fahrenheit) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next6days?unitGroup=uk&key=LESUX8VAH9B76EXZ8PQA8WYE3`,
  );
  const responseJSON = await response.json();
  const nextSevenDays = responseJSON.days.map((day) =>
    convertWeekResponse(day),
  );
  const nextFiveHours = convertHourResponse(nextSevenDays);

  forecastObj.location = location;
  forecastObj.forecast = [nextSevenDays, nextFiveHours];
  console.log(forecastObj);
}

const forecastObj = {
  location: undefined,
  forecast: undefined,
  fahrenheit: false,
};

newForecast("London,UK");

const locationInput = document.querySelector("#locationInput");
const locationBtn = document.querySelector("#locationSubmit");
locationBtn.addEventListener("click", () => {
  const newLocation = locationInput.value;
  if (!newLocation) {
    newForecast("London,UK");
  } else {
    newForecast(newLocation);
  }
});
