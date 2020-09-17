import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './redux/reducers/rootReducer';
import { BrowserRouter as Router } from "react-router-dom";
import { render as rtlRender } from '@testing-library/react';
import '@testing-library/dom';
import thunk from 'redux-thunk';

export const makeTestStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    const origDispatch = store.dispatch;
    store.dispatch = jest.fn(origDispatch);
    return store;
};

function renderWithRedux(
    component: any,
    {
        store = makeTestStore(),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }: any) {
        return (
            <Provider store={store}>
                <Router>{children}</Router>
            </Provider>
        );
      };
    return rtlRender(component, { wrapper: Wrapper, ...renderOptions })
};

test('renders react link', () => {
    const wrapper = renderWithRedux(<App />);
    expect(wrapper).toBeTruthy();
});

export * from '@testing-library/react';
export { renderWithRedux };
