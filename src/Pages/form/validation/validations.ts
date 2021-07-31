import React from "react";
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

interface ValidateProps {
  NIHSS: NIHSSProps;
  ChiefComplaint: string;
  EKG12Leads: string;
}

const validate = (values: ValidateProps) => {
  const errors = {
    ChiefComplaint: "",
    EKG12Leads: "",
    NIHSS: {
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
    },
  };
  if (
    values.ChiefComplaint === null ||
    values.ChiefComplaint === undefined ||
    values.ChiefComplaint === ""
  ) {
    errors.ChiefComplaint = "Please select time course";
  }
  if (
    values.EKG12Leads === null ||
    values.EKG12Leads === undefined ||
    values.EKG12Leads === ""
  ) {
    errors.EKG12Leads = "Please select EKG 12 leads";
  }

  if (
    values.NIHSS.levelOfConsciousness === null ||
    values.NIHSS.levelOfConsciousness === undefined ||
    values.NIHSS.levelOfConsciousness === ""
  ) {
    errors.NIHSS.levelOfConsciousness = "Please select level of consciousness";
  }
  if (
    values.NIHSS.twoQuestions === null ||
    values.NIHSS.twoQuestions === undefined ||
    values.NIHSS.twoQuestions === ""
  ) {
    errors.NIHSS.twoQuestions = "Please select two questions";
  }
  if (
    values.NIHSS.twoCommands === null ||
    values.NIHSS.twoCommands === undefined ||
    values.NIHSS.twoCommands === ""
  ) {
    errors.NIHSS.twoCommands = "Please select two commands";
  }
  if (
    values.NIHSS.bestGaze === null ||
    values.NIHSS.bestGaze === undefined ||
    values.NIHSS.bestGaze === ""
  ) {
    errors.NIHSS.bestGaze = "Please select best gaze";
  }
  if (
    values.NIHSS.bestVisual === null ||
    values.NIHSS.bestVisual === undefined ||
    values.NIHSS.bestVisual === ""
  ) {
    errors.NIHSS.bestVisual = "Please select best visual";
  }
  if (
    values.NIHSS.facialPalsy === null ||
    values.NIHSS.facialPalsy === undefined ||
    values.NIHSS.facialPalsy === ""
  ) {
    errors.NIHSS.facialPalsy = "Please select facial palsy";
  }
  if (
    values.NIHSS.bestMotorRightArm === null ||
    values.NIHSS.bestMotorRightArm === undefined ||
    values.NIHSS.bestMotorRightArm === ""
  ) {
    errors.NIHSS.bestMotorRightArm = "Please select best motor right arm";
  }
  if (
    values.NIHSS.bestMotorLeftArm === null ||
    values.NIHSS.bestMotorLeftArm === undefined ||
    values.NIHSS.bestMotorLeftArm === ""
  ) {
    errors.NIHSS.bestMotorLeftArm = "Please select best motor left arm";
  }
  if (
    values.NIHSS.bestMotorRightLeg === null ||
    values.NIHSS.bestMotorRightLeg === undefined ||
    values.NIHSS.bestMotorRightLeg === ""
  ) {
    errors.NIHSS.bestMotorRightLeg = "Please select best motor right leg";
  }
  if (
    values.NIHSS.bestMotorLeftLeg === null ||
    values.NIHSS.bestMotorLeftLeg === undefined ||
    values.NIHSS.bestMotorLeftLeg === ""
  ) {
    errors.NIHSS.bestMotorLeftLeg = "Please select best motor left leg";
  }
  if (
    values.NIHSS.limbAtaxia === null ||
    values.NIHSS.limbAtaxia === undefined ||
    values.NIHSS.limbAtaxia === ""
  ) {
    errors.NIHSS.limbAtaxia = "Please select limb ataxia";
  }
  if (
    values.NIHSS.sensory === null ||
    values.NIHSS.sensory === undefined ||
    values.NIHSS.sensory === ""
  ) {
    errors.NIHSS.sensory = "Please select sensory";
  }
  if (
    values.NIHSS.bestLanguageAphasia === null ||
    values.NIHSS.bestLanguageAphasia === undefined ||
    values.NIHSS.bestLanguageAphasia === ""
  ) {
    errors.NIHSS.bestLanguageAphasia = "Please select best language aphasia";
  }
  if (
    values.NIHSS.dysarthria === null ||
    values.NIHSS.dysarthria === undefined ||
    values.NIHSS.dysarthria === ""
  ) {
    errors.NIHSS.dysarthria = "Please select dysarthria";
  }
  if (
    values.NIHSS.extinctionOrNeglect === null ||
    values.NIHSS.extinctionOrNeglect === undefined ||
    values.NIHSS.extinctionOrNeglect === ""
  ) {
    errors.NIHSS.extinctionOrNeglect = "Please select extinction or neglect";
  }
  return errors;
};
export default validate;
