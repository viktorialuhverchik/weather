import React from 'react';
import { connect } from 'react-redux';
import { Card, Grid} from '@material-ui/core';
import { DELETE_HISTORY, SELECT_CITY } from '../../redux/types';

import './History.css';

const History = (props: any) => {

    return (
        <div className= "history-card_wrapper">
            <h3>History</h3>
            <Card className= "history-card">
                {props.history.map((item: any, index: number) => {
                    return (
                        <Grid container spacing={2} key={index}>
                            <Grid item xs={10} onClick={()=> {props.setCityName(item)}} className="history-city">
                                <h6>{item}</h6>
                            </Grid>
                            <Grid item xs={2} className="history-icon">
                                <i className="fa fa-trash" aria-hidden="true" onClick={() => {props.deleteHistory(item, index)}}></i>
                            </Grid>
                        </Grid>
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
        },
        setCityName: (city: any) => {
            dispatch({
                type: SELECT_CITY,
                name: city
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
