import React, { ReactNode } from "react";
import { Table, TableCell, TableHead, TableRow } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

interface Props {
  children: ReactNode;
}

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

const Tables = (/*records?: any,*/ headCells?: any) => {
  // const pages = [5, 10, 25];
  // const [page] = useState(0);
  // const [rowsPerPage] = useState(pages[page]);

  const TblContainer = (props: Props) => <Table>{props.children}</Table>;

  const TblHead = () => {
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell: any) => (
            <TableCellHead align="center" key={headCell.id}>
              {headCell.label}
            </TableCellHead>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const TblCenter = (props: Props) => (
    <TableCellBody align="center">{props.children}</TableCellBody>
  );

  // const TblPagination = () => (
  //   <TablePagination
  //     component="div"
  //     page={page}
  //     rowsPerPageOptions={pages}
  //     rowsPerPage={rowsPerPage}
  //     count={records.length}
  //   ></TablePagination>
  // );

  return {
    TblContainer,
    TblHead,
    TblCenter,
    /*TblPagination,*/
  };
};

export default Tables;
