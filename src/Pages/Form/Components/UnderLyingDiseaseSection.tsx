import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
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

const checkboxLabel = [
  "Deny underlying disease",
  "Hx TIA (same site, within 2 weeks)",
  "Previous TIA",
  "Previous stroke",
  "HT",
  "DM",
  "DLP",
  "Valvular heart disease",
  "AF",
  "Coronary heart disease",
  "CKD",
  "Peripheral arterial disease",
  "Obesity",
  "Smoking",
];

const UnderLyingDiseaseSection: React.FC = () => {
  const classes = useStyles();
  const [underLyingDiseaseCheckbox, setUnderLyingDiseaseCheckbox] = useState(
    {}
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUnderLyingDiseaseCheckbox({
      ...underLyingDiseaseCheckbox,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <FormGroup className={classes.checkbox}>
      {checkboxLabel.map((checkboxLabel) => (
        <FormControlLabel
          control={<PinkCheckbox onChange={handleChange} />}
          label={checkboxLabel}
        />
      ))}
      <FormControlLabel
        control={<PinkCheckbox onChange={handleChange} />}
        label={<TextField label="Others" />}
      />
    </FormGroup>
  );
};

export default UnderLyingDiseaseSection;
