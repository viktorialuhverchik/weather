import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { getFiveDaysWeather } from '../../actions/actionsCreator';

export default function FiveDaysWeather() {

    const [city, setCity] = useState({
        label: '',
        value: {}
    });

    const [fiveDaysWeather, setFiveDaysWeather] = useState({list: [
        { main: {temp: 0}}
    ]});

    async function getData(city: any) {
        setCity(city);
        localStorage.setItem("city", city.label.split(',', 1));
        let fiveDaysWeather = await getFiveDaysWeather(city.label.split(',', 1));
        setFiveDaysWeather(fiveDaysWeather);
        console.log(fiveDaysWeather);
        fiveDaysWeather.list.slice(0,5).forEach((item: any) => console.log(item.main.temp));
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
                <h2>Weather for five days in {city.label.split(',', 1)}:</h2>
                {fiveDaysWeather.list.slice(0,5).forEach((item: any) => {return (
                    <div>
                        <h3>{item.main.temp.toFixed(0)}&#176;C</h3>
                    </div>
                );})}
            </Card>
            <Card className="cities-card">
                <h4>{selectedCities}</h4>
            </Card>
        </div>
    )
}