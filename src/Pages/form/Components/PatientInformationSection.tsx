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
import { ErrorMessage } from "formik";
import FileItem from "./FileItem";

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
    boxFileName: {
      marginTop: "16px",
      padding: "16px",
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
      "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
        {
          display: "none",
        },
    },
    errorMessage: {
      color: "#FF0000",
      fontSize: "16px",
      marginBottom: "16px",
    },
  })
);

//todo defaultProps
const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "#979797",
  border: 1,
  style: { width: "40%" },
};

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

interface PatientProps {
  patientID: string;
  age: string | number;
  firstName: string;
  lastName: string;
  gender: string;
  arrivalDate: Date | null;
  arrivalTime: Date | null;
  clearDate: Date | null;
  clearTime: Date | null;
  lastDate: Date | null;
  lastTime: Date | null;
  firstDate: Date | null;
  firstTime: Date | null;
  onset: string;
  file: any[] | null;
}

interface Props {
  values: PatientProps;
  fieldName: string;
  onChange: (field: string, value: any, shouldValidate?: boolean) => void;
}

const PatientInformationSection = (props: Props) => {
  const classes = useStyle();

  const { values, fieldName, onChange } = props;
  console.log("values.file PATIENTINFORMATION", values.file);

  const [isMaleWhite, setIsMaleWhite] = React.useState(false);
  const [isFemaleWhite, setIsFemaleWhite] = React.useState(false);
  const [showFileName, setShowFileName] = React.useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    onChange(fieldName, { ...values, [name]: value });
  };

  const handleGender = (
    event: React.MouseEvent<HTMLElement>,
    newGender: string
  ) => {
    onChange(fieldName, { ...values, gender: newGender });
  };

  //todo handleFileChange
  const handleFileChange = (e: any) => {
    const { name, value } = e.target;
    if (values.file !== null) {
      onChange(fieldName, {
        ...values,
        [name]: [...values.file, ...e.currentTarget.files],
      });
      setShowFileName(true);
    } else {
      onChange(fieldName, {
        ...values,
        [name]: [...e.currentTarget.files],
      });
      setShowFileName(true);
    }
  };

  return (
    <Box className={classes.root}>
      {/* Patient Information */}
      <Box className={classes.boxPatient}>
        <Grid container spacing={6}>
          <Grid item xs={3}>
            <TextField
              label="Enter patient ID"
              name="patientID"
              type="number"
              value={values.patientID}
              onChange={handleInputChange}
              className={classes.patientTextField}
            />
            <ErrorMessage name={`${fieldName}.patientID`}>
              {(msg) => <Box className={classes.errorMessage}>{msg}</Box>}
            </ErrorMessage>
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Enter age"
              name="age"
              type="number"
              value={values.age}
              onChange={handleInputChange}
              className={classes.patientTextField}
            />
            <ErrorMessage name={`${fieldName}.age`}>
              {(msg) => <Box className={classes.errorMessage}>{msg}</Box>}
            </ErrorMessage>
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item xs={3}>
            <TextField
              label="Enter first name"
              name="firstName"
              value={values.firstName}
              onChange={handleInputChange}
              className={classes.patientTextField}
            />
            <ErrorMessage name={`${fieldName}.firstName`}>
              {(msg) => <Box className={classes.errorMessage}>{msg}</Box>}
            </ErrorMessage>
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Enter last name"
              name="lastName"
              value={values.lastName}
              onChange={handleInputChange}
              className={classes.patientTextField}
            />
            <ErrorMessage name={`${fieldName}.lastName`}>
              {(msg) => <Box className={classes.errorMessage}>{msg}</Box>}
            </ErrorMessage>
          </Grid>
        </Grid>
      </Box>
      {/* Gender */}
      <Box className={classes.boxGender}>
        <Box className={classes.textTitle}>
          <Typography variant="h4">Gender</Typography>
          <ErrorMessage name={`${fieldName}.gender`}>
            {(msg) => <Box className={classes.errorMessage}>{msg}</Box>}
          </ErrorMessage>
        </Box>
        <Grid container>
          <Box>
            <Box textAlign="center" marginRight="24px">
              <GenderStyledToggleButtonGroup
                value={values.gender}
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
                      color={isMaleWhite ? "#FFFFFF" : "#5D5FEF"}
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
                value={values.gender}
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
                      color={isFemaleWhite ? "#FFFFFF" : "#FF4181"}
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
      <ArrivalOnset
        values={values}
        fieldName="PatientInformation"
        onChange={onChange}
      />
      {/* Upload CT Scan */}
      <Box className={classes.boxUpload}>
        <Box className={classes.textTitle}>
          <Typography variant="h4">Upload CT Scan</Typography>
          <ErrorMessage name={`${fieldName}.file`}>
            {(msg) => <Box className={classes.errorMessage}>{msg}</Box>}
          </ErrorMessage>
        </Box>
        <Button
          variant="contained"
          component="label"
          className={classes.buttonUpload}
        >
          Upload
          <input
            hidden
            multiple
            name="file"
            type="file"
            onChange={handleFileChange}
          />
        </Button>
        {/*todo File Name */}
        {showFileName && (
          <Box
            height="150px"
            overflow="auto"
            borderRadius={20}
            {...defaultProps}
            className={classes.boxFileName}
          >
            <FileItem values={values} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PatientInformationSection;
