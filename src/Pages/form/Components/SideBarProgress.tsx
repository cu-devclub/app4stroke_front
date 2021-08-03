import React, { useState } from "react";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyle = makeStyles((theme) =>
  createStyles({
    scrollToTop: {
      display: "block",
      position: "fixed",
      bottom: "150px",
      marginLeft: "100px",
      fontSize: "25px",
      border: "none",
      outline: "none",
      backgroundColor: "#EF5DA8",
      color: "white",
      cursor: "pointer",
      padding: "15px",
      borderRadius: "100px",
      height: "60px",
      width: "50px",
      justifyContent: "center",
      alignItems: "center",
      "&:none": {
        display: "none",
      },
      "&:hover": {
        backgroundColor: "#EF5DA8",
      },
    },
  })
);

const SideBarProgress = () => {
  const classes = useStyle();
  //ScrollToTop
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <Button
        onClick={topFunction}
        id="myBtn"
        className={classes.scrollToTop}
        title="Go to top"
      >
        ^
      </Button>
    </>
  );
};

export default SideBarProgress;
