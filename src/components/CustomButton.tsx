import React from "react";
import Button from "@mui/material/Button";

interface ButtonProps {
  callback: () => void;
  children: React.ReactNode;
}

const CustomButton: React.FC<ButtonProps> = ({ callback, children }) => {
  return (
    <Button
      sx={{ my: 2 }}
      variant="contained"
      onClick={() => {
        callback();
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
