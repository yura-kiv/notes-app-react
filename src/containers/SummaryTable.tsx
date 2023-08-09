import React from "react";
import Table from "../components/ReusableTable/ReusableTable";
import { useAppSelector } from "../hooks/hooksRedux";
import { FormateRow } from "./helpers/helpFormateRow";
import { theadSummaryData } from "./helpers/headersData";
import Icon from "../components/Icon";

const SummaryTable: React.FC = () => {
  const notesData = useAppSelector((state) => state.notesSlice.notes);
  const notesStatistic = FormateRow.getNotesStatistic(notesData);
  const tbodyData: any[] = [];

  // Formate rows for table component like: [[category: ..., active: ..., ...], [...], [...], ...]
  for (const el in notesStatistic) {
    const elIcon = <Icon type={el} />;
    tbodyData.push([elIcon, el, notesStatistic[el].active, notesStatistic[el].archive]);
  }

  return (
    <Table
      theadData={theadSummaryData}
      tbodyData={tbodyData}
    />
  );
};

export default SummaryTable;
