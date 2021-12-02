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
  clearDate: Date | null;
  lastDate: Date | null;
  firstDate: Date | null;
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

export interface FormProps {
  PatientInformation: PatientProps;
  UnderLyingDisease: UnderlyingProps;
  VitalSigns: VitalSignsProps;
  NIHSS: NIHSSProps;
  ChiefComplaint: ChiefComplaintProps;
  EKG12Leads: string;
}

export interface CTScanImage {
  score: number;
  url: string;
}

export interface HeatmapImage {
  score: number;
  url1: string;
  url2: string;
}

export interface ResultProps {
  testId: string;
  prob: number;
  heatmapImageList: Array<HeatmapImage>;
  maxScoreIndex: number;
}

export interface DataProps {
  name: string;
  patientID: string;
  gender: string;
  age: number;
  arrivalDate: string;
  totalTestsDone: number;
  timeCourse: string;
  onsetDate: string;
  duration: string;
  symptoms: string[];
  underlyingDiseases: string[];
  systolicBP: number;
  diastolicBP: number;
  heartRate: number;
  heartRateText: string;
  EKG12Leads: string;
  NIHSS: number;
}

export interface PredProps {
  total_slices: number;
  maxScmax_score_sliceoreSlice: string;
  max_ct_score: string;
  imgPath: string[];
  heatmapPath: string[];
  ctScores: string[];
  prob: string;
  top_pos_factors: string[];
  top_pos_values: string[];
  top_pos_impacts: string[];
  top_neg_factors: string[];
  top_neg_values: string[];
  top_neg_impacts: string[];
  addDate: string;
  _id: string[];
  testID: number;
  __v: number;
}
