import { SEARCH_COUNTRY_START, SEARCH_COUNTRY_SUCCESS, SEARCH_COUNTRY_FAILURE } from './CountrySearchActionTypes';
import { getCountryDetails } from '../../services/CountryService';

const searchCountryStart = (payload) => {
    return {
        type: SEARCH_COUNTRY_START,
        payload
    };
};

const searchCountrySuccess = (payload) => {
    return {
        type: SEARCH_COUNTRY_SUCCESS,
        payload
    };
};

const searchCountryFailure = (payload) => {
    return {
        type: SEARCH_COUNTRY_FAILURE,
        payload
    };
};

export const searchCountry = (countryName) => {
    return dispatch => {

        dispatch(searchCountryStart({
            isProcessing: true,
            countryDetails: null,
            error: null
        }));

        getCountryDetails(countryName)
            .then(response => {
                if (response && response.status === 200 && response.data.length) {
                    dispatch(searchCountrySuccess({
                        countryDetails: response.data[0],
                        isProcessing: false,
                        error: null
                    }));
                }
            })
            .catch(error => {
                const errorResponse = error.response;
                let errorMessage = 'Unable to process your request, something went wrong, please try again later.';
                if (errorResponse && errorResponse.status === 404) {
                    errorMessage = 'No country found based on given input.'
                }

                dispatch(searchCountryFailure({
                    countryDetails: null,
                    isProcessing: false,
                    error: errorMessage
                }));
            });
    }
};