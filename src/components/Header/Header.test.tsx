import React from 'react';
import Header from './Header';
import { shallow, render } from 'enzyme';

describe('<Header />', () => {
  it('renders Header', () => {
    const component = render(<Header/>);
    expect(component).toMatchSnapshot();
  });
  
  it('has correct name', () => {
      const component = shallow(<Header/>);
      expect(component.find('h1').text()).toEqual('Weather');
  });
});
