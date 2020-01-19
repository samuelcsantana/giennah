import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './views/app/App';
import store from './config/store';

import * as serviceWorker from './serviceWorker';
// import './config/language/i18n';
import './assets/style/index.scss';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Suspense fallback={<div />}>

                <App />

            </Suspense>
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
