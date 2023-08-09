import type { Meta, StoryObj } from "@storybook/react";
import CustomSelect from "./CustomSelect";
import useSelect from "../../hooks/useSelect";

const options = ["Task", "Random thoughts", "Idea"];

const meta = {
  title: "NotesApp/CustomSelect",
  component: CustomSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CustomSelect>;
export default meta;

type Story = StoryObj<typeof meta>;

export const InputHookExample = () => {
  const select = useSelect(options[0]);
  return (
    <CustomSelect
      name="category"
      label="Category"
      onChange={select.onChange}
      options={options}
      value={select.value}
    />
  );
};

export const DefaultInputExample: Story = {
  args: {
    name: "categories",
    label: "Categories",
    options,
    value: options[0],
    onChange: () => {},
  },
};
