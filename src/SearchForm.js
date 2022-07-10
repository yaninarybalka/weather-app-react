import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <div className="row">
      <div className="col-12 search-bar">
        <form onSubmit>
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
  );
}
