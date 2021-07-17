import React from "react";
import Header from "../Components/Header";
import Box from "@material-ui/core/Box";
import Title from "../Components/Title";

const HomeContainer: React.FC = () => {
  return (
    <Box>
      <Header />
      <Title />
    </Box>
  );
};

export default HomeContainer;
