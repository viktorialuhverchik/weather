import { historyReducer, initialState } from './historyReducer';
import { cityReducer, initialState as initState  } from './cityReducer';

describe('history reducer', () => {
    it('should return the initial state', () => {
        expect(historyReducer(undefined, [])).toMatchSnapshot()
    });
    
    it('should handle CREATE_HISTORY', () => {
        expect(historyReducer(initialState, {type: 'CREATE_HISTORY'})).toMatchSnapshot()
    });

    it('should handle UPDATE_HISTORY', () => {
        expect(historyReducer(initialState, {type: 'UPDATE_HISTORY'})).toMatchSnapshot()
    });

    it('should handle DELETE_HISTORY', () => {
        expect(historyReducer(initialState, {type: 'DELETE_HISTORY'})).toMatchSnapshot()
    });
});

describe('city reducer', () => {
    it('should return the initial state', () => {
        expect(cityReducer(undefined, 'London')).toMatchSnapshot()
    });
    
    it('should handle SELECT_CITY', () => {
        expect(cityReducer(initState, {type: 'SELECT_CITY'})).toMatchSnapshot()
    });
});

