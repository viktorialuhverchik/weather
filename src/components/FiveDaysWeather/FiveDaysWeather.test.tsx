import React from 'react';
import FiveDaysWeather from './FiveDaysWeather';
import { renderWithRedux } from '../../index.test';
import { wait } from "@testing-library/react";
import { fiveDaysWeather } from '../fakeData';

global.fetch = require('jest-fetch-mock');

describe('FiveDaysWeather component', () => {

    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it('renders FiveDaysWeather component', () => {
      const wrapper = renderWithRedux(<FiveDaysWeather/>);
      expect(wrapper).toMatchSnapshot();
    });

    it('get weather', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(fiveDaysWeather));
      const getWeather = jest.fn();
      getWeather.mockImplementation(() => {
          return fiveDaysWeather;
      });
      await expect(getWeather()).toEqual(fiveDaysWeather);
      await expect(getWeather).toBeCalledTimes(1);

      const { getAllByTestId } = await renderWithRedux(<FiveDaysWeather />);
      await wait(() => expect(getAllByTestId("date")).toBeTruthy());
      await wait(() => expect(getAllByTestId("temp")).toBeTruthy());
  });

});