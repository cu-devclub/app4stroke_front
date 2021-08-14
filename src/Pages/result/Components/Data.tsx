import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Box, Paper, Toolbar, withStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import BrainBackground from "../../../Assets/BrainBackground.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${BrainBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "400px 300px",
    marginBottom: "55px",
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
  editButton: {
    height: "45px",
    width: "365px",
    backgroundColor: "#EF5DA8",
    color: "#ffffff",
    textTransform: "none",
    borderRadius: "20px",
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: "16px",
    "&:hover": { backgroundColor: "#EF5DA8", color: "#ffffff" },
  },
  reButton: {
    height: "45px",
    width: "365px",
    backgroundColor: "#3A3A3D",
    color: "#ffffff",
    textTransform: "none",
    borderRadius: "20px",
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: "16px",
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
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
  },
}))(Typography);

const TextBlackBox = withStyles(() => ({
  root: {
    fontWeight: 600,
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
    color: "#3A3A3D",
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

interface Props {
  name: string;
  patientID: string;
  gender: string;
  age: number;
  arrivalDate: string;
  totalTestsDone: number;
  timeCourse: string;
  onsetDate: string;
  duration: string;
  symptoms: string[];
  underlyingDiseases: string[];
  systolicBP: number;
  diastolicBP: number;
  heartRate: number;
  heartRateText: string;
  EKG12Leads: string;
  NIHSS: number;
}

const Data = (props: Props) => {
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
  } = props;

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
            <TextBlackBox variant="h6">{age}years</TextBlackBox>
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
        <TextPinkBox variant="h5">NIHSS</TextPinkBox>
        <TextBlackBox variant="h3">{NIHSS}</TextBlackBox>
      </BorderBox>
      <Button className={classes.editButton}>Edit</Button>
      <Button className={classes.reButton}>Re-Evaluate</Button>
    </Paper>
  );
};

export default Data;
