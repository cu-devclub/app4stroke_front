import React from "react";
import Header from "../Components/Header";
import Box from "@material-ui/core/Box";
import Welcome from "../Components/Welcome";

const HomeContainer: React.FC = () => {
  return (
    <Box>
      <Header />
      <Welcome />
    </Box>
  );
};

export default HomeContainer;
