import * as actions from '../actions/actions';
import * as types from '../types';
import { currentWeather, fiveDaysWeather } from '../../components/fakeData';

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

describe('async actions', () => {

    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it('should create an action getCurrentWeather', async () => {
        const getWeather = jest.fn();
        getWeather.mockImplementation(() => {
            return currentWeather;
        });
        await expect(getWeather()).toEqual(currentWeather);
    });

    it('should create an action getFiveDaysWeather', async () => {
        const getWeather = jest.fn();
        getWeather.mockImplementation(() => {
            return fiveDaysWeather;
        });
        await expect(getWeather()).toEqual(fiveDaysWeather);
    });
});


