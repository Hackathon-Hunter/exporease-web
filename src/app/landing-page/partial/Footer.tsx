import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <div className="pl-[16px] sm:pl-[112px] pb-[64px] flex flex-col md:flex-row justify-between">
            <div className="flex flex-col max-w-[320px] gap-4 mb-4 md:mb-0">
                <Image
                    alt="Exporease"
                    width={138}
                    height={56}
                    className="object-cover w-[138px] h-auto mx-left sm:mx-auto md:mx-0"
                    src="/assets/icons/logo.png"
                    loading="lazy"
                />
                <span className="text-[#475467] text-left sm:text-center md:text-left">
                    Tingkatkan usahamu dan menciptakan lebih banyak kebahagiaan di dunia.
                </span>
            </div>

            <div className="flex flex-col md:flex-row justify-end gap-[24px] sm:gap-[64px] w-full md:w-auto sm:mr-[112px] mr-0">
                <div className="flex flex-col gap-[16px]">
                    <span className="text-[#667085]">Sumber</span>
                    <span className="text-[#475467] font-semibold">Blog</span>
                    <span className="text-[#475467] font-semibold">Acara</span>
                    <span className="text-[#475467] font-semibold">Pusat Bantuan</span>
                    <span className="text-[#475467] font-semibold">Tutorial</span>
                    <span className="text-[#475467] font-semibold">Dukungan</span>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <span className="text-[#667085]">Sosial</span>
                    <span className="text-[#475467] font-semibold">Twitter</span>
                    <span className="text-[#475467] font-semibold">Linkedin</span>
                    <span className="text-[#475467] font-semibold">Facebook</span>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <span className="text-[#667085]">Legal</span>
                    <span className="text-[#475467] font-semibold">Syarat</span>
                    <span className="text-[#475467] font-semibold">Privasi</span>
                    <span className="text-[#475467] font-semibold">Cookies</span>
                    <span className="text-[#475467] font-semibold">Lisensi</span>
                    <span className="text-[#475467] font-semibold">Settings</span>
                    <span className="text-[#475467] font-semibold">Kontak</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
