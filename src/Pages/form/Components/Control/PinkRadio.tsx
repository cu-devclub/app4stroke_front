import React from "react";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  withStyles,
  makeStyles,
  RadioProps,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  radio: {
    marginLeft: "32px",
    marginTop: "24px",
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
  const { name, value, onChange, items } = props;

  return (
    <FormControl>
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
