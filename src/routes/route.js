import React from 'react';
import { Route } from 'react-router-dom';

const Home = React.lazy(() => import('../modules/pages/home'));
const Pokemon = React.lazy(() => import('../modules/pages/pokemon'));

const home = {
  path: '/',
  exact: true,
  name: 'Home component',
  component: <Home />,
  roles: ['User'],
  route: Route
};

const pokemon = {
  path: '/:pokemon',
  exact: true,
  name: 'Pokemon Details component',
  component: <Pokemon />,
  roles: ['User'],
  route: Route
};

export const appRoutes = [home, pokemon];
