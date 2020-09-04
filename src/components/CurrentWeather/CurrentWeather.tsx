import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { getCurrentWeather } from '../../actions/actionsCreator';

import './CurrentWeather.css';


function CurrentWeather(props: any) {
    console.log(props);
    const [city, setCity] = useState({
        label: '',
        value: {}
    });

    const [currentWeather, setCurrentWeather] = useState({
        base: "",
        clouds: {all: ""},
        cod: "",
        coord: {lon: "", lat: ""},
        dt: "",
        id: "",
        main: {temp: 0, feels_like: "", temp_min: "", temp_max: "", pressure: "", humidity: ""},
        name: "",
        sys: {type: "", id: "", country: "", sunrise: "", sunset: ""},
        timezone: "",
        visibility: "",
        weather: [{id: "", main: "", description: "", icon: ""}],
        wind: {speed: "", deg: ""},
    });

    async function getData(city: any) {
        setCity(city);
        localStorage.setItem("city", city.label.split(',', 1));
        let currentWeather = await getCurrentWeather(city.label.split(',', 1));
        setCurrentWeather(currentWeather);
    };

    const selectedCities = localStorage.getItem("city");

    return (
        <div className="app-container">
            <div className="app-select_city">
                <GooglePlacesAutocomplete
                    apiKey='AIzaSyCVTVRvhts70T-KlhGw14mejDBAVFTlb7w'
                    selectProps={{
                        city,
                        onChange: getData,
                        options: selectedCities
                    }}
                />
            </div>
            <div className="buttons">
                <Link to="/" className="app-link">
                    <Button variant="contained" color="primary" className="button-today">Today</Button>
                </Link>
                <Link to="/fivedays" className="app-link">
                    <Button variant="contained" color="primary">Five days</Button>
                </Link>
            </div>
            <Card className="weather-card">
                <h2>Today weather in : {!currentWeather.main.temp ? "" : (currentWeather.main.temp-273.15).toFixed(0)} &#176;C</h2>
                <h3>{currentWeather.weather[0].description}</h3>
            </Card>
            <Card className="cities-card">
                <h4>{selectedCities}</h4>
            </Card>
        </div>
    )
}


export default CurrentWeather;
