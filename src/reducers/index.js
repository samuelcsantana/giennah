import { combineReducers } from 'redux';

// Application Reducers
import app from '~/reducers/appReducer';
import localization from '~/reducers/cepReducer';

export default combineReducers({
  app,
  localization,
});
