import React from "react";
import {
  ChiefComplaintProps,
  NIHSSProps,
  PatientProps,
  VitalSignsProps,
} from "../../../interfaces";
import * as RadioData from "../Components/Control/RadioData";

const condition = (condition: string) => {
  return condition === null || condition === undefined || condition === "";
};

interface ValueProps {
  PatientInformation: PatientProps;
  VitalSigns: VitalSignsProps;
  NIHSS: NIHSSProps;
  ChiefComplaint: ChiefComplaintProps;
  EKG12Leads: string;
}

const validate = (values: ValueProps) => {
  const { PatientInformation, VitalSigns, NIHSS, ChiefComplaint, EKG12Leads } =
    values;
  const errors = {
    PatientInformation: {
      patientID: "",
      age: "",
      firstName: "",
      lastName: "",
      arrivalDate: "",
      clearDate: "",
      lastDate: "",
      firstDate: "",
      gender: "",
      onset: "",
      file: "",
    },
    ChiefComplaint: {
      timeCourse: "",
      symptoms: {
        facialWeakness: "",
        hemiparesis: "",
        hemiparesthesia: "",
      },
    },
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
  if (condition(PatientInformation.patientID)) {
    errors.PatientInformation.patientID = "Please enter patient ID";
  }
  if (
    typeof PatientInformation.age !== typeof "" ||
    PatientInformation.age < 1 ||
    PatientInformation.age > 150
  ) {
    errors.PatientInformation.age = "Please enter age";
  }
  if (condition(PatientInformation.firstName)) {
    errors.PatientInformation.firstName = "Please enter first name";
  }
  if (condition(PatientInformation.lastName)) {
    errors.PatientInformation.lastName = "Please enter last name";
  }
  if (condition(PatientInformation.gender)) {
    errors.PatientInformation.gender = "Please select gender";
  }
  if (
    PatientInformation.arrivalDate === null ||
    PatientInformation.arrivalDate === undefined
  ) {
    errors.PatientInformation.arrivalDate = "Please enter arrival date";
  }
 
  if (condition(PatientInformation.onset)) {
    errors.PatientInformation.onset = "Please select onset";
  }

  if (
    (PatientInformation.onset === "clearOnset") && (PatientInformation.clearDate === null ||
    PatientInformation.clearDate === undefined)

  ) {
    errors.PatientInformation.clearDate = "Please enter clear date";
  }
  
  if (
    (PatientInformation.onset === "unknownOnset") && (PatientInformation.lastDate === null ||
    PatientInformation.lastDate === undefined)
  ) {
    errors.PatientInformation.lastDate = "Please enter last seen normal date";
  }
 
  if (
    (PatientInformation.onset === "unknownOnset") && (PatientInformation.firstDate === null ||
    PatientInformation.firstDate === undefined)
  ) {
    errors.PatientInformation.firstDate =
      "Please enter first seen abnormal date";
  }
  
  if (
    PatientInformation.file === null ||
    PatientInformation.file === undefined
  ) {
    errors.PatientInformation.file = "Please upload CT Scan file";
  }
  if (condition(ChiefComplaint.timeCourse)) {
    errors.ChiefComplaint.timeCourse = "Please select time course";
  }
  if (
    ChiefComplaint.symptoms.facialWeakness &&
    !ChiefComplaint.symptoms.facialWeaknessLeft &&
    !ChiefComplaint.symptoms.facialWeaknessRight
  ) {
    errors.ChiefComplaint.symptoms.facialWeakness =
      "Please select either left or right";
  }
  if (
    ChiefComplaint.symptoms.hemiparesis &&
    !ChiefComplaint.symptoms.hemiparesisLeft &&
    !ChiefComplaint.symptoms.hemiparesisRight
  ) {
    errors.ChiefComplaint.symptoms.hemiparesis =
      "Please select either left or right";
  }
  if (
    ChiefComplaint.symptoms.hemiparesthesia &&
    !ChiefComplaint.symptoms.hemiparesthesiaLeft &&
    !ChiefComplaint.symptoms.hemiparesthesiaRight
  ) {
    errors.ChiefComplaint.symptoms.hemiparesthesia =
      "Please select either left or right";
  }
  if (condition(EKG12Leads)) {
    errors.EKG12Leads = "Please select EKG 12 leads";
  }
  if (
    typeof VitalSigns.systolicBP !== typeof "" ||
    VitalSigns.systolicBP < 10 ||
    VitalSigns.systolicBP > 400
  ) {
    errors.VitalSigns.systolicBP = "Please enter Systolic BP (mmHg)";
  }
  if (
    typeof VitalSigns.diastolicBP !== typeof "" ||
    VitalSigns.diastolicBP < 10 ||
    VitalSigns.diastolicBP > 400
  ) {
    errors.VitalSigns.diastolicBP = "Please enter Diastolic BP (mmHg)";
  }
  if (
    typeof VitalSigns.heartRate !== typeof "" ||
    VitalSigns.heartRate < 10 ||
    VitalSigns.heartRate > 999
  ) {
    errors.VitalSigns.heartRate = "Please select heart Rate";
  }
  if (condition(VitalSigns.buttonHeartRate)) {
    errors.VitalSigns.buttonHeartRate = "Please select heart rate type";
  }
  if (condition(NIHSS.levelOfConsciousness)) {
    errors.NIHSS.levelOfConsciousness = "Please select level of consciousness";
  }
  if (condition(NIHSS.twoQuestions)) {
    errors.NIHSS.twoQuestions = "Please select two questions";
  }
  if (condition(NIHSS.twoCommands)) {
    errors.NIHSS.twoCommands = "Please select two commands";
  }
  if (condition(NIHSS.bestGaze)) {
    errors.NIHSS.bestGaze = "Please select best gaze";
  }
  if (condition(NIHSS.bestVisual)) {
    errors.NIHSS.bestVisual = "Please select best visual";
  }
  if (condition(NIHSS.facialPalsy)) {
    errors.NIHSS.facialPalsy = "Please select facial palsy";
  }
  if (condition(NIHSS.bestMotorRightArm)) {
    errors.NIHSS.bestMotorRightArm = "Please select best motor right arm";
  }
  if (condition(NIHSS.bestMotorLeftArm)) {
    errors.NIHSS.bestMotorLeftArm = "Please select best motor left arm";
  }
  if (condition(NIHSS.bestMotorRightLeg)) {
    errors.NIHSS.bestMotorRightLeg = "Please select best motor right leg";
  }
  if (condition(NIHSS.bestMotorLeftLeg)) {
    errors.NIHSS.bestMotorLeftLeg = "Please select best motor left leg";
  }
  if (condition(NIHSS.limbAtaxia)) {
    errors.NIHSS.limbAtaxia = "Please select limb ataxia";
  }
  if (condition(NIHSS.sensory)) {
    errors.NIHSS.sensory = "Please select sensory";
  }
  if (condition(NIHSS.bestLanguageAphasia)) {
    errors.NIHSS.bestLanguageAphasia = "Please select best language aphasia";
  }
  if (condition(NIHSS.dysarthria)) {
    errors.NIHSS.dysarthria = "Please select dysarthria";
  }
  if (condition(NIHSS.extinctionOrNeglect)) {
    errors.NIHSS.extinctionOrNeglect = "Please select extinction or neglect";
  }
  console.log(errors);
  return errors;
};
export default validate;
