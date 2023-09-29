import React from 'react';
import { Route } from 'react-router-dom';

const Home = React.lazy(() => import('../modules/pages/home'));

const home = {
  path: '/',
  exact: true,
  name: 'Home component',
  component: <Home />,
  roles: ['User'],
  route: Route
};

export const appRoutes = [home];
