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

async function generateBackgroundGif(weatherCondition, body) {
  console.log(weatherCondition);
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${process.env.GIF_KEY}&s=${weatherCondition}`,
      { mode: "cors" },
    );
    const gifData = await response.json();
    const gifUrl = gifData.data.images.original.url;
    body.style.backgroundImage = `url(${gifUrl})`;
  } catch (error) {
    console.log(error);
    const gifUrl = `https://media.giphy.com/media/41SIOpeqCfIru/giphy.gif?cid=790b7611d21kysfi5cl35ejq2fm564v6sldk2kfprph342y0&ep=v1_gifs_search&rid=giphy.gif&ct=g`;
    body.style.backgroundImage = `url(${gifUrl})`;
  }
}

export { generateSVG, generateBackgroundGif };
