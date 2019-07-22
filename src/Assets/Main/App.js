import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from '../Components/Nav';
import CurrentWeatherPage from '../Components/Pages/CurrentWeather';
import ForecastPage from '../Components/Pages/Forecast';
import MapPage from '../Components/Pages/Map';

function App() {
    // change background based on day/night
    let date = new Date();
    let currentTime = date.getHours();
    console.log(`Reload Update: ${currentTime}`);

    setInterval(() => {
        currentTime = date.getHours();
        console.log(`15 Minute Update: ${currentTime}`);
    }, 900000);
    // useEffect to render out correct background image
    useEffect(() => {
        if (currentTime >= 8) {
            document.body.style.backgroundImage = 'url(' + require('../Images/day.jpg') + ')';
        } else if (currentTime >= 16) {
            document.body.style.backgroundImage = 'url(' + require('../Images/night.jpg') + ')';
        } else {
            document.body.style.backgroundImage = 'url(' + require('../Images/night.jpg') + ')';
        }
    });

    return (
        <Router>
        <div className="App">
            {/* navbar */}
            <Nav />
            <Route path="/" exact component={CurrentWeatherPage} />
            <Route path="/forecast" component={ForecastPage} />
            <Route path="/map" component={MapPage} />
        </div>
        </Router>
    );
}

export default App;