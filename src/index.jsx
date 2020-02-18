import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './views/app/App';
import store from './config/store';

import * as serviceWorker from './serviceWorker';

import './assets/style/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div />}>
        <App />
      </Suspense>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
