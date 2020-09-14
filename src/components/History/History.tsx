import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Grid} from '@material-ui/core';
import { updateCity, deleteHistory } from '../../redux/actions/actions';

import './History.css';

const History: FC = () => {

    const dispatch = useDispatch();
    const history = useSelector((state: any) => state.history);

    return (
        <div className= "history-card_wrapper">
            <h3>History</h3>
            <Card className= "history-card">
                {history.map((item: any, index: number) => {
                    return (
                        <Grid container spacing={2} key={index}>
                            <Grid item xs={10} onClick={()=> {dispatch(updateCity(item))}} className="history-city">
                                <h6>{item}</h6>
                            </Grid>
                            <Grid item xs={2} className="history-icon">
                                <i className="fa fa-trash" aria-hidden="true" onClick={() => {dispatch(deleteHistory(item))}}></i>
                            </Grid>
                        </Grid>
                    );
                })}
            </Card>
        </div>

    );
}

export default History;
