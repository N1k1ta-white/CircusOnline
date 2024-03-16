import axios from 'axios';
import { host } from './apiRoutes';

const api = axios.create({
    baseURL: host,
    headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
    credentials: 'include',   
    withCredentials: true,
});



export default api; 