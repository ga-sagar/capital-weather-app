import { GET_CAPITAL_WEATHER_START, GET_CAPITAL_WEATHER_SUCCESS, GET_CAPITAL_WEATHER_FAILURE } from './CapitalWeatherActionTypes';

const initialState = {
    isProcessing: false,
    capitalWeatherDetails: null,
    weatherError: null
};

export const capitalWeatherReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CAPITAL_WEATHER_START:
        case GET_CAPITAL_WEATHER_SUCCESS:
        case GET_CAPITAL_WEATHER_FAILURE:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
};