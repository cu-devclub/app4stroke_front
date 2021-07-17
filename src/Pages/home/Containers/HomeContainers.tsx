import {
  TableBody,
  makeStyles,
  Paper,
  TableRow,
  Button,
} from "@material-ui/core";
import React from "react";
import Tables, { createData } from "../Components/Tables";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
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
  createData("1134", "19/02/2564", "12567890", "Evan", 31, 0.55),
  createData("1119", "06/02/2564", "10968899", "Nattasuk Chaithana", 38, 0.12),
  createData("1118", "06/02/2564", "13456788", "Srisawut", 42, 0.23),
  createData("1107", "04/02/2564", "24567890", "Meethana", 26, 13),
];

const { TblContainer, TblHead, TblCenter } = Tables(headCells);

const HomeContainer: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.pageContent}>
      <TblContainer>
        <TblHead />
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.testID} className={classes.root}>
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
    </Paper>
  );
};
export default HomeContainer;
