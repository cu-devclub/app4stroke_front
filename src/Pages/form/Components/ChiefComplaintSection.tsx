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
import { ChiefComplaintProps } from "../../../interfaces";

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
})((props: CheckboxProps) => {
  return <Checkbox color="default" {...props}/>;
});

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

interface Props {
  values: ChiefComplaintProps;
  fieldName: string;
  onChange: (
    field: string,
    value: ChiefComplaintProps,
    shouldValidate?: boolean
  ) => void;
}

const ChiefComplaintSection = (props: Props) => {
  const classes = useStyle();
  const { values, fieldName, onChange } = props;
  //Time Course Button
  const handleTimeCourse = (
    event: React.MouseEvent<HTMLElement>,
    newTimeCourse: string | null
  ) => {
    if (newTimeCourse !== null)
      onChange(fieldName, { ...values, timeCourse: newTimeCourse });
  };

  const handleInputCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "other" && !event.target.checked) {
      
      onChange(fieldName, {
        ...values,
        ["symptoms"]: {
          ...values.symptoms,
          ["otherText"]: "",
          ["other"]: false,
        },
      });
    } else {
      onChange(fieldName, {
        ...values,
        ["symptoms"]: {
          ...values.symptoms,
          [name]:
            value !== ""
              ? value
              : name === "otherText"
              ? ""
              : event.target.checked,
        },
      });
    }
  };
  const checkBox = [
    { name: "dysarthria", label: "Dysarthria", checked: values.symptoms.dysarthria},
    {
      name: "aphasia",
      label: "Aphasia",
    },
    { name: "ataxia", label: "Ataxia" },
    { name: "vertigo", label: "Vertigo" },
    { name: "visualProblem", label: "Visual problem" },
  ];
  const facialWeaknessSubCheckBox = [
    { name: "facialWeaknessLeft", label: "Left", checked: values.symptoms.facialWeaknessLeft},
    { name: "facialWeaknessRight", label: "Right", checked: values.symptoms.facialWeaknessRight},
  ];
  const hemiparesisSubCheckBox = [
    { name: "hemiparesisLeft", label: "Left", checked: values.symptoms.hemiparesisLeft},
    { name: "hemiparesisRight", label: "Right", checked: values.symptoms.hemiparesisRight},
  ];
  const hemiparesthesiaSubCheckBox = [
    { name: "hemiparesthesiaLeft", label: "Left", checked: values.symptoms.hemiparesthesiaLeft},
    {
      name: "hemiparesthesiaRight",
      label: "Right",
      checked: values.symptoms.hemiparesthesiaRight
    },
  ];
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
                onChange={handleInputCheckbox}
                checked={values.symptoms.alterationOfConsciousness}
                name="alterationOfConsciousness"
              />
            }
            label="Alteration of consciousness"
          />
          <FormControlLabel
            control={
              <PinkCheckbox
                onChange={handleInputCheckbox}
                checked={values.symptoms.facialWeakness}
                name="facialWeakness"
              />
            }
            label="Facial weakness"
          />
          {values.symptoms.facialWeakness && (
            <>
              <FormGroup row className={classes.checkbox}>
                {facialWeaknessSubCheckBox.map((facialWeaknessSubCheckBox) => (
                  <FormControlLabel
                    control={
                      <PinkCheckbox
                        onChange={handleInputCheckbox}
                        checked={facialWeaknessSubCheckBox.checked}
                        name={facialWeaknessSubCheckBox.name}
                      />
                    }
                    label={facialWeaknessSubCheckBox.label}
                  />
                ))}
              </FormGroup>
              <ErrorMessage name={`${fieldName}.symptoms.facialWeakness`}>
                {(msg) => <Box className={classes.errorMessage}>{msg}</Box>}
              </ErrorMessage>
            </>
          )}
          <FormControlLabel
            control={
              <PinkCheckbox onChange={handleInputCheckbox} name="hemiparesis" checked={values.symptoms.hemiparesis}/>
            }
            label="Hemiparesis"
          />
          {values.symptoms.hemiparesis && (
            <>
              <FormGroup row className={classes.checkbox}>
                {hemiparesisSubCheckBox.map((hemiparesisSubCheckBox) => (
                  <FormControlLabel
                    control={
                      <PinkCheckbox
                        onChange={handleInputCheckbox}
                        checked={hemiparesisSubCheckBox.checked}
                        name={hemiparesisSubCheckBox.name}
                      />
                    }
                    label={hemiparesisSubCheckBox.label}
                  />
                ))}
              </FormGroup>
              <ErrorMessage name={`${fieldName}.symptoms.hemiparesis`}>
                {(msg) => <Box className={classes.errorMessage}>{msg}</Box>}
              </ErrorMessage>
            </>
          )}
          <FormControlLabel
            control={
              <PinkCheckbox
                onChange={handleInputCheckbox}
                checked={values.symptoms.hemiparesthesia}
                name="hemiparesthesia"
              />
            }
            label="Hemiparesthesia"
          />
          {values.symptoms.hemiparesthesia && (
            <>
              <FormGroup row className={classes.checkbox}>
                {hemiparesthesiaSubCheckBox.map(
                  (hemiparesthesiaSubCheckBox) => (
                    <FormControlLabel
                      control={
                        <PinkCheckbox
                          onChange={handleInputCheckbox}
                          name={hemiparesthesiaSubCheckBox.name}
                          checked={hemiparesthesiaSubCheckBox.checked}
                        />
                      }
                      label={hemiparesthesiaSubCheckBox.label}
                    />
                  )
                )}
              </FormGroup>
              <ErrorMessage name={`${fieldName}.symptoms.hemiparesthesia`}>
                {(msg) => <Box className={classes.errorMessage}>{msg}</Box>}
              </ErrorMessage>
            </>
          )}
          {checkBox.map((checkBox) => (
            <FormControlLabel
              control={
                <PinkCheckbox
                  onChange={handleInputCheckbox}
                  checked={checkBox.checked}
                  name={checkBox.name}
                />
              }
              label={checkBox.label}
            />
          ))}
          <FormControlLabel
            control={
              <PinkCheckbox onChange={handleInputCheckbox} name="other" checked={values.symptoms.other} />
            }
            label={
              <TextField
                label="Others"
                name="otherText"
                onChange={handleInputCheckbox}
                disabled={!values.symptoms.other}
                value={values.symptoms.otherText}
              />
            }
          />
        </FormGroup>
      </Box>
    </Box>
  );
};
export default ChiefComplaintSection;
