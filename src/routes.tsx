import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignInPage from "./Pages/signin/index";
import Palm from "./Pages/palm/index";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/palm">
        <Palm />
      </Route>
      <Route path="/">
        <SignInPage />
      </Route>
    </Switch>
  );
};

export default Routes;
