import { CREATE_HISTORY, UPDATE_HISTORY, DELETE_HISTORY } from '../types';

const initialState: any = [];

export const historyReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CREATE_HISTORY:
            return action.history;
        case UPDATE_HISTORY:
            let history = [...state];
            let newHistory = history.filter((item: any) => item !== action.history);
            if(newHistory.length === 10) {
                newHistory.pop();
            }
            newHistory.unshift(action.history);
            localStorage.setItem("history", JSON.stringify(newHistory));
            return newHistory;
        case DELETE_HISTORY:
            const updatedHistory = state.filter((item: any) => item !== action.history );
            localStorage.setItem("history", JSON.stringify(updatedHistory));
            return updatedHistory;
        default: 
            return state;
    }
};