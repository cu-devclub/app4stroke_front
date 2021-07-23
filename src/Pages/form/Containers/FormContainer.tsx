import React from "react";
import PatientInformationSection from "../Components/PatientInformationSection";
import ChiefComplaintSection from "../Components/ChiefComplaintSection";
import NIHSSSection from "../Components/NIHSSSection";
import SectionTitle from "../Components/SectionTitle";
import EKG12LeadsSection from "../Components/EKG12LeadsSection";
import UnderLyingDiseaseSection from "../Components/UnderLyingDiseaseSection";


const FormContainer: React.FC = () => {
  return (
    <>
      <SectionTitle title="Patient Information" />
      <PatientInformationSection />
      <SectionTitle title="Chief Complaint" />
      <ChiefComplaintSection />
      <SectionTitle title="Underlying Disease" />
      <UnderLyingDiseaseSection />
      <SectionTitle title="EKG 12 Leads" />
      <EKG12LeadsSection />
      <SectionTitle title="NIHSS" />
      <NIHSSSection />
    </>
  );
};

export default FormContainer;
