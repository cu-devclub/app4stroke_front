import {
  makeStyles,
  Typography,
  Toolbar,
  TextField,
  Button,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    paddingLeft: theme.spacing(5),
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(0),
    "& .MuiTypography-subtitle2": {
      color: "#979797",
      marginTop: "12%",
      fontSize: "16px",
    },
    "& .MuiTypography-h6": {
      fontSize: "24px",
    },
  },
  search: {
    marginLeft: theme.spacing(66),
    marginTop: theme.spacing(5),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
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
    width: "120px",
    height: "40px",
  },
}));

const SearchTables = () => {
  const classes = useStyles();

  const [date, setDate] = useState(new Date());

  return (
    <>
      <Toolbar>
        <div className={classes.pageTitle}>
          <Typography variant="h6">Patient Tests</Typography>
          <Typography variant="subtitle2">Total 63 records</Typography>
        </div>
        <Toolbar className={classes.search}>
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
        </Toolbar>
      </Toolbar>
    </>
  );
};

export default SearchTables;
