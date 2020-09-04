import React, { useState } from 'react';
import { connect } from 'react-redux';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import './PlacesAutoComplete.css';

function PlacesAutoComplete() {

    const [city, setCity] = useState({
        label: '',
        value: {}
    });

    function getData(city: any) {
        setCity(city);
        localStorage.setItem("city", city.label.split(',', 1));
        return city;
    };

    const selectedCities = localStorage.getItem("city");

    return (
        <div className="app-select_city">
            <GooglePlacesAutocomplete
                apiKey='AIzaSyCVTVRvhts70T-KlhGw14mejDBAVFTlb7w'
                selectProps={{
                    city,
                    onChange: getData
                }}
            />
        </div>
    )
}

const mapStateToProps = (state: any) => {
    console.log(state.city);
    return state;
}

export default connect(mapStateToProps, null)(PlacesAutoComplete);
