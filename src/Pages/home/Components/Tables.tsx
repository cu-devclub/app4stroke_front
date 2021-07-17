import React, { useState } from "react";
import {
  Table,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

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
  rows?: Array<Object>;
  headCells?: Array<Object>;
}

const Tables = ({ rows, headCells }: TableProps) => {
  const TblContainer: React.FC = (props: any) => (
    <Table>{props.children}</Table>
  );

  const TblHead: React.FC = () => (
    <TableHead>
      <TableRow>
        {headCells &&
          headCells.map((headCell: any) => (
            <TableCellHead align="center" key={headCell.id}>
              {headCell.label}
            </TableCellHead>
          ))}
      </TableRow>
    </TableHead>
  );

  const TblCenter: React.FC = (props) => (
    <TableCellBody align="center">{props.children}</TableCellBody>
  );

  const TblPagination: React.FC = () => {
    const pages = [5, 10, 25];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);

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
  };
};

export default Tables;
