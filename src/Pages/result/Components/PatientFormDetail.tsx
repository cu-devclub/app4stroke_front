import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import BrainBackground from "../../../Assets/BrainBackground.png";
import { DataProps } from "../../../interfaces";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${BrainBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "400px 300px",
    paddingTop: "72px",
    backgroundColor: "#FFF1F8",
    padding: "16px",
  },
  name: {
    fontWeight: 600,
    alignItems: "center",
    textAlign: "center",
    color: "#3A3A3D",
    marginBottom: "16px",
  },
  box: {
    backgroundColor: "#FCDDEC",
    borderRadius: 10,
    marginBottom: "16px",
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
  },
  boxArrival: {
    border: "2px solid #d3d3d3",
    borderRadius: 10,
    padding: "16px",
    margin: theme.spacing(2),
  },
  button: {
    height: "45px",
    width: "365px",
    color: "#ffffff",
    textTransform: "none",
    borderRadius: "20px",
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: "16px",
  },
  edit: {
    backgroundColor: "#EF5DA8",
    "&:hover": { backgroundColor: "#EF5DA8", color: "#ffffff" },
  },
  re: {
    backgroundColor: "#3A3A3D",
    "&:hover": { backgroundColor: "#3A3A3D", color: "#ffffff" },
  },
}));

const TextBox = withStyles(() => ({
  root: {
    padding: "16px",
  },
}))(Box);

const Text = withStyles(() => ({
  root: {
    marginBottom: "16px",
  },
}))(Box);

const BorderBox = withStyles(() => ({
  root: {
    border: "2px solid #d3d3d3",
    borderRadius: 10,
    padding: "16px",
    marginBottom: "16px",
  },
}))(Box);

const TextPinkBox = withStyles(() => ({
  root: {
    fontWeight: 600,
    color: "#CF658D",
    marginBottom: "8px",
    textAlign: "center",
    fontSize: "12px",
  },
}))(Typography);

const TextBlackBox = withStyles(() => ({
  root: {
    fontWeight: 600,
    textAlign: "center",
    color: "#3A3A3D",
    fontSize: "14px",
  },
}))(Typography);

const TextBlackTitle = withStyles(() => ({
  root: {
    marginBottom: "8px",
    color: "#3A3A3D",
  },
}))(Typography);

const TextBlack = withStyles(() => ({
  root: {
    fontWeight: 400,
    fontSize: "18px",
    color: "#3A3A3D",
    marginLeft: "8px",
  },
}))(Typography);

const PatientFormDetail = ({ data }: { data: DataProps }): JSX.Element => {
  const classes = useStyles();
  const {
    name,
    patientID,
    gender,
    age,
    arrivalDate,
    totalTestsDone,
    timeCourse,
    onsetDate,
    duration,
    symptoms,
    underlyingDiseases,
    systolicBP,
    diastolicBP,
    heartRate,
    heartRateText,
    EKG12Leads,
    NIHSS,
  } = data;

  return (
    <Paper elevation={0} className={classes.root}>
      <Typography className={classes.name} variant="h5">
        {name}
      </Typography>
      <Box className={classes.box}>
        <Toolbar>
          <TextBox>
            <TextPinkBox variant="subtitle1">Patient ID</TextPinkBox>
            <TextBlackBox variant="h6">{patientID}</TextBlackBox>
          </TextBox>
          <TextBox>
            <TextPinkBox variant="subtitle1">Gender</TextPinkBox>
            <TextBlackBox variant="h6">{gender}</TextBlackBox>
          </TextBox>
          <TextBox>
            <TextPinkBox variant="subtitle1">Age</TextPinkBox>
            <TextBlackBox>{age} years</TextBlackBox>
          </TextBox>
        </Toolbar>
      </Box>
      <Grid container alignItems="stretch" spacing={2}>
        <Grid item xs={7}>
          <BorderBox>
            <TextPinkBox variant="body2">Arrival</TextPinkBox>
            <TextBlackBox variant="subtitle1">{arrivalDate}</TextBlackBox>
          </BorderBox>
        </Grid>
        <Grid item xs={5}>
          <BorderBox>
            <TextPinkBox variant="body2">Total Tests Done</TextPinkBox>
            <TextBlackBox variant="subtitle1">{totalTestsDone}</TextBlackBox>
          </BorderBox>
        </Grid>
      </Grid>
      <Text>
        <TextBlackTitle variant="h5">Chief Complaint</TextBlackTitle>
        <TextBlackTitle variant="h6">Time Course</TextBlackTitle>
        <TextBlack>* {timeCourse}</TextBlack>
        <TextBlack style={{ display: "inline" }}>{onsetDate} </TextBlack>
        <Typography
          style={{
            fontSize: "18px",
            fontWeight: 400,
            color: "#CF658D",
            display: "inline",
          }}
        >
          ({duration})
        </Typography>
      </Text>
      <Text>
        <TextBlackTitle variant="h6">Symptoms</TextBlackTitle>
        {symptoms.map((symptoms) => (
          <TextBlack>- {symptoms}</TextBlack>
        ))}
      </Text>
      <Text>
        <TextBlackTitle variant="h5">Underlying Diseases</TextBlackTitle>
        {underlyingDiseases.map((underlyingDiseases) => (
          <TextBlack>- {underlyingDiseases}</TextBlack>
        ))}
      </Text>
      <Text>
        <TextBlackTitle variant="h5">Cardio Information</TextBlackTitle>
        <TextBlack>Systolic BP (mmHg): {systolicBP}</TextBlack>
        <TextBlack>Diastolic BP (mmHg): {diastolicBP}</TextBlack>
        <TextBlack>
          Heart rate: {heartRate} [{heartRateText}]
        </TextBlack>
      </Text>
      <Text>
        <TextBlackTitle variant="h5">EKG 12 Leads</TextBlackTitle>
        <TextBlack>{EKG12Leads}</TextBlack>
      </Text>
      <BorderBox style={{ marginBottom: "48px" }}>
        <TextPinkBox variant="h5" style={{ fontSize: "24px" }}>
          NIHSS
        </TextPinkBox>
        <TextBlackBox variant="h3" style={{ fontSize: "24px" }}>
          {NIHSS}
        </TextBlackBox>
      </BorderBox>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Button className={`${classes.button} ${classes.edit}`}>Edit</Button>
        <Button className={`${classes.button} ${classes.re}`}>
          Re-Evaluate
        </Button>
      </Box>
    </Paper>
  );
};

export default PatientFormDetail;
