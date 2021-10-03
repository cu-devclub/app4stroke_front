import {
  Box,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getToken, getUserInfo } from "../../../Services/AuthService";
import { getPatientTable } from "../../../Services/UserServices";
import Tables from "../Components/Tables";
import Title from "../Components/Title";

const headCells = [
  { id: "testID", label: "Test ID", align: "center" },
  { id: "date", label: "Date", align: "center" },
  { id: "patientID", label: "Patient ID", align: "center" },
  { id: "name", label: "Name", align: "left" },
  { id: "age", label: "Age", align: "center" },
  {
    id: "cardioembolicProbability",
    label: "Cardioembolic Probability (%)",
    align: "center",
  },
];

const preprocessRows = (data: any) => {
  const rows = data.map((e: any) => {
    return {
      testID: e.testID,
      date: new Date(e.date).toLocaleDateString("en-GB"),
      patientID: e.patientID,
      name: e.firstName + " " + e.lastName,
      age: e.age,
      cardioembolicProbability: (parseFloat(e.prob) * 100).toFixed(2),
    };
  });
  rows.sort((a: any, b: any) => (a.date < b.date) ? 1 : (a.date === b.date) ? ((a.testID < b.testID) ? 1 : -1) : -1 );
  return rows;
};

const totalPatient = (rows: any) => {
  const allPatient = new Set(rows.map((row: any) => row.patientID));
  return allPatient.size;
};

const HomeContainer: React.FC = () => {

  const token = getToken();
  const userInfo = getUserInfo();
  const [rows, setRows] = useState([
    {
      testID: "",
      date: "",
      patientID: "",
      name: "",
      age: 0,
      cardioembolicProbability: 0.0,
    },
  ]);

  if (token !== null) {
    useEffect(() => {
      getPatientTable({ token: token }).then((response) => {
        setRows(preprocessRows(response.data));
      });
    }, []);
  }

  return (
    <>
      <Box paddingX={8} paddingY={8}>
        <Title userName={userInfo.userName} institute={userInfo.institute} totalCases={totalPatient(rows)}/>
        <Tables rows={rows} headCells={headCells}></Tables>
      </Box>
    </>
  );
};
export default HomeContainer;
