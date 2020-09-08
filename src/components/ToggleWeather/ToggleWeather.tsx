import React from 'react';
import { Link } from 'react-router-dom';

import './ToggleWeather.css';

export default function ToggleWeather(){

    return (
        <div className="toggle-weather_container ">
            <Link to="/" className="app-link today">Today</Link>
            <Link to="/fivedays" className="app-link">Five days</Link>
        </div>
    );
};
