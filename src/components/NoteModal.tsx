import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import CustomButton from "./CustomButton";

const categories: string[] = ["Task", "Random Thought", "Idea"];

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface NoteModalProps {
  open: boolean;
  handleClose: () => void;
  header: string;
  prevName: string;
  prevContent: string;
  prevCategory: string;
  id?: number;
  completeModalBtnCallback: (name: string, content: string, category: string, id?: number) => void;
}

const NoteModal: React.FC<NoteModalProps> = ({
  open,
  handleClose,
  id,
  header,
  prevName = "",
  prevContent = "",
  prevCategory = "",
  completeModalBtnCallback,
}) => {
  const [name, setName] = useState<string>(prevName);
  const [content, setContent] = useState<string>(prevContent);
  const [category, setCategory] = useState<string>(prevCategory);

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setCategory(value);
  };

  useEffect(() => {
    if (open) {
      setName(prevName);
      setContent(prevContent);
      setCategory(prevCategory);
    } else {
      setName("");
      setContent("");
      setCategory("");
    }
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={() => {
        return handleClose();
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          {header}
        </Typography>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          sx={{ mb: 2, width: "100%" }}
          defaultValue={prevName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Content"
          variant="outlined"
          sx={{ mb: 2, width: "100%" }}
          defaultValue={prevContent}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setContent(event.target.value);
          }}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={handleChange}
          >
            {categories.map((category) => {
              return (
                <MenuItem
                  key={category}
                  value={category}
                >
                  {category}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <CustomButton
          callback={() => {
            handleClose();
            return completeModalBtnCallback(name, content, category, id);
          }}
        >
          {header}
        </CustomButton>
      </Box>
    </Modal>
  );
};

export default NoteModal;
