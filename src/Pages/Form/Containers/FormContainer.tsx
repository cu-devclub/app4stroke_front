import React from "react";
import SectionTitle from "../Components/SectionTitle";
import PatientInformationSection from "../Components/PatientInformationSection";

const FormContainer: React.FC = () => {
  return (
    <>
      <SectionTitle title="Patient Information" />
      <PatientInformationSection />
    </>
  );
};
export default FormContainer;
