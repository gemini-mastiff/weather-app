## Weather App

This Weather App was built to consolidate my knowledge of RESTful APIs and asynchronous JavaScript.
It uses the [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api/) for forecast data and the [GIPHY API](https://developers.giphy.com/docs/api/) to display weather-themed GIFs as dynamic backgrounds.

## Features

- Displays a 5-hour forecast and a 7-day forecast.
- Allows users to search for any location.
- Supports temperature conversion between Celsius and Fahrenheit.
- Generates a unique GIF background based on the current weather.

## Getting Started

Clone the repository and install the dependencies:

    git clone git@github.com:gemini-mastiff/weather-app.git
    cd weather-app
    npm install

Create a .env file, and declare your API keys as so:

    VC_KEY=your_api_key_here
    GIF_KEY=your_api_key_here

Finally, run the local server:

    npm run dev

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Webpack
- [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api/)
- [GIPHY API](https://developers.giphy.com/docs/api/) 
