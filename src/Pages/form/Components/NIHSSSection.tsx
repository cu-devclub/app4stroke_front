import { Box, makeStyles, Typography } from "@material-ui/core";
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
const useStyles = makeStyles(() => ({
  textNIHSS: {
    marginTop: "16px",
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
  LevelOfConsciousness: "",
  TwoQuestions: "",
  TwoCommands: "",
  BestGaze: "",
  BestVisual: "",
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
          name="LevelOfConsciousness"
          label="1a. Level of consciousness"
          value={values.LevelOfConsciousness}
          onChange={handleInputChange}
          items={LevelOfConsciousness}
        />
      </Box>
      <Box>
        <Controls.PinkRadio
          name="TwoQuestions"
          label="1b. Two questions"
          value={values.TwoQuestions}
          onChange={handleInputChange}
          items={TwoQuestions}
        />
      </Box>
      <Box>
        <Controls.PinkRadio
          name="TwoCommands"
          label="1c. Two commands"
          value={values.TwoCommands}
          onChange={handleInputChange}
          items={TwoCommands}
        />
      </Box>
      <Box>
        <Controls.PinkRadio
          name="BestGaze"
          label="2. Best gaze"
          value={values.BestGaze}
          onChange={handleInputChange}
          items={BestGaze}
        />
      </Box>
      <Box>
        <Controls.PinkRadio
          name="BestVisual"
          label="3. Best visual"
          value={values.BestVisual}
          onChange={handleInputChange}
          items={BestVisual}
        />
      </Box>
    </>
  );
};

export default NIHSSSection;
