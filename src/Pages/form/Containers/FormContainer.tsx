import React from "react";
import PatientInformationSection from "../Components/PatientInformationSection";
import ChiefComplaintSection from "../Components/ChiefComplaintSection";
import NIHSSSection from "../Components/NIHSSSection";
import SectionTitle from "../Components/SectionTitle";
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
<<<<<<< HEAD
=======
      <SectionTitle title="EKG 12 Leads" />
      <EKG12LeadsSection />
>>>>>>> 296d8eccaa4d0bd786cef92006328bb6dc14839a
      <SectionTitle title="NIHSS" />
      <NIHSSSection />
    </>
  );
};

export default FormContainer;
