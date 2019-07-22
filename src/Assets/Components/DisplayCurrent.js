import React from 'react';

const DisplayCurrent = ({ info }) =>
    info ? 
    <div className="DisplayCurrent">
        <div className="DisplayWrapper">
            <h1>{info.name}</h1>
            {info.wind.speed}
        </div>
    </div>
: null;

export default DisplayCurrent;