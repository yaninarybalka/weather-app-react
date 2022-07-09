import React from react;
import "./Current.css";

export default function Current() {
return (
    <div className="container">
      <div className="row current">
        <div className="col-6">
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
              Humidity: <span id="humidity"> 15%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}