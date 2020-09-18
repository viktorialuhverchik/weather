import React from 'react';
import History from './History';
import { renderWithRedux } from '../../index.test';
import { updateCity, deleteHistory, createHistory } from '../../redux/actions/actions';
import { CREATE_HISTORY, DELETE_HISTORY, SELECT_CITY } from '../../redux/types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { history } from '../fakeData';
import * as redux from 'react-redux';
import { fireEvent } from '@testing-library/react';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('History component',() => {

    let store: any;

    beforeEach(() => {
        store = mockStore();
        fetchMock.resetMocks();
    });

    afterEach(() => {
        fetchMock.mockClear();
    });

    it('renders History component', () => {
        const wrapper = renderWithRedux(<History/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('creates SELECT_CITY when update city has been done', () => {
        const city = "Paris";
        const expectedActions = [{ type: SELECT_CITY, name: city}];
        store.dispatch(updateCity(city));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('creates DELETE_HISTORY when delete history has been done', () => {
        const city = "London";
        const expectedActions = [{ type: DELETE_HISTORY, history: city}];
        store.dispatch(deleteHistory(city));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it("should render a history", () => {
        const spy = jest.spyOn(redux, 'useSelector');
        spy.mockReturnValue(history);
        const { getAllByTestId } = renderWithRedux(<History />);
        expect(getAllByTestId("city")).toBeTruthy();
    });

    it('should create history', () => {
        const expectedActions = { type: CREATE_HISTORY, history };
        store.dispatch(createHistory(history));
        expect(store.getActions()[0]).toEqual(expectedActions);
    });

    it('click on history city', () => {
        const { getByTestId } = renderWithRedux(<History/>);
        fireEvent.click(getByTestId("history-city"));
        expect(getByTestId("history-city")).toHaveTextContent("Paris");
    });

    it('click on trash', () => {
        const { getByTestId } = renderWithRedux(<History/>);
        fireEvent.click(getByTestId("trash"));
        expect(getByTestId("trash")).toBeTruthy();
    });
});
