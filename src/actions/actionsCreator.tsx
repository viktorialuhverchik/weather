export function getCurrentWeather(city: any): any {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=95c29b869410362f179c3f3b0851f1ab`)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.log(error)
    });
};

export function getFiveDaysWeather(city: any): any {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=95c29b869410362f179c3f3b0851f1ab`)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.log(error)
    });
}
