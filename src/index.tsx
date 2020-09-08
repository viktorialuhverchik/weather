import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import App from './App';

import './index.css';

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
