import React, { useState } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';

import './History.css';
import { CREATE_HISTORY } from '../../types';


const History = (props: any) => {

    // const [history, setHistory] = useState([]);

    // function createHistory(city: any) {
        // setHistory(history);
        // dispatch({
        //     type: CREATE_HISTORY,
        //     history: history.push(city)
        // });
        // localStorage.setItem("history", JSON.stringify(history));
    // }

    // createHistory(props.city.name);


    return (
        <Card className= "history-card">
            {/* {history.map(item => <div key={item}>{item}</div>)} */}
        </Card>

    );
}

// const mapStateToProps = (state: any) => {
//     return {
//         city: state.city
//     };
// };

export default connect()(History);
