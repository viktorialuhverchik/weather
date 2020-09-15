import { historyReducer } from './historyReducer';
import { cityReducer} from './cityReducer';
import { weatherReducer} from './weatherReducer';

describe('history reducer', () => {
    it('should return the initial state', () => {
        expect(historyReducer(undefined, {})).toEqual([]);
    });
    
    it('should handle CREATE_HISTORY', () => {
        expect(historyReducer(
            [], 
            {
            type: 'CREATE_HISTORY',
            history: ['Test']
            }
            ))
            .toEqual(['Test']);
    });

    it('should handle UPDATE_HISTORY', () => {
        expect(historyReducer(
            [],
            {
                type: 'UPDATE_HISTORY',
                history: 'London'
            }
            ))
            .toEqual(['London']);

        expect(historyReducer(
            ['Paris'],
            {
                type: 'UPDATE_HISTORY',
                history: 'London'
            }
            ))
            .toEqual(['London', 'Paris']);
    });

    it('should handle DELETE_HISTORY', () => {
        expect(historyReducer(
            ['London', 'Paris'],
            {
                type: 'DELETE_HISTORY',
                history: 'Paris'
            }
            ))
            .toEqual(['London']);
    });
});

describe('city reducer', () => {
    it('should return the initial state', () => {
        expect(cityReducer(undefined, {})).toEqual({name: 'London'});
    });

    it('should handle SELECT_CITY', () => {
        expect(cityReducer(
            undefined, 
            {
                type: 'SELECT_CITY',
                name: 'Paris'
            }
            ))
            .toEqual({name: 'Paris'});
    });
});

describe('weather reducer', () => {
    it('should return the initial state', () => {
        expect(weatherReducer(undefined, {})).toEqual({currentWeather: {}, fiveDaysWeather: {}});
    });

});
