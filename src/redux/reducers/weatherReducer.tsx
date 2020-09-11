import { CURRENT_WEATHER, FIVE_DAYS_WEATHER } from '../types';

const initialState = {
    currentWeather: {},
    fiveDaysWeather: {}
};

export const weatherReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CURRENT_WEATHER:
            return { ...state, currentWeather: action.payload };
        case FIVE_DAYS_WEATHER:
            let weather: any = action.payload;
            let weatherDictionary: any = {};
                weather.list.forEach((item: any) => {
                let date = new Date(item.dt*1000).getDate();
                weatherDictionary[date] = item;
            })
            return { ...state, fiveDaysWeather: weatherDictionary };
        default: 
            return state;
    }
};