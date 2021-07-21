import React from "react";
import NIHSSSection from "../Components/NIHSSSection";
import SectionTitle from "../Components/SectionTitle";

const FormContainer: React.FC = () => {
  return (
    <>
      <SectionTitle title="NIHSS" />
      <NIHSSSection />
    </>
  );
};
export default FormContainer;
