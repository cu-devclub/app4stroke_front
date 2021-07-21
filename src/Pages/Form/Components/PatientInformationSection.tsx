import React from "react";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import { Grid, TextField } from "@material-ui/core";

const useStyle = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      padding: "34px",
      alignItems: "center",
    },
  })
);

const GridStyles = withStyles({
  root: {
    width: "50%",
  },
})(Grid);

const TextFieldStyles = withStyles({
  root: {
    width: "50%",
  },
})(TextField);

const PatientInformationSection: React.FC = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.root}>
      {/* Container 1 */}
      <GridStyles item xs="auto">
        {/* PatientID */}
        <Grid style={{ marginBottom: "60px" }}>
          <TextFieldStyles id="standard-basic" label="Enter patient ID" />
        </Grid>
        {/* FirstName */}
        <Grid>
          <TextFieldStyles id="standard-basic" label="Enter first name" />
        </Grid>
      </GridStyles>
      {/* Container 2 */}
      <GridStyles item xs="auto">
        {/* Age */}
        <Grid>
          <TextFieldStyles id="standard-basic" label="Enter age" />
        </Grid>
        {/* LastName */}
        <Grid>
          <TextFieldStyles id="standard-basic" label="Enter last name" />
        </Grid>
      </GridStyles>
    </Grid>
  );
};

export default PatientInformationSection;
