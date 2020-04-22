import { combineReducers } from 'redux';

import { countrySearchReducer } from '../containers/CountrySearch/CountrySearchReducer';
import { capitalWeatherReducer } from '../containers/CountryDetails/CapitalWeatherReducer';

export const rootReducer = combineReducers({
    countryData: countrySearchReducer,
    capitalWeatherData: capitalWeatherReducer
}); 