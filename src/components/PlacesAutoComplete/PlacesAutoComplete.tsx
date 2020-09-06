import React, { useState } from 'react';
import { connect } from 'react-redux';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import './PlacesAutoComplete.css';
import { SELECT_CITY } from '../../types';

function PlacesAutoComplete({ dispatch }: any) {

    const [selectedCity, setSelectedCity] = useState({
        label: '',
        value: {}
    });

    function getData(city: any) {
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
                    onChange: getData
                }}
            />
        </div>
    )
}

export default connect()(PlacesAutoComplete);
