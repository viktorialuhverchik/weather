import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { getCurrentWeather } from '../../actions/actionsCreator';

import './CurrentWeather.css';


const CurrentWeather = (props: any) => {

    const [currentWeather, setCurrentWeather] = useState({
        main: {temp: 0, feels_like: "", temp_min: "", temp_max: "", pressure: "", humidity: ""},
        weather: [{id: "", main: "", description: "", icon: ""}],
    });

    async function getWeather() {
        let weather = await getCurrentWeather(props.city.name);
        setCurrentWeather(weather);
    };

    return (
        <div className="app-container">
            <div className="buttons">
                <Link to="/" className="app-link">
                    <Button variant="contained" color="primary" className="button-today">Today</Button>
                </Link>
                <Link to="/fivedays" className="app-link">
                    <Button variant="contained" color="primary">Five days</Button>
                </Link>
            </div>
            <Card className="weather-card">
                <h2>Today weather in {props.city.name}: {!currentWeather.main.temp ? "" : (currentWeather.main.temp-273.15).toFixed(0)} &#176;C</h2>
                <h3>{currentWeather.weather[0].description}</h3>
            </Card>
        </div>
    )
};

const mapStateToProps = (state: any) => {
    return {
        city: state.city
    };
};

export default connect(mapStateToProps)(CurrentWeather);
