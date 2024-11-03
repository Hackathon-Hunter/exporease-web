"use client";

import React, { useState } from 'react';
import Select, { MultiValue, StylesConfig, CSSObjectWithLabel } from 'react-select';

const CustomDropdownIndicator = () => {
  return null; 
};

interface Option {
    value: string;
    label: string;
}

interface MyMultipleSelectProps {
    options: Option[];
    placeholder?: string;
}

const MyMultipleSelect: React.FC<MyMultipleSelectProps> = ({ options, placeholder }) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const handleChange = (newValue: MultiValue<Option>) => {
    setSelectedOptions(newValue as Option[]);
  };

  const customStyles: StylesConfig<Option, true> = {
    control: (provided: CSSObjectWithLabel) => ({
      ...provided,
      border: '1px solid #d1d5db',
      boxShadow: 'none',
      '&:hover': {
        border: '1px solid #a1a1aa',
      },
      borderRadius: "8px",
    }),
    multiValue: (base: CSSObjectWithLabel) => ({
      ...base,
      backgroundColor: '#e5e7eb',
    }),
    placeholder: (provided: CSSObjectWithLabel) => ({
      ...provided,
      color: '#6b7280',
      textAlign: 'left',
    }),
    singleValue: (provided: CSSObjectWithLabel) => ({
      ...provided,
      textAlign: 'left',
    }),
  };

  return (
    <div className="flex flex-col justify-start">
      <Select
        isMulti
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        placeholder={placeholder}
        styles={customStyles}
        components={{ DropdownIndicator: CustomDropdownIndicator }} 
        className="w-full"
      />
    </div>
  );
};

export default MyMultipleSelect;
