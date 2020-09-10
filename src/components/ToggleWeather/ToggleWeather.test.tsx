import React from 'react';
import ToggleWeather from './ToggleWeather';
import { renderWithRedux } from '../../index.test';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect'


describe('ToggleWeather component',() => {
    it('should render ToggleWeather component', () => {
      const wrapper = renderWithRedux(<ToggleWeather/>);
      expect(wrapper).toMatchSnapshot();
    });

    // it('includes link to Mission scene', () => {                                       
    //   const wrapper = shallow(<ToggleWeather/>);
    //   expect(wrapper.find('Link').prop('to')).toBe('/');
    // });

});