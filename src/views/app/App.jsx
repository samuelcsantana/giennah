import React, { Suspense } from 'react';
import Routers from '~/components/app/routers/Routers';
import BaseLayout from '~/components/app/baseLayout/BaseLayout';
import './App.css';


const App = () => {

  return (
    <>
      <Suspense fallback="loading">
        <BaseLayout>
          <Routers.Anonymous />
        </BaseLayout>
      </Suspense>
    </>
  );
}

export default App;
