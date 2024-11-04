import React from 'react';

import Image from 'next/image';

const Join: React.FC = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between sm:gap-[96px] gap-[40px] w-full">
                <div className="m-[16px] sm:ml-[112px] lg:min-w-[560px] lg:max-w-[560px] flex flex-col gap-[24px]">
                    <div className="flex flex-col gap-3">
                        <span className="text-[26px] sm:text-[48px] font-[600]">Bergabunglah dengan 40 UMKM yang berkembang bersama ExportEase</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <rect width="28" height="28" rx="14" fill="#D3F8DF" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9459 8.62193L11.5925 16.6836L9.37586 14.3153C8.96753 13.9303 8.32586 13.9069 7.85919 14.2336C7.40419 14.5719 7.27586 15.1669 7.55586 15.6453L10.1809 19.9153C10.4375 20.3119 10.8809 20.5569 11.3825 20.5569C11.8609 20.5569 12.3159 20.3119 12.5725 19.9153C12.9925 19.3669 21.0075 9.81193 21.0075 9.81193C22.0575 8.7386 20.7859 7.7936 19.9459 8.61027V8.62193Z" fill="#16B364" />
                            </svg>
                            <span className="text-[#475467]">Platform gratis</span>
                        </div>
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <rect width="28" height="28" rx="14" fill="#D3F8DF" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9459 8.62193L11.5925 16.6836L9.37586 14.3153C8.96753 13.9303 8.32586 13.9069 7.85919 14.2336C7.40419 14.5719 7.27586 15.1669 7.55586 15.6453L10.1809 19.9153C10.4375 20.3119 10.8809 20.5569 11.3825 20.5569C11.8609 20.5569 12.3159 20.3119 12.5725 19.9153C12.9925 19.3669 21.0075 9.81193 21.0075 9.81193C22.0575 8.7386 20.7859 7.7936 19.9459 8.61027V8.62193Z" fill="#16B364" />
                            </svg>
                            <span className="text-[#475467]">Analitik mendalam</span>
                        </div>
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <rect width="28" height="28" rx="14" fill="#D3F8DF" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9459 8.62193L11.5925 16.6836L9.37586 14.3153C8.96753 13.9303 8.32586 13.9069 7.85919 14.2336C7.40419 14.5719 7.27586 15.1669 7.55586 15.6453L10.1809 19.9153C10.4375 20.3119 10.8809 20.5569 11.3825 20.5569C11.8609 20.5569 12.3159 20.3119 12.5725 19.9153C12.9925 19.3669 21.0075 9.81193 21.0075 9.81193C22.0575 8.7386 20.7859 7.7936 19.9459 8.61027V8.62193Z" fill="#16B364" />
                            </svg>
                            <span className="text-[#475467]">Edukasi ekspor lengkap</span>
                        </div>

                        <div className="flex flex-col-reverse sm:flex-row gap-3">
                            <button className="btn-secondary">Pelajari lebih</button>
                            <button className="btn-primary">Mulai</button>
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        alt="Exporease"
                        width={768}
                        height={432}
                        className="object-cover w-full h-auto max-w-md md:max-w-none block p-[16px] sm:p-0 md:hidden"
                        src="/assets/illustrations/features-4-mobile.webp"
                        loading="lazy"
                    />
                    <Image
                        alt="Exporease"
                        width={768}
                        height={432}
                        className="object-cover w-full h-auto max-w-md md:max-w-none hidden md:block"
                        src="/assets/illustrations/features-4.webp"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    )
}

export default Join