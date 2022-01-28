import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Loading from 'components/Loading';

import routes from '.';
import Navbar from 'components/Navbar';

const RouteWrapper = () => (
  <Suspense fallback={<Loading full={true} />}>
    <Router>
      <Navbar />

      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Router>
  </Suspense>
);

export default RouteWrapper;
