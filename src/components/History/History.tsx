import React, { useState } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';

import './History.css';

const History = (props: any) => {

    return (
        <Card className= "history-card">
            {props.history.map((item: any) => <span key={item}>{item}</span>)}
        </Card>

    );
}

const mapStateToProps = (state: any) => {
    return {
        history: state.history
    };
};

export default connect(mapStateToProps)(History);
