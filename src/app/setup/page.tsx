"use client"

import React, { useState } from 'react';
import Image from 'next/image';

import Stepper from '@/app/components/Stepper';
import StepOne from "./partial/Step1"
import StepTwo from "./partial/Step2"
import StepThird from "./partial/Step3"
import StepForth from "./partial/Step4"

const Setup: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const steps = [
        {
            name: "Informasi usaha",
            description: "Informasi terkait usaha, tipe usaha, dan kata kunci usaha.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16 7C16 6.07003 16 5.60504 15.8978 5.22354C15.6204 4.18827 14.8117 3.37962 13.7765 3.10222C13.395 3 12.93 3 12 3C11.07 3 10.605 3 10.2235 3.10222C9.18827 3.37962 8.37962 4.18827 8.10222 5.22354C8 5.60504 8 6.07003 8 7M5.2 21H18.8C19.9201 21 20.4802 21 20.908 20.782C21.2843 20.5903 21.5903 20.2843 21.782 19.908C22 19.4802 22 18.9201 22 17.8V10.2C22 9.07989 22 8.51984 21.782 8.09202C21.5903 7.71569 21.2843 7.40973 20.908 7.21799C20.4802 7 19.9201 7 18.8 7H5.2C4.07989 7 3.51984 7 3.09202 7.21799C2.71569 7.40973 2.40973 7.71569 2.21799 8.09202C2 8.51984 2 9.07989 2 10.2V17.8C2 18.9201 2 19.4802 2.21799 19.908C2.40973 20.2843 2.71569 20.5903 3.09202 20.782C3.51984 21 4.0799 21 5.2 21Z" stroke="#414651" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            ),
        },
        {
            name: "Target ekspor",
            description: "Tentukan target ekspor sesuai dengan keinginan anda.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16 8V5L19 2L20 4L22 5L19 8H16ZM16 8L12 11.9999M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            ),
        },
        {
            name: "Foto produk",
            description: "Dokumentasi terkait produk atau jasa yang dapat dilihat pengguna",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20.5 8V16.2C20.5 17.8802 20.5 18.7202 20.173 19.362C19.8854 19.9265 19.4265 20.3854 18.862 20.673C18.2202 21 17.3802 21 15.7 21H8.3C6.61984 21 5.77976 21 5.13803 20.673C4.57354 20.3854 4.1146 19.9265 3.82698 19.362C3.5 18.7202 3.5 17.8802 3.5 16.2V8M3.6 3H20.4C20.9601 3 21.2401 3 21.454 3.10899C21.6422 3.20487 21.7951 3.35785 21.891 3.54601C22 3.75992 22 4.03995 22 4.6V6.4C22 6.96005 22 7.24008 21.891 7.45399C21.7951 7.64215 21.6422 7.79513 21.454 7.89101C21.2401 8 20.9601 8 20.4 8H3.6C3.03995 8 2.75992 8 2.54601 7.89101C2.35785 7.79513 2.20487 7.64215 2.10899 7.45399C2 7.24008 2 6.96005 2 6.4V4.6C2 4.03995 2 3.75992 2.10899 3.54601C2.20487 3.35785 2.35785 3.20487 2.54601 3.10899C2.75992 3 3.03995 3 3.6 3ZM9.6 11.5H14.4C14.9601 11.5 15.2401 11.5 15.454 11.609C15.6422 11.7049 15.7951 11.8578 15.891 12.046C16 12.2599 16 12.5399 16 13.1V13.9C16 14.4601 16 14.7401 15.891 14.954C15.7951 15.1422 15.6422 15.2951 15.454 15.391C15.2401 15.5 14.9601 15.5 14.4 15.5H9.6C9.03995 15.5 8.75992 15.5 8.54601 15.391C8.35785 15.2951 8.20487 15.1422 8.10899 14.954C8 14.7401 8 14.4601 8 13.9V13.1C8 12.5399 8 12.2599 8.10899 12.046C8.20487 11.8578 8.35785 11.7049 8.54601 11.609C8.75992 11.5 9.03995 11.5 9.6 11.5Z" stroke="#414651" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            ),
        },
        {
            name: "Hasil analisa",
            description: "Saran terbaik dari kami dan telah dioptimalisasikan dengan AI",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4.5 22V17M4.5 7V2M2 4.5H7M2 19.5H7M13 3L11.2658 7.50886C10.9838 8.24209 10.8428 8.60871 10.6235 8.91709C10.4292 9.1904 10.1904 9.42919 9.91709 9.62353C9.60871 9.8428 9.24209 9.98381 8.50886 10.2658L4 12L8.50886 13.7342C9.24209 14.0162 9.60871 14.1572 9.91709 14.3765C10.1904 14.5708 10.4292 14.8096 10.6235 15.0829C10.8428 15.3913 10.9838 15.7579 11.2658 16.4911L13 21L14.7342 16.4911C15.0162 15.7579 15.1572 15.3913 15.3765 15.0829C15.5708 14.8096 15.8096 14.5708 16.0829 14.3765C16.3913 14.1572 16.7579 14.0162 17.4911 13.7342L22 12L17.4911 10.2658C16.7579 9.98381 16.3913 9.8428 16.0829 9.62353C15.8096 9.42919 15.5708 9.1904 15.3765 8.91709C15.1572 8.60871 15.0162 8.24209 14.7342 7.50886L13 3Z" stroke="#414651" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            ),
        },
    ];
    const stepsForm = ['Step 1', 'Step 2', 'Step 3', 'Loading...'];

    const nextStep = () => {
        if (currentStep == 2) {
            setIsLoading(true);
            setTimeout(() => {
                setCurrentStep((prev) => Math.min(prev + 1, stepsForm.length - 1));
                setIsLoading(false);
            }, 5000);
        } else {
            setCurrentStep((prev) => Math.min(prev + 1, stepsForm.length - 1));
        }
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const renderStepContent = () => {
        if (isLoading) {
            return (
                <div className="flex flex-col gap-3 justify-center items-center h-screen px-4 md:px-0">
                    <div className="flex flex-col gap-3 w-full max-w-md md:w-[512px] justify-center items-center">
                        <Image
                            alt="Exporease"
                            width={56}
                            height={56}
                            className="object-cover w-[56px] h-auto"
                            src="/assets/icons/loading.png"
                            loading="lazy"
                        />
                        <span className="text-lg md:text-2xl font-bold text-center">
                            Kami sedang menganalisis usaha anda dengan bantuan AI...
                        </span>
                    </div>
                </div>
            );
        }

        return (
            <div className="flex flex-col justify-center items-center h-full text-center">
                {(() => {
                    switch (currentStep) {
                        case 0:
                            return (
                                <StepOne />
                            );
                        case 1:
                            return (
                                <StepTwo />
                            );
                        case 2:
                            return (
                                <StepThird />
                            );
                        default:
                            return (
                                <StepForth />
                            );
                    }
                })()}
            </div>
        );
    };

    return (
        <div className="flex flex-col min-h-screen md:flex-row">
            <Stepper steps={steps} currentStep={currentStep} />
            <div className="w-full md:w-3/4 p-6">
                <form onSubmit={handleSubmit}>
                    {renderStepContent()}
                    <div className="flex flex-col gap-4 items-center mt-6 md:flex-row md:justify-center">
                        {currentStep > 0 && (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="btn-secondary w-full md:w-auto"
                            >
                                Sebelumnya
                            </button>
                        )}
                        {currentStep < steps.length - 1 ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="btn-primary w-full md:w-auto"
                            >
                                Selanjutnya
                            </button>
                        ) : (
                            <button type="submit" className="btn-primary w-full md:w-auto">
                                Mulai perjalanan ekspor!
                            </button>
                        )}
                    </div>
                    <div className="flex justify-center mt-5">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`flex items-center justify-center w-3 h-3 mx-1 rounded-full cursor-pointer 
                            ${currentStep === index ? 'bg-[#079455] text-white' : 'bg-gray-200 text-gray-700'}`}
                            />
                        ))}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Setup;
