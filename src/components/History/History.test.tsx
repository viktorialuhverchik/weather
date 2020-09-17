import React from 'react';
import History from './History';
import { renderWithRedux } from '../../index.test';
import { updateCity, deleteHistory, createHistory } from '../../redux/actions/actions';
import { CREATE_HISTORY, DELETE_HISTORY, SELECT_CITY } from '../../redux/types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { history } from '../fakeData';
import * as redux from 'react-redux';
import { Grid } from '@material-ui/core';
import { shallow } from 'enzyme';

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

    it("should render a history", () => {
        const spy = jest.spyOn(redux, 'useSelector');
        spy.mockReturnValue(history);
        const { getAllByTestId } = renderWithRedux(<History />);
        expect(getAllByTestId("city")).toBeTruthy();
    });

    it('test click event city', () => {
        const mockCallBack = jest.fn();
        const grid = shallow((<Grid onClick={mockCallBack}></Grid>));
        grid.simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    it('test click event trash', () => {
        const mockCallBack = jest.fn();
        const i = shallow((<i onClick={mockCallBack}></i>));
        i.simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    it('should create history', () => {
        const history = ["London", "Paris"];
        let result = store.dispatch(createHistory(history));
        const expectedActions = { type: CREATE_HISTORY, history };
        expect(expectedActions).toEqual(result);
        expect(store.getActions()[0]).toEqual(expectedActions);
    });
});
