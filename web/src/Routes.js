import React from 'react'
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './common';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Account as AccountView,
  Ecommerce as EcommerceView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
  Startup as StartupView,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account/:pageId?"
      />
      <RouteWithLayout
        component={StartupView}
        exact
        layout={MainLayout}
        path="/home"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <RouteWithLayout
        component={NotFoundCoverView}
        exact
        layout={MinimalLayout}
        path="/not-found-cover"
      />
      <RouteWithLayout
        component={EcommerceView}
        exact
        layout={MainLayout}
        path="/products"
      />
      <Redirect to="/not-found-cover" status="404" />
    </Switch>
  );
};

export default Routes;
