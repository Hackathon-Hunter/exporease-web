'use client';

import React, { useState } from 'react';
import Select, {
  MultiValue,
  StylesConfig,
  CSSObjectWithLabel,
  PropsValue,
  ActionMeta
} from 'react-select';

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
  value: PropsValue<Option>;
  onChange: (
    newValue: MultiValue<Option>,
    actionMeta: ActionMeta<Option>
  ) => void;
  name: string;
}

const MyMultipleSelect: React.FC<MyMultipleSelectProps> = ({
  options,
  placeholder,
  onChange,
  value,
  name
}) => {
  const customStyles: StylesConfig<Option, true> = {
    control: (provided: CSSObjectWithLabel) => ({
      ...provided,
      border: '1px solid #d1d5db',
      boxShadow: 'none',
      '&:hover': {
        border: '1px solid #a1a1aa'
      },
      borderRadius: '8px'
    }),
    multiValue: (base: CSSObjectWithLabel) => ({
      ...base,
      backgroundColor: '#e5e7eb'
    }),
    placeholder: (provided: CSSObjectWithLabel) => ({
      ...provided,
      color: '#6b7280',
      textAlign: 'left'
    }),
    singleValue: (provided: CSSObjectWithLabel) => ({
      ...provided,
      textAlign: 'left'
    })
  };

  return (
    <div className="flex flex-col justify-start">
      <Select
        isMulti
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        styles={customStyles}
        components={{ DropdownIndicator: CustomDropdownIndicator }}
        className="w-full"
        name={name}
      />
    </div>
  );
};

export default MyMultipleSelect;
