import React from 'react';
import FiveDaysWeather from './FiveDaysWeather';
import { renderWithRedux } from '../../index.test';

describe('<App/>',() => {
  it('renders App', () => {
    const wrapper = renderWithRedux(<FiveDaysWeather/>);
    expect(wrapper).toMatchSnapshot();
  });

});