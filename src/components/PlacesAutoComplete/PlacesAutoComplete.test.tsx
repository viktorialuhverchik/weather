import React from 'react';
import PlacesAutoComplete from './PlacesAutoComplete';
import { renderWithRedux } from '../../index.test';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

describe('<PlacesAutoComplete />', () => {
    it('renders PlacesAutoComplete', () => {
        const wrapper = renderWithRedux(<PlacesAutoComplete/>);
        expect(wrapper).toMatchSnapshot();
    });

    // it('renders PlacesAutoComplete', () => {
    //     const mockSetCity = jest.fn()
    //     renderWithRedux(<PlacesAutoComplete onChange={mockSetCity} />)
    
    //     fireEvent.change(screen.getByPlaceholderText(""), {
    //         target: { value: '' }
    //     })
        
    //     expect(mockSetCity).toHaveBeenCalledTimes(0)
    // });


});
