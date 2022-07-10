import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import FormattedForecast from "./FormattedForecast";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(forecast);
  }

  if (loaded) {
    return (
      <div className="forecast mt-3" id="weather-forecast">
        <div className="row">
          <div className="col-2 day1">
            <FormattedForecast data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let lat = props.coordinates.lat;
    let longt = props.coordinates.lon;
    let apiKey = "0e951398a3cfa9bd7988ab651edd4068";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${longt}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);

    return null;
  }
}
