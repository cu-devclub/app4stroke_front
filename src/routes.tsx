import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignInPage from "./Pages/signin/index";
import HomePage from "./Pages/home/index";
import FormPage from "./Pages/form/index";
import ResultPage from "./Pages/result/index";
import { isUserLogin } from "./Services/AuthService";
import { Box } from "@material-ui/core";

const Routes: React.FC = () => {
  const token = localStorage.getItem("token");
  return (
    <Box style={{ backgroundColor: "#E5E5E5" }} paddingBottom={8}>
      <Switch>
        {!isUserLogin() && (
          <Route path="/">
            <SignInPage />
          </Route>
        )}
        <Route exact path="/result">
          <ResultPage />
        </Route>
        <Route exact path="/form">
          <FormPage />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
      </Switch>
    </Box>
  );
};

export default Routes;
