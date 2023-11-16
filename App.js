import React, { useState } from 'react';
// Import data and WeatherCard here
import WeatherCard from './components/WeatherCard.js';
import Location from './components/Location.js';
import Form from './components/Form.js;
import cities from './data.js';


function App() {
    const [location, setLocation] = useState('Your default City')
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {/* Render components here */}
                <Form location={location} setlocation={setLocation} />
                <Location data={cities} location={location} setLocation={setLocatio} />
                {cities.map((cityData, index) => (
                <WeatherCard key={index}  data={cityData}/>

                ))}

            </div>
            
        </>
    )
}

export default App;