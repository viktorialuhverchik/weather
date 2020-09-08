import { combineReducers } from 'redux';
import { cityReducer } from './cityReducer';
import { historyReducer } from './historyReducer';
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
    city: cityReducer,
    history: historyReducer,
    app: appReducer
})