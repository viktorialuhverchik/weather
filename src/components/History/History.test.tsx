import React from 'react';
import History from './History';
import { renderWithRedux } from '../../index.test';
import { updateCity, deleteHistory } from '../../redux/actions/actions';
import { historyReducer } from '../../redux/reducers/historyReducer';

describe('History component',() => {
  it('renders History component', () => {
      const wrapper = renderWithRedux(<History/>);
      expect(wrapper).toMatchSnapshot();
  });

});

// jest.mock("react-redux", () => ({
//   useSelector: jest.fn(fn => fn()),
//   useDispatch: () => jest.fn()
// }));
