import {
  makeStyles,
  FormGroup,
  FormControlLabel,
  Checkbox,
  CheckboxProps,
  withStyles,
  TextField,
} from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";

const useStyles = makeStyles(() => ({
  checkbox: {
    color: "#3A3A3D",
    marginLeft: "32px",
    marginTop: "48px",
    fontSize: "20px",
    lineHight: "26px",
    letterSpacing: "-0.165px",
  },
}));

const PinkCheckbox = withStyles({
  root: {
    color: "#DFE1E6",
    "&$checked": {
      color: "#EF5DA8",
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const UnderLyingDiseaseSection: React.FC = () => {
  const classes = useStyles();
  const [state, setState] = useState({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <FormGroup className={classes.checkbox}>
        <FormControlLabel
          control={
            <PinkCheckbox
              onChange={handleChange}
              name="DenyUnderlyingDisease"
            />
          }
          label="Deny Underlying disease"
        />
        <FormControlLabel
          control={<PinkCheckbox onChange={handleChange} name="HxTIA" />}
          label="Hx TIA (same site, within 2 weeks)"
        />
        <FormControlLabel
          control={
            <PinkCheckbox onChange={handleChange} name="PreviousStroke" />
          }
          label="Previous stroke"
        />
        <FormControlLabel
          control={<PinkCheckbox onChange={handleChange} name="HT" />}
          label="HT"
        />
        <FormControlLabel
          control={<PinkCheckbox onChange={handleChange} name="DM" />}
          label="DM"
        />
        <FormControlLabel
          control={<PinkCheckbox onChange={handleChange} name="DLP" />}
          label="DLP"
        />
        <FormControlLabel
          control={
            <PinkCheckbox onChange={handleChange} name="ValvularHeartDisease" />
          }
          label="Valvular heart disease"
        />
        <FormControlLabel
          control={<PinkCheckbox onChange={handleChange} name="AF" />}
          label="AF"
        />
        <FormControlLabel
          control={
            <PinkCheckbox onChange={handleChange} name="CoronaryHeartDisease" />
          }
          label="Coronary heart disease"
        />
        <FormControlLabel
          control={<PinkCheckbox onChange={handleChange} name="CKD" />}
          label="CKD"
        />
        <FormControlLabel
          control={
            <PinkCheckbox
              onChange={handleChange}
              name="PeripheralArterialDisease"
            />
          }
          label="Peripheral arterial disease"
        />
        <FormControlLabel
          control={<PinkCheckbox onChange={handleChange} name="Obesity" />}
          label="Obesity"
        />
        <FormControlLabel
          control={<PinkCheckbox onChange={handleChange} name="Smoking" />}
          label="Smoking"
        />
        <FormControlLabel
          control={<PinkCheckbox onChange={handleChange} name="Others" />}
          label={<TextField label="Others" />}
        />
      </FormGroup>
    </>
  );
};

export default UnderLyingDiseaseSection;
