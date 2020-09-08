import { CREATE_HISTORY, UPDATE_HISTORY, DELETE_HISTORY } from './types';

const initialState: any = [];

export const historyReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CREATE_HISTORY:
            return action.history;
        case UPDATE_HISTORY:
            const history = [...state, action.history];
            localStorage.setItem("history", JSON.stringify(history));
            return history;
        case DELETE_HISTORY:
            const updatedHistory = state.filter((item: any) => item != action.history );
            localStorage.setItem("history", JSON.stringify(updatedHistory));
            return updatedHistory;
            return;
        default: 
            return state;
    }
};