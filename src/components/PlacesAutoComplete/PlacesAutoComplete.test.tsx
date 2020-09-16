import React from 'react';
import PlacesAutoComplete from './PlacesAutoComplete';
import { renderWithRedux } from '../../index.test';
import '@testing-library/jest-dom/extend-expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { SELECT_CITY, UPDATE_HISTORY } from '../../redux/types';
import { setCityName, updateHistory } from '../../redux/actions/actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('PlacesAutoComplete component', () => {
    let store: any;

    beforeEach(() => {
        store = mockStore();
    });
    
    it('renders PlacesAutoComplete component', () => {
        const wrapper = renderWithRedux(<PlacesAutoComplete/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.findByTestId("autocomplete")).toBeTruthy();
    });

    it('should set city name', () => {
        const city = {
            label: "London, Великобритания",
            value: "London"
        };
        const cityName = city.label.split(',')[0];
        let result = store.dispatch(setCityName(city));
        const expectedActions = { type: SELECT_CITY, name: cityName};
        expect(expectedActions).toEqual(result);
    });

    it('should update history', () => {
    const city = {
        label: "London, Великобритания",
        value: "London"
    };
    const cityName = city.label.split(',')[0];
    let result = store.dispatch(updateHistory(city));
    const expectedActions = { type: UPDATE_HISTORY, history: cityName};
    expect(expectedActions).toEqual(result);
    });
});