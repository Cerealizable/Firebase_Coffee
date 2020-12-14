import React from 'react'
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './common';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Account as AccountView,
  CoffeeProducts as CoffeeProductsView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
  SignupCover as SignupCoverView,
  SigninCover as SigninCoverView,
  NewHome as NewHomeView,
  Store as StoreView
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
        component={NewHomeView}
        exact
        layout={MainLayout}
        path="/home"
      />
      <RouteWithLayout
        component={StoreView}
        exact
        layout={MainLayout}
        path="/store"
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
        component={SigninCoverView}
        exact
        layout={MinimalLayout}
        path="/signin-cover"
      />
      <RouteWithLayout
        component={SignupCoverView}
        exact
        layout={MinimalLayout}
        path="/signup-cover"
      />
      <RouteWithLayout
        component={CoffeeProductsView}
        exact
        layout={MainLayout}
        path="/products"
      />
      <Redirect to="/not-found-cover" status="404" />
    </Switch>
  );
};

export default Routes;
