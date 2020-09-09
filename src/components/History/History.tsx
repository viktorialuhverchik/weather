import React from 'react';
import { connect } from 'react-redux';
import { Card } from '@material-ui/core';
import { DELETE_HISTORY } from '../../redux/types';


import './History.css';

const History = (props: any) => {

    return (
        <div className= "history-card_wrapper">
            <h4>History:</h4>
            <Card className= "history-card">
                {props.history.map((item: any, index: number) => {
                    return (
                        <div className="history-name" key={index}>
                            <h6>{item}</h6>
                            <i className="fa fa-trash" aria-hidden="true" onClick={() => {props.deleteHistory(item, index)}}></i>
                        </div>
                    );
                })}
            </Card>
        </div>

    );
}

const mapStateToProps = (state: any) => {
    return {
        history: state.history
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        deleteHistory: (city: any) => {
            dispatch({
                type: DELETE_HISTORY,
                history: city
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(History);
