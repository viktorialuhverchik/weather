import * as actions from '../actions/actions';
import * as types from '../types';
import 'jest-fetch-mock';

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

