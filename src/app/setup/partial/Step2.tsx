import React from 'react';

import { Input } from "@nextui-org/react";

import MultipleSelect from '@/app/components/MultipleSelect';

const Step2: React.FC = () => {
    const options = [
        { value: 'usaha1', label: 'Usaha 1' },
        { value: 'usaha2', label: 'Usaha 2' },
        { value: 'usaha3', label: 'Usaha 3' },
    ];

    return (
        <div className="flex flex-col gap-8 max-w-[90%] sm:max-w-[512px] w-full justify-center items-center mx-auto p-4 sm:p-0">
            <div className="bg-white p-3 rounded-lg shadow w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16 8V5L19 2L20 4L22 5L19 8H16ZM16 8L12 11.9999M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7" stroke="#414651" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="text-center flex flex-col gap-2">
                <h3 className="text-xl sm:text-[30px] font-semibold text-center">Target Ekspor</h3>
                <span className="text-sm sm:text-base text-center">Berikan informasi terkait target ekspor yang ingin anda capai</span>
            </div>

            <div className="flex flex-col gap-5 w-full">
                <div className="flex flex-col justify-start">
                    <label className="text-start mb-2 text-sm sm:text-base">Negara tujuan</label>
                    <MultipleSelect options={options} placeholder="cth: Australia, Jepang, Amerika Serikat" />
                </div>

                <div className="flex flex-col justify-start">
                    <label className="text-start mb-2 text-sm sm:text-base">Target perilaku pengguna</label>
                    <MultipleSelect options={options} placeholder="cth: Traveller, Suka berolahraga, Pemakan manis" />
                </div>

                <div className="flex flex-col justify-start">
                    <label className="text-start mb-2 text-sm sm:text-base">Ekspektasi pendapatan per bulan</label>
                    <Input type="email" className="w-full" variant="bordered" placeholder='Masukkan ekspektasi pendapatan anda' />
                </div>
            </div>
        </div>
    );
};

export default Step2;
