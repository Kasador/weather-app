import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CurrentWeather() {
    // set state to collect geolocation
    const [coords, setCoords] = useState({
        lat: null,
        lon: null
    });
    // set API key used
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    // get geolocation to update current weather info
    const showPosition = (position) => {
        setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude
        });
    }
    // useEffect to get position 
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(showPosition);

        // console.log(`Latitude: ${coords.lat} Longitude: ${coords.lon}`);
        // check if we have location before calling API
        if (coords.lat !== null && coords.lon !== null) {
            getLocation();
        } else {
            console.log('State not set.');
        }
    }, [coords.lat]);
    // function to call API
    const getLocation = async () => {
        try {
            let response = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + coords.lat + '&lon=' + coords.lon + '&APPID=' + apiKey);
            
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="CurrentWeather">
            <h1>Current Weather</h1>
        </div>
    );
}

export default CurrentWeather;