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
import { Button, Grid } from "@material-ui/core";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyle = makeStyles((theme) =>
  createStyles({
    sidebar: {
      position: "sticky",
      top: "1rem",
      width: "200px",
      marginLeft: "0px",
      border: "none",
      boxShadow: "none",
      backgroundColor: "transparent",
    },
    buttonButtom: {
      backgroundColor: "#EF5DA8",
      color: "#ffffff",
      textTransform: "none",
      borderRadius: "20px",
      fontSize: "18px",
      marginTop: "30px",
      marginLeft: "300px",
      height: "40px",
      width: "300px",
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
            <Grid container>
              <Grid item>
                <Grid container spacing={3}>
                  <Grid item>
                    <SectionTitle title="Patient Information" />
                    <PatientInformationSection />
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
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      className={classes.buttonButtom}
                    >
                      Submit{""}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              {/* Sidebar */}
              <Grid item>
                <Card className={classes.sidebar}>
                  <CardContent>
                    <Button disabled={isSubmitting} type="submit">
                      Submit{""}
                    </Button>
                    <SideBarProgress />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default StrokePredictionForm;
