import { lazy } from 'react';

const routes = [
  { path: '/', Component: lazy(() => import('pages/home')) },
  { path: '/my-list', Component: lazy(() => import('pages/my-list')) },
  { path: '*', Component: lazy(() => import('pages/notfound')) },
];

export default routes;
