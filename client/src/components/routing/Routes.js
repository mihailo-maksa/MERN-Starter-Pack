import React, { Fragment, lazy, memo } from "react";
import { Route, Switch } from "react-router-dom";

const Register = lazy(() => import("../auth/Register"));
const Login = lazy(() => import("../auth/Login"));
const Alert = lazy(() => import("../layout/Alert"));
const NotFound = lazy(() => import("../layout/NotFound"));
const PrivateRoute = lazy(() => import("./PrivateRoute"));
const Private = lazy(() => import("../custom/Private"));

const Routes = () => (
  <Fragment>
    <Alert />
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/private" component={Private} />
      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default memo(Routes);
