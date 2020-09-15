import React from 'react';
import CurrentWeather from './CurrentWeather';
import { getCurrentWeather } from '../../redux/actions/actions';
import { CURRENT_WEATHER } from '../../redux/types';
import { renderWithRedux } from '../../index.test';

// global.fetch = jest.fn(() => {
//     Promise.resolve({
//         json: () => Promise.resolve({"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"}],"base":"stations","main":{"temp":289.38,"feels_like":289.97,"temp_min":288.71,"temp_max":290.93,"pressure":1017,"humidity":87},"visibility":4200,"wind":{"speed":1,"deg":10},"clouds":{"all":2},"dt":1600151812,"sys":{"type":1,"id":1414,"country":"GB","sunrise":1600148161,"sunset":1600193728},"timezone":3600,"id":2643743,"name":"London","cod":200}),
//     });
// });

describe('CurrentWeather component',() => {
    it('renders CurrentWeather component', () => {
        const wrapper = renderWithRedux(<CurrentWeather/>);
        expect(wrapper).toMatchSnapshot();
    });

    // it("action getCurrentWeather", async () => {
    //     const city = "London";
    //     const weather = await getCurrentWeather(city);
      
    //     expect(weather).toEqual({"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"}],"base":"stations","main":{"temp":289.38,"feels_like":289.97,"temp_min":288.71,"temp_max":290.93,"pressure":1017,"humidity":87},"visibility":4200,"wind":{"speed":1,"deg":10},"clouds":{"all":2},"dt":1600151812,"sys":{"type":1,"id":1414,"country":"GB","sunrise":1600148161,"sunset":1600193728},"timezone":3600,"id":2643743,"name":"London","cod":200});
    //     expect(fetch).toHaveBeenCalledTimes(1);
    // });


});