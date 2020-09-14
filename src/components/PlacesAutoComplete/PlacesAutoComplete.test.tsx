import React from 'react';
import PlacesAutoComplete from './PlacesAutoComplete';
import { renderWithRedux } from '../../index.test';
import '@testing-library/jest-dom/extend-expect'

describe('PlacesAutoComplete component', () => {
    it('renders PlacesAutoComplete component', () => {
        const wrapper = renderWithRedux(<PlacesAutoComplete/>);
        expect(wrapper).toMatchSnapshot();
    });

    // it('should not call mockSetCity if length of text is 0', () => {
    //     const mockSetCity = jest.fn();
    //     let selectedCity = {
    //         label: '',
    //         value: {}
    //     };
    //     render(
    //         <GooglePlacesAutocomplete selectProps={{
    //             selectedCity,
    //             onChange: (city: any) => {
    //             mockSetCity(city)
    //             }
    //         }}/>
    //     );

    // });
});
