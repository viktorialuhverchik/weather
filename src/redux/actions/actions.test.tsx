import * as actions from '../actions/actions';
import * as types from '../types';
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import fetchMock from 'jest-fetch-mock';
// import { shallow } from 'enzyme';

describe('actions', () => {
    it('should create an action setCityName', () => {
        const city = {
            label: "London, Великобритания",
            value: "London"
        };
        const cityName = city.label.split(',')[0];
        const expectedAction = {
            type: types.SELECT_CITY,
            name: cityName
        };
        expect(actions.setCityName(city)).toEqual(expectedAction);
    });

    it('should create an action updateCity', () => {
        const city = "Paris";
        const expectedAction = {
            type: types.SELECT_CITY,
            name: city
        };
        expect(actions.updateCity(city)).toEqual(expectedAction);
    });

    it('should create an action createHistory', () => {
        const history = "Minsk"
        const expectedAction = {
            type: types.CREATE_HISTORY,
            history
        };
        expect(actions.createHistory(history)).toEqual(expectedAction);
    });

    it('should create an action updateHistory', () => {
        const city = {
            label: "London, Великобритания",
            value: "London"
        };
        const cityName = city.label.split(',')[0];
        const expectedAction = {
            type: types.UPDATE_HISTORY,
            history: cityName
        };
        expect(actions.updateHistory(city)).toEqual(expectedAction);
    });

    it('should create an action deleteHistory', () => {
        const city = "London";
        const expectedAction = {
            type: types.DELETE_HISTORY,
            history: city
        };
        expect(actions.deleteHistory(city)).toEqual(expectedAction);
    });

    it('should create an action showLoader', () => {
        const expectedAction = {
            type: types.SHOW_LOADER
        };
        expect(actions.showLoader()).toEqual(expectedAction);
    });

    it('should create an action hideLoader', () => {
        const expectedAction = {
            type: types.HIDE_LOADER
        };
        expect(actions.hideLoader()).toEqual(expectedAction);
    });
});

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

// describe('async actions', () => {
//     afterEach(() => {
//         fetchMock.restore();
//     });

//     it('should create an action getCurrentWeather', () => {
//         // fetchMock.onGet('/').reply(200, { response: {"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":300.04,"feels_like":301.21,"temp_min":298.15,"temp_max":302.04,"pressure":1017,"humidity":57},"visibility":10000,"wind":{"speed":2.1,"deg":90},"clouds":{"all":71},"dt":1600170140,"sys":{"type":1,"id":1414,"country":"GB","sunrise":1600148161,"sunset":1600193728},"timezone":3600,"id":2643743,"name":"London","cod":200} });
//         const store = mockStore({ currentWeather: {} });
//         const expectedActions = { type: types.CURRENT_WEATHER, payload: {"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":300.04,"feels_like":301.21,"temp_min":298.15,"temp_max":302.04,"pressure":1017,"humidity":57},"visibility":10000,"wind":{"speed":2.1,"deg":90},"clouds":{"all":71},"dt":1600170140,"sys":{"type":1,"id":1414,"country":"GB","sunrise":1600148161,"sunset":1600193728},"timezone":3600,"id":2643743,"name":"London","cod":200} };
//         const city = "London";
//         store.dispatch(actions.getCurrentWeather(city)).then(() => {
//         expect(store.getActions).toEqual(expectedActions);
//         })
//     });
// });


