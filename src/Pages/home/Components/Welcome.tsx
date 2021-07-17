import React from "react";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import brainImg from "../../../assets/brain_welcome.png";
//todo Style
const useStyle = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    box: {
      width: "616px", //decrease 15%
      height: "147px",
      marginTop: "48px",
      marginLeft: "32px",
      borderRadius: "20px",
      background:
        "linear-gradient(94.59deg, #5028C6 9.91%, #FD85FF 81.34%, #F40000 111.1%)",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    },
    text: {
      marginLeft: "23px",
      color: "white",
    },
  })
);

const Welcome: React.FC = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="start">
        <Box border={0} className={classes.box}>
          <div className={classes.text}>
            <p>Welcome</p>
            <h4>Dr. Sawasdee</h4>
            <h2>Chulalongkorn Stroke Center</h2>
            <img src={brainImg} alt="icon" />
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Welcome;
