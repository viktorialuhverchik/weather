import React from 'react';
import History from './History';
import { renderWithRedux } from '../../index.test';

describe('History component',() => {
  it('renders History component', () => {
      const wrapper = renderWithRedux(<History/>);
      expect(wrapper).toMatchSnapshot();
  });

});