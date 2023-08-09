import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  color: "green" | "yellow" | "blue" | "red";
}

function selectColor(color: string): string {
  const buttonStyles =
    "hover:text-white border font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-colors";
  switch (color) {
    case "red":
      return "text-red-700 border-red-700 hover:bg-red-800 " + buttonStyles;
      break;
    case "blue":
      return "text-blue-700 border-blue-700 hover:bg-blue-800 " + buttonStyles;
      break;
    case "green":
      return "text-green-700 border-green-700 hover:bg-green-800 " + buttonStyles;
      break;
    case "yellow":
      return "text-yellow-700 border-yellow-700 hover:bg-yellow-800 " + buttonStyles;
      break;
    default:
      return buttonStyles;
      break;
  }
}

const CustomButton: React.FC<ButtonProps> = ({ color, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={selectColor(color)}
    >
      {children}
    </button>
  );
};

export default CustomButton;
