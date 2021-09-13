import { FormProps } from "../interfaces";
import JSZip from "jszip";

// const backendHost = "http://sern.xyz:48921";
const backendHost = "http://203.159.92.226:3000";

const zipForm = async (files: Array<any> | null) => {
  const zip = new JSZip();

  if (files !== null) {
    for (const file of files) {
      zip.file(file.name, file);
    }
  }

  return await zip.generateAsync({ type: "blob" }).then((blobdata) => {
    return new File([blobdata], "files.zip");
  });
};

const genForm = (data: any) => {
  const formData = new FormData();

  for (const dataKey in data) {
    if (data[dataKey] instanceof Object) {
      // append nested object
      for (const previewKey in data[dataKey]) {
        if (data[dataKey][previewKey] instanceof Object && dataKey !== "file") {
          for (const previewKey2 in data[dataKey][previewKey]) {
            formData.append(
              `${dataKey}_${previewKey}_${previewKey2}`,
              data[dataKey][previewKey][previewKey2]
            );
          }
        } else {
          let k;

          if (dataKey !== "file") {
            k = `${dataKey}_${previewKey}`;
          } else {
            k = `${dataKey}`;
          }

          const v = data[dataKey][previewKey];
          formData.append(k, v);
        }
      }
    } else {
      formData.append(dataKey, data[dataKey]);
    }
  }

  return formData;
};

const reversedForm = (information: any) => {
  const data = {
    PatientInformation: {
      clearDate: information["PatientInformation_clearDate"],
      lastDate: information["PatientInformation_lastDate"],
      firstDate: information["PatientInformation_firstDate"],
      patientID: information["PatientInformation_patientID"],
      age: information["PatientInformation_age"],
      firstName: information["PatientInformation_firstName"],
      lastName: information["PatientInformation_lastName"],
      gender: information["PatientInformation_gender"],
      arrivalDate: information["PatientInformation_arrivalDate"],
      onset: information["PatientInformation_onset"],
      file: [], // need to be update
    },

    ChiefComplaint: {
      timeCourse: information["ChiefComplaint_timeCourse"],
      symptoms: {
        otherText: information["ChiefComplaint_symptoms_otherText"],
        alterationOfConsciousness:
          information["ChiefComplaint_symptoms_alterationOfConsciousness"],
        facialWeakness: information["ChiefComplaint_symptoms_facialWeakness"],
        facialWeaknessLeft:
          information["ChiefComplaint_symptoms_facialWeaknessLeft"],
        facialWeaknessRight:
          information["ChiefComplaint_symptoms_facialWeaknessRight"],
        hemiparesis: information["ChiefComplaint_symptoms_hemiparesis"],
        hemiparesisLeft: information["ChiefComplaint_symptoms_hemiparesisLeft"],
        hemiparesisRight:
          information["ChiefComplaint_symptoms_hemiparesisRight"],
        hemiparesthesia: information["ChiefComplaint_symptoms_hemiparesthesia"],
        hemiparesthesiaLeft:
          information["ChiefComplaint_symptoms_hemiparesthesiaLeft"],
        hemiparesthesiaRight:
          information["ChiefComplaint_symptoms_hemiparesthesiaRight"],
        dysarthria: information["ChiefComplaint_symptoms_dysarthria"],
        aphasia: information["ChiefComplaint_symptoms_aphasia"],
        ataxia: information["ChiefComplaint_symptoms_ataxia"],
        vertigo: information["ChiefComplaint_symptoms_vertigo"],
        visualProblem: information["ChiefComplaint_symptoms_visualProblem"],
        symptoms_other: information["ChiefComplaint_symptoms_other"],
      },
    },

    UnderLyingDisease: {
      otherText: information["UnderLyingDisease_otherText"],
      deny: information["UnderLyingDisease_deny"],
      hx: information["UnderLyingDisease_hx"],
      previousTia: information["UnderLyingDisease_previousTia"],
      previousStroke: information["UnderLyingDisease_previousStroke"],
      ht: information["UnderLyingDisease_ht"],
      dm: information["UnderLyingDisease_dm"],
      dlp: information["UnderLyingDisease_dlp"],
      valvularHeartDisease:
        information["UnderLyingDisease_valvularHeartDisease"],
      af: information["UnderLyingDisease_af"],
      coronaryHeartDisease:
        information["UnderLyingDisease_coronaryHeartDisease"],
      ckd: information["UnderLyingDisease_ckd"],
      peripheralArterialDisease:
        information["UnderLyingDisease_peripheralArterialDisease"],
      obesity: information["UnderLyingDisease_obesity"],
      smoking: information["UnderLyingDisease_smoking"],
      other: information["UnderLyingDisease_other"],
    },

    VitalSigns: {
      systolicBP: information["VitalSigns_systolicBP"],
      diastolicBP: information["VitalSigns_diastolicBP"],
      heartRate: information["VitalSigns_heartRate"],
      buttonHeartRate: information["VitalSigns_buttonHeartRate"],
    },

    EKG12Leads: information["EKG12Leads"],

    NIHSS: {
      levelOfConsciousness: information["NIHSS_levelOfConsciousness"],
      twoQuestions: information["NIHSS_twoQuestions"],
      twoCommands: information["NIHSS_twoCommands"],
      bestGaze: information["NIHSS_bestGaze"],
      bestVisual: information["NIHSS_bestVisual"],
      facialPalsy: information["NIHSS_facialPalsy"],
      bestMotorLeftArm: information["NIHSS_bestMotorLeftArm"],
      bestMotorRightArm: information["NIHSS_bestMotorRightArm"],
      bestMotorLeftLeg: information["NIHSS_bestMotorLeftLeg"],
      bestMotorRightLeg: information["NIHSS_bestMotorRightLeg"],
      limbAtaxia: information["NIHSS_limbAtaxia"],
      sensory: information["NIHSS_sensory"],
      bestLanguageAphasia: information["NIHSS_bestLanguageAphasia"],
      dysarthria: information["NIHSS_dysarthria"],
      extinctionOrNeglect: information["NIHSS_extinctionOrNeglect"],
    },
  };

  return data;
};


