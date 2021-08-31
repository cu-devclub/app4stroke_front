import React from "react";
import PatientInformationSection from "../Components/PatientInformationSection";
import ChiefComplaintSection from "../Components/ChiefComplaintSection";
import NIHSSSection from "../Components/NIHSSSection";
import SectionTitle from "../Components/SectionTitle";
import EKG12LeadsSection from "../Components/EKG12LeadsSection";
import UnderLyingDiseaseSection from "../Components/UnderLyingDiseaseSection";
import VitalSignsSection from "../Components/VitalSignsSection";
import SideBarProgress from "../Components/SideBarProgress";
import { Formik, Form } from "formik";
import validations from "../Validation/validations";
import { Box, Button } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  Section as BasicSection,
  ScrollingProvider,
} from "react-scroll-section";
import styled from "styled-components";
import { getToken } from "../../../Services/AuthService";
import { postForm } from "../../../Services/UserServices";

const useStyle = makeStyles((theme) =>
  createStyles({
    sidebar: {
      position: "fixed",
      top: "1rem",
      width: "300px",
      right: "50px",
      border: "none",
      boxShadow: "none",
      backgroundColor: "transparent",
    },
    submitButton: {
      backgroundColor: "#EF5DA8",
      color: "#ffffff",
      textTransform: "none",
      borderRadius: "20px",
      fontSize: "18px",
      "&:hover": { backgroundColor: "#EF5DA8", color: "#ffffff" },
    },
  })
);

const Section = styled(BasicSection)`
  margin-bottom: 32px;
`;

const StrokePredictionForm: React.FC = () => {
  const classes = useStyle();
  const token = getToken();

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
            arrivalDate: null,
            arrivalTime: null,
            clearDate: null,
            clearTime: null,
            lastDate: null,
            lastTime: null,
            firstDate: null,
            firstTime: null,
            onset: "",
            file: null,
          },
          ChiefComplaint: {
            timeCourse: "",
            symptoms: {
              alterationOfConsciousness: false,
              facialWeakness: false,
              facialWeaknessLeft: false,
              facialWeaknessRight: false,
              hemiparesis: false,
              hemiparesisLeft: false,
              hemiparesisRight: false,
              hemiparesthesia: false,
              hemiparesthesiaLeft: false,
              hemiparesthesiaRight: false,
              dysarthria: false,
              aphasia: false,
              ataxia: false,
              vertigo: false,
              visualProblem: false,
              other: false,
              otherText: "",
            },
          },
          UnderLyingDisease: {
            deny: false,
            hx: false,
            previousTia: false,
            previousStroke: false,
            ht: false,
            dm: false,
            dlp: false,
            valvularHeartDisease: false,
            af: false,
            coronaryHeartDisease: false,
            ckd: false,
            peripheralArterialDisease: false,
            obesity: false,
            smoking: false,
            other: false,
            otherText: "",
          },
          VitalSigns: {
            systolicBP: "",
            diastolicBP: "",
            heartRate: "",
            buttonHeartRate: "",
          },
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
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, actions) => {
          console.log(token);
          if (token !== null) {
            postForm({ body: values, token: token }).then((response) => {
              console.log(response);
            });
          }
          actions.setSubmitting(false);
        }}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form>
            <Box
              position="absolute"
              top="0"
              right="0"
              height="100%"
              marginRight="32px"
            >
              <Box position="sticky" top="100px" right="0">
                <SideBarProgress />
              </Box>
            </Box>
            {/* PatientInformation */}
            <Section id="PatientInformation">
              <SectionTitle title="Patient Information" />
              <PatientInformationSection
                values={values.PatientInformation}
                fieldName="PatientInformation"
                onChange={setFieldValue}
              />
            </Section>
            {/* ChiefComplaint */}
            <Section id="ChiefComplaint">
              <SectionTitle title="Chief Complaint" />
              <ChiefComplaintSection
                values={values.ChiefComplaint}
                fieldName="ChiefComplaint"
                onChange={setFieldValue}
              />
            </Section>
            {/* UnderLyingDisease */}
            <Section id="UnderLyingDisease">
              <SectionTitle title="Underlying Disease" />
              <UnderLyingDiseaseSection
                values={values.UnderLyingDisease}
                fieldName="UnderLyingDisease"
                onChange={setFieldValue}
              />
            </Section>
            {/* Vital Signs */}
            <Section id="VitalSigns">
              <SectionTitle title="Vital Signs" />
              <VitalSignsSection
                values={values.VitalSigns}
                fieldName="VitalSigns"
                onChange={setFieldValue}
              />
            </Section>
            {/* EKG 12 Leads */}
            <Section id="EKG12Leads">
              <SectionTitle title="EKG 12 Leads" />
              <EKG12LeadsSection
                value={values.EKG12Leads}
                name="EKG12Leads"
                onChange={setFieldValue}
              />
            </Section>
            {/* NIHSS */}
            <Section id="NIHSS">
              <SectionTitle title="NIHSS" />
              <NIHSSSection
                values={values.NIHSS}
                fieldName="NIHSS"
                onChange={setFieldValue}
              />
            </Section>
            <Box textAlign="center">
              <Button
                disabled={isSubmitting}
                type="submit"
                style={{
                  height: "40px",
                  width: "300px",
                }}
                className={classes.submitButton}
              >
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default StrokePredictionForm;
