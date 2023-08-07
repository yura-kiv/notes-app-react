import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";

const categories: string[] = ["Task", "Random Thought", "Idea"];

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
  const [name, setName] = useState<string>(prevName);
  const [content, setContent] = useState<string>(prevContent);
  const [category, setCategory] = useState<string>(prevCategory);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setCategory(value);
  };

  console.log(name, category, content);

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
    <div className="modal-winow-wrapper">
      <div className="modal-window">
        <h3 className="modal-window_title">{header}</h3>
        <input
          className="modal-window_input"
          defaultValue={prevName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
        />
        <input
          className="modal-window_input"
          defaultValue={prevContent}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setContent(event.target.value);
          }}
        />
        <label>
          Category:
          <select
            id="modal-window_select"
            value={category}
            onChange={handleChange}
          >
            {categories.map((category) => {
              return (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              );
            })}
          </select>
        </label>
        <CustomButton
          callback={() => {
            handleClose();
            return completeBtnCallback(name, content, category, id);
          }}
        >
          {header}
        </CustomButton>
      </div>
    </div>
  );
};

export default NoteModal;
