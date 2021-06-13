import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

 

import "./Styling/Result.css";
import "./Styling/Search.css";


function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(null);

  function displayWeatherData(response) {
    
    setWeatherData({
      ready:true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      cityname: response.data.name,
      date: new Date(response.data.dt * 1000),
      
    });
  }

  function search(){
    let apiKey = `7efef5260931c8f50230e9ac708a39f6`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    
    
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} >
      <input type="search" className="form-control" placeholder="Enter city" onChange={updateCity} />
      <button className="btn btn-primary" type="submit">Search</button>
      
    </form>
  );


  if (weatherData.ready) {
    return (
      <div className="Search">
        <div className="container">
        {form}
        <hr/>
        <h2 className="city">The weather in {weatherData.cityname} is currently...</h2>
        <div className="row">
          <div className="col">
          
          <span className="temperature"> {Math.round(weatherData.temperature)}°C</span>
          <p className="weather-description">{weatherData.description}  </p>
          
          <p className="wind-humidity">
              Windspeed: <span id="wind">{weatherData.wind} km/h</span>
        <br />
              Humidity: <span id="humidity">{weatherData.humidity} %</span>
            </p>
            <FormattedDate date={weatherData.date}/>
          </div>
          <div class="col">
            <img
              src={weatherData.icon}
              alt={weatherData.description}
              id="icon"
            />
            
            
          </div>
        </div>
      </div>
      </div>
    );

  } else {
    return (
      <div className="Search">
        <div class="container">
          {form}
        </div>
      </div>
    );
  }
}

export default Search;