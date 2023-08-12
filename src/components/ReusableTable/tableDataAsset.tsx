import CustomButton from "../CustomButton/CustomButton";
import Icon from "../Icon";

export const tbodyData: any[] = [
  [
    <Icon type="Task" />,
    "Task1Test",
    "April 07, 2023",
    "Task",
    "text1text1text 09/05/2021 - 12/05/2021",
    "09/05/2021, 12/05/2021",
    <CustomButton
      color="green"
      onClick={() => {}}
    >
      <Icon type="Edit" />
    </CustomButton>,
    <CustomButton
      color="yellow"
      onClick={() => {}}
    >
      <Icon type="Archive" />
    </CustomButton>,
    <CustomButton
      color="red"
      onClick={() => {}}
    >
      <Icon type="Delete" />
    </CustomButton>,
  ],
  [
    <Icon type="Idea" />,
    "Task2Test",
    "May 11, 2023",
    "Idea",
    "text2text2text 09/05/2021",
    "09/05/2021",
    <CustomButton
      color="green"
      onClick={() => {}}
    >
      <Icon type="Edit" />
    </CustomButton>,
    <CustomButton
      color="yellow"
      onClick={() => {}}
    >
      <Icon type="Archive" />
    </CustomButton>,
    <CustomButton
      color="red"
      onClick={() => {}}
    >
      <Icon type="Delete" />
    </CustomButton>,
  ],
];
