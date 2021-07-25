import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyle = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      paddingTop: "5px",
      marginBottom: "32px",
      marginLeft: "32px",
    },
    buttonColor: {
      "&.Mui-selected": {
        backgroundColor: "#EF5DA8",
        color: "#FFFFFF",
        pointerEvents: "none",
      },
    },
  })
);

const VitalSignsToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(3),
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    marginLeft: "5px",
    marginTop: "-5px",
    width: "180px",
    height: "81px",
    backgroundColor: "#FFFFFF",
    color: "#3A3A3D",
    "&:not(:first-child)": {
      borderRadius: "20px",
    },
    "&:first-child": {
      borderRadius: "20px",
    },
  },
}))(ToggleButtonGroup);

const VitalSignsTextField = withStyles(() => ({
  root: {
    width: "15%",
    marginBottom: "40px",
  },
}))(TextField);

const VitalSignsSection: React.FC = () => {
  const classes = useStyle();
  const [vitalSigns, setVitalSigns] = React.useState("");
  const handleVitalSigns = (
    event: React.MouseEvent<HTMLElement>,
    newVitalSigns: string
  ) => {
    setVitalSigns(newVitalSigns);
  };
  return (
    <Box className={classes.root}>
      <Box>
        <VitalSignsTextField id="systolicBP" label="Enter Systolic BP (mmHg)" />
      </Box>
      <Box>
        <VitalSignsTextField
          id="diastolicBP"
          label="Enter Diastolic BP (mmHg)"
        />
      </Box>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Heart rate
      </Typography>
      <VitalSignsTextField id="heartRate" label="Enter heart rate (bpm)" />
      <Box>
        <VitalSignsToggleButtonGroup
          size="large"
          value={vitalSigns}
          exclusive
          onChange={handleVitalSigns}
          aria-label="Vital Signs"
        >
          <ToggleButton
            value="Normal"
            aria-label="Normal"
            className={classes.buttonColor}
          >
            <Typography>Normal</Typography>
          </ToggleButton>
          <ToggleButton
            value="AF"
            aria-label="AF"
            className={classes.buttonColor}
          >
            <Typography>AF</Typography>
          </ToggleButton>
          <ToggleButton
            value="Abnormal"
            aria-label="Abnormal"
            className={classes.buttonColor}
          >
            <Typography>Irregular</Typography>
          </ToggleButton>
          <ToggleButton
            value="N/A"
            aria-label="N/A"
            className={classes.buttonColor}
          >
            <Typography>N/A</Typography>
          </ToggleButton>
        </VitalSignsToggleButtonGroup>
      </Box>
    </Box>
  );
};
export default VitalSignsSection;
