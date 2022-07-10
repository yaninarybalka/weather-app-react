import React, { useState } from "react";
import "./Main.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Main(props) {
  let [weather, setWeather] = useState({ ready: false });

  let [city, setCity] = useState(props.defaultCity);

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
      icon: response.data.weather[0].icon,
      city: response.data.name,
      weatherIcon: "http://openweathermap.org/img/wn/${icon}@2x.png",
    });
  }

  if (weather.ready) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 search-bar">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Enter a city"
                  className="city-searcher"
                  id="search-button"
                  autocomplete="off"
                  onChange={displaySearch}
                />
                <input type="submit" value="Search" className="button" />
                <button className="geo-button" id="geolocation-button">
                  Geo
                </button>
              </div>
            </form>
          </div>
        </div>
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}
