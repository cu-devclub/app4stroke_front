import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import footer from "../../Assets/footer.png";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    background: "rgb(236 236 236 / 74%)",
    boxShadow: "none",
  },
}));
const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.root}>
        <img src={footer} />
      </AppBar>
    </>
  );
};

export default Footer;
