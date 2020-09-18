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

export const setCityName = (city: any) => {
    const cityName = city.label.split(',')[0];
    return {
        type: SELECT_CITY,
        name: cityName
    };
};

export const updateCity = (city: string) => {
    return {
        type: SELECT_CITY,
        name: city
    };
};

export const createHistory = (history: any) => {
    return {
        type: CREATE_HISTORY,
        history
    };
};

export const updateHistory = (city: any) => {
    const cityName = city.label.split(',')[0];
    return {
        type: UPDATE_HISTORY,
        history: cityName
    };
};

export const deleteHistory = (city: string) => {
    return {
        type: DELETE_HISTORY,
        history: city
    };
};

export const getCurrentWeather = (city: string) => {
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

export const getFiveDaysWeather = (city: string) => {
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

export const showLoader = () => {
    return {
        type: SHOW_LOADER
    };
};

export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    };
};
