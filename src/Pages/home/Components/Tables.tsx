import React, { useState } from "react";
import {
  Button,
  makeStyles,
  Table,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  buttonView: {
    backgroundColor: "transparent",
    color: "#CF658D",
    border: "1.5px solid #CF658D",
    textTransform: "none",
    borderRadius: "20px",
    fontSize: "16px",
    height: "30px",
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
  const TblContainer: React.FC = (props: any) => (
    <Table>{props.children}</Table>
  );

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

  const TblPagination: React.FC = () => {
    const pages = [5, 10, 25];
    const [page, setPage] = useState(0);
    const [rowsPerPage] = useState(pages[page]);

    const handleChangePage = (event: any, newPage: number) => {
      setPage(newPage);
    };

    return (
      <TablePagination
        page={page}
        rowsPerPageOptions={pages}
        rowsPerPage={rowsPerPage}
        count={rows !== undefined ? rows.length : 0}
        onPageChange={handleChangePage}
      />
    );
  };

  return {
    TblContainer,
    TblHead,
    TblCenter,
    TblPagination,
    TblCenterButtonView,
  };
};

export default Tables;
