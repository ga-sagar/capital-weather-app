import axios from 'axios';

export const getCountryDetails = countryName => {
    return axios.get(`${process.env.REACT_APP_COUNTRY_SEARCH_URL}/name/${countryName}`);
};
