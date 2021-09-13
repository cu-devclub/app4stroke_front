import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ScrollingProvider } from "react-scroll-section";
import { getToken } from "../../../Services/AuthService";
import { view } from "../../../Services/UserServices";
import Header from "../../HeaderFooter/Header";
import StrokePredictionForm from "../Components/StrokePredictionForm";

const FormContainer: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();
  const [initialValues, setInitialValues] = useState(null);
  const token = getToken();
  // if (token !== null) {
  //   useEffect(() => {
  //     view({ testId: testId, token: token }).then((response) => { setInitialValues(formatInitialValues(response.data)); });
  //   }, []);
  // }
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
            <StrokePredictionForm initValues={initialValues}/>
          </Box>
        </Box>
      </Box>
    </ScrollingProvider>
  );
};

export default FormContainer;
