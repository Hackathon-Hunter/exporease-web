"use client";

import React, { useState } from 'react';
import Select, { components } from 'react-select';

const CustomDropdownIndicator = () => {
    return null; 
};

interface Option {
    value: string;
    label: string;
}

interface MyMultipleSelectProps {
    options: Option[];
}

const MyMultipleSelect: React.FC<MyMultipleSelectProps> = ({ options, placeholder }) => {
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

    const handleChange = (selected: Option[]) => {
        setSelectedOptions(selected);
    };

    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            border: '1px solid #d1d5db', 
            boxShadow: 'none',
            '&:hover': {
                border: '1px solid #a1a1aa', 
            },
            borderRadius: "8px"
        }),
        multiValue: (provided: any) => ({
            ...provided,
            backgroundColor: '#e5e7eb', 
        }),
        placeholder: (provided: any) => ({
            ...provided,
            color: '#6b7280',
            textAlign: 'left', 
        }),
        singleValue: (provided: any) => ({
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
