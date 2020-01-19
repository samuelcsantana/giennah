import axios from 'axios';
import { addInterceptors } from './interceptors';

let _instanceViacep = null;
let _instanceGmaps = null;
const DEFAULT_BASE_URL = '/api';

const getViacepInstance = () => {
    if (_instanceViacep == null) {
        _instanceViacep = axios.create({
            baseURL: process.env.REACT_APP_URL_API_VIACEP || DEFAULT_BASE_URL,
        });
    }

    _instanceViacep = addInterceptors(_instanceViacep);

    return _instanceViacep;
};

const getGmapsInstance = () => {
    if (_instanceGmaps == null) {
        _instanceGmaps = axios.create({
            baseURL: process.env.REACT_APP_URL_API_GMAPS || DEFAULT_BASE_URL,
        });
    }

    _instanceGmaps = addInterceptors(_instanceGmaps);

    return _instanceGmaps;
};

export default { getViacepInstance, getGmapsInstance };
