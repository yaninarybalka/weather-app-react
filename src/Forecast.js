import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="forecast mt-3" id="weather-forecast">
      <div className="row">
        <div className="col-2 day1">
          <div className="day-name">Sat</div>
          <div className="weather-picture">☀</div>
          <div className="day-temperature">
            <strong> 23° </strong> / 8°C
          </div>
        </div>
      </div>
    </div>
  );
}
