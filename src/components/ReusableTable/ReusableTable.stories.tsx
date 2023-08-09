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

export const NoteTableEmptyExample: Story = {
  args: {
    theadData: theadNotesData,
    tbodyData: [],
  },
};

export const NoteTableExample: Story = {
  args: {
    ...NoteTableEmptyExample.args,
    tbodyData: tbodyData,
  },
};
