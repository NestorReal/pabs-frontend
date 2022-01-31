/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import CreateUser from 'containers/CreateUser/';
import ProtectedRoute from 'components/ProtectedRoute';
import LoginAdmin from 'containers/LoginAdmincopy';
import HomeAdmin from 'containers/HomeAdmin';
import Home from 'containers/Home';
import Login from 'containers/Login';
import Plan from 'containers/Plan';
import Bienvenida from 'containers/Bienvenida';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <Route exact path="/auth" component={Login} />
        <Route exact path="/crear-cuenta" component={CreateUser} />
        <Route exact path="/auth-admin" component={LoginAdmin} />
        <ProtectedRoute exact path="/HomeAdmin" component={HomeAdmin} />
        <Route exact path="/plan" component={Plan} />
        <Route exact path="/b" component={Bienvenida} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
