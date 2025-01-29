import { forecastObj } from "./js/forecast-object-logic";
import { generateForecastCard } from "./js/DOM-generation";
import "./styles.css";

console.log("Hello World!");

const locationInput = document.querySelector("#locationInput");
const locationBtn = document.querySelector("#locationSubmit");
locationBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const newLocation = locationInput.value;
  if (!newLocation) {
    forecastObj.newForecast();
  } else {
    forecastObj.newForecast(newLocation);
  }
  locationInput.textContent = "";
});

const unitBtn = document.querySelector("#unitBtn");
unitBtn.addEventListener("click", () => {
  forecastObj.fahrenheit = forecastObj.fahrenheit ? false : true;
  unitBtn.textContent = forecastObj.fahrenheit
    ? "Change to °C"
    : "Change to °F";
  forecastObj.newForecast();
});

window.addEventListener("DOMContentLoaded", () => {
  forecastObj.newForecast("London");
  console.log(forecastObj);
});
