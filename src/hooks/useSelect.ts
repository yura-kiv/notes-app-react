import { ChangeEvent, useState } from "react";

const useSelect = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    setValue,
    onChange: handleChange,
  };
};

export default useSelect;
