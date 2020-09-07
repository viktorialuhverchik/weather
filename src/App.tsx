import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import PlacesAutoComplete from './components/PlacesAutoComplete/PlacesAutoComplete';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import FiveDaysWeather from './components/FiveDaysWeather/FiveDaysWeather';
import History from './components/History/History';


import './App.css';

const App = () => {

  return (
    <div className="App">
      <Header />
      <PlacesAutoComplete />
      <Switch>
        <Route exact path="/fivedays" component={FiveDaysWeather} />
        <Route exact path="/" component={CurrentWeather} />
      </Switch>
      <History />
    </div>
  );
}

export default App;
