import { SELECT_CITY, GET_CURRENT_WEATHER, CREATE_HISTORY } from "../types";

export function selectCity(city: any) {
    return {
        type: SELECT_CITY,
        payload: city
    }
};

export function getWeather(city: any) {
    return async (dispatch: any) => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=95c29b869410362f179c3f3b0851f1ab`);
        const json = await response.json();
        dispatch({type: GET_CURRENT_WEATHER, payload: json});
    };
};

// export function createHistory(city: any) {
//     return {
//         type: CREATE_HISTORY,
//         payload: history
//     }
// };

export function getCurrentWeather(city: any) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=95c29b869410362f179c3f3b0851f1ab`)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.log(error)
    });
};

export function getFiveDaysWeather(city: any) {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=95c29b869410362f179c3f3b0851f1ab`)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.log(error)
    });
}
