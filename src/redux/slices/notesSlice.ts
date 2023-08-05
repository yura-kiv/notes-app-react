import { createSlice } from "@reduxjs/toolkit";
import { initialNotes } from "../assets/initialNotes";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../../interfaces/note";

type NotesState = {
  notes: Note[];
};

const initialState: NotesState = {
  notes: initialNotes,
};

export function getDateString(): string {
  const currentDate = new Date();
  return currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export const notesSlice = createSlice({
  name: "notesSlice",
  initialState,
  reducers: {
    addNote: (
      state,
      action: PayloadAction<{ name: string; content: string; category: string }>
    ) => {
      const { payload } = action;
      const newNote: Note = {
        id: Date.now(),
        name: payload.name,
        dateOfCreation: getDateString(),
        content: payload.content,
        category: payload.category,
        status: "active",
      };
      state.notes.push(newNote);
    },
    deleteNote: (state, action: PayloadAction<Note>) => {
      const { payload } = action;
      state.notes = state.notes.filter((note) => note.id !== payload.id);
    },
    toggleArchiveNote: (state, action: PayloadAction<Note>) => {
      const { payload } = action;
      const note = state.notes.find((note) => note.id === payload.id);
      if (note) {
        note.status = note.status === "active" ? "archived" : "active";
      }
    },
    editNote: (
      state,
      action: PayloadAction<{
        id: number | undefined;
        name: string;
        content: string;
        category: string;
      }>
    ) => {
      const { id, name, content, category } = action.payload;
      const noteIndex = state.notes.findIndex((note) => note.id === id);
      if (noteIndex !== -1) {
        state.notes[noteIndex].name = name;
        state.notes[noteIndex].content = content;
        state.notes[noteIndex].category = category;
      }
    },
  },
});

export const { addNote, deleteNote, toggleArchiveNote, editNote } = notesSlice.actions;
export default notesSlice.reducer;
