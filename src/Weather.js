import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

import clearImage from "./images/clearImage/clearsky.jpg";
import cloudsImage from "./images/cloudsImage/clouds.jpg";
import rainImage from "./images/rainImage/rain.jpg";
import thunderstormImage from "./images/thunderstormImage/thunder.jpg";
import snowImage from "./images/snowImage/snow.jpg";
import mistImage from "./images/mistImage/mist.jpg";

export default function Weather(props) {
	const [city, setCity] = useState(props.defaultCity);
	const [weatherData, setWeatherData] = useState({ ready: false });
	
	const imageMapping = {
    Clear: clearImage,
    Clouds: cloudsImage,
    Rain: rainImage,		
    Thunderstorm: thunderstormImage,
		Snow: snowImage,
		Mist: mistImage,
		Haze: mistImage
  };
	
	function handleResponse(response) {
		setWeatherData({
			ready: true,
			temperature: response.data.main.temp,
			date: new Date(response.data.dt * 1000),
			description:response.data.weather[0].description,
			weatherSituation: response.data.weather[0].main,
			iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
			humidity:response.data.main.humidity,
			wind: response.data.wind.speed,
			city:response.data.name
		});
	}

		function search() {
			const apiKey="70b8d9569b173cc4fcd6655f362ece86";
			const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
			axios.get(apiUrl).then(handleResponse);
		}

		function handleSubmit(event) {
			event.preventDefault();
			search();
		}

		function handleCityChange(event) {
				setCity(event.target.value);
		}

	if(weatherData.ready) {
	return (
    <div className="Weather">
			 <div
          className="containerApp"
          style={{
            backgroundImage: `url(${
              imageMapping[weatherData.weatherSituation]
            })`,
						backgroundRepeat: 'no-repeat',
          }}
        >
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-4">
					<input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange}/>
					</div>
					<div className="col-3">
					<input type="submit" value="Search" className="btn btn-dark w-80" />
					</div>
				</div>
			</form>
			<WeatherInfo data={weatherData} />
			<WeatherForecast city={weatherData.city}/>
		</div>
	</div> );
	}

	else {
		search();
	return "Loading..."
	}
}
