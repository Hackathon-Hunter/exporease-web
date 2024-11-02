import React from 'react';

import { Input, RadioGroup, Radio, Textarea } from "@nextui-org/react";

import MultipleSelect from '@/app/components/MultipleSelect';

const Step1: React.FC = () => {
    const options = [
        { value: 'usaha1', label: 'Usaha 1' },
        { value: 'usaha2', label: 'Usaha 2' },
        { value: 'usaha3', label: 'Usaha 3' },
    ];

    return (
        <div className="flex flex-col gap-8 w-full max-w-lg md:w-[512px] justify-center items-center p-4 md:p-0">
            <div className="bg-white p-3 rounded-lg shadow w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M18.6667 8.16667C18.6667 7.0817 18.6667 6.53922 18.5474 6.09413C18.2238 4.88631 17.2804 3.94289 16.0726 3.61926C15.6275 3.5 15.085 3.5 14 3.5C12.9151 3.5 12.3726 3.5 11.9275 3.61926C10.7197 3.94289 9.77627 4.88631 9.45263 6.09413C9.33337 6.53922 9.33337 7.0817 9.33337 8.16667M6.06671 24.5H21.9334C23.2402 24.5 23.8936 24.5 24.3927 24.2457C24.8317 24.022 25.1887 23.665 25.4124 23.226C25.6667 22.7269 25.6667 22.0735 25.6667 20.7667V11.9C25.6667 10.5932 25.6667 9.93982 25.4124 9.44069C25.1887 9.00164 24.8317 8.64469 24.3927 8.42098C23.8936 8.16667 23.2402 8.16667 21.9334 8.16667H6.06671C4.75992 8.16667 4.10652 8.16667 3.6074 8.42098C3.16835 8.64469 2.8114 9.00164 2.58769 9.44069C2.33337 9.93982 2.33337 10.5932 2.33337 11.9V20.7667C2.33337 22.0735 2.33337 22.7269 2.58769 23.226C2.8114 23.665 3.16835 24.022 3.6074 24.2457C4.10652 24.5 4.75992 24.5 6.06671 24.5Z" stroke="#414651" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="text-center md:text-left flex flex-col gap-2">
                <h3 className="text-2xl md:text-[30px] font-semibold text-center">Informasi Usaha</h3>
                <span className="text-sm md:text-base">Silakan isi informasi usaha anda di bawah ini</span>
            </div>

            <div className="flex flex-col gap-5 w-full">
                <div className="flex flex-col justify-start">
                    <label className="text-start mb-2">Nama usaha</label>
                    <Input type="email" className="w-full" variant="bordered" placeholder='Masukkan nama usaha anda di sini' />
                </div>

                <div className="flex flex-col justify-start">
                    <label className="text-start mb-2">Tipe usaha</label>
                    <RadioGroup color='success'>
                        <div className='flex gap-2'>
                            <Radio value="product">Produk</Radio>
                            <Radio value="service">Jasa</Radio>
                        </div>
                    </RadioGroup>
                </div>

                <div className="flex flex-col justify-start">
                    <label className="text-start mb-2 flex items-center gap-1">Deskripsi usaha
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clipPath="url(#clip0_100_644)">
                                    <path d="M6.06004 6.00001C6.21678 5.55446 6.52614 5.17875 6.93334 4.93943C7.34055 4.70012 7.8193 4.61264 8.28483 4.69248C8.75035 4.77233 9.17259 5.01436 9.47676 5.3757C9.78093 5.73703 9.94741 6.19436 9.94671 6.66668C9.94671 8.00001 7.94671 8.66668 7.94671 8.66668M8.00004 11.3333H8.00671M14.6667 8.00001C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8.00001C1.33337 4.31811 4.31814 1.33334 8.00004 1.33334C11.6819 1.33334 14.6667 4.31811 14.6667 8.00001Z" stroke="#A4A7AE" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_100_644">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                    </label>
                    <Textarea
                        variant="bordered"
                        labelPlacement="outside"
                        placeholder="Berikan deskripsi singkat tentang usaha anda"
                        className="w-full"
                    />
                </div>

                <div className="flex flex-col justify-start">
                    <label className="text-start mb-2">Kata kunci usaha</label>
                    <MultipleSelect options={options} placeholder="cth: Teh, Buah, Tumbuhan, Arang" />
                </div>

                <div className="flex flex-col justify-start">
                    <label className="text-start mb-2">Website usaha</label>
                    <div className="flex">
                        <span className="text-sm border border-2 rounded-l-lg px-4 py-2 bg-white whitespace-no-wrap">https://</span>
                        <input name="field_name" className="border border-2 border-l-0 rounded-r-lg px-4 py-2 w-full" type="text" placeholder="Write something here..." />
                    </div>
                    <small className="text-start text-gray-500">opsional</small>
                </div>
            </div>
        </div>
    );
};

export default Step1;
