export const addInterceptors = http => {
    // RESPONSE INTERCEPTORS
    http.interceptors.response.use(
        response => {
            // TODO Do something with response data
            return response;
        },
        error => {
            // TODO Do something with response error
            return Promise.reject(error);
        }
    );

    // REQUEST INTERCEPTORS
    http.interceptors.request.use(
        async config => {
            return config;
        },
        error => {
            // I cand handle a request with errors here
            return Promise.reject(error);
        }
    );

    return http;
};
