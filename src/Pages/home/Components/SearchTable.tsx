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
    marginLeft: "20%",
    marginTop: "2.5%",
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
  },
}));

const SearchTables = (props: any) => {
  const classes = useStyles();

  const [date, setDate] = useState(new Date());

  const { title, subTitle } = props;

  return (
    <>
      <Toolbar>
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subTitle}
          </Typography>
        </div>
        <Toolbar className={classes.search}>
          <TextField id="standard-basic" label="Patient ID"></TextField>
          <TextField id="standard-basic" label="Name"></TextField>
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
          <Button className={classes.buttonSearch}> Search </Button>
        </Toolbar>
      </Toolbar>
    </>
  );
};

export default SearchTables;
