import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import Header from "../../HeaderFooter/Header";
import PatientFormDetail from "../Components/PatientFormDetail";
import Footer from "../../HeaderFooter/Footer";
import Result from "../Components/Result";
import { useEffect } from "react";
import { Box } from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";
import { getToken } from "../../../Services/AuthService";
import { convertForResults } from "../../../Services/UserServices";
import Brain1 from "../../../Assets/Brain1.jpg";
import Brain2 from "../../../Assets/Brain2.jpg";
import Brain3 from "../../../Assets/Brain3.jpg";
import Brain4 from "../../../Assets/Brain4.jpg";
import { DataProps, PredProps } from "../../../interfaces";

const init_data = {
  name: "Nattasuk Chaithana",
  patientID: "10003484",
  gender: "Male",
  age: 38,
  arrivalDate: "26/05/2564 03:34",
  totalTestsDone: 0,
  timeCourse: "Peak at onset",
  onsetDate: "26/05/2564 02:50",
  duration: "00:44:00",
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
const SlideImages = [
  { url: Brain1, score: 0},
  { url: Brain2, score: 0},
  { url: Brain3, score: 0 },
  { url: Brain4, score: 0 },
];

const mockData = {
  prob: 0.26,
  ctScanImageList: SlideImages,
  heatmapImageList: SlideImages.map((item: any) => {
    return { url1: item.url, url2: item.url, score: item.score};
  }),
};

const ResultContainer: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();
  const token = getToken();
  const history = useHistory();
  const [data, setData] = useState<DataProps>(init_data);
  const [prediction, setPrediction] = useState<PredProps>();
  const [predData, setPredData] = useState(mockData);
  if (token !== null) {
    useEffect(() => {
      convertForResults({ testId: testId, token: token }).then((response) => {
        setData(response.sideData);
        setPrediction(response.prediction);
        setPredData({
          prob: response.prediction? parseFloat(response.prediction.prob): 0,
          heatmapImageList: SlideImages.map((item: any) => {
            return { url1: item.url, url2: item.url, score: item.score };
          }),
          ctScanImageList: SlideImages,
        });
      });
    }, []);
  }
  return (
    <>
      <Box display="flex">
        <Box width="22%">
          <PatientFormDetail data={data} testId={testId} />
        </Box>
        <Box width="78%" paddingX={4} height="100%">
          <Result testId={testId} {...predData} />
        </Box>
      </Box>
    </>
  );
};
export default ResultContainer;
