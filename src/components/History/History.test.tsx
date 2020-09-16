import React from 'react';
import History from './History';
import { renderWithRedux } from '../../index.test';
import { updateCity, deleteHistory } from '../../redux/actions/actions';
import { DELETE_HISTORY, SELECT_CITY, UPDATE_HISTORY } from '../../redux/types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('History component',() => {
    it('renders History component', () => {
        const wrapper = renderWithRedux(<History/>);
        expect(wrapper).toMatchSnapshot();
    });
});

describe('History actions',() => {
    let store: any;

    beforeEach(() => {
        store = mockStore();
    });

    it('should update city', () => {
      const city = "Paris";
      const expectedActions = { type: SELECT_CITY, name: city};
      let result = store.dispatch(updateCity(city));
      expect(expectedActions).toEqual(result);
    });

    it('should delete history', () => {
      const city = "London";
      const expectedActions = { type: DELETE_HISTORY, history: city};
      let result = store.dispatch(deleteHistory(city));
      expect(expectedActions).toEqual(result);
    });

});
