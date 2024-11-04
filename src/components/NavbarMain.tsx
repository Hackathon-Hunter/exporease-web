import React, { useState } from 'react';

import Image from 'next/image';
import { useRouter } from "next/navigation";

const NavbarMain: React.FC = () => {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toSetup = () => {
        router.push("/setup")
    }

    return (
        <div className="flex justify-between items-center p-6 md:p-8 lg:px-20">
            <div className="flex items-center">
                <div className="flex items-center">
                    <Image
                        alt="Exporease"
                        width={138}
                        height={56}
                        className="object-cover w-[138px] h-auto"
                        src="/assets/icons/logo.png"
                        loading="lazy"
                    />
                </div>

                <div className="hidden md:flex gap-8">
                    <span className="text-sm lg:text-base text-[#475467] font-semibold cursor-pointer">Home</span>
                    <span className="text-sm lg:text-base text-[#475467] font-semibold cursor-pointer">Fitur</span>
                    <span className="text-sm lg:text-base text-[#475467] font-semibold cursor-pointer">Testimonials</span>
                </div>
            </div>

            <button
                onClick={toggleMobileMenu}
                className="md:hidden text-gray-700 focus:outline-none"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M3 12H21M3 6H21M3 18H21"
                        stroke="#344054"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            <div className="hidden md:flex gap-4 items-center">
                <span className="text-sm lg:text-base text-[#475467] font-semibold cursor-pointer">Masuk</span>
                <button className="btn-primary" onClick={toSetup}>Daftar</button>
            </div>

            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
                    <div className="flex flex-col gap-4 p-4">
                        <span className="text-base text-[#475467] font-semibold cursor-pointer">Home</span>
                        <span className="text-base text-[#475467] font-semibold cursor-pointer">Fitur</span>
                        <span className="text-base text-[#475467] font-semibold cursor-pointer">Testimonials</span>
                        <hr className="border-gray-200" />
                        <span className="text-base text-[#475467] font-semibold cursor-pointer">Masuk</span>
                        <button className="btn-primary" onClick={toSetup}>Daftar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavbarMain;
