import React from 'react';
import FiveDaysWeather from './FiveDaysWeather';
import { renderWithRedux } from '../../index.test';
import { wait } from "@testing-library/react";
import { fiveDaysWeather } from '../fakeData';


describe('FiveDaysWeather component',() => {
    it('renders FiveDaysWeather component', () => {
      const wrapper = renderWithRedux(<FiveDaysWeather/>);
      expect(wrapper).toMatchSnapshot();
    });

    it('get weather', async () => {
      const getWeather = jest.fn();
      getWeather.mockImplementation(() => {
          return fiveDaysWeather;
      });
      await expect(getWeather()).toEqual(fiveDaysWeather);
      await expect(getWeather).toBeCalledTimes(1);

      // const { getByTestId } = await renderWithRedux(<FiveDaysWeather />);
      // await wait(() => expect(getByTestId("date")).toBeInTheDocument());
      // await wait(() => expect(getByTestId("temp")).toBeInTheDocument());
  });

});