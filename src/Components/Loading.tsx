import React, { Dispatch, SetStateAction } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import styled from "styled-components";
import ellipse from "../Assets/Ellipse.png";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#000",
    fontSize: "36px",
    fontWeight: "bold",
    backgroundColor: "rgb(255,255,255,0.5)",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    backdropFilter: "blur(2px)",
  },
  disappear1: {
    animation: "$disappear1 3s infinite",
  },
  disappear2: {
    animation: "$disappear2 3s infinite",
  },
  disappear3: {
    animation: "$disappear3 3s infinite",
  },
  disappear4: {
    animation: "$disappear4 3s infinite",
  },
  disappear5: {
    animation: "$disappear5 3s infinite",
  },
  disappear6: {
    animation: "$disappear6 3s infinite",
  },
  disappear7: {
    animation: "$disappear7 3s infinite",
  },
  "@keyframes disappear1": {
    from: {
      opacity: 1,
    },
    "10%": { opacity: 0, display: "none" },
    to: {
      opacity: 1,
    },
  },
  "@keyframes disappear2": {
    from: {
      opacity: 1,
    },
    "20%": { opacity: 0, display: "none" },
    to: {
      opacity: 1,
    },
  },
  "@keyframes disappear3": {
    from: {
      opacity: 1,
    },
    "30%": { opacity: 0, display: "none" },
    to: {
      opacity: 1,
    },
  },
  "@keyframes disappear4": {
    from: {
      opacity: 1,
    },
    "40%": { opacity: 0, display: "none" },
    to: {
      opacity: 1,
    },
  },
  "@keyframes disappear5": {
    from: {
      opacity: 1,
    },
    "50%": { opacity: 0, display: "none" },
    to: {
      opacity: 1,
    },
  },
  "@keyframes disappear6": {
    from: {
      opacity: 1,
    },
    "60%": { opacity: 0, display: "none" },
    to: {
      opacity: 1,
    },
  },
  "@keyframes disappear7": {
    from: {
      opacity: 1,
    },
    "70%": { opacity: 0, display: "none" },
    to: {
      opacity: 1,
    },
  },
  "@keyframes disappear8": {
    from: {
      opacity: 1,
    },
    "80%": { opacity: 0, display: "none" },
    to: {
      opacity: 1,
    },
  },
}));

const CircleLine = styled(Box)`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 70%;
`;

const ProcessLoading = (): JSX.Element => {
  const classes = useStyles();
  const circularSize = [
    { size: 400, class: classes.disappear1 },
    { size: 350, class: classes.disappear2 },
    { size: 300, class: classes.disappear3 },
    { size: 250, class: classes.disappear4 },
    { size: 200, class: classes.disappear5 },
    { size: 150, class: classes.disappear6 },
    { size: 100, class: classes.disappear7 },
  ];

  return (
    <Box height="100%">
      <Box
        height="30%"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
      >
        <Typography variant="h3">Processing</Typography>
        <Typography variant="h4">Please wait</Typography>
      </Box>
      <CircleLine>
        {circularSize.map((item) => (
          <img
            src={ellipse}
            style={{
              width: item.size,
              height: item.size,
              position: "absolute",
            }}
            className={item.class}
          />
        ))}
      </CircleLine>
    </Box>
  );
};

interface LoadingProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Loading({ open, setOpen }: LoadingProps): JSX.Element {
  const classes = useStyles();
  const handleClose = () => {
    // setOpen(false);
  };

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <ProcessLoading />
      </Backdrop>
    </div>
  );
}
