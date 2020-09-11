import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from '../types';

const initialState = {
    loading: false,
    alert: null
};

export const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SHOW_LOADER:
            return { ...state, loading: true };
        case HIDE_LOADER:
            return { ...state, loading: false };
        case SHOW_ALERT:
            return { ...state, alert: false };
        case HIDE_ALERT:
            return { ...state, alert: false };
        default: 
            return state;
    }
};