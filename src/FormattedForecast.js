import React from "react";

export default function FormattedForecast(props) {
  let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="day-name">{day()}</div>
      <div className="weather-picture">
        <img src={icon} alt="" width="50" />
      </div>
      <div className="day-temperature">
        <strong> {maxTemp()} </strong> /{minTemp()}
      </div>
    </div>
  );
}
