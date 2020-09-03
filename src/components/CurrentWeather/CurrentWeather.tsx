import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Card from '@material-ui/core/Card';
import { getCurrentWeather } from '../../actions/actionsCreator';
import './CurrentWeather.css';


export default function CurrentWeather() {

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
        let currentWeather = await getCurrentWeather(city.label.split(',', 1));
        setCurrentWeather(currentWeather);
    };
    
    return (
        <div>
            <GooglePlacesAutocomplete
                apiKey='AIzaSyCVTVRvhts70T-KlhGw14mejDBAVFTlb7w'
                selectProps={{
                    city,
                    onChange: getData
            }}
            />
            <Card className="current-weather_card">
                <h2>Today in {city.label}: {!currentWeather.main.temp ? "" : currentWeather.main.temp.toFixed(0)}</h2>
                <h3>{currentWeather.weather[0].description}</h3>
            </Card>
        </div>
    )
}