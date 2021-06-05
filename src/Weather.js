import React from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';


export default function Weather(props) {

    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp} degrees celcius`)

    }
    
    let apiKey = "7efef5260931c8f50230e9ac708a39f6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
    <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={10000} //3 secs
      />)
};