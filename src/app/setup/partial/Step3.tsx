'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Input } from '@nextui-org/react';
import { uploadProductPhoto } from '../handler';
import useApi from '@/hook/useApi.hook';
import { FormikProps } from 'formik';
import { SetupInput } from '../page.types';

type Props = {
  formik: FormikProps<SetupInput>;
};


const Step3: React.FC<Props> = ({formik}: Props) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (
      selectedFile &&
      (selectedFile.type === 'image/png' ||
        selectedFile.type === 'image/jpg' ||
        selectedFile.type === 'image/jpeg')
    ) {
      setFile(selectedFile);
    } else {
      alert('Please upload a valid image file.');
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const selectedFile = event.dataTransfer.files[0];
    if (
      selectedFile &&
      (selectedFile.type === 'image/png' ||
        selectedFile.type === 'image/jpg' ||
        selectedFile.type === 'image/jpeg')
    ) {
      setFile(selectedFile);
    } else {
      alert('Please upload a valid image file.');
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const uploadFile = (file: File) => {
    const { data, error, loading } = uploadProductPhoto(file);
  };

  return (
    <div className="flex flex-col gap-8 w-full min-w-[600px] sm:max-w-[512px] mx-auto justify-center items-center p-4 sm:p-6 md:p-8">
      <div className="bg-white p-3 rounded-lg shadow w-fit">
        {/* SVG Icon */}
      </div>
      <div className="text-center sm:text-center flex flex-col gap-2">
        <h3 className="text-2xl sm:text-[30px] font-semibold text-center">
          Detail produk dan foto usaha/produk
        </h3>
        <span>Berikan kami informasi foto usaha/produk yang anda miliki</span>
      </div>

      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col">
          <label className="text-start mb-2">Nama Produk</label>
          <Input
            type="text"
            className="w-full"
            variant="bordered"
            placeholder="Masukkan nama produk usaha anda"
            value={formik.values.productName}
            onChange={formik.handleChange}
            name='productName'
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Upload File</h3>
          <div
            className="p-4 border border-gray-300 rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => document.getElementById('fileInput')?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <input
              id="fileInput"
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="flex flex-col gap-3 justify-center items-center text-gray-600 text-sm sm:text-base">
              <div className="bg-white p-3 rounded-lg shadow w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M6.6665 13.3333L9.99984 10M9.99984 10L13.3332 13.3333M9.99984 10V17.5M16.6665 13.9524C17.6844 13.1117 18.3332 11.8399 18.3332 10.4167C18.3332 7.88536 16.2811 5.83333 13.7498 5.83333C13.5677 5.83333 13.3974 5.73833 13.3049 5.58145C12.2182 3.73736 10.2119 2.5 7.9165 2.5C4.46472 2.5 1.6665 5.29822 1.6665 8.75C1.6665 10.4718 2.36271 12.0309 3.48896 13.1613" stroke="#535862" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <span className="text-[#079455] font-semibold">
                Klik atau seret file ke sini untuk unggah
              </span>
              <br />
              SVG, PNG atau JPG (max. 10 MB)
            </div>
          </div>
          {file && (
            <div className="flex gap-3 mt-4 p-4 border border-gray-300 rounded-lg">
              <div>
                <Image
                  alt="Exporease"
                  width={56}
                  height={56}
                  className="object-cover w-[56px] h-auto"
                  src="/assets/icons/jpg-file.png"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between">
                  <p className="font-semibold">{file.name}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step3;
