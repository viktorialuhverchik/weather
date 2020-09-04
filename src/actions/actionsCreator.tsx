import { SELECT_CITY } from "../types";
import { GET_CURRENT_WEATHER } from "../types";
import { Dispatch } from "redux";

export function selectCity(city: any) {
    return {
        type: SELECT_CITY,
        payload: city
    }
};

// export function getWeather(city: any) {
//     return async (dispatch: any) => {
//         const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=95c29b869410362f179c3f3b0851f1ab`);
//         const json = response.json();
//         dispatch({type: GET_CURRENT_WEATHER, payload: json})
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
