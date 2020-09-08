import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, CircularProgress } from '@material-ui/core';
import { getCurrentWeather } from '../../services/services';

import './CurrentWeather.css';


const CurrentWeather = (props: any) => {

    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();
    let formattedDate = today.toLocaleDateString("en-US", options);


    const [currentWeather, setCurrentWeather] = useState({
        main: {temp: 0, feels_like: "", temp_min: "", temp_max: "", pressure: "", humidity: ""},
        weather: [{id: "", main: "", description: "", icon: ""}],
    });

    useEffect(() => {
        const fetchData = async () => {
            let weather = await getCurrentWeather(props.city.name);
            setCurrentWeather(weather);
            console.log(weather);
        }
        
        fetchData();
    }, [props.city]);
    
    return (
        <div className="card-container">
            <Card className="today-weather_card">
                <h4>{formattedDate} <br/> weather in {props.city.name}: {!currentWeather.main.temp ? "" : 
                    (currentWeather.main.temp-273.15).toFixed(0)} &#176;C</h4>
                <div className="today-weather_info">
                    <h5>{currentWeather.weather[0].main}</h5>
                    <img src={`/images/weather/${currentWeather.weather[0].main}.png`} width="50" height="50" className="today-weather_image"></img>
                </div>
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
