import { UPDATE_LOADING } from './enums/constants/ActionType';

export const not = obj => !obj;

export const startLoading = identifier => ({
  type: UPDATE_LOADING,
  loading: { [identifier]: true },
});

export const endLoading = identifier => ({
  type: UPDATE_LOADING,
  loading: { [identifier]: false },
});

export const editToGeocode = address => {
  return `${address.logradouro},${address.bairro},${address.uf}`.replace(
    /\s/g,
    '+'
  );
};

export default {
  endLoading,
  startLoading,
  not,
  editToGeocode,
};
