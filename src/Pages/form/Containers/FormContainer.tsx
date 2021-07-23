import React from "react";
import NIHSSSection from "../Components/NIHSSSection";
import SectionTitle from "../Components/SectionTitle";
import ChiefComplaintSection from "../Components/ChiefComplaintSection";
import EKG12LeadsSection from "../Components/EKG12LeadsSection";

const FormContainer: React.FC = () => {
  return (
    <>
      <SectionTitle title="Chief Complaint" />
      <ChiefComplaintSection />
      <SectionTitle title="EKG 12 Leads" />
      <EKG12LeadsSection />
      <SectionTitle title="NIHSS" />
      <NIHSSSection />
    </>
  );
};
export default FormContainer;
