import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignInPage from "./Pages/signin/index";
import Nan from "./Pages/nan/index";
const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/nan">
        <Nan />
      </Route>
      <Route path="/">
        <SignInPage />
      </Route>
    </Switch>
  );
};

export default Routes;
