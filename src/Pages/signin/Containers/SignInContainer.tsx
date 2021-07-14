import React from "react";
import SignInForm from "../Components/SignInForm";
import Box from "@material-ui/core/Box";

const SignInContainer: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
    >
      <SignInForm />
    </Box>
  );
};

export default SignInContainer;
