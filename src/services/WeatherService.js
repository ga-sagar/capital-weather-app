import axios from 'axios';

const url = `${process.env.REACT_APP_WEATHERSTACK_URL}/current?access_key=${process.env.REACT_APP_WEATHERSTACK_ACCESS_KEY}`;

export const getCapitalWeatherDetails = capital => {
    return axios.get(`${url}&query=${capital}`);
};
