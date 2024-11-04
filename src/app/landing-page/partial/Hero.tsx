import React from 'react';

import Image from 'next/image';
import { useRouter } from "next/navigation";

const Hero: React.FC = () => {
    const router = useRouter();

    const toSetup = () => {
        router.push("/setup")
    }

    return (
        <div className="flex flex-col justify-center items-center md:px-8 lg:px-0">
            <div>
                <div className="flex flex-col gap-[24px] max-w-[1100px] justify-center items-center text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                        Solusi untuk ekspor produk UMKM Anda ke luar negeri
                    </h1>
                    <p className="text-base md:text-lg pl-[16px] pr-[16px] sm:pr-6 sm:pl-6 lg:text-xl max-w-[768px] text-[#475467] font-semibold">
                        Menganalisis produk Anda sesuai negara tujuan, dan membantu Anda mendapatkan lebih banyak pendapatan. Dipercaya lebih dari 40 UMKM.
                    </p>
                </div>
            </div>
            <div className="flex gap-[12px] mt-[48px]">
                <button className="pl-[28px] pr-[28px] pt-[16px] pb-[16px] bg-white border border-[#D0D5DD] rounded-[8px] font-[600] flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.5 8L16.5 12L10.5 16V8Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Demo
                </button>
                <button className="pl-[28px] pr-[28px] pt-[16px] pb-[16px] bg-[#099250] rounded-[8px] text-white font-[600]" onClick={toSetup}>
                    Daftar sekarang
                </button>
            </div>
            <div className="mt-[64px]">
                <Image
                    alt="Exporease"
                    width={768}
                    height={449}
                    className="object-cover w-full h-auto mx-auto md:mx-0"
                    src="/assets/illustrations/hero.webp"
                    loading="lazy"
                />
            </div>
            <div className="w-full bg-[#F9FAFB] flex flex-col justify-center items-center gap-4 mt-[96px] p-4">
                <span className="font-[600] text-[#475467]">40+ UMKM sudah bergabung dan tumbuh</span>
                <div className="grid grid-cols-2 gap-4 w-full md:flex md:justify-evenly md:items-center">
                    <div>
                        <Image
                            alt="Exporease"
                            width={138}
                            height={56}
                            className="object-cover max-w-[70px] h-auto mx-auto md:mx-0"
                            src="/assets/illustrations/sn.svg"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <Image
                            alt="Exporease"
                            width={138}
                            height={56}
                            className="object-cover max-w-[70px] h-auto mx-auto md:mx-0"
                            src="/assets/illustrations/kdb.svg"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <Image
                            alt="Exporease"
                            width={138}
                            height={56}
                            className="object-cover max-w-[70px] h-auto mx-auto md:mx-0"
                            src="/assets/illustrations/bb.svg"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <Image
                            alt="Exporease"
                            width={138}
                            height={56}
                            className="object-cover max-w-[70px] h-auto mx-auto md:mx-0"
                            src="/assets/illustrations/rc.svg"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <Image
                            alt="Exporease"
                            width={138}
                            height={56}
                            className="object-cover max-w-[70px] h-auto mx-auto md:mx-0"
                            src="/assets/illustrations/pnn.svg"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <Image
                            alt="Exporease"
                            width={138}
                            height={56}
                            className="object-cover max-w-[70px] h-auto mx-auto md:mx-0"
                            src="/assets/illustrations/ks.svg"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <Image
                            alt="Exporease"
                            width={138}
                            height={56}
                            className="object-cover max-w-[70px] h-auto mx-auto md:mx-0"
                            src="/assets/illustrations/ss.png"
                            loading="lazy"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero