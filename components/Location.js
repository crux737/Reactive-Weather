import React from 'react';
import WeatherCard from './components/WeatherCard.js';
import { getIcon } from './components/WeatherCard.js';


const Location = ({ data, location, setLocation }) => {
  const locationData = data.find((cityData) => cityData.city === location);

  // Helper function for conditional rendering of icons
  const renderIcon = (forecast) => {

  };

  return (
    <div className="location">
      {locationData ? (
        <WeatherCard data={locationData} renderIcon={renderIcon} />
      ) : (
        <p>Location not found</p>
      )}
    </div>
  );
};

export default Location;