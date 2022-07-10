import React from "react";

export default function FormattedForecast(props) {
  function maxTemp() {
    let temp = Math.round(props.data[0].temp.max);
    return <span>{temp}°</span>;
  }

  function minTemp() {
    let temp = Math.round(props.data[0].temp.min);
    return <span>{temp}°C</span>;
  }

  function day() {
    let date = new Date(props.data[0].dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="day-name">{day()}</div>
      <div className="weather-picture">{props.data[0].weather[0].icon}</div>
      <div className="day-temperature">
        <strong> {maxTemp()} </strong> / {minTemp()}
      </div>
    </div>
  );
}
