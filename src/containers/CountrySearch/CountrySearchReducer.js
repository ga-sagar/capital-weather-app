import { SEARCH_COUNTRY_START, SEARCH_COUNTRY_SUCCESS, SEARCH_COUNTRY_FAILURE } from "./CountrySearchActionTypes";

const initialState = {
    isProcessing: false,
    countryDetails: null,
    error: null
};

export const countrySearchReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SEARCH_COUNTRY_START:
        case SEARCH_COUNTRY_SUCCESS:
        case SEARCH_COUNTRY_FAILURE:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
};