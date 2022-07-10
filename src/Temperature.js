import React, { useState } from "react";
import "./Main.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celcius");
  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <span className="current-temp" id="current-temp">
        {" "}
        <span>{props.temp}</span>
        <span className="temp-sign">
          °C|
          <a href="/" onClick={displayFahrenheit}>
            °F
          </a>
        </span>{" "}
      </span>
    );
  } else {
    let fahrenheitTemp = Math.round((props.temp * 9) / 5 + 32);
    return (
      <span className="current-temp" id="current-temp">
        {" "}
        <span>{fahrenheitTemp}</span>
        <span className="temp-sign">
          <a href="/" onClick={displayCelcius}>
            °C
          </a>
          |°F
        </span>{" "}
      </span>
    );
  }
}
