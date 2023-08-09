import React from "react";

type CustomSelectProps = {
  name: string;
  label: string;
  options: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CustomSelect: React.FC<CustomSelectProps> = ({ name, label, options, value, onChange }) => {
  return (
    <div>
      <label className="block mb-2">{label}</label>
      <select
        className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => {
          return <option key={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default CustomSelect;
