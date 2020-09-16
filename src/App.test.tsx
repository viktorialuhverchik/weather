import React from 'react';
import * as redux from "react-redux";
import thunk from 'redux-thunk';
import App from './App';
import { renderWithRedux } from './index.test';
import configureMockStore from 'redux-mock-store';
import { createHistory } from './redux/actions/actions';
import { CREATE_HISTORY } from './redux/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('App component',() => {
    let store: any;

    beforeEach(() => {
        store = mockStore();
    });

    it('should render App component', () => {
        const wrapper = renderWithRedux(<App/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should create history', () => {
        const history = ["London", "Paris"];
        let result = store.dispatch(createHistory(history));
        const expectedActions = { type: CREATE_HISTORY, history };
        expect(expectedActions).toEqual(result);
    });
});