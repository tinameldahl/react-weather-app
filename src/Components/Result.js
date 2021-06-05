import React from "react";
//import React, { useState } from "react";

import "./Styling/Result.css";

function Result(props) {
  function showFahrenheit(event) {
    event.preventDefault();
    let temperature = (props.temperature * 9) / 5 + 32;
    alert(`The temperature in Fahrenheit is ${Math.round(temperature)}°F`);
  }

  function showCelsius(event) {
    event.preventDefault();
    let temperature = props.temperature;
    alert(`The temperature in Celsius is ${Math.round(temperature)}°C`);
  }

  return (
    <div className="Result">
      <div className="row ">
        <div className="col-md">
          <h2 className="city">You have not searched yet</h2>
          <p className="weather-description"> Weather description will show up here </p>
        </div>
        <div className="col-md">
          <h2 className="temperature-head">
            <img
              src="https://openweathermap.org/img/wn/01d@2x.png"
              alt="weather-icon"
              id="icon"
            />
            <span className="temperature">{props.temperature}</span>
            <span className="celcius">
              <a href="/" onClick={showCelsius}>
                °C
              </a>
            </span>
            <span className="seperator"> | </span>
            <span className="fahrenheit">
              <a href="/" onClick={showFahrenheit}>
                °F
              </a>
            </span>
          </h2>
          <p className="wind-humidity">
            Windspeed: <span id="wind">n/a</span>
            <span id="description"> m/s</span>
            <br />
            Humidity: <span id="humidity">n/a</span>
            <span id="description"> %</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Result;