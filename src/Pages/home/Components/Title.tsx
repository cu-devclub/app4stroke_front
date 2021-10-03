import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AddIcon from "../../../Assets/add.png";
import { useHistory } from "react-router-dom";
import { StringLiteralType } from "typescript";

//todo Style
const useStyle = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      marginBottom: "16px",
    },
    //! Box
    boxWelcome: {
      width: "50%",
      borderRadius: "24px",
      background:
        "linear-gradient(94.59deg, #5028C6 9.91%, #FD85FF 81.34%, #F40000 111.1%)",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      marginRight: "16px",
      padding: "16px",
    },
    boxTotalPatients: {
      width: "20%",
      background: "#FFFFFF",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      borderRadius: "24px",
      marginRight: "16px",
      padding: "16px",
    },
    //! Text
    textWelcome: {
      color: "white",
      width: "50%",
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
      width: "30%",
      borderRadius: "24px",
      padding: "16px",
    },
  })
);

const Title = ({userName, institute, totalCases}: {userName: string | null, institute: string | null, totalCases: number}): JSX.Element => {
  const classes = useStyle();
  const history = useHistory();
  const handleClick = () => {
    history.push("/form");
  };
  return (
    <Box className={classes.root}>
      <Box display="flex">
        {/* Welcome Doctor */}
        <Box border={0} className={classes.boxWelcome}>
          <Box className={classes.textWelcome} display="inline">
            <Typography variant="body2">Welcome</Typography>
            <Typography variant="h6">{userName}</Typography>
            <Typography variant="h5">{institute}</Typography>
          </Box>
        </Box>
        {/* Total Patients */}
        <Box border={0} className={classes.boxTotalPatients}>
          <Box>
            <Typography
              variant="subtitle1"
              className={classes.textTotalPatients}
            >
              Total Patients
            </Typography>
            <Typography variant="h2">{totalCases}</Typography>
          </Box>
        </Box>
        {/* Register New Patients */}
        <Button
          variant="contained"
          className={classes.buttonRegister}
          onClick={handleClick}
        >
          <Box display="flex" flexDirection="column">
            <Box>
              <img src={AddIcon} alt="icon" />
            </Box>
            <Box className={classes.textRegister}>
              <Typography variant="subtitle1">Register New Patients</Typography>
            </Box>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default Title;
