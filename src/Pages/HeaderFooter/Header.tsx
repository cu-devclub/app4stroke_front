import React, {
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import aiCuteLogo from "../../Assets/AICute.png";
import PersonIcon from "@material-ui/icons/Person";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router-dom";
import {
  ClickAwayListener,
  Grow,
  MenuList,
  Popper,
  MenuItem,
  Paper,
} from "@material-ui/core";

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
      cursor: "pointer",
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
      cursor: "pointer",
    },
    avatar: {
      backgroundColor: "#EF5DA8",
    },
  })
);

const Header: React.FC<{ doctorName: string }> = ({ doctorName }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const history = useHistory();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <AppBar position="static" color="inherit">
        <Toolbar className={classes.root}>
          <img
            src={aiCuteLogo}
            alt="icon"
            className={classes.logo}
            onClick={() => history.push("/home")}
          />
          <Typography variant="h6" className={classes.name}>
            {doctorName}
          </Typography>
          <Avatar
            className={classes.avatar}
            onClick={handleToggle}
            // ref={anchorRef}
          >
            <PersonIcon className={classes.icon} />
          </Avatar>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
