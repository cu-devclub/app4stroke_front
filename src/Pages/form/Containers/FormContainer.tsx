import React from "react";
import ChiefComplaintSection from "../Components/ChiefComplaintSection";
import NIHSSSection from "../Components/NIHSSSection";
import SectionTitle from "../Components/SectionTitle";
import UnderLyingDiseaseSection from "../Components/UnderLyingDiseaseSection";

const FormContainer: React.FC = () => {
  return (
    <>
      <SectionTitle title="Chief Complaint" />
      <ChiefComplaintSection />
      <SectionTitle title="Underlying Disease" />
      <UnderLyingDiseaseSection />
      <SectionTitle title="NIHSS" />
      <NIHSSSection />
    </>
  );
};

export default FormContainer;
