import type { Meta, StoryObj } from "@storybook/react";
import ReusableTable from "./ReusableTable";
import { theadNotesData } from "../../containers/helpers/headersData";
import { tbodyData } from "./tableDataAsset";

const meta = {
  title: "NotesApp/ReusableTable",
  component: ReusableTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ReusableTable>;
export default meta;

type Story = StoryObj<typeof meta>;

export const NoteTableEmpty: Story = {
  args: {
    theadData: theadNotesData,
    tbodyData: [],
  },
};

export const NoteTableFilled: Story = {
  args: {
    ...NoteTableEmpty.args,
    tbodyData: tbodyData,
  },
};
