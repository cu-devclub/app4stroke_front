import React, { ChangeEvent, useState } from "react";
import Typography from "@material-ui/core/Typography";
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
  withStyles,
} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      marginLeft: "40px",
      marginBottom: "32px",
    },
    buttonColor: {
      "&.Mui-selected": {
        backgroundColor: "#EF5DA8",
        color: "#FFFFFF",
        pointerEvents: "none",
      },
    },
    checkbox: {
      marginLeft: "32px",
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

const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(3),
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    marginLeft: "5px",
    width: "180px",
    height: "81px",
    backgroundColor: "#FFFFFF",
    color: "#3A3A3D",
    border: "none",
    textTransform: "none",
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
  const [timeCourse, setTimeCourse] = React.useState("");
  const handleTimeCourse = (
    event: React.MouseEvent<HTMLElement>,
    newTimeCourse: string
  ) => {
    setTimeCourse(newTimeCourse);
  };

  //checkbox
  const [symptomsCheckbox, setSymptomsCheckbox] = React.useState({
    AlterationOfConsciousness: false,
    FacialWeakness: false,
    Hemiparesis: false,
    Hemiparesthesia: false,
    Dysarthria: false,
    DysphasiaAphasia: false,
    Ataxia: false,
    Vertigo: false,
    VisualProblem: false,
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSymptomsCheckbox({
      ...symptomsCheckbox,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <Box className={classes.root}>
      {/* Time Course */}
      <Box>
        <Typography variant="h4">Time Course</Typography>
        <Box>
          <StyledToggleButtonGroup
            size="large"
            value={timeCourse}
            exclusive
            onChange={handleTimeCourse}
            aria-label="Time course"
          >
            <ToggleButton
              value="wakeUP"
              aria-label="Wake-Up"
              className={classes.buttonColor}
            >
              <Typography>Wake-Up</Typography>
            </ToggleButton>
            <ToggleButton
              value="peakAtOnset"
              aria-label="Peak at Onset"
              className={classes.buttonColor}
            >
              <Typography>Peak at Onset</Typography>
            </ToggleButton>
            <ToggleButton
              value="Gradual"
              aria-label="Gradual"
              className={classes.buttonColor}
            >
              <Typography>Gradual</Typography>
            </ToggleButton>
            <ToggleButton
              value="rapidlyImprove"
              aria-label=" Rapidly Improve"
              className={classes.buttonColor}
            >
              <Typography>Rapidly Improve</Typography>
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Box>
      </Box>

      {/* Symptoms */}
      <Box>
        <Typography variant="h4">Symptoms</Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <PinkCheckbox
                onChange={handleChange}
                name="AlterationOfConsciousness"
              />
            }
            label="Alteration of consciousness"
          />
          <FormControlLabel
            control={
              <PinkCheckbox
                onChange={handleChange}
                name="FacialWeakness"
                id="FacialWeakness"
              />
            }
            label="Facial weakness"
          />
          {symptomsCheckbox.FacialWeakness && (
            <FormGroup row id="SubFacialWeakness" className={classes.checkbox}>
              <FormControlLabel
                control={
                  <PinkCheckbox
                    onChange={handleChange}
                    name="LeftFacialWeakness"
                  />
                }
                label="Left"
              />
              <FormControlLabel
                control={
                  <PinkCheckbox
                    onChange={handleChange}
                    name="RightFacialWeakness"
                  />
                }
                label="Right"
              />
            </FormGroup>
          )}
          <FormControlLabel
            control={
              <PinkCheckbox
                onChange={handleChange}
                name="Hemiparesis"
                id="Hemiparesis"
              />
            }
            label="Hemiparesis"
          />
          {symptomsCheckbox.Hemiparesis && (
            <FormGroup row id="SubHemiparesis" className={classes.checkbox}>
              <FormControlLabel
                control={
                  <PinkCheckbox
                    onChange={handleChange}
                    name="LeftHemiparesis"
                  />
                }
                label="Left"
              />
              <FormControlLabel
                control={
                  <PinkCheckbox
                    onChange={handleChange}
                    name="RightHemiparesis"
                  />
                }
                label="Right"
              />
            </FormGroup>
          )}
          <FormControlLabel
            control={
              <PinkCheckbox
                onChange={handleChange}
                name="Hemiparesthesia"
                id="Hemiparesthesia"
              />
            }
            label="Hemiparesthesia"
          />
          {symptomsCheckbox.Hemiparesthesia && (
            <FormGroup row id="SubHemiparesthesia" className={classes.checkbox}>
              <FormControlLabel
                control={
                  <PinkCheckbox
                    onChange={handleChange}
                    name="LeftHemiparesthesia"
                  />
                }
                label="Left"
              />
              <FormControlLabel
                control={
                  <PinkCheckbox
                    onChange={handleChange}
                    name="RightHemiparesthesia"
                  />
                }
                label="Right"
              />
            </FormGroup>
          )}
          <FormControlLabel
            control={<PinkCheckbox onChange={handleChange} name="Dysarthria" />}
            label="Dysarthria"
          />
          <FormControlLabel
            control={
              <PinkCheckbox onChange={handleChange} name="DysphasiaAphasia" />
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
              <PinkCheckbox onChange={handleChange} name="Visual problem" />
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

