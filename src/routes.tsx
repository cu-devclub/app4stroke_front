import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignInPage from "./Pages/signin/index";
import HomePage from "./Pages/home/index";
import FormPage from "./Pages/form/index";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/form">
        <FormPage />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/">
        <SignInPage />
      </Route>
    </Switch>
  );
};

export default Routes;
