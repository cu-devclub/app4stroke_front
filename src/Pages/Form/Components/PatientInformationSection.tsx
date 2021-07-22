import React from "react";
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme,
} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginLeft: "32px",
    },
    textField: {
      width: "80%",
    },
  })
);

const PatientInformationSection: React.FC = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={4}>
          <TextField label="Enter patient ID" className={classes.textField} />
        </Grid>
        <Grid item xs={4}>
          <TextField label="Enter age" className={classes.textField} />
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={4}>
          <TextField label="Enter first name" className={classes.textField} />
        </Grid>
        <Grid item xs={4}>
          <TextField label="Enter last name" className={classes.textField} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PatientInformationSection;
