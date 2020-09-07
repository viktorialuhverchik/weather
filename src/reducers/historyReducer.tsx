import { UPDATE_HISTORY } from '../types';

const initialState: any = [];

export const historyReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_HISTORY:
            state.push(action.history);
            return state;
        default: 
            return state;
    }
};