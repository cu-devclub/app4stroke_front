import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { ErrorMessage } from "formik";

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
    error: {
      color: "#FF0000",
      letterSpacing: "0.4px",
      lineHeight: "20px",
      fontSize: "16px",
    },
  })
);

const VitalSignsToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(3),
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    marginLeft: "5px",
    width: "180px",
    height: "81px",
    backgroundColor: "#FFFFFF",
    color: "#3A3A3D",
    border: "none",
    textTransform: "none",
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
    minWidth: "100%",
    "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
      {
        display: "none",
      },
  },
}))(TextField);

const VitalSignsBox = withStyles(() => ({
  root: {
    maxWidth: "300px",
    marginBottom: "40px",
  },
}))(Box);

interface VitalSignsProps {
  systolicBP: number | string;
  diastolicBP: number | string;
  heartRate: number | string;
  buttonHeartRate: string;
}

interface Props {
  values: VitalSignsProps;
  fieldName: string;
  onChange: (field: string, value: any, shouldValidate?: boolean) => void;
}

const VitalSignsSection = (props: Props) => {
  const classes = useStyle();
  const { values, fieldName, onChange } = props;
  const handleVitalSignsButton = (
    event: React.MouseEvent<HTMLElement>,
    newValueVitalSigns: string | null
  ) => {
    onChange(fieldName, { ...values, buttonHeartRate: newValueVitalSigns });
  };
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    onChange(fieldName, { ...values, [name]: value });
  };
  return (
    <Box className={classes.root}>
      <VitalSignsBox>
        <VitalSignsTextField
          name="systolicBP"
          label="Enter Systolic BP (mmHg)"
          value={values.systolicBP}
          onChange={handleInputChange}
          type="number"
        />
        <ErrorMessage name={`${fieldName}.systolicBP`}>
          {(msg) => <div className={classes.error}>{msg}</div>}
        </ErrorMessage>
      </VitalSignsBox>
      <VitalSignsBox>
        <VitalSignsTextField
          name="diastolicBP"
          label="Enter Diastolic BP (mmHg)"
          value={values.diastolicBP}
          onChange={handleInputChange}
          type="number"
        />
        <ErrorMessage name={`${fieldName}.diastolicBP`}>
          {(msg) => <div className={classes.error}>{msg}</div>}
        </ErrorMessage>
      </VitalSignsBox>
      <Typography variant="h4">Heart rate</Typography>
      <VitalSignsBox>
        <VitalSignsTextField
          name="heartRate"
          label="Enter heart rate (bpm)"
          value={values.heartRate}
          onChange={handleInputChange}
          type="number"
        />

        <ErrorMessage name={`${fieldName}.heartRate`}>
          {(msg) => <div className={classes.error}>{msg}</div>}
        </ErrorMessage>
      </VitalSignsBox>
      <ErrorMessage name={`${fieldName}.buttonHeartRate`}>
        {(msg) => (
          <div className={classes.error} style={{ marginTop: "35px" }}>
            {msg}
          </div>
        )}
      </ErrorMessage>
      <Box>
        <VitalSignsToggleButtonGroup
          size="large"
          value={values.buttonHeartRate}
          exclusive
          onChange={handleVitalSignsButton}
          aria-label="buttonHeartRate"
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
            value="Irregular"
            aria-label="Irregular"
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
