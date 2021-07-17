import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignInPage from "./Pages/signin/index";
import HomeContainer from "./Pages/home/index";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/home">
        <HomeContainer />
      </Route>
      <Route path="/">
        <SignInPage />
      </Route>
    </Switch>
  );
};

export default Routes;
