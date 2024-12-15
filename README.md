Overview

This project is a weather forecast application that retrieves and displays the current weather and a two-day forecast for a specified location using the WeatherAPI. Users can input a location manually or allow the app to detect their current location via the browser's geolocation feature.

Features

Location Detection:

Automatically fetches weather data based on the user's current geolocation.

Manual Search:

Allows users to input a location to fetch weather data.

Current Weather Display:

Displays details such as temperature, humidity, wind speed, wind direction, and weather condition for the current day.

Two-Day Forecast:

Provides weather predictions for the next two days, including temperature, humidity, wind speed, and weather conditions.

Responsive Icons:

Displays weather condition icons sourced dynamically from WeatherAPI.

Technologies Used

HTML: Structure of the web app.

CSS: Basic styling.

JavaScript: Logic for fetching and displaying weather data.

WeatherAPI: Source of weather data.

How It Works

Geolocation:

When the app loads, it attempts to fetch the user's current location using the navigator.geolocation API.

If successful, it uses the latitude and longitude to retrieve weather data.

Input Listener:

The app listens for input changes in the location search field.

On input, it fetches weather data for the specified location.

Fetching Data:

Weather data is fetched using the WeatherAPI endpoint: https://api.weatherapi.com/v1/forecast.json.

The API key used is d38d5741854848d3904151606241312.

Data Display:

Current weather details and forecasts are dynamically populated into the HTML using JavaScript.

File Structure

root
├── index.html      # Main HTML file
├── style.css       # CSS file for styling
├── script.js       # JavaScript file containing the app logic

