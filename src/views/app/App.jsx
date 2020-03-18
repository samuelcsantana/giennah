import React, { Suspense, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import Routers from '~/components/app/routers/Routers';
import BaseLayout from '~/components/app/baseLayout/BaseLayout';
import './App.scss';

const App = props => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_URL_API_ANALYTICS);
    // To Report Page View
    ReactGA.pageview(props?.location?.pathname);
  });

  return (
    <>
      <Suspense fallback="loading">
        <BaseLayout>
          <Routers.Anonymous />
        </BaseLayout>
      </Suspense>
    </>
  );
};

export default withRouter(App);
