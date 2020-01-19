import http from '~/config/httpRequest/http';

export const getCep = cep => {
    return new Promise((resolve, reject) => {
        http.getViacepInstance()
            .get(`${cep}/json/`)
            .then(res => resolve(res))
            .catch(error => reject(error));
    });
};

export default {
    getCep,
};
