import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { setCityName, updateHistory } from '../../redux/actions/actions';

import './PlacesAutoComplete.css';

interface SelectedCity {
    label: string,
    value: {}
};

const PlacesAutoComplete: FC = () => {

    const dispatch = useDispatch();

    const [selectedCity, setSelectedCity] = useState<SelectedCity>();

    return (
        <div className="app-select_city">
            <GooglePlacesAutocomplete
                data-testid="autocomplete"
                apiKey={`${process.env.REACT_APP_PLACES_AUTOCOMPLETE_KEY}`}
                selectProps={{
                    selectedCity,
                    onChange: (city: any) => {
                        setSelectedCity(city);
                        dispatch(setCityName(city));
                        dispatch(updateHistory(city));
                    },
                    placeholder: "Select city..."
                }}
            />
        </div>
    )
};

export default PlacesAutoComplete;
