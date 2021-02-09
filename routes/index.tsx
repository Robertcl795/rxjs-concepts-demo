import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "../components/loading/Loading";

const RouterConfig = () => {
  return (
    <Suspense fallback={Loading()}>
      <Switch>
        <Route path="/dashboard/:dashboardId">
        </Route>
        <Route exact path="/home">
        </Route>
        <Route exact path="/log">
        </Route>
        <Redirect to="/home" />
      </Switch>
    </Suspense>
  );
};

export default RouterConfig;
