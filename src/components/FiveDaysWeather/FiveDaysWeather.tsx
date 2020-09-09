import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { getFiveDaysWeather } from '../../services/services';

import './FiveDaysWeather.css';

const FiveDaysWeather = (props: any) => {

    const [fiveDaysWeather, setFiveDaysWeather] = useState({});

    const [loading, setLoading] = useState(false);

    function renderSpinner(loading: boolean) {
        if(!loading) {
            return;
        } else {
            return <CircularProgress/>
        }
    };

    const [alert, setAlert] = useState(false);

    function renderAlert(alert: boolean) {
        if(!alert) {
            return;
        } else {
            return <Alert severity="error">This is an error — check your city!</Alert>
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                let weather = await getFiveDaysWeather(props.city.name);
                let weatherDictionary: any = {};
                weather.list.forEach((item: any) => {
                    let date = new Date(item.dt*1000).getDate();
                    weatherDictionary[date] = item;
                })
                setFiveDaysWeather(weatherDictionary);
                
            } catch(error) {
                console.log(error);
                setAlert(true);
            }
            setLoading(false);
            
        };
        
        fetchData();

    }, [props.city]);

    let options = { year: 'numeric', month: 'long', day: 'numeric' };


    return (
        <div className="card-container">
            <h3>Weather for five days in {props.city.name}</h3>
            <Card className="fivedays-weather_card">
                {renderAlert(alert)}
                {renderSpinner(loading)}
                {(Object.values(fiveDaysWeather).map((item: any, index: number) => {
                    return (
                        <div className="day-weather_container" key={index}>
                            <Card className="day-weather_card">
                                <h5>{new Date(item.dt*1000).toLocaleDateString("en-US", options)}</h5>
                                <h4>{!item.main.temp ? "" : (item.main.temp-273.15).toFixed(0)}&#176;C</h4>
                                <h6>{item.weather[0].main}</h6>
                            </Card>
                        </div>
                );}))}
            </Card>
        </div>
    )
};

const mapStateToProps = (state: any) => {
    return {
        city: state.city
    };
};

export default connect(mapStateToProps)(FiveDaysWeather);