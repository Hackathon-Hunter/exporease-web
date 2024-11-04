import React from 'react';

import Image from 'next/image';

const Features: React.FC = () => {
    return (
        <div className="flex flex-col sm:gap-[96px] gap-0 w-full">
            <div className="flex flex-col justify-center items-center w-full">
                <span className="text-[#087443] font-[600]">Fitur</span>
                <h1 className="text-[26px] sm:text-[48px] font-[600] text-center">Analitik yang terasa seperti berasal dari masa depan</h1>
            </div>

            <div className="flex flex-col md:flex-row justify-between sm:gap-[96px] gap-[40px] w-full">
                <div className="m-[12px] sm:ml-[112px] lg:min-w-[560px] lg:max-w-[560px] flex flex-col gap-[24px]">
                    <div className="bg-[#D3F8DF] rounded-full p-2 w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22" stroke="#099250" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="text-[26px] sm:text-[48px] font-[600]">Analitik negara pilihan</span>
                        <p className="text-[#475467]">
                            Anda dapat mengetahui analitik ekspor produk Anda ke negara yang anda inginkan. Tidak hanya 1, bahkan Anda dapat menambahkan 6 negara.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <rect width="28" height="28" rx="14" fill="#D3F8DF" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9459 8.62193L11.5925 16.6836L9.37586 14.3153C8.96753 13.9303 8.32586 13.9069 7.85919 14.2336C7.40419 14.5719 7.27586 15.1669 7.55586 15.6453L10.1809 19.9153C10.4375 20.3119 10.8809 20.5569 11.3825 20.5569C11.8609 20.5569 12.3159 20.3119 12.5725 19.9153C12.9925 19.3669 21.0075 9.81193 21.0075 9.81193C22.0575 8.7386 20.7859 7.7936 19.9459 8.61027V8.62193Z" fill="#16B364" />
                            </svg>
                            <span className="text-[#475467]">Harga potensial</span>
                        </div>
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <rect width="28" height="28" rx="14" fill="#D3F8DF" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9459 8.62193L11.5925 16.6836L9.37586 14.3153C8.96753 13.9303 8.32586 13.9069 7.85919 14.2336C7.40419 14.5719 7.27586 15.1669 7.55586 15.6453L10.1809 19.9153C10.4375 20.3119 10.8809 20.5569 11.3825 20.5569C11.8609 20.5569 12.3159 20.3119 12.5725 19.9153C12.9925 19.3669 21.0075 9.81193 21.0075 9.81193C22.0575 8.7386 20.7859 7.7936 19.9459 8.61027V8.62193Z" fill="#16B364" />
                            </svg>
                            <span className="text-[#475467]">Tingkat kecocokan</span>
                        </div>
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <rect width="28" height="28" rx="14" fill="#D3F8DF" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9459 8.62193L11.5925 16.6836L9.37586 14.3153C8.96753 13.9303 8.32586 13.9069 7.85919 14.2336C7.40419 14.5719 7.27586 15.1669 7.55586 15.6453L10.1809 19.9153C10.4375 20.3119 10.8809 20.5569 11.3825 20.5569C11.8609 20.5569 12.3159 20.3119 12.5725 19.9153C12.9925 19.3669 21.0075 9.81193 21.0075 9.81193C22.0575 8.7386 20.7859 7.7936 19.9459 8.61027V8.62193Z" fill="#16B364" />
                            </svg>
                            <span className="text-[#475467]">Rata-rata order di negara tersebut</span>
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        alt="Exporease"
                        width={768}
                        height={432}
                        className="object-cover w-full h-auto max-w-md md:max-w-none block md:hidden"
                        src="/assets/illustrations/features-1-mobile.webp"
                        loading="lazy"
                    />
                    <Image
                        alt="Exporease"
                        width={768}
                        height={432}
                        className="object-cover w-full h-auto max-w-md md:max-w-none hidden md:block"
                        src="/assets/illustrations/features-1.webp"
                        loading="lazy"
                    />
                </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row justify-between sm:gap-[96px] gap-[40px] w-full">
                <div>
                    <Image
                        alt="Exporease"
                        width={768}
                        height={432}
                        className="object-cover w-full h-auto max-w-md md:max-w-none block md:hidden"
                        src="/assets/illustrations/features-2-mobile.webp"
                        loading="lazy"
                    />
                    <Image
                        alt="Exporease"
                        width={768}
                        height={432}
                        className="object-cover w-full h-auto max-w-md md:max-w-none hidden md:block"
                        src="/assets/illustrations/features-2.webp"
                        loading="lazy"
                    />
                </div>
                <div className="m-[12px] sm:mr-[112px] lg:min-w-[560px] lg:max-w-[560px] flex flex-col gap-[24px]">
                    <div className="bg-[#D3F8DF] rounded-full p-2 w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#099250" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="text-[26px] sm:text-[48px] font-[600]">Edukasi ekspor</span>
                        <p className="text-[#475467]">
                            Platform all-in-one yang dapat membantu Anda mendapatkan edukasi tentang ekspor ke negara pilihan Anda.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <rect width="28" height="28" rx="14" fill="#D3F8DF" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9459 8.62193L11.5925 16.6836L9.37586 14.3153C8.96753 13.9303 8.32586 13.9069 7.85919 14.2336C7.40419 14.5719 7.27586 15.1669 7.55586 15.6453L10.1809 19.9153C10.4375 20.3119 10.8809 20.5569 11.3825 20.5569C11.8609 20.5569 12.3159 20.3119 12.5725 19.9153C12.9925 19.3669 21.0075 9.81193 21.0075 9.81193C22.0575 8.7386 20.7859 7.7936 19.9459 8.61027V8.62193Z" fill="#16B364" />
                            </svg>
                            <span className="text-[#475467]">Step by step ekspor</span>
                        </div>
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <rect width="28" height="28" rx="14" fill="#D3F8DF" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9459 8.62193L11.5925 16.6836L9.37586 14.3153C8.96753 13.9303 8.32586 13.9069 7.85919 14.2336C7.40419 14.5719 7.27586 15.1669 7.55586 15.6453L10.1809 19.9153C10.4375 20.3119 10.8809 20.5569 11.3825 20.5569C11.8609 20.5569 12.3159 20.3119 12.5725 19.9153C12.9925 19.3669 21.0075 9.81193 21.0075 9.81193C22.0575 8.7386 20.7859 7.7936 19.9459 8.61027V8.62193Z" fill="#16B364" />
                            </svg>
                            <span className="text-[#475467]">Edukasi ekspor</span>
                        </div>
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <rect width="28" height="28" rx="14" fill="#D3F8DF" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9459 8.62193L11.5925 16.6836L9.37586 14.3153C8.96753 13.9303 8.32586 13.9069 7.85919 14.2336C7.40419 14.5719 7.27586 15.1669 7.55586 15.6453L10.1809 19.9153C10.4375 20.3119 10.8809 20.5569 11.3825 20.5569C11.8609 20.5569 12.3159 20.3119 12.5725 19.9153C12.9925 19.3669 21.0075 9.81193 21.0075 9.81193C22.0575 8.7386 20.7859 7.7936 19.9459 8.61027V8.62193Z" fill="#16B364" />
                            </svg>
                            <span className="text-[#475467]">Syarat ekspor</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between sm:gap-[96px] gap-[40px] w-full">
                <div className="m-[12px] sm:ml-[112px] lg:min-w-[560px] lg:max-w-[560px] flex flex-col gap-[24px]">
                    <div className="bg-[#D3F8DF] rounded-full p-2 w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 20V10M12 20V4M6 20V14" stroke="#099250" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="text-[26px] sm:text-[48px] font-[600]">Analitik kecocokan produk Anda</span>
                        <p className="text-[#475467]">
                            Anda dapat melihat informasi produk Anda di negara yang anda pilih sekaligus mengetahui kota potensial negara tujuan ekspor Anda.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <rect width="28" height="28" rx="14" fill="#D3F8DF" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9459 8.62193L11.5925 16.6836L9.37586 14.3153C8.96753 13.9303 8.32586 13.9069 7.85919 14.2336C7.40419 14.5719 7.27586 15.1669 7.55586 15.6453L10.1809 19.9153C10.4375 20.3119 10.8809 20.5569 11.3825 20.5569C11.8609 20.5569 12.3159 20.3119 12.5725 19.9153C12.9925 19.3669 21.0075 9.81193 21.0075 9.81193C22.0575 8.7386 20.7859 7.7936 19.9459 8.61027V8.62193Z" fill="#16B364" />
                            </svg>
                            <span className="text-[#475467]">Kota potensial</span>
                        </div>
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <rect width="28" height="28" rx="14" fill="#D3F8DF" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9459 8.62193L11.5925 16.6836L9.37586 14.3153C8.96753 13.9303 8.32586 13.9069 7.85919 14.2336C7.40419 14.5719 7.27586 15.1669 7.55586 15.6453L10.1809 19.9153C10.4375 20.3119 10.8809 20.5569 11.3825 20.5569C11.8609 20.5569 12.3159 20.3119 12.5725 19.9153C12.9925 19.3669 21.0075 9.81193 21.0075 9.81193C22.0575 8.7386 20.7859 7.7936 19.9459 8.61027V8.62193Z" fill="#16B364" />
                            </svg>
                            <span className="text-[#475467]">Range harga produk serupa</span>
                        </div>
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <rect width="28" height="28" rx="14" fill="#D3F8DF" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9459 8.62193L11.5925 16.6836L9.37586 14.3153C8.96753 13.9303 8.32586 13.9069 7.85919 14.2336C7.40419 14.5719 7.27586 15.1669 7.55586 15.6453L10.1809 19.9153C10.4375 20.3119 10.8809 20.5569 11.3825 20.5569C11.8609 20.5569 12.3159 20.3119 12.5725 19.9153C12.9925 19.3669 21.0075 9.81193 21.0075 9.81193C22.0575 8.7386 20.7859 7.7936 19.9459 8.61027V8.62193Z" fill="#16B364" />
                            </svg>
                            <span className="text-[#475467]">Kelebihan dan kekurangan produk Anda di negara tersebut.</span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Image
                        alt="Exporease"
                        width={768}
                        height={432}
                        className="object-cover w-full h-auto max-w-md md:max-w-none block md:hidden"
                        src="/assets/illustrations/features-3-mobile.webp"
                        loading="lazy"
                    />
                    <Image
                        alt="Exporease"
                        width={768}
                        height={432}
                        className="object-cover w-full h-auto max-w-md md:max-w-none hidden md:block"
                        src="/assets/illustrations/features-3.webp"
                        loading="lazy"
                    />
                </div>
            </div>
        </div >
    )
}

export default Features