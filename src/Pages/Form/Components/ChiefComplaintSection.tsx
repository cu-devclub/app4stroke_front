import React, { ChangeEvent, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import {
  createStyles,
  makeStyles,
  createTheme,
  Theme,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      padding: "100px",
      paddingTop: "5px",
      marginBottom: "32px",
    },
    text: {
      fontSize: "24px",
    },
  })
);
const PinkCheckbox = withStyles({
  root: {
    color: "#DFE1E6",
    "&$checked": {
      color: "#EF5DA8",
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      contrastText: "#3A3A3D",
    },
    secondary: {
      main: "#EF5DA8",
      contrastText: "#fff",
    },
  },
});
const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(3),
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    right: "20px",
    width: "180px",
    height: "81px",
    backgroundColor: "#FFFFFF",
    color: "#3A3A3D",
    "&:not(:first-child)": {
      borderRadius: "20px",
    },
    "&:first-child": {
      borderRadius: "20px",
    },
  },
}))(ToggleButtonGroup);

const ChiefComplaintSection: React.FC = () => {
  const classes = useStyle();
  //Time Course Button
  const [timeCourse, setTimeCourse] = React.useState("wakeUp");
  const handleTimeCourse = (
    event: React.MouseEvent<HTMLElement>,
    newTimeCourse: string
  ) => {
    setTimeCourse(newTimeCourse);
  };

  //checkbox
  const [symptomsCheckbox, setSymptomsCheckbox] = React.useState({});
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSymptomsCheckbox({
      ...symptomsCheckbox,
      [event.target.name]: event.target.checked,
    });
  };
  
  return (
    <Box className={classes.root}>
      <ThemeProvider theme={theme}>
        {/* Time Course */}
        <Box>
          <Typography className={classes.text} variant="body1">
            Time Course
          </Typography>
          <Box>
            <StyledToggleButtonGroup
              size="large"
              value={timeCourse}
              exclusive
              onChange={handleTimeCourse}
              aria-label="Time course"
            >
              <ToggleButton value="wakeUP" aria-label="Wake-Up">
                <Typography>Wake-Up</Typography>
              </ToggleButton>
              <ToggleButton value="peakAtOnset" aria-label="Peak at Onset">
                <Typography>Peak at Onset</Typography>
              </ToggleButton>
              <ToggleButton value="Gradual" aria-label="Gradual">
                <Typography>Gradual</Typography>
              </ToggleButton>
              <ToggleButton
                value="rapidlyImprove"
                aria-label=" Rapidly Improve"
              >
                <Typography>Rapidly Improve</Typography>
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Box>
        </Box>
      </ThemeProvider>
      {/* Symptoms */}
      <Box>
        <Typography className={classes.text} variant="body1">
          Symptoms
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <PinkCheckbox onChange={handleChange} name="alterationOfConsciousness"/>
            }
            label="Alteration of consciousness"
          />
          <FormControlLabel
            control={
              <PinkCheckbox onChange={handleChange} name="facialWeakness" />
            }
            label="Facial weakness"
          />
          <FormControlLabel
            control={
              <PinkCheckbox onChange={handleChange} name="Hemiparesis" />
            }
            label="Hemiparesis"
          />
          <FormControlLabel
            control={
              <PinkCheckbox onChange={handleChange} name="Hemiparesthesia" />
            }
            label="Hemiparesthesia"
          />
          <FormControlLabel
            control={<PinkCheckbox onChange={handleChange} name="Dysarthria" />}
            label="Dysarthria"
          />
          <FormControlLabel
            control={
              <PinkCheckbox onChange={handleChange} name="Dysphasia/aphasia" />
            }
            label="Dysphasia/aphasia"
          />
          <FormControlLabel
            control={<PinkCheckbox onChange={handleChange} name="Ataxia" />}
            label="Ataxia"
          />
          <FormControlLabel
            control={<PinkCheckbox onChange={handleChange} name="Vertigo" />}
            label="Vertigo"
          />
          <FormControlLabel
            control={
              <PinkCheckbox onChange={handleChange} name="visualProblem" />
            }
            label="Visual problem"
          />
          <FormControlLabel
            control={<PinkCheckbox onChange={handleChange} name="Others" />}
            label={<TextField label="Others" />}
          />
        </FormGroup>
      </Box>
    </Box>
  );
};

export default ChiefComplaintSection;
