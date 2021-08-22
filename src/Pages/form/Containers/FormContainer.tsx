import React from "react";
import StrokePredictionForm from "../Components/StrokePredictionForm";
import Header from "../../HeaderFooter/Header";
import Footer from "../../HeaderFooter/Footer";

const FormContainer: React.FC = () => {
  return (
    <>
      <Header />
      <StrokePredictionForm />
      <Footer />
    </>
  );
};

export default FormContainer;
