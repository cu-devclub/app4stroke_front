import React from "react";
import * as RadioData from "../Components/Control/RadioData";

const condition = (condition: string) => {
  return condition === null || condition === undefined || condition === "";
};

interface PatientProps {
  patientID: string;
  age: string | number;
  firstName: string;
  lastName: string;
  arrivalDate: Date | null;
  arrivalTime: Date | null;
  clearDate: Date | null;
  clearTime: Date | null;
  lastDate: Date | null;
  lastTime: Date | null;
  firstDate: Date | null;
  firstTime: Date | null;
  gender: string;
  onset: string;
  file: [] | null;
}

interface VitalSignsProps {
  systolicBP: number | string;
  diastolicBP: number | string;
  heartRate: number | string;
  buttonHeartRate: string;
}

interface ValidateProps {
  PatientInformation: PatientProps;
  VitalSigns: VitalSignsProps;
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
      lastDate: "",
      lastTime: "",
      firstDate: "",
      firstTime: "",
      gender: "",
      onset: "",
      file: "",
    },
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
  if (condition(values.PatientInformation.patientID)) {
    errors.PatientInformation.patientID = "Please enter patient ID";
  }
  if (
    typeof values.PatientInformation.age !== typeof "" ||
    values.PatientInformation.age < 1 ||
    values.PatientInformation.age > 150
  ) {
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
  //! arrival
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
  //! onset
  if (condition(values.PatientInformation.onset)) {
    errors.PatientInformation.onset = "Please select onset";
  }
  //last seen
  if (
    values.PatientInformation.lastDate === null ||
    values.PatientInformation.lastDate === undefined
  ) {
    errors.PatientInformation.lastDate = "Please enter last seen normal date";
  }
  if (
    values.PatientInformation.lastDate === null ||
    values.PatientInformation.lastDate === undefined
  ) {
    errors.PatientInformation.lastTime = "Please enter last seen normal time";
  }
  //first seen
  if (
    values.PatientInformation.firstDate === null ||
    values.PatientInformation.firstDate === undefined
  ) {
    errors.PatientInformation.firstDate =
      "Please enter first seen abnormal date";
  }
  if (
    values.PatientInformation.firstDate === null ||
    values.PatientInformation.firstDate === undefined
  ) {
    errors.PatientInformation.firstTime =
      "Please enter first seen abnormal time";
  }
  //file
  if (
    values.PatientInformation.file === null ||
    values.PatientInformation.file === undefined
  ) {
    errors.PatientInformation.file = "Please upload CT Scan file";
  }
  if (condition(values.ChiefComplaint)) {
    errors.ChiefComplaint = "Please select time course";
  }
  if (condition(values.EKG12Leads)) {
    errors.EKG12Leads = "Please select EKG 12 leads";
  }
  if (
    typeof values.VitalSigns.systolicBP !== typeof "" ||
    values.VitalSigns.systolicBP < 10 ||
    values.VitalSigns.systolicBP > 400
  ) {
    errors.VitalSigns.systolicBP = "Please enter Systolic BP (mmHg)";
  }
  if (
    typeof values.VitalSigns.diastolicBP !== typeof "" ||
    values.VitalSigns.diastolicBP < 10 ||
    values.VitalSigns.diastolicBP > 400
  ) {
    errors.VitalSigns.diastolicBP = "Please enter Diastolic BP (mmHg)";
  }
  if (
    typeof values.VitalSigns.heartRate !== typeof "" ||
    values.VitalSigns.heartRate < 10 ||
    values.VitalSigns.heartRate > 999
  ) {
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
