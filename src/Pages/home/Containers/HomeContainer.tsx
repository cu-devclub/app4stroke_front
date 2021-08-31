import {
  TableBody,
  makeStyles,
  Paper,
  TableRow,
  Button,
  Box,
} from "@material-ui/core";
import React from "react";
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
