import React from "react";
import PatientInformationSection from "../Components/PatientInformationSection";
import ChiefComplaintSection from "../Components/ChiefComplaintSection";
import NIHSSSection from "../Components/NIHSSSection";
import SectionTitle from "../Components/SectionTitle";
import EKG12LeadsSection from "../Components/EKG12LeadsSection";
import UnderLyingDiseaseSection from "../Components/UnderLyingDiseaseSection";
import VitalSignsSection from "../Components/VitalSignsSection";
import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";
import validation from "../validation/validation";

const StrokePredictionForm: React.FC = () => {
  return (
    <>
      <Formik
        initialValues={{ EKG12Leads: "" }}
        validate={validation}
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
            <EKG12LeadsSection
              value={values.EKG12Leads}
              name="EKG12Leads"
              onChange={setFieldValue}
            />
            <SectionTitle title="NIHSS" />
            <NIHSSSection />
            <Button disabled={isSubmitting} type="submit">
              Submit{""}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default StrokePredictionForm;
