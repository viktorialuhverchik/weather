import { SELECT_CITY } from '../types';

const initialState = {
    name: "London"
}

export const cityReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SELECT_CITY:
            return { name: action.name };
        default: 
            return state;
    }
} 