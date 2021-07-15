import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignInPage from "./Pages/signin/index";
import Fern from './Pages/fern/index';
const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/fern">
        <Fern/>
      </Route>
      <Route path="/">
        <SignInPage />
      </Route>
    </Switch>
  );
};

export default Routes;
