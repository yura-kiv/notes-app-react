import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import useInput from "../hooks/useInput";
import CustomSelect from "./CustomSelect";
import useSelect from "../hooks/useSelect";

const categories: string[] = ["Task", "Random Thought", "Idea"];

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
  prevCategory = categories[0],
  completeModalBtnCallback,
}) => {
  const nameInput = useInput(prevName);
  const contentInput = useInput(prevContent);
  const categorySelect = useSelect(prevCategory);

  useEffect(() => {
    nameInput.setValue(prevName);
    contentInput.setValue(prevContent);
    categorySelect.setValue(prevCategory);
    return () => {
      nameInput.setValue("");
      contentInput.setValue("");
      categorySelect.setValue("");
      nameInput.setError(false);
      contentInput.setError(false);
    };
  }, [open]);

  const validateInput = (input: { value: string; setError: (value: boolean) => void }) => {
    if (!input.value.trim()) {
      input.setError(true);
      return false;
    } else {
      input.setError(false);
      return true;
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateInput(nameInput) && validateInput(contentInput)) {
      completeModalBtnCallback(nameInput.value, contentInput.value, categorySelect.value, id);
      handleClose();
    }
  };

  return open ? (
    <div
      onClick={handleClose}
      className={
        "z-10 fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
      }
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className="relative bg-white p-8 rounded-md w-96 animate-upriseAnimation"
      >
        <form onSubmit={handleSubmit}>
          <span className="block font-bold text-lg mb-3">{header}</span>
          <CustomInput
            type="text"
            label="Name"
            name="name"
            placeholder="Please enter note name"
            {...nameInput}
          />
          <CustomInput
            type="text"
            label="Content"
            name="content"
            placeholder="Please enter note content"
            {...contentInput}
          />
          <CustomSelect
            name="category"
            label="Category"
            value={categorySelect.value}
            options={categories}
            onChange={categorySelect.onChange}
          ></CustomSelect>
          <CustomButton callback={() => {}}>{header}</CustomButton>
        </form>
      </div>
    </div>
  ) : null;
};

export default NoteModal;
