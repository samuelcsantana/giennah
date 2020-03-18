import React from 'react';

import SearchCep from '~/views/searchCep/SearchCep';

export const routes = [
  {
    path: '/',
    exact: true,
    title: () => 'App',
    view: () => <SearchCep />,
    onlyAuthorized: false,
  },
];
export default routes;
