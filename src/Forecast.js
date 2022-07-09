import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div class="forecast" id="weather-forecast">
      <div class="row">
        <div class="col-2 day1">
          <div class="day-name">Sat</div>
          <div class="weather-picture">☀</div>
          <div class="day-temperature">
            <strong> 23° </strong> / 8°C
          </div>
        </div>
      </div>
    </div>
  );
}
