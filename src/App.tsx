import React, { useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import PlacesAutoComplete from './components/PlacesAutoComplete/PlacesAutoComplete';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import FiveDaysWeather from './components/FiveDaysWeather/FiveDaysWeather';
import History from './components/History/History';
import ToggleWeather from './components/ToggleWeather/ToggleWeather';
import { CREATE_HISTORY } from './redux/types';

import './App.css';

const App = ({ dispatch }: any) => {

  useEffect(() => {
      let history = localStorage.getItem("history");
      if(!history) {
          return;
      }
      let formattedHistory = JSON.parse(history);
      dispatch({
          type: CREATE_HISTORY,
          history: formattedHistory
      });
  }, []);

    return (
        <div className="App">
            <Header />
                <Container maxWidth="md">
                    <PlacesAutoComplete />
                    <ToggleWeather />
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Switch>
                                <Route exact path="/fivedays" component={FiveDaysWeather} />
                                <Route exact path="/" component={CurrentWeather} />
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
