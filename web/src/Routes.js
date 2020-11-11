import React from 'react'
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './common';
import { Main as MainLayout } from './layouts';

import {
  Ecommerce as EcommerceView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <RouteWithLayout
        component={EcommerceView}
        exact
        layout={MainLayout}
        path="/home"
      />
      <Redirect to="/not-found-cover" status="404" />
    </Switch>
  );
};

export default Routes;
