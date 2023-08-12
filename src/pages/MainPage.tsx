import React, { useState } from "react";
import SummaryTable from "../containers/SummaryTable";
import NotesTable from "../containers/NotesTable";
import CustomButton from "../components/CustomButton/CustomButton";
import NoteModal from "../components/NoteModal/NoteModal";
import { addNote } from "../redux/slices/notesSlice";
import { useAppDispatch } from "../hooks/hooksRedux";

const MainPage = () => {
  const [isShowArchived, setIsShowArchived] = useState<boolean>(true);
  const [isCreateNoteModalACtive, setIsCreateNoteModalACtive] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  return (
    <div className="w-full flex flex-wrap justify-center">
      <NoteModal
        open={isCreateNoteModalACtive}
        handleClose={() => {
          setIsCreateNoteModalACtive(false);
        }}
        header="Create note"
        prevContent=""
        prevName=""
        prevCategory="Task"
        completeModalBtnCallback={function (name: string, content: string, category: string) {
          dispatch(addNote({ name, content, category }));
        }}
      />
      <NotesTable isShowArchived={isShowArchived} />
      <div className="w-full flex justify-around mt-5">
        <CustomButton
          color="green"
          onClick={() => {
            setIsCreateNoteModalACtive(true);
          }}
        >
          Create note
        </CustomButton>
        <CustomButton
          color="blue"
          onClick={() => {
            setIsShowArchived((prev) => !prev);
          }}
        >
          {isShowArchived ? "Show archived" : "Show active"}
        </CustomButton>
      </div>
      <SummaryTable />
    </div>
  );
};

export default MainPage;
