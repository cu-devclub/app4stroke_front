import React from "react";
import {
  StyledContainer,
  StyledFormArea,
  Logo,
  StyledFormButton
} from "../Components/SignInForm";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  form: {
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
  },
}));

const SignInContainer: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <StyledContainer>
        <StyledFormArea>
          <Logo />
          <form className={classes.form} noValidate>
            {/*Email*/}
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="Email"
              placeholder="Enter Your Email Address"
              autoComplete="email"
              autoFocus
            />
            {/* Password */}
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              placeholder="Enter Your Password"
              type="password"
              autoComplete="current-password"
            />
            <StyledFormButton to="/home">Login</StyledFormButton>
          </form>
        </StyledFormArea>
      </StyledContainer>
    </>
  );
};

export default SignInContainer;
