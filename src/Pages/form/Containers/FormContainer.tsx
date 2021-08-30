import { Box } from "@material-ui/core";
import React from "react";
import { ScrollingProvider } from "react-scroll-section";
import Header from "../../HeaderFooter/Header";
import StrokePredictionForm from "../Components/StrokePredictionForm";

const FormContainer: React.FC = () => {
  return (
    <>
      <Header doctorName={"Test"} />
      <ScrollingProvider>
        <Box position="relative">
          <Box
            bgcolor="#ffff"
            margin={32}
            marginTop={4}
            marginBottom={0}
            borderRadius={16}
            paddingX={4}
            paddingY={4}
            minHeight="100%"
          >
            <StrokePredictionForm />
          </Box>
        </Box>
      </ScrollingProvider>
    </>
  );
};

export default FormContainer;
