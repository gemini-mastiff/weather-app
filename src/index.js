import { forecastObj } from "./js/forecast-object-logic";
import "./styles.css";

console.log("Hello World!");

forecastObj.newForecast("London,UK");

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
});
