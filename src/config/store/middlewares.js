import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export default composeWithDevTools(applyMiddleware(...middleware));
