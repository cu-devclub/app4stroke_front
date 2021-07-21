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
export const colors = {
  primary: "#fff",
  secondary: "#EF5DA8",
};

const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${(active) =>
    active &&
    `
    opacity:1;
  `}
`;

const ChiefComplaintSection: React.FC = () => {
  const classes = useStyle();
  const types = ["Wake-Up", "Peak at Onset", "Gradual", "Rapidly Improve"];
  //const [active, setActive] = useState(types[0]);
  const [flag, setFlag] = React.useState(true);
  const handleClick = () => {
    setFlag(!flag);
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
            {types.map((type) => (
              <ButtonToggle
                className={classes.button}
                variant="contained"
                //active={active === type}
                //onClick={() => setActive(type)}
                onClick={handleClick}
                color={flag ? "primary" : "secondary"}
              >
                {type}
              </ButtonToggle>
            ))}
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
