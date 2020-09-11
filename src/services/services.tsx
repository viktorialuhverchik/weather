export function getCurrentWeather(city: any) {
    return fetch(`${process.env.REACT_APP_BASE_API}/${process.env.REACT_APP_API_VERSION}/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
        return response.json();
    });
};

export function getFiveDaysWeather(city: any) {
    return fetch(`${process.env.REACT_APP_BASE_API}/${process.env.REACT_APP_API_VERSION}/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
        return response.json();
    });
};