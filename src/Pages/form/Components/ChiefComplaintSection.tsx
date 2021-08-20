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
import { ErrorMessage } from "formik";

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
    errorMessage: {
      color: "#FF0000",
      fontSize: "16px",
      marginLeft: "5px",
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

interface ChiefComplaintProps {
  timeCourse: string;
  alterationOfConsciousness: boolean;
  facialWeakness: boolean;
  facialWeaknessLeft: boolean;
  facialWeaknessRight: boolean;
  hemiparesis: boolean;
  hemiparesisLeft: boolean;
  hemiparesisRight: boolean;
  hemiparesthesia: boolean;
  hemiparesthesiaLeft: boolean;
  hemiparesthesiaRight: boolean;
  dysarthria: boolean;
  aphasia: boolean;
  ataxia: boolean;
  vertigo: boolean;
  visualProblem: boolean;
  other: boolean;
  otherText: string;
}

interface Props {
  values: ChiefComplaintProps;
  fieldName: string;
  onChange: (field: string, value: any, shouldValidate?: boolean) => void;
}

const checkBox = [
  { name: "dysarthria", label: "Dysarthria" },
  {
    name: "aphasia",
    label: "Dysphasia/aphasia",
  },
  { name: "ataxia", label: "Ataxia" },
  { name: "vertigo", label: "Vertigo" },
  { name: "visualProblem", label: "Visual problem" },
];
const facialWeaknessSubCheckBox = [
  { name: "facialWeaknessLeft", label: "Left" },
  { name: "facialWeaknessRight", label: "Right" },
];
const hemiparesisSubCheckBox = [
  { name: "hemiparesisLeft", label: "Left" },
  { name: "hemiparesisRight", label: "Right" },
];
const hemiparesthesiaSubCheckBox = [
  { name: "hemiparesthesiaLeft", label: "Left" },
  {
    name: "hemiparesthesiaRight",
    label: "Right",
  },
];

const ChiefComplaintSection = (props: Props) => {
  const classes = useStyle();
  const { values, fieldName, onChange } = props;
  //Time Course Button
  const handleTimeCourse = (
    event: React.MouseEvent<HTMLElement>,
    newTimeCourse: string | null
  ) => {
    onChange(fieldName, { ...values, timeCourse: newTimeCourse });
  };
  //checkbox
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    onChange(fieldName, {
      ...values,
      [name]: event.target.checked,
    });
  };
  console.log(values);
  return (
    <Box className={classes.root}>
      {/* Time Course */}
      <Box>
        <Typography variant="h4">Time Course</Typography>
        <ErrorMessage name={`${fieldName}.timeCourse`}>
          {(msg) => <Box className={classes.errorMessage}>{msg}</Box>}
        </ErrorMessage>
        <Box>
          <StyledToggleButtonGroup
            size="large"
            value={values.timeCourse}
            exclusive
            onChange={handleTimeCourse}
            aria-label="Time course"
          >
            <ToggleButton
              value="wakeUP"
              aria-label="Wake-Up"
              className={classes.buttonColor}
            >
              <Typography variant="subtitle1">Wake-Up</Typography>
            </ToggleButton>
            <ToggleButton
              value="peakAtOnset"
              aria-label="Peak at Onset"
              className={classes.buttonColor}
            >
              <Typography variant="subtitle1">Peak at Onset</Typography>
            </ToggleButton>
            <ToggleButton
              value="Gradual"
              aria-label="Gradual"
              className={classes.buttonColor}
            >
              <Typography variant="subtitle1">Gradual</Typography>
            </ToggleButton>
            <ToggleButton
              value="rapidlyImprove"
              aria-label=" Rapidly Improve"
              className={classes.buttonColor}
            >
              <Typography variant="subtitle1">Rapidly Improve</Typography>
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
                name="alterationOfConsciousness"
              />
            }
            label="Alteration of consciousness"
          />
          <FormControlLabel
            control={
              <PinkCheckbox onChange={handleChange} name="facialWeakness" />
            }
            label="Facial weakness"
          />
          {values.facialWeakness && (
            <FormGroup row className={classes.checkbox}>
              {facialWeaknessSubCheckBox.map((facialWeaknessSubCheckBox) => (
                <FormControlLabel
                  control={
                    <PinkCheckbox
                      onChange={handleChange}
                      name={facialWeaknessSubCheckBox.name}
                    />
                  }
                  label={facialWeaknessSubCheckBox.label}
                />
              ))}
            </FormGroup>
          )}
          <FormControlLabel
            control={
              <PinkCheckbox onChange={handleChange} name="hemiparesis" />
            }
            label="Hemiparesis"
          />
          {values.hemiparesis && (
            <FormGroup row className={classes.checkbox}>
              {hemiparesisSubCheckBox.map((hemiparesisSubCheckBox) => (
                <FormControlLabel
                  control={
                    <PinkCheckbox
                      onChange={handleChange}
                      name={hemiparesisSubCheckBox.name}
                    />
                  }
                  label={hemiparesisSubCheckBox.label}
                />
              ))}
            </FormGroup>
          )}
          <FormControlLabel
            control={
              <PinkCheckbox onChange={handleChange} name="hemiparesthesia" />
            }
            label="Hemiparesthesia"
          />
          {values.hemiparesthesia && (
            <FormGroup row className={classes.checkbox}>
              {hemiparesthesiaSubCheckBox.map((hemiparesthesiaSubCheckBox) => (
                <FormControlLabel
                  control={
                    <PinkCheckbox
                      onChange={handleChange}
                      name={hemiparesthesiaSubCheckBox.name}
                    />
                  }
                  label={hemiparesthesiaSubCheckBox.label}
                />
              ))}
            </FormGroup>
          )}
          {checkBox.map((checkBox) => (
            <FormControlLabel
              control={
                <PinkCheckbox onChange={handleChange} name={checkBox.name} />
              }
              label={checkBox.label}
            />
          ))}
          <FormControlLabel
            control={<PinkCheckbox onChange={handleChange} name="other" />}
            label={<TextField label="Others" />}
          />
        </FormGroup>
      </Box>
    </Box>
  );
};
export default ChiefComplaintSection;
