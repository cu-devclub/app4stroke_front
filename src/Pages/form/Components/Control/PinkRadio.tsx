import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  withStyles,
  makeStyles,
  RadioProps,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  textNIHSS: {
    marginTop: "16px",
    marginBottom: "48px",
    marginLeft: "32px",
    color: "#797979",
    fontSize: "24px",
    fontWeight: "bold",
    lineHeight: "32px",
    letterSpacing: "0.4px",
  },
  text: {
    marginLeft: "32px",
    marginBottom: "24px",
    color: "#3A3A3D",
    fontSize: "24px",
    fontWeight: "bold",
    letterSpacing: "0.4px",
    lineHeight: "32px",
  },
  radio: {
    marginLeft: "32px",
    marginBottom: "24px",
    color: "#3A3A3D",
    letterSpacing: "-0.165px",
    lineHeight: "26px",
  },
}));

const PRadio = withStyles({
  root: {
    color: "#D3D3D3",
    "&$checked": {
      color: "#EF5DA8",
    },
  },
  checked: {},
})((props: RadioProps) => <Radio color="default" {...props} />);

export default function PinkRadio(props: any) {
  const classes = useStyles();
  const { name, label, value, onChange, items } = props;

  return (
    <FormControl>
      <FormLabel className={classes.text}>{label}</FormLabel>
      <RadioGroup
        name={name}
        value={value}
        onChange={onChange}
        className={classes.radio}
      >
        {items.map((item: any) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<PRadio />}
            label={item.title}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
