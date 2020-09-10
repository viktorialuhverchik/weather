import React from 'react';
import CurrentWeather from './CurrentWeather';
import { renderWithRedux } from '../../index.test';

describe('<App/>',() => {
  it('renders App', () => {
    const wrapper = renderWithRedux(<CurrentWeather/>);
    expect(wrapper).toMatchSnapshot();
  });

});