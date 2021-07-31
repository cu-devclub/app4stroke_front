import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Controls from "./Control/Control";
import { ErrorMessage, setNestedObjectValues } from "formik";

const LevelOfConsciousness = [
  { id: "Alert", title: "0 : Alert" },
  { id: "Drowsy", title: "1 : Drowsy" },
  { id: "Stuporous", title: "2 : Stuporous" },
  { id: "Coma", title: "3 : Coma" },
];

const TwoQuestions = [
  { id: "BothCorrect", title: "0 : Both correct" },
  { id: "OneCorrect", title: "1 : One correct" },
  { id: "NoneCorrect", title: "2 : None correct" },
];

const TwoCommands = [
  { id: "ObeysBoth", title: "0 : Obeys both" },
  { id: "ObeysOne", title: "1 : Obeys one" },
  { id: "ObeysNone", title: "2 : Obeys none" },
];

const BestGaze = [
  { id: "Normal", title: "0 : Normal" },
  { id: "PartialGazePulsy", title: "1 : Partial gaze pulsy" },
  { id: "ForcedDeviation", title: "2 : Forced deviation" },
];

const BestVisual = [
  { id: "NoVisualLoss", title: "0 : No visual loss" },
  { id: "PartialHemianopia", title: "1 : Partial hemianopia" },
  { id: "CompleteHemianopia", title: "2 : Complete hemianopia" },
  { id: "BilateralHemianopia", title: "3 : Bilateral hemianopia" },
];

const FacialPalsy = [
  { id: "Normal", title: "0: Normal" },
  { id: "Minor", title: "1: Minor" },
  { id: "Partial", title: "2 : Partial" },
  { id: "Complete", title: "3 : Complete" },
];

const BestMotor = [
  { id: "NoDrift", title: "0 : No drift" },
  { id: "Drift", title: "1 : Drift" },
  { id: "FallIn10Seconds", title: "2 : Fall in 10 seconds" },
  { id: "NoEffortAgainstGravity", title: "3 : No effort against gravity" },
  { id: "NoMovement", title: "4 : No movement" },
  { id: "AmputationOrJointFusion", title: "UN : Amputation or joint fusion" },
];

const LimbAtaxia = [
  { id: "Absent", title: "0 : Absent" },
  { id: "UpperOrLowerLimb", title: "1 : Upper or lower limb" },
  { id: "UpperAndLowerLimb", title: "2 : Upper and lower limb" },
  { id: "AmputationOrJointFusion", title: "UN : Amputation or joint fusion" },
];

const Sensory = [
  { id: "Normal", title: "0 : Normal" },
  { id: "PartialLoss", title: "1 : Partial loss" },
  { id: "DenseLoss", title: "2 : Dense loss" },
];

const BestLanguageAphasia = [
  { id: "No aphasia", title: "0 : No aphasia" },
  { id: "MildToModerate", title: "1 : Mild to moderate" },
  { id: "Severe", title: "2 : Severe" },
  { id: "Mute", title: "3 : Mute" },
];

const Dysarthria = [
  { id: "NormalArticulation", title: "0 : Normal articulation" },
  { id: "MildToModerate", title: "1 : Mild to moderate" },
  { id: "Severe", title: "2 : Severe" },
  {
    id: "IntubatedOrOtherPhysicalBarrier",
    title: "UN : Intubated or other physical barrier",
  },
];

const ExtinctionOrNeglect = [
  { id: "NoNeglect", title: "0 : No neglect" },
  { id: "SensoryOrVisual", title: "1 : Sensory or visual" },
  { id: "SensoryAndVisual", title: "2 : Sensory and visual" },
];

const useStyles = makeStyles(() => ({
  textNIHSS: {
    marginTop: "-15px",
    marginBottom: "48px",
    marginLeft: "32px",
    color: "#797979",
    fontSize: "24px",
    fontWeight: "bold",
    lineHeight: "32px",
    letterSpacing: "0.4px",
  },
  text: {
    marginLeft: "32px",
    marginTop: "40px",
    color: "#3A3A3D",
    fontSize: "24px",
    fontWeight: "bold",
    letterSpacing: "0.4px",
    lineHeight: "32px",
  },
  error: {
    marginLeft: "32px",
    color: "#FF0000",
    fontSize: "12px",
    letterSpacing: "0.4px",
    lineHeight: "20px",
  },
}));

