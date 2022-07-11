import React from "react";
import "./Main.css";

export default function Temperature(props) {
  return (
    <span className="current-temp" id="current-temp">
      {" "}
      <span>{props.temp}</span>
      <span className="temp-sign">°C</span>{" "}
    </span>
  );
}
