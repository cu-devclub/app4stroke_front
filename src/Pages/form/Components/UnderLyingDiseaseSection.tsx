import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import React, { ChangeEvent, useState } from "react";
import { UnderlyingProps } from "../../../interfaces";

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

const checkboxUnderlying = [
  { name: "deny", label: "Deny underlying disease" },
  { name: "hx", label: "Hx TIA (same site, within 2 weeks)" },
  { name: "previousTia", label: "Previous TIA" },
  { name: "previousStroke", label: "Previous stroke" },
  { name: "ht", label: "HT" },
  { name: "dm", label: "DM" },
  { name: "dlp", label: "DLP" },
  { name: "valvularHeartDisease", label: "Valvular heart disease" },
  { name: "af", label: "AF" },
  { name: "coronaryHeartDisease", label: "Coronary heart disease" },
  { name: "ckd", label: "CKD" },
  { name: "peripheralArterialDisease", label: "Peripheral arterial disease" },
  { name: "obesity", label: "Obesity" },
  { name: "smoking", label: "Smoking" },
];

interface Props {
  values: UnderlyingProps;
  fieldName: string;
  onChange: (
    field: string,
    value: UnderlyingProps,
    shouldValidate?: boolean
  ) => void;
}

const UnderLyingDiseaseSection = (props: Props): JSX.Element => {
  const classes = useStyles();
  const { values, fieldName, onChange } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    onChange(fieldName, {
      ...values,
      [name]: event.target.checked,
    });
  };

  const handleInputCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "other" && !event.target.checked) {
      console.log(name, value);
      onChange(fieldName, {
        ...values,
        ["otherText"]: "",
        ["other"]: false,
      });
    } else {
      onChange(fieldName, {
        ...values,
        [name]:
          value !== ""
            ? value
            : name === "otherText"
            ? ""
            : event.target.checked,
      });
    }
  };
  return (
    <FormGroup className={classes.checkbox}>
      {checkboxUnderlying.map((checkboxUnderlying) => (
        <FormControlLabel
          control={
            <PinkCheckbox
              onChange={handleChange}
              name={checkboxUnderlying.name}
            />
          }
          label={checkboxUnderlying.label}
        />
      ))}
      <FormControlLabel
        control={<PinkCheckbox name="other" onChange={handleChange} />}
        label={
          <TextField
            label="Others"
            name="otherText"
            onChange={handleInputCheckbox}
            value={values.other ? values.otherText : (values.otherText = "")}
            disabled={values.other ? false : true}
          />
        }
      />
    </FormGroup>
  );
};

export default UnderLyingDiseaseSection;
