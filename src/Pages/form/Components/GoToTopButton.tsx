import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyle = makeStyles((theme) =>
  createStyles({
    scrollToTop: {
      display: "block",
      marginLeft: "auto",
      fontSize: "25px",
      border: "none",
      outline: "none",
      backgroundColor: "#EF5DA8",
      color: "white",
      cursor: "pointer",
      padding: "15px",
      borderRadius: "50%",
      height: "60px",
      width: "50px",
      justifyContent: "center",
      alignItems: "center",
      "&:hover": {
        backgroundColor: "#EF5DA8",
      },
    },
  })
);
const GoToTopButton: React.FC = () => {
  const classes = useStyle();
  //Go to top function
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
        title="GoToTop"
      >
        <ExpandLessIcon fontSize="large"/>
      </Button>
    </>
  );
};

export default GoToTopButton;
