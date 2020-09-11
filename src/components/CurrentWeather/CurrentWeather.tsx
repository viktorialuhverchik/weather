import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Card, CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { getCurrentWeather } from '../../redux/actions/actions';

import './CurrentWeather.css';


const CurrentWeather = () => {

    const dispatch = useDispatch();
    const city = useSelector((state: any) => state.city.name);
    const currentWeather = useSelector((state: any) => state.weather.currentWeather);
    const loading = useSelector((state: any) => state.loading);

    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();
    let formattedDate = today.toLocaleDateString("en-US", options);

    useEffect(() => {
        try {
            dispatch(getCurrentWeather(city));
        } catch(error) {
            console.log(error);
        }
    }, [city]);

    if (loading) {
        return <CircularProgress/>
    };

    return (
        <div className="card-container">
            <h3>Today weather in {city}</h3>
            <Card className="today-weather_card">
                <h4 className="today-date">{formattedDate}</h4> 
                <h4>{!currentWeather.main ? <Alert severity="error">This is an error — check your city!</Alert> : (currentWeather.main.temp-273.15).toFixed(0)}&#176;C</h4>
                <div className="today-weather_info">
                    <h6>{!currentWeather.weather ? "" : currentWeather.weather[0].main}</h6>
                    {/* <img src={`/images/weather/${currentWeather.weather[0].main}.png`} width="50" height="50" className="today-weather_image"></img> */}
                </div>
            </Card>
        </div>
    )
};

export default connect()(CurrentWeather);
