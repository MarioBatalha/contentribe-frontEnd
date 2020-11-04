import axios from 'axios';

const api = axios.create({
    baseURL: process.env.DATABASE_URL
})

export default api;
//http://localhost:3333
//process.env.REACT_APP_API_URL
