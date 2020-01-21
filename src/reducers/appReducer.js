import ActionType from '~/helpers/enums/constants/ActionType';

const INITIAL_STATE = {
  loading: {
    loadingAddress: false,
    loadingGeocode: false,
  }
};

function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionType.UPDATE_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          ...action.loading,
        },
      };
    default:
      return state;
  }
}

export default appReducer;
