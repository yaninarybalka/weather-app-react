import React, { useState } from "react";
import "./Main.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Main(props) {
  let [weather, setWeather] = useState({ ready: false });

  let [city, setCity] = useState(props.defaultCity);

  function showPosition(position) {
    let lat = position.coords.latitude;
    let longt = position.coords.longitude;
    let apiKey = "0e951398a3cfa9bd7988ab651edd4068";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longt}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function searchCity() {
    let apiKey = `0e951398a3cfa9bd7988ab651edd4068`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function displaySearch(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setWeather({
      ready: true,
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      feels_like: response.data.main.feels_like,

      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weather.ready) {
    return (
      <div className="container">
        <form onSubmit={handleSubmit} className="search-bar">
          <div>
            <input
              type="text"
              placeholder="Enter a city"
              className="city-searcher "
              id="search-button"
              autocomplete="off"
              onChange={displaySearch}
            />
            <input type="submit" value="Search" className="button " />
            <button
              className="geo-button "
              id="geolocation-button"
              onClick={getCurrentLocation}
            >
              📍
            </button>
          </div>
        </form>

        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}
