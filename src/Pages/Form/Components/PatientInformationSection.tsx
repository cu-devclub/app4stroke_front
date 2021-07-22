import "date-fns";
import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MaleIcon from "../../../Assets/male.png";
import FemaleIcon from "../../../Assets/female.png";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyle = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      marginLeft: "32px",
    },
    textField: {
      width: "80%",
    },
    textTitle: {
      marginTop: "40px",
    },
    buttonGender: {
      marginTop: "16px",
      width: "150px",
      height: "95px",
      borderRadius: "20px",
      backgroundColor: "#fff",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    },
    textGender: {
      textAlign: "center",
      marginTop: "8px",
    },
    picker: {
      marginTop: "34px",
    },
    buttonOnset: {
      marginTop: "16px",
      textTransform: "none",
      width: "218px",
      height: "81px",
      borderRadius: "20px",
      backgroundColor: "#fff",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    },
    buttonUpload: {
      textTransform: "none",
      marginTop: "16px",
      color: "#fff",
      backgroundColor: "#3A3A3D",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      borderRadius: "20px",
      width: "168px",
      height: "40px",
    },
  })
);

const PatientInformationSection: React.FC = () => {
  const classes = useStyle();
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <Box className={classes.root}>
      {/* Patient - Text Field */}
      <Grid container spacing={6}>
        <Grid item xs={4}>
          <TextField label="Enter patient ID" className={classes.textField} />
        </Grid>
        <Grid item xs={4}>
          <TextField label="Enter age" className={classes.textField} />
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={4}>
          <TextField label="Enter first name" className={classes.textField} />
        </Grid>
        <Grid item xs={4}>
          <TextField label="Enter last name" className={classes.textField} />
        </Grid>
      </Grid>
      {/* Gender - Button */}
      <Box className={classes.textTitle}>
        <Typography variant="h4">Gender</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item>
          <Button variant="contained" className={classes.buttonGender}>
            <Box display="flex">
              <img src={MaleIcon} alt="male icon" />
            </Box>
          </Button>
          <Box className={classes.textGender}>
            <Typography variant="subtitle1">Male</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Button variant="contained" className={classes.buttonGender}>
            <Box display="flex">
              <img src={FemaleIcon} alt="female icon" />
            </Box>
          </Button>
          <Box className={classes.textGender}>
            <Typography variant="subtitle1">Male</Typography>
          </Box>
        </Grid>
      </Grid>
      {/* Arrival Time - Date & Time Picker*/}
      <Box className={classes.textTitle}>
        <Typography variant="h4">Arrival Time</Typography>
      </Box>
      <Grid container spacing={7}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid item>
            <KeyboardDatePicker
              variant="inline"
              format="dd/MM/yyyy"
              label="Arrival Date"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              className={classes.picker}
            />
          </Grid>
          <Grid item>
            <KeyboardTimePicker
              variant="inline"
              label="Arrival Time"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
              className={classes.picker}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </Grid>
      {/* Onset - Button */}
      <Box className={classes.textTitle}>
        <Typography variant="h4">Onset</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item>
          <Button variant="contained" className={classes.buttonOnset}>
            <Box display="flex">
              <Typography variant="subtitle1">Clear onset</Typography>
            </Box>
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" className={classes.buttonOnset}>
            <Box display="flex">
              <Typography variant="subtitle1">Unknown onset</Typography>
            </Box>
          </Button>
        </Grid>
      </Grid>
      {/* Upload CT Scan - Button*/}
      <Box className={classes.textTitle}>
        <Typography variant="h4">Upload CT Scan</Typography>
      </Box>
      <Button variant="contained" className={classes.buttonUpload}>
        <Typography variant="subtitle1">Upload</Typography>
      </Button>
    </Box>
  );
};

export default PatientInformationSection;
