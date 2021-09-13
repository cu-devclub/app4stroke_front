import {
  TableBody,
  makeStyles,
  Paper,
  TableRow,
  Button,
  Box,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getToken } from "../../../Services/AuthService";
import { getPatientTable } from "../../../Services/UserServices";
import SearchTables from "../Components/SearchTable";
import Tables, { createData } from "../Components/Tables";
import Title from "../Components/Title";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    padding: theme.spacing(3),
    borderRadius: "15px",
  },
  buttonView: {
    backgroundColor: "transparent",
    color: "#CF658D",
    border: "1.5px solid #CF658D",
    textTransform: "none",
    borderRadius: "20px",
    fontSize: "16px",
    height: "30px",
  },
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#FFF6FD",
    },
  },
}));

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
  return rows;
};

const HomeContainer: React.FC = () => {
  const classes = useStyles();

  const token = getToken();
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

  const {
    TblContainer,
    TblHead,
    TblCenter,
    TblPagination,
    TblCenterButtonView,
  } = Tables({
    rows: rows,
    headCells: headCells,
  });

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
        <Title />
        <SearchTables />
        <Paper className={classes.pageContent}>
          <TblContainer>
            <TblHead />
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} className={classes.root}>
                  <TblCenter data={row.testID} align="center" />
                  <TblCenter data={row.date} align="center"></TblCenter>
                  <TblCenter data={row.patientID} align="center" />
                  <TblCenter data={row.name} align="left" />
                  <TblCenter data={row.age} align="center" />
                  <TblCenter
                    data={row.cardioembolicProbability}
                    align="center"
                  ></TblCenter>
                  <TblCenterButtonView path={row.testID} />
                </TableRow>
              ))}
            </TableBody>
          </TblContainer>
          <TblPagination />
        </Paper>
      </Box>
    </>
  );
};
export default HomeContainer;
