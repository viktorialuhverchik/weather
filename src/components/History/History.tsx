import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Box, Button } from '@material-ui/core';


import './History.css';

const History = (props: any) => {

    // const [history, setHistory] = useState([]);
    

    // useEffect(() => {
    //     let history: any = localStorage.getItem("history");
    //     let formattedHistory = JSON.parse(history);
    //     setHistory(formattedHistory);
    // }, [props.history]);

    let history: any = localStorage.getItem("history");
    let formattedHistory = JSON.parse(history);

        

    return (
        <div className= "history-card_wrapper">
            <Box className= "history-card">
                {formattedHistory.map((item: any, index: number) => {
                    return (
                        <div className="history-name" key={index}>
                            <h5>{item}</h5>
                            <i className="fa fa-trash" aria-hidden="true"></i>
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

export default connect(mapStateToProps)(History);
