import { message } from 'antd';

export const addInterceptors = http => {
  // RESPONSE INTERCEPTORS
  http.interceptors.response.use(
    response => {
      // TODO Do something with response data
      if (response.data.erro) {
        message.error({
          content: 'Talvez o cep esteja inválido!',
          key: 'error',
          duration: 5,
        });
        return;
      }
      if (response.request.responseURL.includes('googleapis'))
        message.success({
          content: 'Consulta realizada com sucesso!',
          key: 'google',
          duration: 5,
        });
      return response;
    },
    error => {
      // TODO Do something with response error
      message.error({
        content: 'Ocorreu um erro inesperado !',
        key: 'error',
        duration: 15,
      });
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
