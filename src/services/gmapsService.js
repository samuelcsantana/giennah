import http from '~/config/httpRequest/http';

export const geocode = cep => {
    return new Promise((resolve, reject) => {
        http.getGmapsInstance()
            .get(`geocode/json?address=${cep}&key=AIzaSyDA-y9Nq4-Op_u-CK--vDF0CRSDMUm-Y5A`)
            .then(res => resolve(res))
            .catch(error => reject(error));
    });
};

export default {
    geocode,
};
