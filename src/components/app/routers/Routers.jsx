import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import uuid from 'react-uuid';
import routes from '~/config/routes';
import utils from '~/helpers/utils';

export const Anonymous = props => {
  const anonymousRoutes = routes.filter(
    r => utils.not(r.onlyAuthorized) || r.onlyAuthorized === 'both'
  );

  return (
    <Switch>
      {anonymousRoutes.map(({ path, exact, view }) => (
        <Route key={uuid()} path={path} exact={exact} component={view} />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

export default { Anonymous };