const getTotalTests = async ({
  patientID,
  token,
}: {
  patientID: number;
  token: string;
}) : Promise<number> => {
  const res = await getPatientTable({ token });
  const totalTests = res.data.filter((e: any)=>{return e.patientID == patientID;}).length;
  return totalTests;
};


const formatDate = (dateString: string) : string => {
    return new Date(dateString).toLocaleString('en-GB').replace(',', '').slice(0, -3);
};


const formatTimeCourse = (timeCourseString: string) : string => {
    if (timeCourseString === 'wakeUP') return 'Wake-Up';
    if (timeCourseString === 'peakAtOnset') return 'Peak at Onset';
    if (timeCourseString === 'Gradual') return 'Gradual';
    if (timeCourseString === 'rapidlyImprove') return 'Rapidly Improve';
    return timeCourseString;
};


const findOnsetDate = (information: any) => {
  if (information["PatientInformation_onset"] === 'clearOnset') return information["PatientInformation_clearDate"];
  return information["PatientInformation_firstDate"];
};


const millisecToDuration = (millisec: number) => {
	const minute = 60 * 1000;
	const hour = 60 * minute;
	const day = 24 * hour;

	const days = Math.floor(millisec / day);
	const days_rem = millisec % day;
	const hours = Math.floor(days_rem / hour);
	const hours_rem = days_rem % hour;
	const minutes = Math.floor(hours_rem / minute);

	const duration = days + ' d : ' + hours + ' h : ' + minutes + ' m';

	return duration;
};

const onsetDuration = (information: any) => {
  const arrivalDate = new Date(information["PatientInformation_arrivalDate"]);
  const onsetDate = new Date(findOnsetDate(information));
  const duration = millisecToDuration(arrivalDate.getTime() - onsetDate.getTime());
  return duration;
};

const convertSideData = (information : any) => {
  const data = {
    name: information["PatientInformation_firstName"] + " " + information["PatientInformation_lastName"],
    patientID: information["PatientInformation_patientID"].toString(),
    gender: information["PatientInformation_gender"],
    age: information["PatientInformation_age"],
    arrivalDate: formatDate(information["PatientInformation_arrivalDate"]),
    totalTestsDone: 1, // need to be update
    timeCourse: formatTimeCourse(information["ChiefComplaint_timeCourse"]),
    onsetDate: formatDate(findOnsetDate(information)),
    duration: onsetDuration(information),
    symptoms: [
      "Alteration of consciousness",
      "Facial Weakness (left)",
      "Dysphasia / aphasia",
    ],
    underlyingDiseases: ["DM", "Asthma"],
    systolicBP: 80.89,
    diastolicBP: 76.79,
    heartRate: 90.9,
    heartRateText: "AF",
    EKG12Leads: "Normal",
    NIHSS: 6,
  };

  return data;
};

export const postForm = async ({
  body,
  token,
}: {
  body: FormProps;
  token: string;
}): Promise<any> => {
  const newBody = JSON.parse(JSON.stringify(body));
  delete newBody.PatientInformation.file;
  newBody.file = [await zipForm(body.PatientInformation.file)];
  const formBody = genForm(newBody);

  return fetch(`${backendHost}/api/submitPatient`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formBody,
  }).then((response) => {
    return response.json();
  });
};

export const view = ({
  testId,
  token,
}: {
  testId: string;
  token: string;
}): Promise<any> => {
  return fetch(`${backendHost}/api/view/${testId}`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
};

export const getPatientTable = ({ token }: { token: string }): Promise<any> => {
  return fetch(`${backendHost}/api/results`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
};
