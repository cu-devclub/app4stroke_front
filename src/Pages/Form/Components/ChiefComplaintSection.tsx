import React, { ChangeEvent, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {
  createStyles,
  makeStyles,
  createTheme,
  Theme,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import {
  Box,
  FormControlLabel,
  Checkbox,
  CheckboxProps,
  FormGroup,
  TextField,
} from "@material-ui/core";
import styled from "styled-components";

const useStyle = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      padding: "100px",
      paddingTop: "5px",
    },
    text: {
      fontSize: "24px",
    },
    groupButton: {
      "& > *": {
        margin: theme.spacing(3),
      },
    },
    button: {
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      borderRadius: "20px",
      width: "180px",
      height: "81px",
      right: "20px",
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

const ChiefComplaintSection: React.FC = () => {
  const classes = useStyle();
  //WakeUp
  const [WakeUp, setWakeUp] = React.useState(true);
  const handleClickWakeUp = () => {
    setWakeUp(!WakeUp);
  };
  //Peak
  const [Peak, setPeak] = React.useState(true);
  const handleClickPeak = () => {
    setPeak(!Peak);
  };
  //Gradual
  const [Gradual, setGradual] = React.useState(true);
  const handleClickGradual = () => {
    setGradual(!Gradual);
  };
  //Rapidly
  const [Rapidly, setRapidly] = React.useState(true);
  const handleClickRapidly = () => {
    setRapidly(!Rapidly);
  };
  //checkbox
  const [state, setState] = React.useState({});
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <Box className={classes.root}>
      <ThemeProvider theme={theme}>
        {/* Time Course */}
        <Box>
          <Typography className={classes.text} variant="body1">
            Time Course
          </Typography>
          <Box className={classes.groupButton}>
            <Button
              className={classes.button}
              variant="contained"
              onClick={handleClickWakeUp}
              color={WakeUp ? "primary" : "secondary"}
            >
              Wake-Up
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              onClick={handleClickPeak}
              color={Peak ? "primary" : "secondary"}
            >
              Peak at Onset
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              onClick={handleClickGradual}
              color={Gradual ? "primary" : "secondary"}
            >
              Gradual
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              onClick={handleClickRapidly}
              color={Rapidly ? "primary" : "secondary"}
            >
              Rapidly Improve
            </Button>
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
              <PinkCheckbox
                onChange={handleChange}
                name="Alteration of consciousness"
              />
            }
            label="Alteration of consciousness"
          />
          <FormControlLabel
            control={
              <PinkCheckbox onChange={handleChange} name="Facial weakness" />
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
