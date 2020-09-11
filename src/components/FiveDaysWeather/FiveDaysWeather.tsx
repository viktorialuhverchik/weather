import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Card, CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { getFiveDaysWeather } from '../../redux/actions/actions';

import './FiveDaysWeather.css';

const FiveDaysWeather = () => {

    const dispatch = useDispatch();
    const city = useSelector((state: any) => state.city.name);
    const fiveDaysWeather = useSelector((state: any) => state.weather.fiveDaysWeather);
    const loading = useSelector((state: any) => state.loading);
    const alert = useSelector((state: any) => state.alert); 

    useEffect(() => {
        try {
            dispatch(getFiveDaysWeather(city));
        } catch(error) {
            console.log(error);
        }
    }, [city]);

    if (loading) {
        return <CircularProgress/>
    };

    let options = { year: 'numeric', month: 'long', day: 'numeric' };


    return (
        <div className="card-container">
            <h3>Weather for five days in {city}</h3>
            <Card className="fivedays-weather_card">
                {(Object.values(fiveDaysWeather).map((item: any, index: number) => {
                    return (
                        <div className="day-weather_container" key={index}>
                            <Card className="day-weather_card">
                                <h5>{new Date(item.dt*1000).toLocaleDateString("en-US", options)}</h5>
                                <h4>{!item.main.temp ? "" : (item.main.temp-273.15).toFixed(0)}&#176;C</h4>
                                <h6>{item.weather[0].main}</h6>
                            </Card>
                        </div>
                    );
                }))}
            </Card>
        </div>
    )
};

export default connect()(FiveDaysWeather);