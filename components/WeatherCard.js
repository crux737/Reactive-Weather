import React from "react";
import Sunny from "../assets/Sunny.svg"
import Rainy from "../assets/Rainy.svg"
import Cloudy from "../assets/Cloudy.svg"
import PartlyCoudy from "../assets/PartlyCoudy.svg"

const getIcon = (forecast) => {
  switch (forecast) {
    case 'Sunny':
      return Sunny;
    case 'Raining':
      return Rainy;
    case 'Cloudy':
      return Cloudy;
    case 'PartlyCloudy':
      return PartlyCoudy;
    default:
      return '';

  }
}

function WeatherCard(props) {
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {Sunny} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{props.city.name}</h3>
            <h5 className="card-text">{props.city.temprature}</h5>
            <h5 className="card-text">{props.city.forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard

module.exports = WeatherCard;