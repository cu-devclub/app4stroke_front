import "date-fns";
import React, { useState } from "react";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import DateFnsUtils from "@date-io/date-fns";
import intervalToDuration from "date-fns/intervalToDuration";

const useStyle = makeStyles(() =>
  createStyles({
    textTitle: {
      marginBottom: "16px",
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
      width: "176px",
      height: "40px",
      borderRadius: "20px",
      padding: "7px",
      textAlign: "center",
      marginTop: "18px",
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
    patientTextField: {
      width: "100%",
    },
  })
);

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

const ArrivalOnset: React.FC = () => {
  const classes = useStyle();
  //* Arrival
  const [arrivalDate, setArrivalDate] = React.useState<Date | null>(null);
  console.log(arrivalDate);

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
  const [showClearPicker, setShowPickerClear] = useState(false);
  const [clearDate, setClearDate] = React.useState<Date | null>(null);
  //+ unknown onset
  const [showUnknownPicker, setShowPickerUnknown] = useState(false);
  //- last seen
  const [lastDate, setLastDate] = React.useState<Date | null>(null);
  //- first seen
  const [firstDate, setFirstDate] = React.useState<Date | null>(null);
  // duration
  const ArrivalClearDiff =
    arrivalDate && clearDate !== null
      ? intervalToDuration({
          start: arrivalDate,
          end: clearDate,
        })
      : "";
  const ArrivalLastDiff =
    arrivalDate && lastDate !== null
      ? intervalToDuration({
          start: arrivalDate,
          end: lastDate,
        })
      : "";
  const ArrivalFirstDiff =
    arrivalDate && firstDate !== null
      ? intervalToDuration({
          start: arrivalDate,
          end: firstDate,
        })
      : "";
  return (
    <Box>
      {/* Arrival Time */}
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
                value={arrivalDate}
                autoOk={true}
                onChange={(date: MaterialUiPickersDate) => setArrivalDate(date)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
            <Grid item>
              <KeyboardTimePicker
                variant="inline"
                label="Arrival Time"
                value={arrivalDate}
                autoOk={true}
                onChange={(date: MaterialUiPickersDate) => setArrivalDate(date)}
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
                      value={clearDate}
                      autoOk={true}
                      onChange={(date: MaterialUiPickersDate) => {
                        setClearDate(date);
                      }}
                      KeyboardButtonProps={{
                        "aria-label": "change time",
                      }}
                      className={classes.addMarginTop}
                    />
                  </Grid>
                  <Grid item>
                    <Typography>Duration</Typography>
                    <Box
                      className={classes.boxDuration}
                      style={{
                        backgroundColor: `${
                          ArrivalClearDiff !== "" ? "#6ED0BB" : "#C4C4C4"
                        }`,
                      }}
                    >
                      {ArrivalClearDiff !== "" ? (
                        <Typography
                          style={{
                            color: `${
                              ArrivalClearDiff !== "" ? "#FFFFFF" : "#000000"
                            }`,
                          }}
                        >
                          {ArrivalClearDiff.days} : {ArrivalClearDiff.hours} :{" "}
                          {ArrivalClearDiff.minutes}
                        </Typography>
                      ) : (
                        "dd:hh:mm"
                      )}
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
                      value={lastDate}
                      autoOk={true}
                      onChange={(date: MaterialUiPickersDate) =>
                        setLastDate(date)
                      }
                      KeyboardButtonProps={{
                        "aria-label": "change time",
                      }}
                      className={classes.addMarginTop}
                    />
                  </Grid>
                  <Grid item>
                    <Typography>Duration</Typography>
                    <Box
                      className={classes.boxDuration}
                      style={{
                        backgroundColor: `${
                          ArrivalLastDiff !== "" ? "#6ED0BB" : "#C4C4C4"
                        }`,
                      }}
                    >
                      {ArrivalLastDiff !== "" ? (
                        <Typography
                          style={{
                            color: `${
                              ArrivalLastDiff !== "" ? "#FFFFFF" : "#000000"
                            }`,
                          }}
                        >
                          {ArrivalLastDiff.days} : {ArrivalLastDiff.hours} :{" "}
                          {ArrivalLastDiff.minutes}
                        </Typography>
                      ) : (
                        "dd:hh:mm"
                      )}
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
                      value={firstDate}
                      autoOk={true}
                      onChange={(date: MaterialUiPickersDate) =>
                        setFirstDate(date)
                      }
                      KeyboardButtonProps={{
                        "aria-label": "change time",
                      }}
                      className={classes.addMarginTop}
                    />
                  </Grid>
                  <Grid item>
                    <Typography>Duration</Typography>
                    <Box
                      className={classes.boxDuration}
                      style={{
                        backgroundColor: `${
                          ArrivalFirstDiff !== "" ? "#6ED0BB" : "#C4C4C4"
                        }`,
                      }}
                    >
                      {ArrivalFirstDiff !== "" ? (
                        <Typography
                          style={{
                            color: `${
                              ArrivalFirstDiff !== "" ? "#FFFFFF" : "#000000"
                            }`,
                          }}
                        >
                          {ArrivalFirstDiff.days} : {ArrivalFirstDiff.hours} :{" "}
                          {ArrivalFirstDiff.minutes}
                        </Typography>
                      ) : (
                        "dd:hh:mm"
                      )}
                    </Box>
                  </Grid>
                </MuiPickersUtilsProvider>
              </Grid>
            </Box>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

export default ArrivalOnset;
