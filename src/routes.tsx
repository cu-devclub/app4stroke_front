import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignInPage from "./Pages/signin/index";
import Steel from "./Pages/steel/index";
const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/name">
        <Steel />
      </Route>
      <Route path="/">
        <SignInPage />
      </Route>
    </Switch>
  );
};

export default Routes;
