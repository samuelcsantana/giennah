import utils from '~/helpers/utils';

import { FETCH_CEP } from '~/helpers/enums/constants/ActionType';
import viacepservice from '~/services/viacepService';

export const getCep = (
  params = '',
  LOADING_IDENTIFICATOR = '',
  fnCallback = () => { }
) => dispatch => {
  dispatch(utils.startLoading(LOADING_IDENTIFICATOR));
  viacepservice
    .getCep(params)
    .then(response => {
      if (response) {
        dispatch({
          type: FETCH_CEP,
          payload: response.data, // JSON.parse(response.request.response),
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
  getCep,
};
