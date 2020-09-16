import React from 'react';
import CurrentWeather from './CurrentWeather';
import { renderWithRedux } from '../../index.test';
import { wait } from "@testing-library/react";
import { currentWeather } from '../fakeData';

global.fetch = require('jest-fetch-mock');

describe('CurrentWeather component',() => {

    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it('renders CurrentWeather component', () => {
        const wrapper = renderWithRedux(<CurrentWeather/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('get weather', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(currentWeather));
        const getWeather = jest.fn();
        getWeather.mockImplementation(() => {
            return currentWeather;
        });
        await expect(getWeather()).toEqual(currentWeather);
        await expect(getWeather).toBeCalledTimes(1);

        const { getByTestId } = await renderWithRedux(<CurrentWeather />);
        await wait(() => expect(getByTestId("city")).toBeInTheDocument());
        await wait(() => expect(getByTestId("weather")).toBeInTheDocument());
    });
});