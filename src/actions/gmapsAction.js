import utils from '~/helpers/utils';

import { FETCH_GEOCODE } from '~/helpers/enums/constants/ActionType';
import service from '~/services/gmapsService';

const getGeocode = (
  params = '',
  LOADING_IDENTIFICATOR = '',
  fnCallback = () => { }
) => dispatch => {
  dispatch(utils.startLoading(LOADING_IDENTIFICATOR));
  service
    .geocode(params)
    .then(response => {
      if (response) {
        dispatch({
          type: FETCH_GEOCODE,
          payload: response.data.results[0].geometry.location, // JSON.parse(response.request.response),
        });
        fnCallback(response);
      }
    })
    .catch(() => { })
    .finally(() => {
      dispatch(utils.endLoading(LOADING_IDENTIFICATOR));
    });
};

export default {
  getGeocode,
};
