import { combineReducers } from 'redux';
import { cityReducer } from './cityReducer';
import { historyReducer } from './historyReducer';
import { weatherReducer } from './weatherReducer';
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
    city: cityReducer,
    history: historyReducer,
    weather: weatherReducer,
    app: appReducer
})