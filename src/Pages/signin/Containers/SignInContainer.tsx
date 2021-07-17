import React from "react";
import {
  StyledContainer,
  StyledFormArea ,
  Logo
} from "../Components/SignInForm";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  form: {
    width: "80%",
    marginLeft:"10%",
    marginRight:"10%"
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
              label="Email"
              placeholder="Enter Your Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
          </form>
        </StyledFormArea>
      </StyledContainer>
    </>
  );
};

export default SignInContainer;
