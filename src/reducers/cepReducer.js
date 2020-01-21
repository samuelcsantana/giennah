import { FETCH_CEP, FETCH_GEOCODE } from '~/helpers/enums/constants/ActionType';

const INITIAL_STATE = {
  address: {
    cep: '02050-010',
    logradouro: 'Rua Miguel Mentem',
    bairro: 'Vila Guilherme',
    localidade: 'São Paulo',
    uf: 'SP',
  },
  geocode: {
    lat: -23.5168338,
    lng: -46.6139824,
  },
};

function workOrderReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CEP:
      return {
        ...state,
        address: action.payload,
      };
    case FETCH_GEOCODE:
      return {
        ...state,
        geocode: action.payload,
      };
    default:
      return state;
  }
}

export default workOrderReducer;
