import { Box } from "@material-ui/core";
import React from "react";
import { ScrollingProvider } from "react-scroll-section";
import Header from "../../HeaderFooter/Header";
import StrokePredictionForm from "../Components/StrokePredictionForm";

const FormContainer: React.FC = () => {
  return (
    <ScrollingProvider>
      <Box position="relative">
        <Box marginLeft={32} marginRight={32} marginBottom={0} paddingTop={4}>
          <Box
            bgcolor="#ffff"
            paddingTop={4}
            borderRadius={16}
            paddingX={4}
            paddingY={4}
            minHeight="100%"
          >
            <StrokePredictionForm />
          </Box>
        </Box>
      </Box>
    </ScrollingProvider>
  );
};

export default FormContainer;
