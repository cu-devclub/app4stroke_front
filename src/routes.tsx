import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignInPage from "./Pages/signin/index";
import HomePage from "./Pages/home/index";
import FormPage from "./Pages/form/index";
import ResultPage from "./Pages/result/index";
import { isUserLogin } from "./Services/AuthService";
import { Box } from "@material-ui/core";
import Footer from "./Pages/HeaderFooter/Footer";
import Header from "./Pages/HeaderFooter/Header";

const Routes: React.FC = () => {
  const token = localStorage.getItem("token");
  return (
    <Box>
      {isUserLogin() && <Header doctorName={"test"} />}
      <Box style={{ backgroundColor: "#F8F8F8" }} paddingBottom={8}>
        <Switch>
          {!isUserLogin() && (
            <Route path="/">
              <SignInPage />
            </Route>
          )}
          <Route exact path="/result/:testId">
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
      <Footer />
    </Box>
  );
};

export default Routes;
