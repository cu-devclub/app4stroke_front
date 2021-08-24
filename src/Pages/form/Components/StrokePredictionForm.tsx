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
import { Button, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Section, ScrollingProvider } from "react-scroll-section";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

const useStyle = makeStyles(() =>
  createStyles({
    form: {
      transform: "translateY(64px)",
      marginBottom: "320px",
    },
    paper: {
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
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
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
              {/* Form */}
              <Box style={{ background: "rgb(236 236 236 / 74%)" }}>
                <Grid container spacing={0}>
                  <Grid item xs={2}>
                    <Breadcrumbs separator=">" style={{ margin: "24px" }}>
                      <Link color="inherit" href="/home">
                        <Typography>Home</Typography>
                      </Link>
                      <Typography style={{ color: "#CF658D" }}>
                        New Test
                      </Typography>
                    </Breadcrumbs>
                  </Grid>
                  <Grid item xs={8} className={classes.form}>
                    <Paper className={classes.paper}>
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
                        <Typography>Submit</Typography>
                      </Button>
                    </Paper>
                  </Grid>
                  {/* Form */}
                  {/* Sidebar */}
                  <Grid item xs={2} className={classes.sidebar}>
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
                      <Typography>Submit</Typography>
                    </Button>
                    <SideBarProgress />
                  </Grid>
                  {/* Sidebar */}
                </Grid>
              </Box>
            </ScrollingProvider>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default StrokePredictionForm;
