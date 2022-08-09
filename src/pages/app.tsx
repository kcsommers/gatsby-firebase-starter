import React from 'react';
import { Router } from '@reach/router';
import { DashboardPage } from '../pages-client/DashboardPage';
import { Layout } from '../components/Layout';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';

// This component houses all the client side private routes
// all private routes must begin with /app
// see gatsby-node.ts to change
const App = () => (
  <Layout>
    <Router>
      <PrivateRoute
        path='/app/dashboard'
        component={DashboardPage}
      ></PrivateRoute>
    </Router>
  </Layout>
);

export default App;
