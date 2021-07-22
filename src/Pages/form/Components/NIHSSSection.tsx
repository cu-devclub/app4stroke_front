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
    </>
  );
};

export default NIHSSSection;
