import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// const logger = createLogger()

export default composeWithDevTools(applyMiddleware(thunk, logger));
