import React from "react";
import { BiEditAlt, BiFolder, BiTrashAlt, BiTask, BiBulb, BiCheckCircle } from "react-icons/bi";

type IconProps = {
  type: "Edit" | "Archive" | "Delete" | "Idea" | "Task" | "Random Thought" | string;
};

const Icon: React.FC<IconProps> = ({ type }) => {
  let icon: JSX.Element = <></>;
  switch (type) {
    case "Edit":
      icon = <BiEditAlt size={20} />;
      break;
    case "Archive":
      icon = <BiFolder size={20} />;
      break;
    case "Delete":
      icon = <BiTrashAlt size={20} />;
      break;
    case "Idea":
      icon = <BiBulb size={20} />;
      break;
    case "Task":
      icon = <BiTask size={20} />;
      break;
    case "Random Thought":
      icon = <BiCheckCircle size={20} />;
      break;
    default:
      break;
  }
  return icon;
};

export default Icon;
