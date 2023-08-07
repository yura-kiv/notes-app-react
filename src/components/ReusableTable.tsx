import React from "react";

interface TableProps {
  theadData: (string | JSX.Element)[];
  tbodyData: [][];
}

const ReusableTable: React.FC<TableProps> = ({ theadData, tbodyData }) => {
  return (
    <table
      className="table"
      id="table"
    >
      <thead>
        <tr>
          {theadData.map((data, index) => {
            return <td key={index}>{data}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((row, index) => {
          return (
            <tr key={index}>
              {row.map((el: [], index) => {
                return <td key={index}>{el}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ReusableTable;
