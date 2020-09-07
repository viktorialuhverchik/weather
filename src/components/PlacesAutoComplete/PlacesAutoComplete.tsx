import React, { useState } from 'react';
import { connect } from 'react-redux';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import './PlacesAutoComplete.css';
import { SELECT_CITY, UPDATE_HISTORY } from '../../types';

const PlacesAutoComplete = ({ dispatch }: any) => {

    const [selectedCity, setSelectedCity] = useState({
        label: '',
        value: {}
    });

    function setCityName(city: any) {
        setSelectedCity(city);
        const cityName = city.label.split(',')[0];
        dispatch({
            type: SELECT_CITY,
            name: cityName
        });
        dispatch({
            type: UPDATE_HISTORY,
            history: cityName
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
};


export default connect()(PlacesAutoComplete);
