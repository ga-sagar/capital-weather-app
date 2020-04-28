import { GET_CAPITAL_WEATHER_START, GET_CAPITAL_WEATHER_SUCCESS, GET_CAPITAL_WEATHER_FAILURE } from './CapitalWeatherActionTypes';
import { getCapitalWeatherDetails } from '../../services/WeatherService';

const getCapitalWeatherStart = (payload) => {
    return {
        type: GET_CAPITAL_WEATHER_START,
        payload
    };
};

const getCapitalWeatherSuccess = (payload) => {
    return {
        type: GET_CAPITAL_WEATHER_SUCCESS,
        payload
    };
};

const getCapitalWeatherFailure = (payload) => {
    return {
        type: GET_CAPITAL_WEATHER_FAILURE,
        payload
    };
};

export const getCapitalWeather = (capital) => {
    return dispatch => {

        dispatch(getCapitalWeatherStart({
            isProcessing: true,
            capitalWeatherDetails: null,
            weatherError: null
        }));

        getCapitalWeatherDetails(capital)
            .then(response => {
                if (response && response.status === 200 && response.data) {
                    if (response.data.hasOwnProperty('success') && !response.data.success) {
                        dispatch(getCapitalWeatherFailure({
                            capitalWeatherDetails: null,
                            isProcessing: false,
                            weatherError: response.data.error.info
                        }));
                    } else {
                        dispatch(getCapitalWeatherSuccess({
                            capitalWeatherDetails: response.data,
                            isProcessing: false,
                            weatherError: null
                        }));
                    }
                }
            })
    }
};