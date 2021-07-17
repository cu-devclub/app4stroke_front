import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import brainImg from "../../../assets/brain_welcome.png";
import AddIcon from "../../../assets/add.png";

//todo Style
const useStyle = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },

    //! Box
    boxWelcome: {
      width: "616px", //decrease 15%
      height: "147px",
      marginTop: "48px",
      marginLeft: "32px",
      borderRadius: "20px",
      background:
        "linear-gradient(94.59deg, #5028C6 9.91%, #FD85FF 81.34%, #F40000 111.1%)",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    },
    boxTotalPatients: {
      width: "185px",
      height: "147px",
      marginTop: "48px",
      marginLeft: "24px",
      background: "#FFFFFF",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      borderRadius: " 20px",
    },
    //! Text
    textWelcome: {
      marginLeft: "23px",
      color: "white",
    },
    textTotal: {
      marginLeft: "23px",
      marginTop: "27px",
    },
    textTotalPatients: {
      color: "#979797",
      fontWeight: "normal",
    },
    textRegister: {
      textTransform: "none",
      color: "white",
      fontWeight: "lighter",
    },
    //! Button
    buttonRegister: {
      backgroundColor: "#EF5DA8",
      width: "307px",
      height: "144px",
      marginLeft: "47px",
      marginTop: "51px",
      borderRadius: "24px",
    },
    //! Icon
    // addIcon: {
    //   marginTop: "10px",
    // },
  })
);

const Title: React.FC = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="start">
        {/* Welcom Doctor */}
        <Box border={0} className={classes.boxWelcome}>
          <div className={classes.textWelcome}>
            <p>Welcome</p>
            <h4>Dr. Sawasdee</h4>
            <h2>Chulalongkorn Stroke Center</h2>
            <img src={brainImg} alt="icon" />
          </div>
        </Box>

        {/* Total Patients */}
        <Box border={0} className={classes.boxTotalPatients}>
          <div className={classes.textTotal}>
            <h5 className={classes.textTotalPatients}>Total Patients</h5>
            <h1>20</h1>
          </div>
        </Box>
        {/* Register New Patients */}
        <Button variant="contained" className={classes.buttonRegister}>
          <div>
            <div>
              <img src={AddIcon} alt="icon" />
            </div>
            <div className={classes.textRegister}>
              <Typography>Register New Patients</Typography>
            </div>
          </div>
        </Button>
      </Box>
    </div>
  );
};

export default Title;
