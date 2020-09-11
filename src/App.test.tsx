import React from 'react';
import App from './App';
import { renderWithRedux } from './index.test';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { BrowserRouter as Router } from "react-router-dom";
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import FiveDaysWeather from './components/FiveDaysWeather/FiveDaysWeather';

const store = createStore(rootReducer);

describe('App component',() => {
    it('should render App component', () => {
        const wrapper = renderWithRedux(<App/>);
        expect(wrapper).toMatchSnapshot();
    });

    // it('valid path should not redirect to CurrentWeather', () => {
    //     const wrapper = mount(<Provider store={store}><Router><App/></Router></Provider>);
    //     expect(wrapper.find(CurrentWeather)).toHaveLength(1);
    //     expect(wrapper.find(FiveDaysWeather)).toHaveLength(0);
    // });

});