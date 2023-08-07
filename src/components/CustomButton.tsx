import React from "react";

interface ButtonProps {
  callback: () => void;
  children: React.ReactNode;
}

const CustomButton: React.FC<ButtonProps> = ({ callback, children }) => {
  return (
    <button
      onClick={() => {
        callback();
      }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
