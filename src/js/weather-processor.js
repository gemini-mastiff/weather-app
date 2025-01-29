import snowSvg from "../svg/weather-snowy-heavy.svg";
import rainSvg from "../svg/weather-pouring.svg";
import fogSvg from "../svg/weather-fog.svg";
import windSvg from "../svg/weather-windy.svg";
import cloudySvg from "../svg/weather-cloudy.svg";
import partCloudyDaySvg from "../svg/weather-partly-cloudy.svg";
import partCloudyNightSvg from "../svg/weather-night-partly-cloudy.svg";
import sunSvg from "../svg/weather-sunny.svg";
import moonSvg from "../svg/weather-night.svg";

function generateSVG(weatherCondition) {
  let src;
  switch (weatherCondition) {
    case "snow":
      src = snowSvg;
      break;
    case "rain":
      src = rainSvg;
      break;
    case "fog":
      src = fogSvg;
      break;
    case "wind":
      src = windSvg;
      break;
    case "cloudy":
      src = cloudySvg;
      break;
    case "partly-cloudy-day":
      src = partCloudyDaySvg;
      break;
    case "partly-cloudy-night":
      src = partCloudyNightSvg;
      break;
    case "clear-day":
      src = sunSvg;
      break;
    case "clear-night":
      src = moonSvg;
      break;
  }
  return src;
}

export { generateSVG };
