import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import aiCuteLogo from "../../Assets/AICute.png";
import PersonIcon from "@material-ui/icons/Person";
import Avatar from "@material-ui/core/Avatar";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: "0px 4px 10px 2px rgba(121, 121, 121, 0.1)",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
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
      color: "#FFF3F9",
    },
    avatar: {
      backgroundColor: "#EF5DA8",
    },
  })
);

const Header: React.FC<{ doctorName: string }> = ({ doctorName }) => {
  const classes = useStyle();
  return (
    <div>
      <AppBar position="static" color="inherit">
        <Toolbar className={classes.root}>
          <img src={aiCuteLogo} alt="icon" className={classes.logo} />
          <Typography variant="h6" className={classes.name}>
            {doctorName}
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
