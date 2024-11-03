import React from 'react';

import Image from 'next/image';

const Analytics: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 p-4 md:p-8">
            <div className="bg-[#D3F8DF] rounded-full p-2 w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M15.1667 2.33301L3.5 16.333H14L12.8333 25.6663L24.5 11.6663H14L15.1667 2.33301Z" stroke="#099250" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <div className="flex flex-col gap-3 text-center px-4">
                <h1 className="text-[24px] sm:text-[28px] md:text-[36px] font-semibold">Dapatkan Analitik Usaha Anda</h1>
                <p className="text-[#475467] text-sm sm:text-base">Segala yang Anda butuhkan untuk ekspor, dan mendapatkan lebih banyak pendapatan.</p>
            </div>

            {/* Responsive statistic section */}
            <div className="flex flex-col sm:flex-row mt-[32px] sm:mt-[64px] w-full max-w-[960px]">
                <div className="flex flex-col justify-center items-center p-4 w-full sm:w-[33.33%] border-b sm:border-b-0 sm:border-r">
                    <span className="text-[#099250] font-bold text-[48px] sm:text-[60px]">40+</span>
                    <span className="text-center">UMKM</span>
                </div>
                <div className="flex flex-col justify-center items-center p-4 w-full sm:w-[33.33%] border-b sm:border-b-0 sm:border-r">
                    <span className="text-[#099250] font-bold text-[48px] sm:text-[60px]">100+</span>
                    <span className="text-center">Negara</span>
                </div>
                <div className="flex flex-col justify-center items-center p-4 w-full sm:w-[33.33%]">
                    <span className="text-[#099250] font-bold text-[48px] sm:text-[60px]">600%</span>
                    <span className="text-center">Keuntungan</span>
                </div>
            </div>

            {/* Responsive CTA section */}
            <div className="bg-[#EDFCF2] p-6 sm:p-12 w-full max-w-[1088px] flex flex-col md:flex-row justify-between items-center rounded-lg mt-[32px] sm:mt-[64px] gap-4">
                <div className="flex flex-col gap-3 text-center md:text-left">
                    <span className="text-[#084C2E] font-semibold text-[24px] sm:text-[30px]">Mulai kembangkan usahamu secara gratis</span>
                    <span className="text-[#087443] text-sm sm:text-base">Bergabunglah dengan lebih dari 40 UMKM yang sudah berkembang dengan ExportEase.</span>
                </div>
                <div className="flex gap-3">
                    <button className="btn-secondary h-fit px-4 py-2 text-sm">Pelajari lebih</button>
                    <button className="btn-primary h-fit px-4 py-2 text-sm">Mulai</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics;
