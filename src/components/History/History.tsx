import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import { DELETE_HISTORY } from '../../redux/types';


import './History.css';

const History = (props: any) => {

    return (
        <div className= "history-card_wrapper">
            <Box className= "history-card">
                {props.history.map((item: any, index: number) => {
                    return (
                        <div className="history-name" key={index}>
                            <h5>{item}</h5>
                            <i className="fa fa-trash" aria-hidden="true" onClick={() => {props.deleteHistory(item, index)}}></i>
                        </div>
                    );
                })}
            </Box>
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
        deleteHistory: (city: any, index: number) => {
            
            dispatch({
                type: DELETE_HISTORY,
                history: city
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(History);
