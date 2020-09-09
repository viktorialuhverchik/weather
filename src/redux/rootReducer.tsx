import { combineReducers } from 'redux';
import { cityReducer } from './cityReducer';
import { historyReducer } from './historyReducer';

export const rootReducer = combineReducers({
    city: cityReducer,
    history: historyReducer
})