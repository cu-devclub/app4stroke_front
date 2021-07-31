import React from "react";
import PatientInformationSection from "../Components/PatientInformationSection";
import ChiefComplaintSection from "../Components/ChiefComplaintSection";
import NIHSSSection from "../Components/NIHSSSection";
import SectionTitle from "../Components/SectionTitle";
import EKG12LeadsSection from "../Components/EKG12LeadsSection";
import UnderLyingDiseaseSection from "../Components/UnderLyingDiseaseSection";
import VitalSignsSection from "../Components/VitalSignsSection";
import { Formik, Form } from "formik";
import validations from "../Validation/validations";

const StrokePredictionForm: React.FC = () => {
  return (
    <>
      <Formik
        initialValues={{
          NIHSS: {
            levelOfConsciousness: "",
            twoQuestions: "",
            twoCommands: "",
            bestGaze: "",
            bestVisual: "",
            facialPalsy: "",
            bestMotorLeftArm: "",
            bestMotorRightArm: "",
            bestMotorLeftLeg: "",
            bestMotorRightLeg: "",
            limbAtaxia: "",
            sensory: "",
            bestLanguageAphasia: "",
            dysarthria: "",
            extinctionOrNeglect: "",
          },
        }}
        validate={validations}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, setFieldValue, isSubmitting, errors }) => (
          <Form>
            <SectionTitle title="Patient Information" />
            <PatientInformationSection />
            <SectionTitle title="Chief Complaint" />
            <ChiefComplaintSection />
            <SectionTitle title="Underlying Disease" />
            <UnderLyingDiseaseSection />
            <SectionTitle title="Vital Signs" />
            <VitalSignsSection />
            <SectionTitle title="EKG 12 Leads" />
            <EKG12LeadsSection />
            <SectionTitle title="NIHSS" />
            <NIHSSSection
              values={values.NIHSS}
              fieldName="NIHSS"
              onChange={setFieldValue}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default StrokePredictionForm;
