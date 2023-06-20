import axios from "axios";       
import { store } from '../redux/store';
import { startLoading, stopLoading } from "../redux/reducers";

const api = axios.create();

// Agrega un interceptor de solicitud
api.interceptors.request.use(
    (config) => {
    store.dispatch(startLoading());
    return config;
    },
    (error) => {
    store.dispatch(stopLoading());
    return Promise.reject(error);
    }
);

// Agrega un interceptor de respuesta
api.interceptors.response.use(
    (response) => {
    store.dispatch(stopLoading());
    return response;
    },
    (error) => {
    store.dispatch(stopLoading());
    return Promise.reject(error);
    }
);

export default api;