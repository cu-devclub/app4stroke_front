import {
  makeStyles,
  Typography,
  Toolbar,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "16px",
  },
  pageTitle: {
    "& .MuiTypography-subtitle2": {
      color: "#979797",
      fontSize: "16px",
    },
    "& .MuiTypography-h6": {
      fontSize: "24px",
    },
  },
  search: {
    "& .MuiTextField-root": {
      width: "200px",
    },
    fontSize: "20px",
  },
  buttonSearch: {
    backgroundColor: "#EF5DA8",
    color: "#ffffff",
    textTransform: "none",
    borderRadius: "20px",
    fontSize: "18px",
  },
  childTextFieldMargin: {
    textAlign: "right",
    "& div > div": {
      marginRight: "16px",
    },
  },
}));

const SearchTables = () => {
  const classes = useStyles();

  const [date, setDate] = useState(new Date());

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Patient Tests</Typography>
          <Typography variant="subtitle2">Total 63 records</Typography>
        </Grid>
        <Grid item xs={12} md={6} className={classes.childTextFieldMargin}>
          <TextField id="patientID" label="Patient ID"></TextField>
          <TextField id="name" label="Name"></TextField>
          <TextField
            id="date"
            label="Date"
            type="date"
            value={date}
            onChange={(e: any) => setDate(e.target.value)}
            defaultValue={new Date()}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button className={classes.buttonSearch}>Search</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchTables;
