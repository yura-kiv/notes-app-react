import type { Meta, StoryObj } from "@storybook/react";
import CustomInput from "./CustomInput";
import useInput from "../../hooks/useInput";

const meta = {
  title: "NotesApp/CustomInput",
  component: CustomInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: true },
  },
} satisfies Meta<typeof CustomInput>;
export default meta;

type Story = StoryObj<typeof meta>;

export const InputWithHook = () => {
  const input = useInput("");
  return (
    <CustomInput
      type="text"
      name="name"
      label="Name"
      placeholder="Write the name"
      value={input.value}
      onChange={input.onChange}
      error={input.error}
    />
  );
};

export const DefaultInput: Story = {
  args: {
    type: "text",
    label: "Test Label",
    value: "",
    name: "input",
    placeholder: "Test placeholder",
    error: false,
    disabled: false,
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
