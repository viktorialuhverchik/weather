import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { getFiveDaysWeather } from '../../services/services';
import './FiveDaysWeather.css';

const FiveDaysWeather = (props: any) => {

    const [fiveDaysWeather, setFiveDaysWeather] = useState({list: [
        { 
            dt: 0,
            main: { temp: 0 },
            weather: [{id: "", main: "", description: "", icon: ""}]
        }
    ]});

    const [weatherDictionary, setweatherDictionary] = useState({
        dt: 0,
        main: {temp: 0},
        weather: [{id: "", main: "", description: "", icon: ""}]
    });

    useEffect(() => {
        const fetchData = async () => {
            let weather = await getFiveDaysWeather(props.city.name);
            setFiveDaysWeather(weather);
            console.log(weather);
            let weatherDictionary: any = {};
            weather.list.map((item: any) => {
                let date = new Date(item.dt*1000).getDate();
                weatherDictionary[date] = item;
                setweatherDictionary(weatherDictionary);
            })
            console.log(weatherDictionary);
        }
        
        fetchData();

    }, [props.city]);

    return (
        <div className="card-container">
            <h3>Weather for five days in {props.city.name}:</h3>
            <Card className="fivedays-weather_card">
                {/* {Object.values(weatherDictionary).map((item: any, index: number) => {
                    return (
                        <div className="day-weather_container" key={index}>
                            <h5>{new Date(item.dt*1000).toLocaleDateString("en-US")}</h5>
                            <Card className="day-weather_card">
                                <h6>{!item.main.temp ? "" : (item.main.temp-273.15).toFixed(0)}&#176;C</h6>
                                <h6>{item.weather[0].main}</h6>
                            </Card>
                        </div>
                );})} */}
                {fiveDaysWeather.list.map((item: any, index: number) => {
                return (
                    <div className="day-weather_container" key={index}>
                        <h5>{new Date(item.dt*1000).toLocaleDateString("en-US")}</h5>
                        <Card className="day-weather_card">
                            <h6>{!item.main.temp ? "" : (item.main.temp-273.15).toFixed(0)}&#176;C</h6>
                            <h6>{item.weather[0].main}</h6>
                        </Card>
                    </div>
                );})}
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