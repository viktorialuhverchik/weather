import { 
    SELECT_CITY,
    UPDATE_HISTORY,
    DELETE_HISTORY,
    CREATE_HISTORY,
    CURRENT_WEATHER,
    FIVE_DAYS_WEATHER,
    SHOW_LOADER,
    HIDE_LOADER
} from '../types';

export function setCityName(city: any) {
    const cityName = city.label.split(',')[0];
    return {
        type: SELECT_CITY,
        name: cityName
    };
};

export function updateCity(city: string) {
    return {
        type: SELECT_CITY,
        name: city
    };
};

export function createHistory(history: any) {
    return {
        type: CREATE_HISTORY,
        history
    };
};

export function updateHistory(city: any) {
    const cityName = city.label.split(',')[0];
    return {
        type: UPDATE_HISTORY,
        history: cityName
    };
};

export function deleteHistory(city: string) {
    return {
        type: DELETE_HISTORY,
        history: city
    };
};

export function getCurrentWeather(city: string) {
    return async (dispatch: any) => {
        dispatch(showLoader());
        const response = await fetch(`${process.env.REACT_APP_BASE_API}/${process.env.REACT_APP_API_VERSION}/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);
        const json = await response.json();
        dispatch({
            type: CURRENT_WEATHER,
            payload: json
        });
        dispatch(hideLoader());
    };
};

export function getFiveDaysWeather(city: string) {
    return async (dispatch: any) => {
        dispatch(showLoader());
        const response = await fetch(`${process.env.REACT_APP_BASE_API}/${process.env.REACT_APP_API_VERSION}/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);
        const json = await response.json();
        dispatch({
            type: FIVE_DAYS_WEATHER, 
            payload: json
        });
        dispatch(hideLoader());
    };
};

export function showLoader() {
    return {
        type: SHOW_LOADER
    };
};

export function hideLoader() {
    return {
        type: HIDE_LOADER
    };
};