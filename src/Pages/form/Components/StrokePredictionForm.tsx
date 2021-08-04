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
import { Button } from "@material-ui/core";

const StrokePredictionForm: React.FC = () => {
  return (
    <>
      <Formik
        initialValues={{
          PatientInformation: {
            patientID: "",
            age: "",
            firstName: "",
            lastName: "",
            gender: "",
            onset: "",
          },
          ChiefComplaint: "",
          EKG12Leads: "",
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
            <Button disabled={isSubmitting} type="submit">
              Submit{""}
            </Button>
            <SectionTitle title="Patient Information" />
            <PatientInformationSection
              values={values.PatientInformation}
              fieldName="PatientInformation"
              onChange={setFieldValue}
              errors={errors.PatientInformation}
            />
            <SectionTitle title="Chief Complaint" />
            <ChiefComplaintSection
              value={values.ChiefComplaint}
              name="ChiefComplaint"
              onChange={setFieldValue}
            />
            <SectionTitle title="Underlying Disease" />
            <UnderLyingDiseaseSection />
            <SectionTitle title="Vital Signs" />
            <VitalSignsSection />
            <SectionTitle title="EKG 12 Leads" />
            <EKG12LeadsSection
              value={values.EKG12Leads}
              name="EKG12Leads"
              onChange={setFieldValue}
            />
            <SectionTitle title="NIHSS" />
            <NIHSSSection
              values={values.NIHSS}
              fieldName="NIHSS"
              onChange={setFieldValue}
            />
            {/*fix <Button disabled={isSubmitting} type="submit">
              Submit{""}
            </Button> */}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default StrokePredictionForm;
