import "date-fns";
import React from "react";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { IoMaleOutline } from "react-icons/io5";
import { IoFemaleOutline } from "react-icons/io5";
import ArrivalOnset from "./ArrivalOnset";

const useStyle = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      marginTop: "0",
    },
    textTitle: {
      marginBottom: "16px",
    },
    boxPatient: {
      marginLeft: "32px",
      marginBottom: "40px",
    },
    boxGender: {
      marginLeft: "32px",
      marginBottom: "40px",
    },
    boxUpload: {
      marginLeft: "32px",
      marginBottom: "65px",
    },
    button: {
      "&.Mui-selected": {
        backgroundColor: "#EF5DA8",
        color: "#FFFFFF",
        pointerEvents: "none",
      },
    },
    buttonUpload: {
      textTransform: "none",
      color: "#FFFFFF",
      backgroundColor: "#3A3A3D",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      borderRadius: "20px",
      width: "170px",
      height: "40px",
    },
    maleIcon: {
      color: "#5D5FEF",
      fontSize: "75px",
    },
    femaleIcon: {
      color: "#FF4181",
      fontSize: "75px",
    },
    patientTextField: {
      width: "100%",
    },
  })
);

const GenderStyledToggleButtonGroup = withStyles(() => ({
  grouped: {
    marginBottom: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    width: "150px",
    height: "95px",
    backgroundColor: "#FFFFFF",
    border: "none",
    "&:not(:first-child)": {
      borderRadius: "20px",
    },
    "&:first-child": {
      borderRadius: "20px",
    },
  },
}))(ToggleButtonGroup);

const PatientInformationSection: React.FC = () => {
  const classes = useStyle();

  //! useState
  //* Gender
  const [gender, setGender] = React.useState<string | null>("");
  // icon
  const [isMaleWhite, setIsMaleWhite] = React.useState(false);
  const [isFemaleWhite, setIsFemaleWhite] = React.useState(false);

  const handleGender = (
    event: React.MouseEvent<HTMLElement>,
    newGender: string | null
  ) => {
    setGender(newGender);
  };

  return (
    <Box className={classes.root}>
      {/* Patient Information */}
      <Box className={classes.boxPatient}>
        <Grid container spacing={6}>
          <Grid item xs={3}>
            <TextField
              label="Enter patient ID"
              className={classes.patientTextField}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Enter age" className={classes.patientTextField} />
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item xs={3}>
            <TextField
              label="Enter first name"
              className={classes.patientTextField}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Enter last name"
              className={classes.patientTextField}
            />
          </Grid>
        </Grid>
      </Box>
      {/* Gender */}
      <Box className={classes.boxGender}>
        <Box className={classes.textTitle}>
          <Typography variant="h4">Gender</Typography>
        </Box>
        <Grid container>
          <Box>
            <Box textAlign="center" marginRight="24px">
              <GenderStyledToggleButtonGroup
                value={gender}
                exclusive
                onChange={handleGender}
                onClick={() => {
                  setIsMaleWhite(true);
                  setIsFemaleWhite(false);
                }}
              >
                <ToggleButton value="male" className={classes.button}>
                  <Box display="flex">
                    <IoMaleOutline
                      color={isMaleWhite ? "white" : "#5D5FEF"}
                      className={classes.maleIcon}
                    />
                  </Box>
                </ToggleButton>
              </GenderStyledToggleButtonGroup>
              <Typography variant="body1">Male</Typography>
            </Box>
          </Box>
          <Box>
            <Box textAlign="center">
              <GenderStyledToggleButtonGroup
                value={gender}
                exclusive
                onChange={handleGender}
                onClick={() => {
                  setIsMaleWhite(false);
                  setIsFemaleWhite(true);
                }}
              >
                <ToggleButton value="female" className={classes.button}>
                  <Box display="flex">
                    <IoFemaleOutline
                      color={isFemaleWhite ? "white" : "#FF4181"}
                      className={classes.femaleIcon}
                    />
                  </Box>
                </ToggleButton>
              </GenderStyledToggleButtonGroup>

              <Typography variant="body1">Female</Typography>
            </Box>
          </Box>
        </Grid>
      </Box>
      {/* Arrival Time & Onset */}
      <ArrivalOnset />
      {/* Upload CT Scan */}
      <Box className={classes.boxUpload}>
        <Box className={classes.textTitle}>
          <Typography variant="h4">Upload CT Scan</Typography>
        </Box>
        <Button
          variant="contained"
          component="label"
          className={classes.buttonUpload}
        >
          Upload
          <input type="file" hidden />
        </Button>
      </Box>
    </Box>
  );
};

export default PatientInformationSection;
