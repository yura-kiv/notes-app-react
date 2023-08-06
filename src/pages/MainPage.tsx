import React, { useState } from "react";
import SummaryTable from "../containers/SummaryTable";
import NotesTable from "../containers/NotesTable";
import Button from "../components/CustomButton";
import NoteModal from "../components/NoteModal";
import { addNote } from "../redux/slices/notesSlice";
import { useAppDispatch } from "../hooks/hooksRedux";

const MainPage = () => {
  const [isShowArchived, setIsShowArchived] = useState<boolean>(true);
  const [isCreateNoteModalACtive, setIsCreateNoteModalACtive] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  return (
    <>
      <NotesTable isShowArchived={isShowArchived} />
      <div className="buttons-wrapper">
        <Button
          callback={() => {
            setIsCreateNoteModalACtive(true);
          }}
        >
          Create note
        </Button>
        <Button
          callback={() => {
            setIsShowArchived((prev) => !prev);
          }}
        >
          {isShowArchived ? "Show archived" : "Show active"}
        </Button>
      </div>
      <SummaryTable />
      <NoteModal
        open={isCreateNoteModalACtive}
        handleClose={() => {
          setIsCreateNoteModalACtive(false);
        }}
        header="Create note"
        prevContent=""
        prevName=""
        prevCategory="Task"
        completeBtnCallback={function (name: string, content: string, category: string) {
          dispatch(addNote({ name, content, category }));
        }}
      />
    </>
  );
};

export default MainPage;
