import React, { useState } from "react";
import { useAppSelector } from "../hooks/hooksRedux";
import Table from "../components/ReusableTable";
import Icon from "../components/Icon";
import { FormateRow } from "./helpers/formateRow";
import { theadNotesData } from "./helpers/headersData";
import CustomButton from "../components/CustomButton";
import { useAppDispatch } from "../hooks/hooksRedux";
import { deleteNote, editNote, toggleArchiveNote } from "../redux/slices/notesSlice";
import NoteModal from "../components/NoteModal";

interface NotesTableProps {
  isShowArchived: boolean;
}

const NotesTable: React.FC<NotesTableProps> = ({ isShowArchived }) => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.notesSlice.notes);
  const [isEditNoteModalActive, setIsEditNoteModalActive] = useState<boolean>(false);
  const [editNoteState, setEditNoteState] = useState({
    id: 0,
    name: "",
    content: "",
    category: "Task",
  });

  // Formate rows for table component like: [[name: ..., date: ..., ...], [...], [...], ...]
  const tbodyData: any[] = [];
  notes.map((note) => {
    if (
      (!isShowArchived && note.status === "archived") ||
      (isShowArchived && note.status === "active")
    ) {
      const noteIcon = <Icon type={note.category} />;
      const noteDates = FormateRow.findDatesInContent(note.content).join(", ");
      tbodyData.push([
        noteIcon,
        note.name,
        note.dateOfCreation,
        note.category,
        note.content,
        noteDates,
        <CustomButton
          callback={() => {
            setEditNoteState({
              id: note.id,
              name: note.name,
              content: note.content,
              category: note.category,
            });
            setIsEditNoteModalActive(true);
          }}
        >
          <Icon type="Edit" />
        </CustomButton>,
        <CustomButton
          callback={() => {
            dispatch(toggleArchiveNote(note));
          }}
        >
          <Icon type="Archive" />
        </CustomButton>,
        <CustomButton
          callback={() => {
            dispatch(deleteNote(note));
          }}
        >
          <Icon type="Delete" />
        </CustomButton>,
      ]);
    }
  });

  return (
    <>
      <Table
        theadData={theadNotesData}
        tbodyData={tbodyData}
      />
      <NoteModal
        open={isEditNoteModalActive}
        handleClose={() => {
          setIsEditNoteModalActive(false);
        }}
        header="Edit note"
        id={editNoteState.id}
        prevContent={editNoteState.content}
        prevName={editNoteState.name}
        prevCategory={editNoteState.category}
        completeBtnCallback={function (
          name: string,
          content: string,
          category: string,
          id?: number
        ) {
          dispatch(editNote({ name, content, category, id }));
        }}
      />
    </>
  );
};

export default NotesTable;
