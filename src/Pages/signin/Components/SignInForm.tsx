import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const SignInForm: React.FC = () => {
  return (
    <>
      <Box
        color="white"
        bgcolor="palevioletred"
        p={1}
        width="600px"
        height="550px"
        textAlign="center"
      >
        <Typography variant="h2">Stroke Analysis</Typography>
      </Box>
    </>
  );
};

export default SignInForm;
