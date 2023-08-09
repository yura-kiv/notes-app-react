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

export const DefaultNoteModalExample: Story = {
  args: {
    header: "Create note",
    open: true,
    prevCategory: "Task",
    prevContent: "",
    prevName: "",
    id: 1,
    handleClose: () => {},
    completeModalBtnCallback: (name, content, category, id) => {
      console.log(name, content, category, id);
    },
  },
};
