import { SELECT_CITY } from '../types';

const initialState = {
    city: "London"
}

export const cityReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SELECT_CITY:
            return {...state, city: state.city.concat(action.payload)};
        default: return state;
    }
} 