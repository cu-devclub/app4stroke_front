import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import strokeIcon from "../../../assets/stroke.png";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    toolbar: {
      marginRight: "auto",
    },
    icon: {
      margin: "auto",
      maxWidth: "150px",
      maxHeight: "30px",
    },
  })
);

const Header: React.FC = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar className={classes.toolbar}>
          <img src={strokeIcon} alt="icon" className={classes.icon} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
