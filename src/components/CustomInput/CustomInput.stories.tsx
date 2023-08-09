import type { Meta, StoryObj } from "@storybook/react";
import CustomInput from "./CustomInput";

const meta = {
  title: "NotesApp/CustomInput",
  component: CustomInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CustomInput>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    type: "text",
    label: "Test Label",
    value: "",
    name: "input",
    placeholder: "Test placeholder",
    error: false,
    onChange: () => {},
  },
};

export const TextInput: Story = {
  args: {
    ...DefaultInput.args,
    value: "Some text",
  },
};

export const ErrorInput: Story = {
  args: {
    ...DefaultInput.args,
    error: true,
  },
};
