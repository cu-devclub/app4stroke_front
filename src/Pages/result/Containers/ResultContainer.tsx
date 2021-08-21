import Grid from "@material-ui/core/Grid";
import React from "react";
import Header from "../../HeaderFooter/Header";
import Data from "../Components/Data";
import Footer from "../../HeaderFooter/Footer";

const data = {
  name: "Nattasuk Chaithana",
  patientID: "10003484",
  gender: "Male",
  age: 38,
  arrivalDate: "26/05/2564 03:34",
  totalTestsDone: 2,
  timeCourse: "Peak at onset",
  onsetDate: "26/05/2564 02:50",
  duration: "00:44:00",
  symptoms: [
    "Alteration of consciousness",
    "Facial Weakness (left)",
    "Dysphasia / aphasia",
  ],
  underlyingDiseases: ["DM", "Asthma"],
  systolicBP: 80.89,
  diastolicBP: 76.79,
  heartRate: 90.9,
  heartRateText: "AF",
  EKG12Leads: "Normal",
  NIHSS: 6,
};

const ResultContainer: React.FC = () => {
  return (
    <>
      <Header doctorName="Dr. John Doe" />
      <Grid container alignItems="stretch">
        <Grid item xs={3}>
          <Data data={data} />
        </Grid>
        <Grid item xs={9}></Grid>
      </Grid>
      <Footer />
    </>
  );
};
export default ResultContainer;
