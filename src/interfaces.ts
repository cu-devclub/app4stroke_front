export interface ChiefComplaintProps {
  timeCourse: string;
  symptoms: {
    alterationOfConsciousness: boolean;
    facialWeakness: boolean;
    facialWeaknessLeft: boolean;
    facialWeaknessRight: boolean;
    hemiparesis: boolean;
    hemiparesisLeft: boolean;
    hemiparesisRight: boolean;
    hemiparesthesia: boolean;
    hemiparesthesiaLeft: boolean;
    hemiparesthesiaRight: boolean;
    dysarthria: boolean;
    aphasia: boolean;
    ataxia: boolean;
    vertigo: boolean;
    visualProblem: boolean;
    other: boolean;
    otherText: string;
  };
}

export interface NIHSSProps {
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

export interface PatientProps {
  patientID: string;
  age: string | number;
  firstName: string;
  lastName: string;
  gender: string;
  arrivalDate: Date | null;
  arrivalTime: Date | null;
  clearDate: Date | null;
  clearTime: Date | null;
  lastDate: Date | null;
  lastTime: Date | null;
  firstDate: Date | null;
  firstTime: Date | null;
  onset: string;
  file: any[] | null;
}

export interface VitalSignsProps {
  systolicBP: number | string;
  diastolicBP: number | string;
  heartRate: number | string;
  buttonHeartRate: string;
}

export interface UnderlyingProps {
  deny: boolean;
  hx: boolean;
  previousTia: boolean;
  previousStroke: boolean;
  ht: boolean;
  dm: boolean;
  dlp: boolean;
  valvularHeartDisease: boolean;
  af: boolean;
  coronaryHeartDisease: boolean;
  ckd: boolean;
  peripheralArterialDisease: boolean;
  obesity: boolean;
  smoking: boolean;
  other: boolean;
  otherText: string;
}
