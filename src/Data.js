import React from "react";

export default function Data(props) {
  console.log(props.date);

  let hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let minute = props.date.getMinutes();

  if (minute < 10) {
    minute = `0${minute} `;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let formattedData = `${day}, ${hour}:${minute}`;

  return <div>{formattedData}</div>;
}
