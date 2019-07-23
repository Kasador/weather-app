import React from 'react';

const DisplayCurrent = ({ info }) =>
    info ? 
    <div className="DisplayCurrent">
        <div className="DisplayWrapper">
            <h1>{info.name}</h1>
            <h2>{info.weather[0].description}</h2>
            <div className="Temp">
                <img src={`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`} alt="icons" />
                <h1>{Math.floor((info.main.temp - 273.15) * 9/5 + 32)}&#8457;</h1>
            </div>
            <div className="OtherData">
                <h3>Humidity: {info.main.humidity}<i className="fas fa-percent"></i></h3>
                <h3>Wind: {parseInt(info.wind.speed)} mph</h3>
            </div>
        </div>
    </div>
: null;

export default DisplayCurrent;