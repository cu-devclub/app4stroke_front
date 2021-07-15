import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignInPage from "./Pages/signin/index";
import Yoke from "./Pages/yoke/index";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/yoke1">
        <Yoke />
      </Route>
      <Route path="/">
        <SignInPage />
      </Route>
    </Switch>
  );
};

export default Routes;
