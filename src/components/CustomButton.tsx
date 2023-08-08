import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  callback: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ callback, children }) => {
  return (
    <button
      onClick={() => {
        callback();
      }}
      className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800
      font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-colors"
    >
      {children}
    </button>
  );
};

export default CustomButton;
