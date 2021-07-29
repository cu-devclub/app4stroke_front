import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import Controls from "./Control/Control";

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
    marginBottom: "48px",
    marginLeft: "32px",
    color: "#797979",
    fontSize: "24px",
    fontWeight: "bold",
    lineHeight: "32px",
    letterSpacing: "0.4px",
  },
}));

const RValues = {
  levelOfConsciousness: "",
  twoQuestions: "",
  twoCommands: "",
  bestGaze: "",
  bestVisual: "",
  facialPalsy: "",
  bestMotorLeftArm: "",
  bestMotorRightArm: "",
  bestMotorLeftLeg: "",
  bestMotorRightLeg: "",
  limbAtaxia: "",
  sensory: "",
  bestLanguageAphasia: "",
  dysarthria: "",
  extinctionOrNeglect: "",
};

const NIHSSSection: React.FC = () => {
  const classes = useStyles();
  const [values, setValues] = useState(RValues);
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <Typography className={classes.textNIHSS}>
        National Institute of Health Stroke Scale
      </Typography>
      <Box>
        <Controls.PinkRadio
          name="levelOfConsciousness"
          label="1a. Level of consciousness"
          value={values.levelOfConsciousness}
          onChange={handleInputChange}
          items={LevelOfConsciousness}
        />
      </Box>
      <Box>
        <Controls.PinkRadio
          name="twoQuestions"
          label="1b. Two questions"
          value={values.twoQuestions}
          onChange={handleInputChange}
          items={TwoQuestions}
        />
      </Box>
      <Box>
        <Controls.PinkRadio
          name="twoCommands"
          label="1c. Two commands"
          value={values.twoCommands}
          onChange={handleInputChange}
          items={TwoCommands}
        />
      </Box>
      <Box>
        <Controls.PinkRadio
          name="bestGaze"
          label="2. Best gaze"
          value={values.bestGaze}
          onChange={handleInputChange}
          items={BestGaze}
        />
      </Box>
      <Box>
        <Controls.PinkRadio
          name="bestVisual"
          label="3. Best visual"
          value={values.bestVisual}
          onChange={handleInputChange}
          items={BestVisual}
        />
      </Box>
      <Box>
        <Controls.PinkRadio
          name="facialPalsy"
          label="4. Facial palsy"
          value={values.facialPalsy}
          onChange={handleInputChange}
          items={FacialPalsy}
        />
      </Box>
      <Box>
        <Controls.PinkRadio
          name="bestMotorLeftArm"
          label="5a. Best motor left arm"
          value={values.bestMotorLeftArm}
          onChange={handleInputChange}
          items={BestMotor}
        />
        <Box>
          <Controls.PinkRadio
            name="bestMotorRightArm"
            label="5b. Best motor right arm"
            value={values.bestMotorRightArm}
            onChange={handleInputChange}
            items={BestMotor}
          />
        </Box>
        <Box>
          <Controls.PinkRadio
            name="bestMotorLeftLeg"
            label="6a. Best motor left leg"
            value={values.bestMotorLeftLeg}
            onChange={handleInputChange}
            items={BestMotor}
          />
        </Box>
        <Box>
          <Controls.PinkRadio
            name="bestMotorRightLeg"
            label="6b. Best motor right leg"
            value={values.bestMotorRightLeg}
            onChange={handleInputChange}
            items={BestMotor}
          />
        </Box>
        <Box>
          <Controls.PinkRadio
            name="limbAtaxia"
            label="7. Limb Ataxia"
            value={values.limbAtaxia}
            onChange={handleInputChange}
            items={LimbAtaxia}
          />
        </Box>
        <Box>
          <Controls.PinkRadio
            name="sensory"
            label="8. Sensory"
            value={values.sensory}
            onChange={handleInputChange}
            items={Sensory}
          />
        </Box>
        <Box>
          <Controls.PinkRadio
            name="bestLanguageAphasia"
            label="9. Best language Aphasia"
            value={values.bestLanguageAphasia}
            onChange={handleInputChange}
            items={BestLanguageAphasia}
          />
        </Box>
        <Box>
          <Controls.PinkRadio
            name="dysarthria"
            label="10. Dysarthria"
            value={values.dysarthria}
            onChange={handleInputChange}
            items={Dysarthria}
          />
        </Box>
        <Box>
          <Controls.PinkRadio
            name="extinctionOrNeglect"
            label="11. Extinction or neglect"
            value={values.extinctionOrNeglect}
            onChange={handleInputChange}
            items={ExtinctionOrNeglect}
          />
        </Box>
      </Box>
    </>
  );
};

export default NIHSSSection;
