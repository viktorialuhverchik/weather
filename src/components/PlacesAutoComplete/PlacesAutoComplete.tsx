import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getCurrentWeather } from '../../actions/actionsCreator';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import './PlacesAutoComplete.css';
import { SELECT_CITY } from '../../types';

const PlacesAutoComplete = ({ dispatch }: any) => {

    const [selectedCity, setSelectedCity] = useState({
        label: '',
        value: {}
    });

    function setCityName(city: any) {
        setSelectedCity(city);
        dispatch({
            type: SELECT_CITY,
            name: city.label.split(',', 1)
        });
    };

    return (
        <div className="app-select_city">
            <GooglePlacesAutocomplete
                apiKey='AIzaSyCVTVRvhts70T-KlhGw14mejDBAVFTlb7w'
                selectProps={{
                    selectedCity,
                    onChange: setCityName
                }}
            />
        </div>
    )
}

export default connect()(PlacesAutoComplete);
