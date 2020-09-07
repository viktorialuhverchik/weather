import { combineReducers } from 'redux';
import { weatherReducer } from './weatherReducer';
import { cityReducer } from './cityReducer';
import { historyReducer } from './historyReducer';

export const rootReducer = combineReducers({
    weather: weatherReducer,
    city: cityReducer,
    history: historyReducer
})