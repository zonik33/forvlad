import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://nloto-promo.ru/backend/api/',

});
const setAuthToken = (token) => {
    if (token) {
        Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete Api.defaults.headers.common['Authorization'];
    }
};


export default Api;