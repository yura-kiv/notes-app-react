import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "./CustomButton";
import Icon from "../Icon";

const meta = {
  title: "NotesApp/CustomButton",
  component: CustomButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "select" },
    },
    children: {
      options: ["Edit", "Archive", "Delete"],
      mapping: {
        Edit: <Icon type="Edit" />,
        Archive: <Icon type="Archive" />,
        Delete: <Icon type="Delete" />,
      },
    },
  },
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextButton: Story = {
  args: {
    children: "Test text",
    color: "blue",
  },
};

export const IconButton: Story = {
  args: {
    children: <Icon type="Edit" />,
    color: "blue",
  },
};
