import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface TableProps {
  theadData: (string | JSX.Element)[];
  tbodyData: [][];
}

const ReusableTable: React.FC<TableProps> = ({ theadData, tbodyData }) => {
  return (
    <TableContainer
      sx={{ maxWidth: "fit-content" }}
      component={Paper}
    >
      <Table
        sx={{ minWidth: 900, maxWidth: 900 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {theadData.map((data, index) => {
              return <TableCell key={index}>{data}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tbodyData.map((row, index) => {
            return (
              <TableRow key={index}>
                {row.map((el: [], index) => {
                  return <TableCell key={index}>{el}</TableCell>;
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReusableTable;
