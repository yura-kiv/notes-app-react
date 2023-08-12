import { ChangeEvent, useEffect, useState } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    setValue,
    error,
    onChange: handleChange,
    setError,
  };
};

export default useInput;