interface NIHSSProps {
  levelOfConsciousness: string;
  twoQuestions: string;
  twoCommands: string;
  bestGaze: string;
  bestVisual: string;
  facialPalsy: string;
  bestMotorLeftArm: string;
  bestMotorRightArm: string;
  bestMotorLeftLeg: string;
  bestMotorRightLeg: string;
  limbAtaxia: string;
  sensory: string;
  bestLanguageAphasia: string;
  dysarthria: string;
  extinctionOrNeglect: string;
}

interface Props {
  values: NIHSSProps;
  fieldName: string;
  onChange: any;
}

const NIHSSSection = (props: Props) => {
  const classes = useStyles();
  const { values, fieldName, onChange } = props;
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    onChange(fieldName, { ...values, [name]: value });
  };

  return (
    <>
      <Typography className={classes.textNIHSS}>
        National Institute of Health Stroke Scale
      </Typography>

      <Box>
        <Typography className={classes.text}>
          1a. Level of consciousness
        </Typography>
        <ErrorMessage name={`${fieldName}.levelOfConsciousness`}>
          {(msg) => <div className={classes.error}>{msg}</div>}
        </ErrorMessage>
        <Controls.PinkRadio
          name="levelOfConsciousness"
          value={values.levelOfConsciousness}
          onChange={handleInputChange}
          items={LevelOfConsciousness}
        />
      </Box>
      <Box>
        <Typography className={classes.text}>1b. Two questions</Typography>
        <ErrorMessage name={`${fieldName}.twoQuestions`}>
          {(msg) => <div className={classes.error}>{msg}</div>}
        </ErrorMessage>
        <Controls.PinkRadio
          name="twoQuestions"
          value={values.twoQuestions}
          onChange={handleInputChange}
          items={TwoQuestions}
        />
      </Box>
      <Box>
        <Typography className={classes.text}>1c. Two commands</Typography>
        <ErrorMessage name={`${fieldName}.twoCommands`}>
          {(msg) => <div className={classes.error}>{msg}</div>}
        </ErrorMessage>
        <Controls.PinkRadio
          name="twoCommands"
          value={values.twoCommands}
          onChange={handleInputChange}
          items={TwoCommands}
        />
      </Box>
      <Box>
        <Typography className={classes.text}>2. Best gaze</Typography>
        <ErrorMessage name={`${fieldName}.bestGaze`}>
          {(msg) => <div className={classes.error}>{msg}</div>}
        </ErrorMessage>
        <Controls.PinkRadio
          name="bestGaze"
          value={values.bestGaze}
          onChange={handleInputChange}
          items={BestGaze}
        />
      </Box>
      <Box>
        <Typography className={classes.text}>3. Best visual</Typography>
        <ErrorMessage name={`${fieldName}.bestVisual`}>
          {(msg) => <div className={classes.error}>{msg}</div>}
        </ErrorMessage>
        <Controls.PinkRadio
          name="bestVisual"
          value={values.bestVisual}
          onChange={handleInputChange}
          items={BestVisual}
        />
      </Box>
      <Box>
        <Typography className={classes.text}>4. Facial palsy</Typography>
        <ErrorMessage name={`${fieldName}.facialPalsy`}>
          {(msg) => <div className={classes.error}>{msg}</div>}
        </ErrorMessage>
        <Controls.PinkRadio
          name="facialPalsy"
          value={values.facialPalsy}
          onChange={handleInputChange}
          items={FacialPalsy}
        />
      </Box>
      <Box>
        <Typography className={classes.text}>
          5a. Best motor left arm
        </Typography>
        <ErrorMessage name={`${fieldName}.bestMotorLeftArm`}>
          {(msg) => <div className={classes.error}>{msg}</div>}
        </ErrorMessage>
        <Controls.PinkRadio
          name="bestMotorLeftArm"
          value={values.bestMotorLeftArm}
          onChange={handleInputChange}
          items={BestMotor}
        />
      </Box>
      <Box>
        <Typography className={classes.text}>
          5b. Best motor right arm
        </Typography>
        <ErrorMessage name={`${fieldName}.bestMotorRightArm`}>
          {(msg) => <div className={classes.error}>{msg}</div>}
        </ErrorMessage>
        <Controls.PinkRadio
          name="bestMotorRightArm"
          value={values.bestMotorRightArm}
          onChange={handleInputChange}
          items={BestMotor}
        />
      </Box>
      <Box>
        <Typography className={classes.text}>
          6a. Best motor left leg
        </Typography>
        <ErrorMessage name={`${fieldName}.bestMotorLeftLeg`}>
          {(msg) => <div className={classes.error}>{msg}</div>}
        </ErrorMessage>
        <Controls.PinkRadio
          name="bestMotorLeftLeg"
          value={values.bestMotorLeftLeg}
          onChange={handleInputChange}
          items={BestMotor}
        />
      </Box>
      <Box>
        <Typography className={classes.text}>
          6b. Best motor right leg
        </Typography>
        <ErrorMessage name={`${fieldName}.bestMotorRightLeg`}>
          {(msg) => <div className={classes.error}>{msg}</div>}
        </ErrorMessage>
        <Controls.PinkRadio
          name="bestMotorRightLeg"
          label="6b. Best motor right leg"
          value={values.bestMotorRightLeg}
          onChange={handleInputChange}
          items={BestMotor}
        />
      </Box>
      <Box>
        <Typography className={classes.text}>7. Limb Ataxia</Typography>
        <ErrorMessage name={`${fieldName}.limbAtaxia`}>
          {(msg) => <div className={classes.error}>{msg}</div>}
        </ErrorMessage>
        <Controls.PinkRadio
          name="limbAtaxia"
          value={values.limbAtaxia}
          onChange={handleInputChange}
          items={LimbAtaxia}
        />
      </Box>
      <Box>
        <Typography className={classes.text}>8. Sensory</Typography>
        <ErrorMessage name={`${fieldName}.sensory`}>
          {(msg) => <div className={classes.error}>{msg}</div>}
        </ErrorMessage>
        <Controls.PinkRadio
          name="sensory"
          value={values.sensory}
          onChange={handleInputChange}
          items={Sensory}
        />
      </Box>
      <Box>
        <Typography className={classes.text}>
          9. Best language Aphasia
        </Typography>
        <ErrorMessage name={`${fieldName}.bestLanguageAphasia`}>
          {(msg) => <div className={classes.error}>{msg}</div>}
        </ErrorMessage>
        <Controls.PinkRadio
          name="bestLanguageAphasia"
          value={values.bestLanguageAphasia}
          onChange={handleInputChange}
          items={BestLanguageAphasia}
        />
      </Box>
      <Box>
        <Typography className={classes.text}>10. Dysarthria</Typography>
        <ErrorMessage name={`${fieldName}.dysarthria`}>
          {(msg) => <div className={classes.error}>{msg}</div>}
        </ErrorMessage>
        <Controls.PinkRadio
          name="dysarthria"
          value={values.dysarthria}
          onChange={handleInputChange}
          items={Dysarthria}
        />
      </Box>
      <Box>
        <Typography className={classes.text}>
          11. Extinction or neglect
        </Typography>
        <ErrorMessage name={`${fieldName}.extinctionOrNeglect`}>
          {(msg) => <div className={classes.error}>{msg}</div>}
        </ErrorMessage>
        <Controls.PinkRadio
          name="extinctionOrNeglect"
          value={values.extinctionOrNeglect}
          onChange={handleInputChange}
          items={ExtinctionOrNeglect}
        />
      </Box>
    </>
  );
};

export default NIHSSSection;
