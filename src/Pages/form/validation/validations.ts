import React from "react";
import * as RadioData from "../Components/Control/RadioData";

const condition = (condition: string) => {
  return condition === null || condition === undefined || condition === "";
};

interface VitalSignsProps {
  systolicBP: number;
  diastolicBP: number;
  heartRate: number;
  buttonHeartRate: string;
}
interface ValidateProps {
  VitalSigns: VitalSignsProps;
  NIHSS: RadioData.NIHSSProps;
  ChiefComplaint: string;
  EKG12Leads: string;
}

const validate = (values: ValidateProps) => {
  const errors = {
    ChiefComplaint: "",
    VitalSigns: {
      systolicBP: "",
      diastolicBP: "",
      heartRate: "",
      buttonHeartRate: "",
    },
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
  if (condition(values.ChiefComplaint)) {
    errors.ChiefComplaint = "Please select time course";
  }
  if (condition(values.EKG12Leads)) {
    errors.EKG12Leads = "Please select EKG 12 leads";
  }
  if (values.VitalSigns.systolicBP < 10 || values.VitalSigns.systolicBP > 400) {
    errors.VitalSigns.systolicBP = "Please enter Systolic BP (mmHg)";
  }
  if (
    values.VitalSigns.diastolicBP < 10 ||
    values.VitalSigns.diastolicBP > 400
  ) {
    errors.VitalSigns.diastolicBP = "Please enter Diastolic BP (mmHg)";
  }
  if (values.VitalSigns.heartRate < 10 || values.VitalSigns.heartRate > 999) {
    errors.VitalSigns.heartRate = "Please select heart Rate";
  }
  if (condition(values.VitalSigns.buttonHeartRate)) {
    errors.VitalSigns.buttonHeartRate = "Please select heart rate type";
  }
  if (condition(values.NIHSS.levelOfConsciousness)) {
    errors.NIHSS.levelOfConsciousness = "Please select level of consciousness";
  }
  if (condition(values.NIHSS.twoQuestions)) {
    errors.NIHSS.twoQuestions = "Please select two questions";
  }
  if (condition(values.NIHSS.twoCommands)) {
    errors.NIHSS.twoCommands = "Please select two commands";
  }
  if (condition(values.NIHSS.bestGaze)) {
    errors.NIHSS.bestGaze = "Please select best gaze";
  }
  if (condition(values.NIHSS.bestVisual)) {
    errors.NIHSS.bestVisual = "Please select best visual";
  }
  if (condition(values.NIHSS.facialPalsy)) {
    errors.NIHSS.facialPalsy = "Please select facial palsy";
  }
  if (condition(values.NIHSS.bestMotorRightArm)) {
    errors.NIHSS.bestMotorRightArm = "Please select best motor right arm";
  }
  if (condition(values.NIHSS.bestMotorLeftArm)) {
    errors.NIHSS.bestMotorLeftArm = "Please select best motor left arm";
  }
  if (condition(values.NIHSS.bestMotorRightLeg)) {
    errors.NIHSS.bestMotorRightLeg = "Please select best motor right leg";
  }
  if (condition(values.NIHSS.bestMotorLeftLeg)) {
    errors.NIHSS.bestMotorLeftLeg = "Please select best motor left leg";
  }
  if (condition(values.NIHSS.limbAtaxia)) {
    errors.NIHSS.limbAtaxia = "Please select limb ataxia";
  }
  if (condition(values.NIHSS.sensory)) {
    errors.NIHSS.sensory = "Please select sensory";
  }
  if (condition(values.NIHSS.bestLanguageAphasia)) {
    errors.NIHSS.bestLanguageAphasia = "Please select best language aphasia";
  }
  if (condition(values.NIHSS.dysarthria)) {
    errors.NIHSS.dysarthria = "Please select dysarthria";
  }
  if (condition(values.NIHSS.extinctionOrNeglect)) {
    errors.NIHSS.extinctionOrNeglect = "Please select extinction or neglect";
  }
  return errors;
};
export default validate;
