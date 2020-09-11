import React from 'react';
import FiveDaysWeather from './FiveDaysWeather';
import { renderWithRedux } from '../../index.test';

describe('FiveDaysWeather component',() => {
  it('renders FiveDaysWeather component', () => {
    const wrapper = renderWithRedux(<FiveDaysWeather/>);
    expect(wrapper).toMatchSnapshot();
  });

});