import React, { useState, useEffect } from 'react';
import Nav from '../Components/Nav';

function App() {
    // change background based on day/night
    let date = new Date();
    let currentTime = date.getHours();

    setInterval(() => {
        currentTime = date.getHours();
        console.log(`15 Minute Update: ${currentTime}`);
    }, 900000);
    // useEffect to render out correct background image
    useEffect(() => {
        if (currentTime > 0) {
            document.body.style.backgroundImage = 'url(' + require('../Images/night.jpg') + ')';
        } else if (currentTime >= 16) {
            document.body.style.backgroundImage = 'url(' + require('../Images/night.jpg') + ')';
        } else if (currentTime <= 7) {
            document.body.style.backgroundImage = 'url(' + require('../Images/day.jpg') + ')';
        }
    },[]);

    return (
        <div className="App">
            <Nav />
        </div>
    );
}

export default App;