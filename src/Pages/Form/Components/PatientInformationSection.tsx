import "date-fns";
import React from "react";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
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
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const useStyle = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    textField: {
      width: "100%",
    },
    textTitle: {
      marginBottom: "16px",
    },
    //* box
    boxPatient: {
      marginLeft: "32px",
      marginBottom: "40px",
    },
    boxGender: {
      marginLeft: "32px",
      marginBottom: "40px",
    },
    boxPicker: {
      marginLeft: "32px",
      marginBottom: "40px",
    },
    boxOnset: {
      marginLeft: "32px",
      marginBottom: "40px",
    },
    boxUpload: {
      marginLeft: "32px",
      marginBottom: "40px",
    },
    //* button
    button: {
      "&.Mui-selected": {
        backgroundColor: "#EF5DA8",
        color: "#FFF",
        pointerEvents: "none",
      },
    },
    buttonUpload: {
      textTransform: "none",
      marginTop: "16px",
      color: "#FFF",
      backgroundColor: "#3A3A3D",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      borderRadius: "20px",
      width: "170px",
      height: "40px",
    },
  })
);

const GenderStyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    marginBottom: "8px",
    marginRight: "24px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    width: "150px",
    height: "95px",
    backgroundColor: "#FFF",
    border: "none",
    //! "&:not(:first-child)": {
    //   borderRadius: "20px",
    // },
    // "&:first-child": {
    //   borderRadius: "20px",
    // },
  },
}))(ToggleButtonGroup);

const OnsetStyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    textTransform: "none",
    margin: theme.spacing(3),
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    width: "220px",
    height: "80px",
    backgroundColor: "#FFF",
    color: "#000",
    border: "none",
    "&:not(:first-child)": {
      borderRadius: "20px",
    },
    "&:first-child": {
      borderRadius: "20px",
    },
  },
}))(ToggleButtonGroup);

const PatientInformationSection: React.FC = () => {
  const classes = useStyle();

  //* Gender Button
  const [gender, setGender] = React.useState<string | null>("left");
  const handleGender = (
    event: React.MouseEvent<HTMLElement>,
    newGender: string | null
  ) => {
    setGender(newGender);
  };

  //* Onset Button
  const [onset, setOnset] = React.useState<string | null>("left");
  const handleOnset = (
    event: React.MouseEvent<HTMLElement>,
    newOnset: string | null
  ) => {
    setOnset(newOnset);
  };

  //* Date Picker
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  //* Time Picker
  const [selectedTime, setSelectedTime] = React.useState<Date | null>(
    new Date()
  );
  const handleTimeChange = (time: Date | null) => {
    setSelectedTime(time);
  };

  return (
    <Box className={classes.root}>
      {/* Patient - Text Field */}
      <Box className={classes.boxPatient}>
        <Grid container spacing={6}>
          <Grid item xs={3}>
            <TextField label="Enter patient ID" className={classes.textField} />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Enter age" className={classes.textField} />
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item xs={3}>
            <TextField label="Enter first name" className={classes.textField} />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Enter last name" className={classes.textField} />
          </Grid>
        </Grid>
      </Box>
      {/* Gender - Button */}
      <Box className={classes.boxGender}>
        <Box className={classes.textTitle}>
          <Typography variant="h4">Gender</Typography>
        </Box>
        <Grid container spacing={2}>
          {/* MALE */}
          <Box>
            <GenderStyledToggleButtonGroup
              value={gender}
              exclusive
              onChange={handleGender}
            >
              <ToggleButton value="male" className={classes.button}>
                <Box display="flex">
                  <img src={MaleIcon} alt="male icon" />
                </Box>
              </ToggleButton>
            </GenderStyledToggleButtonGroup>
            <Box textAlign="center">
              <Typography variant="body1" margin-bottom="64px">
                Male
              </Typography>
            </Box>
          </Box>
          {/* FEMALE */}
          <Box>
            <GenderStyledToggleButtonGroup
              value={gender}
              exclusive
              onChange={handleGender}
            >
              <ToggleButton value="female" className={classes.button}>
                <Box display="flex">
                  <img src={FemaleIcon} alt="female icon" />
                </Box>
              </ToggleButton>
            </GenderStyledToggleButtonGroup>
            <Box textAlign="center">
              <Typography variant="body1">Female</Typography>
            </Box>
          </Box>
        </Grid>
      </Box>
      {/* Arrival Time - Date & Time Picker*/}
      <Box className={classes.boxPicker}>
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
              />
            </Grid>
            <Grid item>
              <KeyboardTimePicker
                variant="inline"
                label="Arrival Time"
                value={selectedTime}
                onChange={handleTimeChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
      </Box>
      {/* Onset - Button */}
      <Box className={classes.boxOnset}>
        <Box className={classes.textTitle}>
          <Typography variant="h4">Onset</Typography>
        </Box>
        <Grid container spacing={3}>
          <OnsetStyledToggleButtonGroup
            value={onset}
            exclusive
            onChange={handleOnset}
          >
            <ToggleButton value="clearOnset" className={classes.button}>
              <Box>
                <Typography variant="subtitle1">Clear onset</Typography>
              </Box>
            </ToggleButton>
            <ToggleButton value="unknownOnset" className={classes.button}>
              <Box>
                <Typography variant="subtitle1">Unknown onset</Typography>
              </Box>
            </ToggleButton>
          </OnsetStyledToggleButtonGroup>
        </Grid>
      </Box>
      {/* Upload CT Scan - Button*/}
      <Box className={classes.boxUpload}>
        <Box className={classes.textTitle}>
          <Typography variant="h4">Upload CT Scan</Typography>
        </Box>
        <Button variant="contained" className={classes.buttonUpload}>
          <Typography variant="subtitle1">Upload</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default PatientInformationSection;
