import React from 'react';

import Image from 'next/image';

type Step = {
    name: string;
    description: string;
    icon: React.ReactNode;
};

type StepperProps = {
    steps: Step[];
    currentStep: number;
};

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="w-full md:w-1/4 p-4 md:p-[32px] border-r bg-gray-100">
      <Image
        alt="Exporease"
        width={138}
        height={56}
        className="object-cover w-[138px] h-auto mx-auto md:mx-0"
        src="/assets/icons/logo.png"
        loading="lazy"
      />
      <ul className="mt-8 md:mt-[88px]">
        {steps.map((step, index) => (
          <li key={index} className="mb-6 md:mb-8">
            <div
              className={`flex items-center ${index <= currentStep ? 'text-[#414651]' : 'text-gray-400'
              }`}
            >
              <div
                className={`flex items-center p-3 md:p-[12px] bg-white shadow justify-center rounded-lg ${index <= currentStep ? 'text-[#414651]' : 'text-gray-400'
                }`}
              >
                {step.icon}
              </div>
              <div className="ml-3 md:ml-4">
                <p className="font-semibold">{step.name}</p>
                <p className="text-xs md:text-sm text-gray-500">{step.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stepper;
