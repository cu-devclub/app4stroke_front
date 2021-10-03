import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  rootSearch: {
    marginBottom: "16px",
  },
  pageTitle: {
    "& .MuiTypography-subtitle2": {
      color: "#979797",
      fontSize: "16px",
    },
    "& .MuiTypography-h6": {
      fontSize: "24px",
    },
  },
  search: {
    "& .MuiTextField-root": {
      width: "200px",
    },
    fontSize: "20px",
  },
  buttonSearch: {
    backgroundColor: "#EF5DA8",
    color: "#ffffff",
    textTransform: "none",
    borderRadius: "20px",
    fontSize: "18px",
  },
  childTextFieldMargin: {
    textAlign: "right",
    "& div > div": {
      marginRight: "16px",
    },
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
  pageContent: {
    padding: theme.spacing(3),
    borderRadius: "15px",
  },
  rootRow: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#FFF6FD",
    },
  },
}));

const TableCellHead = withStyles({
  root: {
    border: "0px",
    color: "#192068",
    fontSize: "18px",
  },
})(TableCell);

const TableCellBody = withStyles({
  root: {
    border: "0px",
    color: "#3A3A3D",
    fontSize: "14px",
  },
})(TableCell);

export function createData(
  testID: string,
  date: string,
  patientID: string,
  name: string,
  age: number,
  cardioembolicProbability: number
) {
  return { testID, date, patientID, name, age, cardioembolicProbability };
}

interface TableProps {
  rows?: Array<{
    testID: string;
    date: string;
    patientID: string;
    name: string;
    age: number;
    cardioembolicProbability: number;
  }>;
  headCells?: Array<{ id: string; label: string; align: string }>;
}

const Tables = ({ rows, headCells }: TableProps) => {
  const history = useHistory();
  const classes = useStyles();
  const [filteredRows, setFilteredRows] = useState(rows);
  useEffect(() => {
    setFilteredRows(rows);
  }, [rows]);
  const [patientId, setPatientId] = useState('');
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const TblContainer: React.FC = (props: any) => (
    <Table>{props.children}</Table>
  );
  const pages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[0]);
  const parseDate = (date: string) => {
    const split = date.split('/');
    const day = split[0];
    const month = split[1];
    const year = split[2];
    return new Date(year + '/' + month + '/' + day);
  };
  const handleSearch = () => {
    setFilteredRows(rows?.filter(row => 
      (patientId? row.patientID == patientId: true) && 
      (name? row.name.toLowerCase().includes(name.toLowerCase()): true) &&       
      (startDate? parseDate(row.date).getTime() >= Date.parse(startDate): true) && 
      (endDate? parseDate(row.date).getTime() <= Date.parse(endDate): true)
      ));
    setPatientId('');
    setName('');
    setStartDate('');
    setEndDate('');
    setPage(0);
  };
  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const TblHead: React.FC = () => (
    <TableHead>
      <TableRow>
        {headCells &&
          headCells.map((headCell: any) => (
            <TableCellHead align={headCell.align} key={headCell.id}>
              {headCell.label}
            </TableCellHead>
          ))}
      </TableRow>
    </TableHead>
  );

  const TblCenter = ({
    data,
    align,
  }: {
    data?: string | number;
    align: "left" | "right" | "inherit" | "center" | "justify" | undefined;
  }) => <TableCellBody align={align}>{data}</TableCellBody>;

  const TblCenterButtonView = ({ path }: { path: string }) => (
    <TableCellBody align="center">
      <Button
        className={classes.buttonView}
        onClick={() => history.push(`/result/${path}`)}
      >
        View
      </Button>
    </TableCellBody>
  );

  return (
    <>
      <Grid container className={classes.rootSearch}>
        <Grid item xs={12} md={2}>
          <Typography variant="h6">Patient Tests</Typography>
          <Typography variant="subtitle2">Total {rows? rows.length: 0} records</Typography>
        </Grid>
        <Grid item xs={12} md={10} className={classes.childTextFieldMargin}>
          <TextField id="patientID" label="Patient ID" value={patientId} onChange={(e: any) => setPatientId(e.target.value)}></TextField>
          <TextField id="name" label="Name" value={name} onChange={(e: any) => {setName(e.target.value);}}></TextField>
          <TextField
            id="start-date"
            label="Start Date"
            type="date"
            value={startDate}
            onChange={(e: any) => setStartDate(e.target.value)}
            defaultValue={null}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="end-date"
            label="End Date"
            type="date"
            value={endDate}
            onChange={(e: any) => setEndDate(e.target.value)}
            defaultValue={null}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button className={classes.buttonSearch} onClick={handleSearch}>Search</Button>
        </Grid>
      </Grid>
   
    <Paper className={classes.pageContent}>
      <TblContainer>
        <TblHead />
        <TableBody>
          {filteredRows != undefined &&
            filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index} className={classes.rootRow}>
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
      <TablePagination
        page={page}
        rowsPerPageOptions={pages}
        rowsPerPage={rowsPerPage}
        count={filteredRows? filteredRows.length : 0}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
};

export default Tables;
