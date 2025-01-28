import "./styles.css";

console.log("Hello World!");

function convertResponse(day) {
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

async function newForecast(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next6days?unitGroup=uk&key=LESUX8VAH9B76EXZ8PQA8WYE3`,
  );
  const responseJSON = await response.json();
  const nextSevenDays = responseJSON.days.map((day) => convertResponse(day));
  const weatherObj = {
    location,
    forecast: nextSevenDays,
  };
  console.log(weatherObj);
}

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

// DATA I NEED

// FOR EACH DAY:
// conditions
// tempmax
// tempmin

// FOR EACH HOUR:
// conditions
// temp
// precipitation
