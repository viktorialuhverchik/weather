import React from 'react';
import History from './History';
import { renderWithRedux } from '../../index.test';

describe('<App/>',() => {
  it('renders App', () => {
    const wrapper = renderWithRedux(<History/>);
    expect(wrapper).toMatchSnapshot();
  });

});