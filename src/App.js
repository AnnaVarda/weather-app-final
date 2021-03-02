import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
    return ( 
	<div className="App">
		<div className="container">

	<Weather defaultCity="Athens"/>
    	<footer>
  This project was coded by <a href="https://www.linkedin.com/in/anna-vardaxoglou-472b7a165/" target="_blank" rel="noreferrer">Anna Vardaxoglou</a> and is{" "}   
      	<a  href="https://github.com/AnnaVarda/weather-app-final" target="_blank" rel="noreferrer">
        open-sourced on GitHub
      	</a>  
    	</footer>
		</div> 
	</div>
	);
}
