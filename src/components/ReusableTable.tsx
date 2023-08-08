import React from "react";

interface TableProps {
  theadData: (string | JSX.Element)[];
  tbodyData: [][];
}

const ReusableTable: React.FC<TableProps> = ({ theadData, tbodyData }) => {
  return (
    <div className="h-fit w-fit relative overflow-x-auto shadow-md rounded-lg">
      <table
        className="text-sm text-left text-gray-5"
        id="table"
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-300">
          <tr>
            {theadData.map((data, index) => {
              return (
                <th
                  className="px-6 py-3"
                  key={index}
                >
                  {data}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tbodyData.map((row, index) => {
            return (
              <tr
                className="bg-white border-b hover:bg-gray-50"
                key={index}
              >
                {row.map((el: [], index) => {
                  return (
                    <td
                      className="px-6 py-4"
                      key={index}
                    >
                      {el}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ReusableTable;
