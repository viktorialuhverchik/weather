import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { BrowserRouter as Router } from "react-router-dom";
import { render as rtlRender } from '@testing-library/react';
import '@testing-library/dom';

const store = createStore(rootReducer);

function renderWithRedux(
  component: any,
  {
    store = createStore(rootReducer),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: any) {
    return <Provider store={store}><Router>{component}</Router></Provider>
  }
  return rtlRender(component, { wrapper: Wrapper, ...renderOptions })
};

test('renders react link', () => {
  const wrapper = renderWithRedux(<App />);
  expect(wrapper).toMatchSnapshot();
});

export * from '@testing-library/react';
export { renderWithRedux };