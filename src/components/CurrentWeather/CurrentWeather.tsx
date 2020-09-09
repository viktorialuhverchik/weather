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
            try {
                let weather = await getCurrentWeather(props.city.name);
                setCurrentWeather(weather);
            } catch(error) {
                console.log(error);
            }
        };

        fetchData();

    }, [props.city]);
    
    return (
        <div className="card-container">
            <h4>Today weather in {props.city.name}</h4>
            <Card className="today-weather_card">
                <h4 className="today-date">{formattedDate}</h4> 
                <h4>{!currentWeather.main.temp ? "" : (currentWeather.main.temp-273.15).toFixed(0)} &#176;C</h4>
                <div className="today-weather_info">
                    <h6>{currentWeather.weather[0].main}</h6>
                    {/* <img src={`../../images/weather/${currentWeather.weather[0].main}.png`} width="50" height="50" className="today-weather_image"></img> */}
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
