import React from "react";

export default function WeatherForecastPreview(props) {
	function hours() {
		let date = new Date(props.data.dt * 1000);
		let hours = date.getHours();
		return `${hours}:00`;
	}

	function temperature() {
		let temperature = Math.round(props.data.main.temp)
		
		return `${temperature}°C`;
	}

  return (
    <div className="WeatherForecastPreview col">   
			{hours()}

			<img 
    src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"
    />

			{temperature()}
		</div>
 );
}




