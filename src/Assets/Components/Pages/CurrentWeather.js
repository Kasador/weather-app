import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayCurrent from '../DisplayCurrent';
import Loading from '../../Images/loading.gif';

function CurrentWeather() {
    // set state to collect geolocation
    const [coords, setCoords] = useState({
        lat: null,
        lon: null,
        data: '',
        isLoaded: false
    });
    // set API key used
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    // get geolocation to update current weather info
    const showPosition = (position) => {
        setCoords({...coords, lat: position.coords.latitude, lon: position.coords.longitude});
    }
    // useEffect to get position 
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(showPosition);

        // console.log(`Latitude: ${coords.lat} Longitude: ${coords.lon}`);
        // check if we have location before calling API
        if (coords.lat !== null && coords.lon !== null) {
            getLocation();
        }
    },[coords.lat]);
    // function to call API
    const getLocation = async () => {
        try {
            let response = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + coords.lat + '&lon=' + coords.lon + '&APPID=' + apiKey);
            
            console.log(response.data);
            setCoords({...coords, data: response.data, isLoaded: true });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="CurrentWeather">
            {!coords.isLoaded ? <img src={Loading} alt="loading" className="Loading" /> : null}
            <DisplayCurrent info={coords.data} />
        </div>
    );
}

export default CurrentWeather;