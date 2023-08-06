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
import { Note } from "../interfaces/note";
import CustomButton from "./CustomButton";
import { addNote } from "../redux/slices/notesSlice";
import { useAppDispatch } from "../hooks/hooksRedux";

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
  completeBtnCallback: (name: string, content: string, category: string, id?: number) => void;
}

const NoteModal: React.FC<NoteModalProps> = ({
  open,
  handleClose,
  id,
  header,
  prevName = "",
  prevContent = "",
  prevCategory = "",
  completeBtnCallback,
}) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Task");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        setName("");
        setContent("");
        setCategory("Task");
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
            setName("");
            setContent("");
            setCategory("Task");
            handleClose();
            return completeBtnCallback(name, content, category, id);
          }}
        >
          {header}
        </CustomButton>
      </Box>
    </Modal>
  );
};

export default NoteModal;
