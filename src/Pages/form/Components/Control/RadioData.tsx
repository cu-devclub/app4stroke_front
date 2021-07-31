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

export const LevelOfConsciousness = () => [
  { id: "Alert", title: "0 : Alert" },
  { id: "Drowsy", title: "1 : Drowsy" },
  { id: "Stuporous", title: "2 : Stuporous" },
  { id: "Coma", title: "3 : Coma" },
];

export const TwoQuestions = () => [
  { id: "BothCorrect", title: "0 : Both correct" },
  { id: "OneCorrect", title: "1 : One correct" },
  { id: "NoneCorrect", title: "2 : None correct" },
];

export const TwoCommands = () => [
  { id: "ObeysBoth", title: "0 : Obeys both" },
  { id: "ObeysOne", title: "1 : Obeys one" },
  { id: "ObeysNone", title: "2 : Obeys none" },
];

export const BestGaze = () => [
  { id: "Normal", title: "0 : Normal" },
  { id: "PartialGazePulsy", title: "1 : Partial gaze pulsy" },
  { id: "ForcedDeviation", title: "2 : Forced deviation" },
];

export const BestVisual = () => [
  { id: "NoVisualLoss", title: "0 : No visual loss" },
  { id: "PartialHemianopia", title: "1 : Partial hemianopia" },
  { id: "CompleteHemianopia", title: "2 : Complete hemianopia" },
  { id: "BilateralHemianopia", title: "3 : Bilateral hemianopia" },
];

export const FacialPalsy = () => [
  { id: "Normal", title: "0: Normal" },
  { id: "Minor", title: "1: Minor" },
  { id: "Partial", title: "2 : Partial" },
  { id: "Complete", title: "3 : Complete" },
];

export const BestMotor = () => [
  { id: "NoDrift", title: "0 : No drift" },
  { id: "Drift", title: "1 : Drift" },
  { id: "FallIn10Seconds", title: "2 : Fall in 10 seconds" },
  { id: "NoEffortAgainstGravity", title: "3 : No effort against gravity" },
  { id: "NoMovement", title: "4 : No movement" },
  { id: "AmputationOrJointFusion", title: "UN : Amputation or joint fusion" },
];

export const LimbAtaxia = () => [
  { id: "Absent", title: "0 : Absent" },
  { id: "UpperOrLowerLimb", title: "1 : Upper or lower limb" },
  { id: "UpperAndLowerLimb", title: "2 : Upper and lower limb" },
  { id: "AmputationOrJointFusion", title: "UN : Amputation or joint fusion" },
];

export const Sensory = () => [
  { id: "Normal", title: "0 : Normal" },
  { id: "PartialLoss", title: "1 : Partial loss" },
  { id: "DenseLoss", title: "2 : Dense loss" },
];

export const BestLanguageAphasia = () => [
  { id: "No aphasia", title: "0 : No aphasia" },
  { id: "MildToModerate", title: "1 : Mild to moderate" },
  { id: "Severe", title: "2 : Severe" },
  { id: "Mute", title: "3 : Mute" },
];

export const Dysarthria = () => [
  { id: "NormalArticulation", title: "0 : Normal articulation" },
  { id: "MildToModerate", title: "1 : Mild to moderate" },
  { id: "Severe", title: "2 : Severe" },
  {
    id: "IntubatedOrOtherPhysicalBarrier",
    title: "UN : Intubated or other physical barrier",
  },
];

export const ExtinctionOrNeglect = () => [
  { id: "NoNeglect", title: "0 : No neglect" },
  { id: "SensoryOrVisual", title: "1 : Sensory or visual" },
  { id: "SensoryAndVisual", title: "2 : Sensory and visual" },
];
