import React from "react";
import ChiefComplaintSection from "../Components/ChiefComplaintSection";
import SectionTitle from "../Components/SectionTitle";

const FormContainer: React.FC = () => {
  return (
    <>
      <SectionTitle title="Chief Complaint" />
      <ChiefComplaintSection />
    </>
  );
};

export default FormContainer;
