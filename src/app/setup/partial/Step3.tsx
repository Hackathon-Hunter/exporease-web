"use client"

import React, { useState } from 'react';
import Image from 'next/image';

import { Input } from "@nextui-org/react";

const Step3: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type === 'image/png') {
            setFile(selectedFile);
            uploadFile(selectedFile);
        } else {
            alert('Please upload a PNG file.');
        }
    };

    const uploadFile = (file) => {
        const formData = new FormData();
        formData.append('file', file);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/upload');

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const percentComplete = (event.loaded / event.total) * 100;
                setUploadProgress(percentComplete);
            }
        };

        xhr.onload = () => {
            if (xhr.status === 200) {
                alert('Upload successful!');
            } else {
                alert('Upload failed. Please try again.');
            }
        };

        xhr.send(formData);
    };

    return (
        <div className="flex flex-col gap-8 w-full min-w-[600px] sm:max-w-[512px] mx-auto justify-center items-center p-4 sm:p-6 md:p-8">
            <div className="bg-white p-3 rounded-lg shadow w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20.5 8V16.2C20.5 17.8802 20.5 18.7202 20.173 19.362C19.8854 19.9265 19.4265 20.3854 18.862 20.673C18.2202 21 17.3802 21 15.7 21H8.3C6.61984 21 5.77976 21 5.13803 20.673C4.57354 20.3854 4.1146 19.9265 3.82698 19.362C3.5 18.7202 3.5 17.8802 3.5 16.2V8M3.6 3H20.4C20.9601 3 21.2401 3 21.454 3.10899C21.6422 3.20487 21.7951 3.35785 21.891 3.54601C22 3.75992 22 4.03995 22 4.6V6.4C22 6.96005 22 7.24008 21.891 7.45399C21.7951 7.64215 21.6422 7.79513 21.454 7.89101C21.2401 8 20.9601 8 20.4 8H3.6C3.03995 8 2.75992 8 2.54601 7.89101C2.35785 7.79513 2.20487 7.64215 2.10899 7.45399C2 7.24008 2 6.96005 2 6.4V4.6C2 4.03995 2 3.75992 2.10899 3.54601C2.20487 3.35785 2.35785 3.20487 2.54601 3.10899C2.75992 3 3.03995 3 3.6 3ZM9.6 11.5H14.4C14.9601 11.5 15.2401 11.5 15.454 11.609C15.6422 11.7049 15.7951 11.8578 15.891 12.046C16 12.2599 16 12.5399 16 13.1V13.9C16 14.4601 16 14.7401 15.891 14.954C15.7951 15.1422 15.6422 15.2951 15.454 15.391C15.2401 15.5 14.9601 15.5 14.4 15.5H9.6C9.03995 15.5 8.75992 15.5 8.54601 15.391C8.35785 15.2951 8.20487 15.1422 8.10899 14.954C8 14.7401 8 14.4601 8 13.9V13.1C8 12.5399 8 12.2599 8.10899 12.046C8.20487 11.8578 8.35785 11.7049 8.54601 11.609C8.75992 11.5 9.03995 11.5 9.6 11.5Z" stroke="#414651" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="text-center sm:text-center flex flex-col gap-2">
                <h3 className="text-2xl sm:text-[30px] font-semibold text-center">Detail produk dan foto usaha/produk</h3>
                <span>Berikan kami informasi foto usaha/produk yang anda miliki</span>
            </div>

            <div className="flex flex-col gap-5 w-full">
                <div className="flex flex-col">
                    <label className="text-start mb-2">Ekspektasi pendapatan per bulan</label>
                    <Input type="text" className="w-full" variant="bordered" placeholder="Masukkan nama produk usaha anda" />
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Upload File</h3>
                    <div className="p-4 border border-gray-300 rounded-lg cursor-pointer hover:shadow-lg transition-shadow" onClick={() => document.getElementById('fileInput')?.click()}>
                        <input id="fileInput" type="file" onChange={handleFileChange} className="hidden" />
                        <p className="flex flex-col gap-3 justify-center items-center text-gray-600 text-sm sm:text-base">
                            <div className="bg-white p-3 rounded-lg shadow w-fit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M6.6665 13.3333L9.99984 10M9.99984 10L13.3332 13.3333M9.99984 10V17.5M16.6665 13.9524C17.6844 13.1117 18.3332 11.8399 18.3332 10.4167C18.3332 7.88536 16.2811 5.83333 13.7498 5.83333C13.5677 5.83333 13.3974 5.73833 13.3049 5.58145C12.2182 3.73736 10.2119 2.5 7.9165 2.5C4.46472 2.5 1.6665 5.29822 1.6665 8.75C1.6665 10.4718 2.36271 12.0309 3.48896 13.1613" stroke="#535862" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-[#079455] font-semibold">Klik untuk unggah</span> atau seret file ke sini
                            <br />SVG, PNG, JPG atau MP4 (max. 10 MB)
                        </p>
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
                                    <span className="text-[#079455] font-semibold">{uploadProgress.toFixed(0)}%</span>
                                </div>
                                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="absolute h-full bg-[#079455]" style={{ width: `${uploadProgress}%` }}></div>
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
