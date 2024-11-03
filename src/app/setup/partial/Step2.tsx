'use client';

import React from 'react';

import MultipleSelect from '@/components/MultipleSelect';
import { Input, Select, SelectItem } from '@nextui-org/react';
import { getCountries } from '../handler';
import useTagInput from '@/hook/useTag.hook';
import { TagInput } from '@/components/TagInput';

const Step2: React.FC = () => {
  const countryData = getCountries();

  const {
    tags: targetTag,
    handleAddTag: handleAddTargetTag,
    handleRemoveTag: handleRemoveTargetTag
  } = useTagInput({ maxTags: 5 });

  const incomeExpectation = [
    {
      value: '80000000',
      label: '10jt-100jt'
    },
    {
      value: '300000000',
      label: '100jt-500jt'
    },
    {
      value: '8000000000',
      label: '500jt - 1M'
    },
    {
      value: '1500000000',
      label: '1M <'
    }
  ];

  return (
    <div className="flex flex-col gap-8 max-w-[90%] sm:max-w-[512px] w-full justify-center items-center mx-auto p-4 sm:p-0">
      <div className="bg-white p-3 rounded-lg shadow w-fit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16 8V5L19 2L20 4L22 5L19 8H16ZM16 8L12 11.9999M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7"
            stroke="#414651"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="text-center flex flex-col gap-2">
        <h3 className="text-xl sm:text-[30px] font-semibold text-center">
          Target Ekspor
        </h3>
        <span className="text-sm sm:text-base text-center">
          Berikan informasi terkait target ekspor yang ingin anda capai
        </span>
      </div>

      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col justify-start">
          <label className="text-start mb-2 text-sm sm:text-base">
            Negara tujuan
          </label>
          <MultipleSelect
            options={countryData}
            placeholder="cth: Australia, Jepang, Amerika Serikat"
          />
        </div>

        <div className="flex flex-col justify-start">
          <label className="text-start mb-2 text-sm sm:text-base">
            Target perilaku pengguna
          </label>
          <TagInput
            addTag={handleAddTargetTag}
            removeTag={handleRemoveTargetTag}
            tags={targetTag}
            maxTags={5}
            placeholder="cth: Traveller, Suka berolahraga, Pemakan manis"
          />
        </div>

        <div className="flex flex-col justify-start">
          <label className="text-start mb-2 text-sm sm:text-base">
            Ekspektasi pendapatan per bulan
          </label>
          <Select placeholder="Masukkan ekspektasi pendapatan anda">
            {incomeExpectation.map(item => (
              <SelectItem key={item.value}>{item.label}</SelectItem>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Step2;
