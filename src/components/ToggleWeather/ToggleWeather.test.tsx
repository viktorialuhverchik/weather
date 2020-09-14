import React from 'react';
import ToggleWeather from './ToggleWeather';
import { renderWithRedux } from '../../index.test';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect'


describe('ToggleWeather component',() => {
    it('should render ToggleWeather component', () => {
        const wrapper = renderWithRedux(<ToggleWeather/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('includes 2 link', () => {                                       
        const wrapper = shallow(<ToggleWeather/>);
        expect(wrapper.find('Link').length).toBe(2);
    });

});