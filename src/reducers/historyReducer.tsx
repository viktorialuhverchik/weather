import { CREATE_HISTORY } from '../types';

const initialState: any = {
    history: []
};

export const historyReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CREATE_HISTORY:
            return {...state, history: action.payload};
        default: 
            return state;
    }
};