import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import strokeLogo from "../../Assets/stroke.png";
import PersonIcon from "@material-ui/icons/Person";
import Avatar from "@material-ui/core/Avatar";

//todo Style
const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    toolbar: {},
    logo: {
      margin: "auto",
      maxWidth: "150px",
      maxHeight: "30px",
      marginRight: "auto",
    },
    name: {
      flexGrow: 1,
      textAlign: "right",
      color: "#979797",
      fontWeight: "lighter",
      marginRight: "20px",
      fontSize: "18px",
    },
    icon: {
      margin: "auto",
      fontSize: "36px",
      color: "#BEBFE2",
    },
    avatar: {
      backgroundColor: "#505175",
    },
  })
);

//todo Header
const Header: React.FC = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar className={classes.toolbar}>
          <img src={strokeLogo} alt="icon" className={classes.logo} />
          <Typography variant="h6" className={classes.name}>
            Dr. John Doe
          </Typography>
          <Avatar className={classes.avatar}>
            <PersonIcon className={classes.icon} />
          </Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
