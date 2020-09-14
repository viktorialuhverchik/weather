import * as actions from '../actions/actions';
import * as types from '../types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

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
});

