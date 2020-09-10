import { CREATE_HISTORY, UPDATE_HISTORY, DELETE_HISTORY } from './types';

export const initialState: any = [];

export const historyReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CREATE_HISTORY:
            return action.history;
        case UPDATE_HISTORY:
            let history = [...state];
            if(history.length === 10) {
                history.pop();
            }
            let newHistory = history.filter((item: any) => item !== action.history);
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