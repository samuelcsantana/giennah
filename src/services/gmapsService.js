import http from '~/config/httpRequest/http';

export const geocode = cep => {
  return new Promise((resolve, reject) => {
    http
      .getGmapsInstance()
      .get(
        `geocode/json?address=${cep}&key=${process.env.REACT_APP_URL_API_KEY_GOOGLEMAPS}`
      )
      .then(res => resolve(res))
      .catch(error => reject(error));
  });
};

export default {
  geocode,
};
