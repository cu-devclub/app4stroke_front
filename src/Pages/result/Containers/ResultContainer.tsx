import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import Header from "../../HeaderFooter/Header";
import PatientFormDetail from "../Components/PatientFormDetail";
import Footer from "../../HeaderFooter/Footer";
import Result from "../Components/Result";
import { useEffect } from "react";
import Loading from "../../../Components/Loading";
import { Box } from "@material-ui/core";
import { useParams } from "react-router-dom";
import Brain1 from "../../../Assets/Brain1.jpg";
import Brain2 from "../../../Assets/Brain2.jpg";
import Brain3 from "../../../Assets/Brain3.jpg";
import Brain4 from "../../../Assets/Brain4.jpg";

const data = {
  name: "Nattasuk Chaithana",
  patientID: "10003484",
  gender: "Male",
  age: 38,
  arrivalDate: "26/05/2564 03:34",
  totalTestsDone: 2,
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
  { url: Brain1 },
  { url: Brain2 },
  { url: Brain3 },
  { url: Brain4 },
];

const mockData = {
  prob: 0.26,
  heatmapImageList: SlideImages.map((item: any) => {
    return { url1: item.url, url2: item.url };
  }),
  ctScanImageList: SlideImages,
};

const ResultContainer: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { testId } = useParams<{ testId: string }>();

  return (
    <>
      {isLoading && <Loading open={isLoading} setOpen={setIsLoading} />}
      <Box display="flex">
        <Box width="20%">
          <PatientFormDetail data={data} />
        </Box>
        <Box width="80%" paddingX={4} height="100%">
          <Result testId={testId} {...mockData} />
        </Box>
      </Box>
    </>
  );
};
export default ResultContainer;
