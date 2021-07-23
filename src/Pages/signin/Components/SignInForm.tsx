import React from "react";
import styled from "styled-components";
import Background from "../../../Assets/StrokeBackground.png";
import LoginLogo from "../../../Assets/LoginLogo.png";
//React router
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

//color
const colors = {
  grey: "#D3D3D3",
  pink: "#EF5DA8",
  white: "#FFFFFF",
};

//background
const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${Background});
  background-size: cover;
  background-attachment: fixed;
`;

//loginbox
const StyledFormArea = styled.div`
  position: absolute;
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(4px);
  border-radius: 40px;
`;

//loginbutton
const StyledFormButton = styled(Link)`
  background: ${colors.pink};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  border-radius: 20px;
  text-decoration: none;
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  width: 250px;
  height: 2px;
  margin:auto;
  margin-top: 30px;

  &:hover {
    background-color: ${colors.pink};
    color: ${colors.grey};
    cursor: pointer;
  }
`;
const useStyles = makeStyles(() => ({
  form: {
    width: "80%",
    margin:"auto",
    marginTop:"0.1%"
  },
  logo: {
    width: "250px",
    height: "110px",
    margin: "auto",
    
  },
}));

const SignInForm: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <StyledContainer>
        <StyledFormArea>
          <img src={LoginLogo} className={classes.logo} />
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

export default SignInForm;