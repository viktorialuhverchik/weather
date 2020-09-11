import React, { useCallback, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import { connect, useDispatch } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import PlacesAutoComplete from './components/PlacesAutoComplete/PlacesAutoComplete';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import FiveDaysWeather from './components/FiveDaysWeather/FiveDaysWeather';
import History from './components/History/History';
import ToggleWeather from './components/ToggleWeather/ToggleWeather';
import { createHistory } from './redux/actions/actions';

import './App.css';

require('dotenv').config();

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        let history = localStorage.getItem("history");
        if(!history) {
            return;
        }
        let formattedHistory = JSON.parse(history);
        dispatch(createHistory(formattedHistory));
    }, [dispatch]);

    return (
        <div className="App">
            <Header />
            <Container maxWidth="md">
                <PlacesAutoComplete />
                <ToggleWeather />
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Switch>
                            <Route exact path={`${process.env.REACT_APP_FIVE_DAYS_ROUTE}`} component={FiveDaysWeather} />
                            <Route exact path={`${process.env.REACT_APP_CURRENT_ROUTE}`} component={CurrentWeather} />
                        </Switch>
                    </Grid>
                    <Grid item xs={4}> 
                        <History />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default connect()(App);
