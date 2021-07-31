import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Controls from "./Control/Control";
import { ErrorMessage } from "formik";
import * as RadioData from "./Control/RadioData";

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

interface Props {
  values: RadioData.NIHSSProps;
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
          items={RadioData.LevelOfConsciousness()}
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
          items={RadioData.TwoQuestions()}
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
          items={RadioData.TwoCommands()}
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
          items={RadioData.BestGaze()}
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
          items={RadioData.BestVisual()}
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
          items={RadioData.FacialPalsy()}
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
          items={RadioData.BestMotor()}
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
          items={RadioData.BestMotor()}
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
          items={RadioData.BestMotor()}
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
          items={RadioData.BestMotor()}
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
          items={RadioData.LimbAtaxia()}
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
          items={RadioData.Sensory()}
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
          items={RadioData.BestLanguageAphasia()}
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
          items={RadioData.Dysarthria()}
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
          items={RadioData.ExtinctionOrNeglect()}
        />
      </Box>
    </>
  );
};

export default NIHSSSection;
