import "date-fns";
import React, { useState } from "react";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { IoMaleOutline } from "react-icons/io5";
import { IoFemaleOutline } from "react-icons/io5";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import differenceInDays from "date-fns/differenceInDays";
import differenceInHours from "date-fns/differenceInHours";
import differenceInMinutes from "date-fns/differenceInMinutes";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

const useStyle = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      marginTop: "0",
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
    boxOnsetPicker: {
      marginTop: "70px",
    },
    boxDuration: {
      backgroundColor: "#C4C4C4",
      width: "176px",
      height: "40px",
      borderRadius: "20px",
      padding: "7px",
      textAlign: "center",
      marginTop: "18px",
    },
    boxUpload: {
      marginLeft: "32px",
      marginBottom: "65px",
    },
    addMarginTop: {
      marginTop: "34px",
    },
    addMarginBottom: {
      marginBottom: "10px",
    },
    button: {
      "&.Mui-selected": {
        backgroundColor: "#EF5DA8",
        color: "#FFFFFF",
        pointerEvents: "none",
      },
    },
    buttonUpload: {
      textTransform: "none",
      color: "#FFFFFF",
      backgroundColor: "#3A3A3D",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      borderRadius: "20px",
      width: "170px",
      height: "40px",
    },
    maleIcon: {
      color: "#5D5FEF",
      fontSize: "75px",
    },
    femaleIcon: {
      color: "#FF4181",
      fontSize: "75px",
    },
    patientTextField: {
      width: "100%",
    },
    clearTextField: {
      width: "100%",
    },
  })
);

const GenderStyledToggleButtonGroup = withStyles(() => ({
  grouped: {
    marginBottom: "8px",
    marginRight: "24px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    width: "150px",
    height: "95px",
    backgroundColor: "#FFFFFF",
    border: "none",
    "&:not(:first-child)": {
      borderRadius: "20px",
    },
    "&:first-child": {
      borderRadius: "20px",
    },
  },
}))(ToggleButtonGroup);

const OnsetStyledToggleButtonGroup = withStyles(() => ({
  grouped: {
    textTransform: "none",
    marginRight: "24px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    width: "220px",
    height: "80px",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    border: "none",
    "&:not(:first-child)": {
      borderRadius: "20px",
    },
    "&:first-child": {
      borderRadius: "20px",
    },
  },
}))(ToggleButtonGroup);

