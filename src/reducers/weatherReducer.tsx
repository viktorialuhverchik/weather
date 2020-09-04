import { GET_CURRENT_WEATHER } from '../types';
import { GET_FIVE_DAYS_WEATHER } from '../types';


const initialState = {
    currentWeather: "",
    fiveDaysWeather: ""
}

export const weatherReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_CURRENT_WEATHER:
            return {...state, currentWeather: state.currentWeather.concat(action.payload)};
        case GET_FIVE_DAYS_WEATHER:
            return {...state, fiveDaysWeather: state.fiveDaysWeather.concat(action.payload)};
        default: return state;
    }
} 