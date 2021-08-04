import "date-fns";
import React, { useState } from "react";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import intervalToDuration from "date-fns/intervalToDuration";
import Controls from "./Control/Control";
import { ErrorMessage } from "formik";

const useStyle = makeStyles(() =>
  createStyles({
    textTitle: {
      marginBottom: "16px",
    },
    boxArrival: {
      marginLeft: "32px",
      marginBottom: "40px",
    },
    boxOnset: {
      marginLeft: "32px",
      marginBottom: "40px",
    },
    boxDuration: {
      width: "176px",
      height: "40px",
      borderRadius: "20px",
      padding: "7px",
      textAlign: "center",
      marginTop: "18px",
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
    errorMessage: {
      color: "#FF0000",
      fontSize: "16px",
      marginBottom: "20px",
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

interface PatientProps {
  onset: string;
}

interface Props {
  value: PatientProps;
  name: string;
  onChange: (field: string, value: any, shouldValidate?: boolean) => void;
}

const ArrivalOnset = (props: Props) => {
  const classes = useStyle();
  const { value, name, onChange } = props;

  //* Arrival
  const [arrivalDate, setArrivalDate] = React.useState<Date | null>(null);

  //* Onset
  //+ clear onset
  const [showClearPicker, setShowPickerClear] = useState(false);
  const [clearDate, setClearDate] = React.useState<Date | null>(null);
  //+ unknown onset
  const [showUnknownPicker, setShowPickerUnknown] = useState(false);
  //- last seen
  const [lastDate, setLastDate] = React.useState<Date | null>(null);
  //- first seen
  const [firstDate, setFirstDate] = React.useState<Date | null>(null);

  //* Onset
  // toggle button
  const handleOnset = (
    event: React.MouseEvent<HTMLElement>,
    newOnset: string
  ) => {
    onChange(name, { ...value, onset: newOnset });
  };

  // duration
  const ArrivalClearDiff =
    arrivalDate && clearDate !== null
      ? intervalToDuration({
          start: arrivalDate,
          end: clearDate,
        })
      : "";
  const showDayDigitACDiff =
    ArrivalClearDiff !== ""
      ? ArrivalClearDiff.days?.toLocaleString(undefined, {
          minimumIntegerDigits: 2,
        })
      : "";
  const showHourDigitACDiff =
    ArrivalClearDiff !== ""
      ? ArrivalClearDiff.hours?.toLocaleString(undefined, {
          minimumIntegerDigits: 2,
        })
      : "";
  const showMinuteDigitACDiff =
    ArrivalClearDiff !== ""
      ? ArrivalClearDiff.minutes?.toLocaleString(undefined, {
          minimumIntegerDigits: 2,
        })
      : "";

  const ArrivalLastDiff =
    arrivalDate && lastDate !== null
      ? intervalToDuration({
          start: arrivalDate,
          end: lastDate,
        })
      : "";
  const showDayDigitALDiff =
    ArrivalLastDiff !== ""
      ? ArrivalLastDiff.days?.toLocaleString(undefined, {
          minimumIntegerDigits: 2,
        })
      : "";
  const showHourDigitALDiff =
    ArrivalLastDiff !== ""
      ? ArrivalLastDiff.hours?.toLocaleString(undefined, {
          minimumIntegerDigits: 2,
        })
      : "";
  const showMinuteDigitALDiff =
    ArrivalLastDiff !== ""
      ? ArrivalLastDiff.minutes?.toLocaleString(undefined, {
          minimumIntegerDigits: 2,
        })
      : "";

  const ArrivalFirstDiff =
    arrivalDate && firstDate !== null
      ? intervalToDuration({
          start: arrivalDate,
          end: firstDate,
        })
      : "";
  const showDayDigitAFDiff =
    ArrivalFirstDiff !== ""
      ? ArrivalFirstDiff.days?.toLocaleString(undefined, {
          minimumIntegerDigits: 2,
        })
      : "";
  const showHourDigitAFDiff =
    ArrivalFirstDiff !== ""
      ? ArrivalFirstDiff.hours?.toLocaleString(undefined, {
          minimumIntegerDigits: 2,
        })
      : "";
  const showMinuteDigitAFDiff =
    ArrivalFirstDiff !== ""
      ? ArrivalFirstDiff.minutes?.toLocaleString(undefined, {
          minimumIntegerDigits: 2,
        })
      : "";

  return (
    <Box>
      {/* Arrival Time */}
      <Box className={classes.boxArrival}>
        <Box className={classes.textTitle}>
          <Typography variant="h4">Arrival Time</Typography>
        </Box>
        <Grid container spacing={7}>
          <Grid item>
            <Controls.DatePicker
              label="Arrival Date"
              value={arrivalDate}
              onChange={(date: MaterialUiPickersDate) => setArrivalDate(date)}
            />
          </Grid>
          <Grid item>
            <Controls.TimePicker
              label="Arrival Time"
              value={arrivalDate}
              onChange={(date: MaterialUiPickersDate) => setArrivalDate(date)}
            />
          </Grid>
        </Grid>
      </Box>
      {/* Onset */}
      <Box className={classes.boxOnset}>
        <Box className={classes.textTitle}>
          <Typography variant="h4">Onset</Typography>
          <ErrorMessage name={`${name}.onset`}>
            {(msg) => <Box className={classes.errorMessage}>{msg}</Box>}
          </ErrorMessage>
        </Box>
        <Grid container spacing={2}>
          <Box
            style={{
              marginBottom: `${
                showClearPicker && showUnknownPicker !== false ? "0px" : "40px"
              }`,
            }}
          >
            <OnsetStyledToggleButtonGroup
              value={value.onset}
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
              value={value.onset}
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
          {showClearPicker && (
            <Box>
              <Grid container spacing={8}>
                <Grid item>
                  <Typography className={classes.addMarginBottom}>
                    Clear onset date
                  </Typography>
                  <Controls.DatePicker
                    label="Select date"
                    value={clearDate}
                    onChange={(date: MaterialUiPickersDate) =>
                      setClearDate(date)
                    }
                  />
                </Grid>
                <Grid item>
                  <Typography className={classes.addMarginBottom}>
                    Clear onset time
                  </Typography>
                  <Controls.TimePicker
                    label="Select time"
                    value={clearDate}
                    onChange={(date: MaterialUiPickersDate) => {
                      setClearDate(date);
                    }}
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
                        {showDayDigitACDiff} : {showHourDigitACDiff} :{" "}
                        {showMinuteDigitACDiff}
                      </Typography>
                    ) : (
                      "dd:hh:mm"
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
        <Box>
          {showUnknownPicker && (
            <Box>
              <Grid container spacing={8}>
                <Grid item>
                  <Typography className={classes.addMarginBottom}>
                    Last seen normal date
                  </Typography>
                  <Controls.DatePicker
                    label="Select date"
                    value={lastDate}
                    onChange={(date: any) => setLastDate(date)}
                  />
                </Grid>
                <Grid item>
                  <Typography className={classes.addMarginBottom}>
                    Last seen normal time
                  </Typography>
                  <Controls.TimePicker
                    label="Select time"
                    value={lastDate}
                    onChange={(date: MaterialUiPickersDate) =>
                      setLastDate(date)
                    }
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
                        {showDayDigitALDiff} : {showHourDigitALDiff} :{" "}
                        {showMinuteDigitALDiff}
                      </Typography>
                    ) : (
                      "dd:hh:mm"
                    )}
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={8}>
                <Grid item>
                  <Typography className={classes.addMarginBottom}>
                    First seen abnormal date
                  </Typography>
                  <Controls.DatePicker
                    label="Select date"
                    value={firstDate}
                    onChange={(date: MaterialUiPickersDate) =>
                      setFirstDate(date)
                    }
                  />
                </Grid>
                <Grid item>
                  <Typography className={classes.addMarginBottom}>
                    First seen abnormal time
                  </Typography>
                  <Controls.TimePicker
                    label="Select time"
                    value={firstDate}
                    onChange={(date: MaterialUiPickersDate) =>
                      setFirstDate(date)
                    }
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
                        {showDayDigitAFDiff} : {showHourDigitAFDiff} :{" "}
                        {showMinuteDigitAFDiff}
                      </Typography>
                    ) : (
                      "dd:hh:mm"
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ArrivalOnset;
