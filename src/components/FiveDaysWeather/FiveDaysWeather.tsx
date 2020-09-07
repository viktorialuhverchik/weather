import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { getFiveDaysWeather } from '../../actions/actionsCreator';

const FiveDaysWeather = (props: any) => {

    const [fiveDaysWeather, setFiveDaysWeather] = useState({list: [
        { main: { temp: 0 } }
    ]});

    useEffect(() => {
        const fetchData = async () => {
            let weather = await getFiveDaysWeather(props.city.name);
            weather.list = weather.list.slice(0,5);
            setFiveDaysWeather(weather);
        }
        
        fetchData();
    }, [props.city]);

    return (
        <div className="app-container">
            <div className="buttons">
                <Link to="/" className="app-link">
                    <Button variant="contained" color="primary" className="button-today">Today</Button>
                </Link>
                <Link to="/fivedays" className="app-link">
                    <Button variant="contained" color="primary">Five days</Button>
                </Link>
            </div>
            <Card className="weather-card">
                <h2>Weather for five days in {props.city.name}:</h2>
                {fiveDaysWeather.list.map((item: any) => {return (
                    <div key={item}>
                        <h3>{!item.main.temp ? "" : (item.main.temp-273.15).toFixed(0)}&#176;C</h3>
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