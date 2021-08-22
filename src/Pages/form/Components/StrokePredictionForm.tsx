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
import { Button } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Section, ScrollingProvider } from "react-scroll-section";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyle = makeStyles((theme) =>
  createStyles({
    root: {
      transform: "translateY(70px)",
      marginBottom: "160px",
      padding: "32px",
      borderRadius: "20px",
    },
    sidebar: {
      position: "fixed",
      top: "8rem",
      width: "300px",
      right: "0px",
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

const StrokePredictionForm: React.FC = () => {
  const classes = useStyle();
  return (
    <>
      <Formik
        initialValues={{
          ChiefComplaint: "",
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
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, setFieldValue, isSubmitting, errors }) => (
          <Form>
            <ScrollingProvider>
              <Box style={{ background: "rgb(236 236 236 / 74%)" }}>
                <Box
                  width="80%"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    transform: "translateX(4%)",
                  }}
                >
                  <Paper className={classes.root}>
                    {/* PatientInformation */}
                    <Section id="PatientInformation">
                      <SectionTitle title="Patient Information" />
                      <PatientInformationSection />
                    </Section>
                    {/* ChiefComplaint */}
                    <Section id="ChiefComplaint">
                      <SectionTitle title="Chief Complaint" />
                      <ChiefComplaintSection
                        value={values.ChiefComplaint}
                        name="ChiefComplaint"
                        onChange={setFieldValue}
                      />
                    </Section>
                    {/* UnderLyingDisease */}
                    <Section id="UnderLyingDisease">
                      <SectionTitle title="Underlying Disease" />
                      <UnderLyingDiseaseSection />
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
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      style={{
                        height: "40px",
                        width: "300px",
                        marginTop: "30px",
                        marginLeft: "40%",
                      }}
                      className={classes.submitButton}
                    >
                      Submit
                    </Button>
                  </Paper>
                </Box>
              </Box>

              {/* Sidebar */}

              <Card className={classes.sidebar}>
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    style={{
                      width: "150px",
                      height: "40px",
                      marginBottom: "20px",
                    }}
                    className={classes.submitButton}
                  >
                    Submit
                  </Button>
                  <SideBarProgress />
                </CardContent>
              </Card>
            </ScrollingProvider>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default StrokePredictionForm;
