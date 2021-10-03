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

  const checkboxUnderlying = [
    { name: "deny", label: "Deny underlying disease", checked: values.deny},
    { name: "hx", label: "Hx TIA (same site, within 2 weeks)", checked: values.hx },
    { name: "previousTia", label: "Previous TIA", checked: values.previousTia },
    { name: "previousStroke", label: "Previous stroke", checked: values.previousStroke },
    { name: "ht", label: "HT", checked: values.ht },
    { name: "dm", label: "DM", checked: values.dm },
    { name: "dlp", label: "DLP", checked: values.dlp },
    { name: "valvularHeartDisease", label: "Valvular heart disease", checked: values.valvularHeartDisease },
    { name: "af", label: "AF", checked: values.af },
    { name: "coronaryHeartDisease", label: "Coronary heart disease", checked: values.coronaryHeartDisease },
    { name: "ckd", label: "CKD", checked: values.ckd },
    { name: "peripheralArterialDisease", label: "Peripheral arterial disease", checked: values.peripheralArterialDisease },
    { name: "obesity", label: "Obesity", checked: values.obesity },
    { name: "smoking", label: "Smoking", checked: values.smoking },
  ];

  return (
    <FormGroup className={classes.checkbox}>
      {checkboxUnderlying.map((checkboxUnderlying) => (
        <FormControlLabel
          control={
            <PinkCheckbox
              onChange={handleChange}
              checked={checkboxUnderlying.checked}
              name={checkboxUnderlying.name}
            />
          }
          label={checkboxUnderlying.label}
        />
      ))}
      <FormControlLabel
        control={<PinkCheckbox name="other" checked={values.other} onChange={handleChange} />}
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
