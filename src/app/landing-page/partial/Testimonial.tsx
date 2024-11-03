import React, { useRef } from 'react';

import Image from 'next/image';

const Testimonial: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <div className="bg-[#F9FAFB] flex flex-col justify-center items-center gap-[32px] pt-[32px] pb-[32px] sm:pt-[92px] sm:pb-[92px]">
            <h1 className="text-[26px] sm:text-[40px] font-[600] max-w-[1216px] text-center">ExportEase telah menghemat ribuan jam kerja kami dan membuka wawasan ekspor yang tidak pernah kami bayangkan sebelumnya.</h1>

            <div className="flex flex-col justify-center items-center text-center gap-3 w-full">
                <Image
                    alt="Exporease"
                    width={138}
                    height={56}
                    className="object-cover w-[64px] h-auto mx-auto md:mx-0"
                    src="/assets/illustrations/Avatar.svg"
                    loading="lazy"
                />
                <div className="flex flex-col">
                    <span className="font-[600]">Ahmad Jaelani</span>
                    <span>CEO, Sego Njamoer</span>
                </div>

                <div className="relative w-full mt-[48px]">
                    <div ref={scrollRef} className="flex justify-evenly items-center overflow-x-auto scrollbar-hide gap-[34px] sm:gap-4 ml-[16px] sm:ml-0">
                        <div>
                            <Image
                                alt="Exporease"
                                width={138}
                                height={56}
                                className="object-cover max-w-[70px] h-auto mx-auto"
                                src="/assets/illustrations/sn.svg"
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <Image
                                alt="Exporease"
                                width={138}
                                height={56}
                                className="object-cover max-w-[70px] h-auto mx-auto"
                                src="/assets/illustrations/kdb.svg"
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <Image
                                alt="Exporease"
                                width={138}
                                height={56}
                                className="object-cover max-w-[70px] h-auto mx-auto"
                                src="/assets/illustrations/bb.svg"
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <Image
                                alt="Exporease"
                                width={138}
                                height={56}
                                className="object-cover max-w-[70px] h-auto mx-auto"
                                src="/assets/illustrations/rc.svg"
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <Image
                                alt="Exporease"
                                width={138}
                                height={56}
                                className="object-cover max-w-[70px] h-auto mx-auto"
                                src="/assets/illustrations/pnn.svg"
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <Image
                                alt="Exporease"
                                width={138}
                                height={56}
                                className="object-cover max-w-[70px] h-auto mx-auto"
                                src="/assets/illustrations/ks.svg"
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <Image
                                alt="Exporease"
                                width={138}
                                height={56}
                                className="object-cover max-w-[70px] h-auto mx-auto"
                                src="/assets/illustrations/ss.png"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial