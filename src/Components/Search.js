import React, { useState } from "react";
import axios from "axios";

import "./Styling/Result.css";
import "./Styling/Search.css";

function Search(props) {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `7efef5260931c8f50230e9ac708a39f6`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} >
      <input type="search" placeholder="Enter city" onChange={updateCity} />
      <button type="submit">Search</button>
      
    </form>
  );


  if (loaded) {
    return (
      <div className="Search">
        {form}
        <hr/>
        <h2 className="city">{city}</h2>
        <span className="temperature"> {Math.round(weather.temperature)}°C</span>

        <img
          src={weather.icon}
          alt={weather.description}
          id="icon"
        />
        
        <p className="weather-description"> {weather.description} </p>
        <p className="wind-humidity">
          Windspeed: <span id="wind">{weather.wind} km/h</span>
        <br />
          Humidity: <span id="humidity">{weather.humidity} %</span>
        </p>
      </div>
    );

  } else {
    return (
      <div className="Search">
        {form}
      </div>
    );
  }
}

export default Search;