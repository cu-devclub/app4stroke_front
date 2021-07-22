import {
  TableBody,
  makeStyles,
  Paper,
  TableRow,
  Button,
} from "@material-ui/core";
import React from "react";
import SearchTables from "../Components/SearchTable";
import Tables, { createData } from "../Components/Tables";
import Header from "../Components/Header";
import Title from "../Components/Title";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    borderRadius: "15px",
  },
  buttonView: {
    backgroundColor: "transparent",
    color: "#CF658D",
    border: "2.5px solid #CF658D",
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
  { id: "testID", label: "Test ID" },
  { id: "date", label: "Date" },
  { id: "patientID", label: "Patient ID" },
  { id: "name", label: "Name" },
  { id: "age", label: "Age" },
  {
    id: "cardioembolicProbability",
    label: "Cardioembolic Probability (%)",
  },
];

const rows = [
  createData("1150", "28/02/2564", "12345678", "Somachi Tang", 23, 0.23),
  createData("1134", "19/02/2564", "12435637", "Evan Jefferson", 31, 0.55),
  createData("1119", "06/02/2564", "10003484", "Nattasuk Chaithana", 38, 0.12),
  createData("1118", "06/02/2564", "10475995", "Srisawut Somkierd", 42, 0.23),
  createData("1107", "04/02/2564", "20384857", "Meethana Julsiri", 26, 13),
  createData("1092", "25/01/2564", "20038480", "Sanphop Klinpipat", 63, 18),
  createData("1088", "25/01/2564", "10004832", "Malini Smith", 49, 22),
  createData("1056", "16/01/2564", "10003884", "Evan Jeffer", 68, 27),
  createData("1045", "15/01/2564", "17399400", "Leelerd Somjai", 50, 19),
  createData("1001", "12/01/2564", "19293948", "Srisaket Charoensri", 37, 25),
];

const HomeContainer: React.FC = () => {
  const classes = useStyles();
  const { TblContainer, TblHead, TblCenter, TblPagination } = Tables({
    rows: rows,
    headCells: headCells,
  });

  return (
    <>
      <Header />
      <Title />
      <SearchTables />
      <Paper className={classes.pageContent}>
        <TblContainer>
          <TblHead />
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} className={classes.root}>
                <TblCenter>{row.testID}</TblCenter>
                <TblCenter>{row.date}</TblCenter>
                <TblCenter>{row.patientID}</TblCenter>
                <TblCenter>{row.name}</TblCenter>
                <TblCenter>{row.age}</TblCenter>
                <TblCenter>{row.cardioembolicProbability}</TblCenter>
                <TblCenter>
                  <Button className={classes.buttonView}>View</Button>
                </TblCenter>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </>
  );
};
export default HomeContainer;
