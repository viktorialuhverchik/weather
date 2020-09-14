import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './ToggleWeather.css';

const ToggleWeather: FC = () => {
    
    return (
        <div className="toggle-weather_container ">
            <Link to="/" className={`app-link today`}>Today</Link>
            <Link to="/fivedays" className={`app-link`}>Five days</Link>
        </div>
    );
};
export default ToggleWeather;
