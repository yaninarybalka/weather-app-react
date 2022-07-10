import React from "react";
import "./Main.css";
import Data from "./Data";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-6 city-info">
        <div className="current-city" id="current-city">
          {props.data.city}
        </div>
        <div className="current-date" id="current-time">
          <Data date={props.data.date} />
        </div>
        <div className="current-weather" id="current-weather-description">
          {props.data.description}
        </div>
        <div className="city-icon">
          <img
            src={props.data.icon}
            alt={props.data.description}
            id="city-icon"
            className="icon"
          />

          <Temperature temp={Math.round(props.data.temperature)} />
        </div>
      </div>

      <div className="col-6">
        <div className="weather-information">
          <div>
            Feels like:{" "}
            <span id="feels-like"> {Math.round(props.data.feels_like)}°C</span>
          </div>
          <div>
            Wind:{" "}
            <span id="wind-speed"> {Math.round(props.data.wind)}m/s </span>
          </div>
          <div>
            Humidity:{" "}
            <span id="humidity">{Math.round(props.data.humidity)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
