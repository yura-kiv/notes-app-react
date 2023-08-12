import type { Meta, StoryObj } from "@storybook/react";
import NoteModal from "./NoteModal";

const meta = {
  title: "NotesApp/NoteModal",
  component: NoteModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof NoteModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const CreateNoteModal: Story = {
  args: {
    header: "Create note",
    open: true,
    prevCategory: "Task",
    prevContent: "",
    prevName: "",
    handleClose: () => {},
    completeModalBtnCallback: (name, content, category, id) => {
      console.log(name, content, category);
    },
  },
};

export const EditNoteModal: Story = {
  args: {
    header: "Create note",
    open: true,
    prevCategory: "Task",
    prevContent: "textetexttext",
    prevName: "namenamename",
    id: 1,
    handleClose: () => {},
    completeModalBtnCallback: (name, content, category, id) => {
      console.log(name, content, category, id);
    },
  },
};
