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
    forecastObj.newForecast("London,UK");
  } else {
    forecastObj.newForecast(newLocation);
  }
  locationInput.textContent = "";
});

window.addEventListener("DOMContentLoaded", () => {
  forecastObj.newForecast("London,UK");
  console.log(forecastObj);
});
