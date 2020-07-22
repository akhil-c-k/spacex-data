import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import Dashboard from '../Dashboard/dashboard'
import PrivateRoute from './PrivateRoute'


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <PrivateRoute component={Dashboard} path="/dashboard" exact />
  </Switch>
);

export default Routes;


