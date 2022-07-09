import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div className="Container">
      <div className="row">
        <div className="col-5 city-info">
          <div className="current-city" id="current-city">
            Ternopil
          </div>
          <div className="current-date" id="current-time">
            Sunday, 18:37
          </div>
          <div className="current-weather" id="current-weather-description">
            Sunny
          </div>
        </div>

        <div className="col-7 search-bar">
          <form>
            <div>
              <input
                type="text"
                placeholder="Enter a city"
                className="city-searcher"
                id="search-button"
                autocomplete="off"
              />
              <input type="submit" value="Search" className="button" />
              <button className="geo-button" id="geolocation-button">
                Geo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
