import React, { useState } from "react";
import "./Main.css";

export default function Main() {
  let [date, setDate] = useState(null);

  function displayDate(currentTime) {
    let hour = currentTime.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }

    let minute = currentTime.getMinutes();

    if (minute < 10) {
      minute = `0${minute} `;
    }

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[currentTime.getDay()];
    setDate(`${day}, ${hour}:${minute}`);
  }
  displayDate(new Date());

  return (
    <div className="row">
      <div className="col-6 city-info">
        <div className="current-city" id="current-city">
          Ternopil
        </div>
        <div className="current-date" id="current-time">
          {date}
        </div>
        <div className="current-weather" id="current-weather-description">
          sunny
        </div>
        <div className="city-icon">
          <img src="" id="city-icon" className="icon" alt="" />
          <span className="current-temp" id="current-temp">
            25
          </span>
          <span className="temp-sign">°C</span>
        </div>
      </div>

      <div className="col-6">
        <div className="weather-information">
          <div>
            Feels like: <span id="feels-like"> 18°C</span>
          </div>
          <div>
            Wind: <span id="wind-speed"> 10m/s </span>
          </div>
          <div>
            Humidity: <span id="humidity">15%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
