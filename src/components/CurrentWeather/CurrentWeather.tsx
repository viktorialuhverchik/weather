import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { getCurrentWeather } from '../../redux/actions/actions';
import { Options } from '../../redux/types';

import './CurrentWeather.css';


const CurrentWeather: FC = () => {

    const dispatch = useDispatch();
    const city: string = useSelector((state: any) => state.city.name);
    const currentWeather: any = useSelector((state: any) => state.weather.currentWeather);
    const loading: boolean = useSelector((state: any) => state.app.loading);

    let today: Date = new Date();
    let formattedDate: string = today.toLocaleDateString("en-US", Options);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(getCurrentWeather(city));
            } catch(error) {
                console.log(error);
            }
        };
        fetchData();
    }, [city, dispatch]);

    if (loading) {
        return <CircularProgress/>
    };

    return (
        <div className="card-container">
            <h3>Today weather in {city}</h3>
            <Card className="today-weather_card">
                {!currentWeather.main ? <Alert severity="error">Weather in {city} not found!</Alert> : 
                    <>
                        <h4 className="today-date">{formattedDate}</h4>
                        <h4>{(currentWeather.main.temp-273.15).toFixed(0)}&#176;C</h4>
                    </>}
                <div className="today-weather_info">
                    <h6>{!currentWeather.weather ? "" : currentWeather.weather[0].main}</h6>
                    {/* <img src={`/images/weather/${currentWeather.weather[0].main}.png`} width="50" height="50" className="today-weather_image"></img> */}
                </div>
            </Card>
        </div>
    )
};

export default CurrentWeather;
