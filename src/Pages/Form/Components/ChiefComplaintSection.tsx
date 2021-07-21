import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {
  createStyles,
  makeStyles,
  createTheme,
  Theme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Toolbar, Box } from "@material-ui/core";

const useStyle = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      padding: "100px",
      paddingTop:"5px"
    },
    text: {
      fontSize: "24px",
      //marginLeft: "240px",
    },
    groupButton: {
      "& > *": {
        margin: theme.spacing(3),
      },
    },
    button: {
      //background: "#FFFFFF",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      borderRadius: "20px",
      width: "180px",
      height: "81px",
      //right: "180px",
      //top: "80px",
    },
  })
);
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
  const [flag, setFlag] = React.useState(true);
  const handleClick = () => {
    setFlag(!flag);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <Box>
          <Typography className={classes.text} variant="body1">
            Time Course
          </Typography>
          <Box className={classes.groupButton}>
            <Button
              className={classes.button}
              variant="contained"
              onClick={handleClick}
              color={flag ? "primary" : "secondary"}
            >
              Wake-Up
            </Button>
            <Button className={classes.button} variant="outlined">
              Peak at Onset
            </Button>
            <Button className={classes.button} variant="outlined">
              Gradual
            </Button>
            <Button className={classes.button} variant="outlined">
              Rapidly Improve
            </Button>
          </Box>
        </Box>
        <Box>
          <Typography className={classes.text} variant="body1">
            Symptoms
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ChiefComplaintSection;
