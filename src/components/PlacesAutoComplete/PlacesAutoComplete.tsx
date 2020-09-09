import React, { useState } from 'react';
import { connect } from 'react-redux';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { SELECT_CITY, UPDATE_HISTORY } from '../../redux/types';

import './PlacesAutoComplete.css';

const PlacesAutoComplete = (props: any) => {

    const [selectedCity, setSelectedCity] = useState({
        label: '',
        value: {}
    });

    return (
        <div className="app-select_city">
            <GooglePlacesAutocomplete
                apiKey='AIzaSyCVTVRvhts70T-KlhGw14mejDBAVFTlb7w'
                selectProps={{
                    selectedCity,
                    onChange: (city: any) => {
                        setSelectedCity(city);
                        props.setCityName(city)
                    }
                }}
            />
        </div>
    )
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        setCityName: (city: any) => {
            const cityName = city.label.split(',')[0];
            dispatch({
                type: SELECT_CITY,
                name: cityName
            });
            dispatch({
                type: UPDATE_HISTORY,
                history: cityName
            });
        }
    }
};

export default connect(null, mapDispatchToProps)(PlacesAutoComplete);