//optimize: React.FC
const PatientInformationSection: React.FC = () => {
  const classes = useStyle();

  //* Gender
  // button
  const [gender, setGender] = React.useState<string | null>("");
  const handleGender = (
    event: React.MouseEvent<HTMLElement>,
    newGender: string | null
  ) => {
    setGender(newGender);
  };
  // icon
  const [isMaleWhite, setIsMaleWhite] = React.useState(false);
  const [isFemaleWhite, setIsFemaleWhite] = React.useState(false);

  //* Arrival
  const [arrivalDate, setArrivalDate] = React.useState<Date>(new Date());
  const [arrivalTime, setArrivalTime] = React.useState<Date | null>(new Date());
  const handleArrivalTimeChange = (time: Date | null) => {
    setArrivalTime(time);
  };

  //* Onset
  // toggle button
  const [onset, setOnset] = React.useState<string | null>("");
  const handleOnset = (
    event: React.MouseEvent<HTMLElement>,
    newOnset: string | null
  ) => {
    setOnset(newOnset);
  };
  //+ clear onset
  // picker
  const [showClearPicker, setShowPickerClear] = useState(false);
  const [clearDate, setClearDate] = React.useState<Date>(new Date());
  const [clearTime, setClearTime] = React.useState<Date | null>(new Date());
  const handleClearTimeChange = (time: Date | null) => {
    setClearTime(time);
  };
  //+ unknown onset
  // show picker
  const [showUnknownPicker, setShowPickerUnknown] = useState(false);
  //- last seen
  // picker
  const [lastDate, setLastDate] = React.useState<Date>(new Date());

  const [lastTime, setLastTime] = React.useState<Date | null>(new Date());
  const handleLastTimeChange = (time: Date | null) => {
    setLastTime(time);
  };
  //- first seen
  // picker
  const [firstDate, setFirstDate] = React.useState<Date>(new Date());
  const [firstTime, setFirstTime] = React.useState<Date | null>(new Date());
  const handleFirstTimeChange = (time: Date | null) => {
    setFirstTime(time);
  };

  //* Duration
  const arrivalClearDiff = differenceInDays(arrivalDate, clearDate);
  console.log("arrival - clear : " + arrivalClearDiff);
  const arrivalLastSeenDiff = differenceInDays(arrivalDate, lastDate);
  console.log("arrival - last seen : " + arrivalLastSeenDiff);
  const arrivalFirstSeenDiff = differenceInDays(arrivalDate, firstDate);
  console.log("arrival - first seen : " + arrivalFirstSeenDiff);

  return (
    <Box className={classes.root}>
      {/* Patient Information */}
      <Box className={classes.boxPatient}>
        <Grid container spacing={6}>
          <Grid item xs={3}>
            <TextField
              label="Enter patient ID"
              className={classes.patientTextField}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Enter age" className={classes.patientTextField} />
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item xs={3}>
            <TextField
              label="Enter first name"
              className={classes.patientTextField}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Enter last name"
              className={classes.patientTextField}
            />
          </Grid>
        </Grid>
      </Box>
      {/* Gender */}
      <Box className={classes.boxGender}>
        <Box className={classes.textTitle}>
          <Typography variant="h4">Gender</Typography>
        </Box>
        <Grid container spacing={2}>
          <Box>
            <GenderStyledToggleButtonGroup
              value={gender}
              exclusive
              onChange={handleGender}
              onClick={() => {
                setIsMaleWhite(true);
                setIsFemaleWhite(false);
              }}
            >
              <ToggleButton value="male" className={classes.button}>
                <Box display="flex">
                  <IoMaleOutline
                    color={isMaleWhite ? "white" : "#5D5FEF"}
                    className={classes.maleIcon}
                  />
                </Box>
              </ToggleButton>
            </GenderStyledToggleButtonGroup>
            <Box textAlign="center">
              <Typography variant="body1" margin-bottom="64px">
                Male
              </Typography>
            </Box>
          </Box>
          <Box>
            <GenderStyledToggleButtonGroup
              value={gender}
              exclusive
              onChange={handleGender}
              onClick={() => {
                setIsMaleWhite(false);
                setIsFemaleWhite(true);
              }}
            >
              <ToggleButton value="female" className={classes.button}>
                <Box display="flex">
                  <IoFemaleOutline
                    color={isFemaleWhite ? "white" : "#FF4181"}
                    className={classes.femaleIcon}
                  />
                </Box>
              </ToggleButton>
            </GenderStyledToggleButtonGroup>
            <Box textAlign="center">
              <Typography variant="body1">Female</Typography>
            </Box>
          </Box>
        </Grid>
      </Box>
      {/* Arrival Time */}
      <Box className={classes.boxPicker}>
        <Box className={classes.textTitle}>
          <Typography variant="h4">Arrival Time</Typography>
        </Box>
        <Grid container spacing={7}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item>
              {/* fix */}
              <KeyboardDatePicker
                variant="inline"
                format="dd/MM/yyyy"
                label="Arrival Date"
                value={arrivalDate}
                autoOk={true}
                onChange={(date: any) => setArrivalDate(date)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
            <Grid item>
              <KeyboardTimePicker
                variant="inline"
                label="Arrival Time"
                value={arrivalTime}
                onChange={handleArrivalTimeChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
      </Box>
      {/* Onset */}
      <Box className={classes.boxOnset}>
        <Box className={classes.textTitle}>
          <Typography variant="h4">Onset</Typography>
        </Box>
        <Grid container spacing={2}>
          <Box>
            <OnsetStyledToggleButtonGroup
              value={onset}
              exclusive
              onChange={handleOnset}
            >
              <ToggleButton
                value="clearOnset"
                className={classes.button}
                onClick={() => {
                  setShowPickerClear(true);
                  setShowPickerUnknown(false);
                }}
              >
                <Box>
                  <Typography variant="subtitle1">Clear onset</Typography>
                </Box>
              </ToggleButton>
            </OnsetStyledToggleButtonGroup>
          </Box>
          <Box>
            <OnsetStyledToggleButtonGroup
              value={onset}
              exclusive
              onChange={handleOnset}
            >
              <ToggleButton
                value="unknownOnset"
                className={classes.button}
                onClick={() => {
                  setShowPickerClear(false);
                  setShowPickerUnknown(true);
                }}
              >
                <Box>
                  <Typography variant="subtitle1">Unknown onset</Typography>
                </Box>
              </ToggleButton>
            </OnsetStyledToggleButtonGroup>
          </Box>
        </Grid>
        <Box>
          {showClearPicker ? (
            <Box className={classes.boxOnsetPicker}>
              <Grid container spacing={7}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid item>
                    <KeyboardDatePicker
                      variant="inline"
                      format="dd/MM/yyyy"
                      label="Select date"
                      autoOk={true}
                      value={clearDate}
                      onChange={(date: any) => setClearDate(date)}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                      className={classes.addMarginTop}
                    />
                  </Grid>
                  <Grid item>
                    <KeyboardTimePicker
                      variant="inline"
                      label="Select time"
                      value={clearTime}
                      onChange={handleClearTimeChange}
                      KeyboardButtonProps={{
                        "aria-label": "change time",
                      }}
                      className={classes.addMarginTop}
                    />
                  </Grid>
                  <Grid item>
                    <Typography>Duration</Typography>
                    <Box className={classes.boxDuration}>
                      <Typography>dd:hh:mm</Typography>
                    </Box>
                  </Grid>
                </MuiPickersUtilsProvider>
              </Grid>
            </Box>
          ) : null}
        </Box>
        <Box>
          {showUnknownPicker ? (
            <Box className={classes.boxOnsetPicker}>
              <Grid container spacing={7}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid item>
                    <Typography className={classes.addMarginBottom}>
                      Last seen normal
                    </Typography>
                    <KeyboardDatePicker
                      variant="inline"
                      format="dd/MM/yyyy"
                      label="Select date"
                      value={lastDate}
                      autoOk={true}
                      onChange={(date: any) => setLastDate(date)}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <KeyboardTimePicker
                      variant="inline"
                      label="Select time"
                      value={lastTime}
                      onChange={handleLastTimeChange}
                      KeyboardButtonProps={{
                        "aria-label": "change time",
                      }}
                      className={classes.addMarginTop}
                    />
                  </Grid>
                  <Grid item>
                    <Typography>Duration</Typography>
                    <Box className={classes.boxDuration}>
                      <Typography>dd:hh:mm</Typography>
                    </Box>
                  </Grid>
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid container spacing={7}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid item>
                    <Typography className={classes.addMarginBottom}>
                      First seen abnormal
                    </Typography>
                    <KeyboardDatePicker
                      variant="inline"
                      format="dd/MM/yyyy"
                      label="Select date"
                      value={firstDate}
                      autoOk={true}
                      onChange={(date: any) => setFirstDate(date)}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <KeyboardTimePicker
                      variant="inline"
                      label="Select time"
                      value={firstTime}
                      onChange={handleFirstTimeChange}
                      KeyboardButtonProps={{
                        "aria-label": "change time",
                      }}
                      className={classes.addMarginTop}
                    />
                  </Grid>
                  <Grid item>
                    <Typography>Duration</Typography>
                    <Box className={classes.boxDuration}>
                      <Typography>dd:hh:mm</Typography>
                    </Box>
                  </Grid>
                </MuiPickersUtilsProvider>
              </Grid>
            </Box>
          ) : null}
        </Box>
      </Box>
      {/* Upload CT Scan */}
      <Box className={classes.boxUpload}>
        <Box className={classes.textTitle}>
          <Typography variant="h4">Upload CT Scan</Typography>
        </Box>
        <Button
          variant="contained"
          component="label"
          className={classes.buttonUpload}
        >
          Upload
          <input type="file" hidden />
        </Button>
      </Box>
    </Box>
  );
};

export default PatientInformationSection;
