import React, { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { getFiveDaysWeather } from '../../redux/actions/actions';
import { Options } from '../../redux/types';

import './FiveDaysWeather.css';

const FiveDaysWeather: FC = () => {

    const dispatch = useDispatch();
    const city: string = useSelector((state: any) => state.city.name);
    const fiveDaysWeather: any = useSelector((state: any) => state.weather.fiveDaysWeather);
    const loading: boolean = useSelector((state: any) => state.app.loading);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(getFiveDaysWeather(city));
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
            <h3>Weather for five days in {city}</h3>
            <Card className="fivedays-weather_card">
                {!Object.keys(fiveDaysWeather).length ? <Alert severity="error">Weather in {city} not found!</Alert> : (Object.values(fiveDaysWeather).map((item: any, index: number) => {
                    return (
                        <div className="day-weather_container" key={index}>
                            <Card className="day-weather_card">
                                <h5 data-testid="date">{new Date(item.dt*1000).toLocaleDateString("en-US", Options)}</h5>
                                <h4 data-testid="temp">{!item.main.temp ? "" : (item.main.temp-273.15).toFixed(0)}&#176;C</h4>
                                <img src={!item.weather ? "" : `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} data-testid="image"></img>
                                <h6>{item.weather[0].main}</h6>
                            </Card>
                        </div>
                    );
                }))}
            </Card>
        </div>
    )
};

export default FiveDaysWeather;