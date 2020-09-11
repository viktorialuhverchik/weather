import React from 'react';
import CurrentWeather from './CurrentWeather';
import { renderWithRedux } from '../../index.test';

describe('CurrentWeather component',() => {
    it('renders CurrentWeather component', () => {
        const wrapper = renderWithRedux(<CurrentWeather/>);
        expect(wrapper).toMatchSnapshot();
    });

});