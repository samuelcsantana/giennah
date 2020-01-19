import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import _ from 'lodash';
import routes from '~/config/routes';
import utils from '~/helpers/utils';


export const Anonymous = props => {
    const anonymousRoutes = _.filter(
        routes,
        r => utils.not(r.onlyAuthorized) || r.onlyAuthorized === 'both'
    );
    return (
        <Switch>
            {anonymousRoutes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.view}
                />
            ))}
            <Redirect to="/" />
        </Switch>
    );
};

export default { Anonymous };
