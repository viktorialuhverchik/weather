import { historyReducer, initialState } from './historyReducer';
import { cityReducer, initialState as initState  } from './cityReducer';

describe('history reducer', () => {
    it('should return the initial state', () => {
        expect(historyReducer(undefined, {})).toEqual([]);
    });
    
    it('should handle CREATE_HISTORY', () => {
        expect(historyReducer([], 
            {
            type: 'CREATE_HISTORY',
            history: ["Test"]
            }
            ))
            .toEqual(["Test"]);
    });

    it('should handle UPDATE_HISTORY', () => {
        expect(historyReducer(
            [],
            {
                type: 'UPDATE_HISTORY',
                history: "London"
            }
            ))
            .toEqual(["London"]);

        expect(historyReducer(
            ["Paris"],
            {
                type: 'UPDATE_HISTORY',
                history: "London"
            }
            ))
            .toEqual(["London", "Paris"]);
    });

    it('should handle DELETE_HISTORY', () => {
        expect(historyReducer(
            ["London", "Paris"],
            {
                type: 'DELETE_HISTORY',
                history: "Paris"
            }
            ))
            .toEqual(["London"]);
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

