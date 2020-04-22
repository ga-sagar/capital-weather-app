import { combineReducers } from 'redux';

import { countrySearchReducer } from '../containers/CountrySearch/CountrySearchReducer';

export const rootReducer = combineReducers({
    countryData: countrySearchReducer
}); 