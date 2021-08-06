import React from "react";
import * as RadioData from "../Components/Control/RadioData";

const condition = (condition: string) => {
  return condition === null || condition === undefined || condition === "";
};

interface PatientProps {
  patientID: string;
  age: string;
  firstName: string;
  lastName: string;
  arrivalDate: Date | null;
  arrivalTime: Date | null;
  clearDate: Date | null;
  clearTime: Date | null;
  gender: string;
  onset: string;
}

interface ValidateProps {
  PatientInformation: PatientProps;
  NIHSS: RadioData.NIHSSProps;
  ChiefComplaint: string;
  EKG12Leads: string;
}

const validate = (values: ValidateProps) => {
  const errors = {
    PatientInformation: {
      patientID: "",
      age: "",
      firstName: "",
      lastName: "",
      arrivalDate: "",
      arrivalTime: "",
      clearDate: "",
      clearTime: "",
      gender: "",
      onset: "",
    },
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
  if (condition(values.PatientInformation.patientID)) {
    errors.PatientInformation.patientID = "Please enter patient ID";
  }
  if (condition(values.PatientInformation.age)) {
    errors.PatientInformation.age = "Please enter age";
  }
  if (condition(values.PatientInformation.firstName)) {
    errors.PatientInformation.firstName = "Please enter first name";
  }
  if (condition(values.PatientInformation.lastName)) {
    errors.PatientInformation.lastName = "Please enter last name";
  }
  if (condition(values.PatientInformation.gender)) {
    errors.PatientInformation.gender = "Please select gender";
  }
  if (
    values.PatientInformation.arrivalDate === null ||
    values.PatientInformation.arrivalDate === undefined
  ) {
    errors.PatientInformation.arrivalDate = "Please enter arrival date";
  }
  if (
    values.PatientInformation.arrivalDate === null ||
    values.PatientInformation.arrivalDate === undefined
  ) {
    errors.PatientInformation.arrivalTime = "Please enter arrival time";
  }
  //! clear onset
  if (
    values.PatientInformation.clearDate === null ||
    values.PatientInformation.clearDate === undefined
  ) {
    errors.PatientInformation.clearDate = "Please enter clear date";
  }
  if (
    values.PatientInformation.clearDate === null ||
    values.PatientInformation.clearDate === undefined
  ) {
    errors.PatientInformation.clearTime = "Please enter clear time";
  }
  if (condition(values.PatientInformation.onset)) {
    errors.PatientInformation.onset = "Please select onset";
  }
  if (condition(values.ChiefComplaint)) {
    errors.ChiefComplaint = "Please select time course";
  }
  if (condition(values.EKG12Leads)) {
    errors.EKG12Leads = "Please select EKG 12 leads";
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
