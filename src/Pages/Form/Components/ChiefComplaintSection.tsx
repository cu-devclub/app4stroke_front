import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";

const useStyle = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      padding: "50px",
    },
    text: {
      fontSize: "24px",
      marginLeft:"240px",
    },
    groupButton: {
      "& > *": {
        margin: theme.spacing(3),
      },
    },
    button: {
      background: "#FFFFFF",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      borderRadius: "20px",
      width: "180px",
      height: "81px",
      right:"180px",
      top: "80px",
    },
  })
);

const ChiefComplaintSection: React.FC = () => {
  const classes = useStyle();
  return (
    <Toolbar className={classes.root}>
      <Typography className={classes.text} variant="body1">
        Time Course
      </Typography>
      <Toolbar className={classes.groupButton}>
        <Button className={classes.button} variant="outlined">
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
      </Toolbar>
    </Toolbar>
  );
};

export default ChiefComplaintSection;
