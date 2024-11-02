import React from 'react';
import Image from 'next/image';

const Step4: React.FC = () => {

    return (
        <div className="flex flex-col gap-[32px] max-w-[865px] justify-center items-center">
            <div className="bg-white p-[12px] rounded-lg shadow w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4.5 22V17M4.5 7V2M2 4.5H7M2 19.5H7M13 3L11.2658 7.50886C10.9838 8.24209 10.8428 8.60871 10.6235 8.91709C10.4292 9.1904 10.1904 9.42919 9.91709 9.62353C9.60871 9.8428 9.24209 9.98381 8.50886 10.2658L4 12L8.50886 13.7342C9.24209 14.0162 9.60871 14.1572 9.91709 14.3765C10.1904 14.5708 10.4292 14.8096 10.6235 15.0829C10.8428 15.3913 10.9838 15.7579 11.2658 16.4911L13 21L14.7342 16.4911C15.0162 15.7579 15.1572 15.3913 15.3765 15.0829C15.5708 14.8096 15.8096 14.5708 16.0829 14.3765C16.3913 14.1572 16.7579 14.0162 17.4911 13.7342L22 12L17.4911 10.2658C16.7579 9.98381 16.3913 9.8428 16.0829 9.62353C15.8096 9.42919 15.5708 9.1904 15.3765 8.91709C15.1572 8.60871 15.0162 8.24209 14.7342 7.50886L13 3Z" stroke="#414651" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div>
                <h3 className="text-[30px] font-semibold">Hasil analisa</h3>
                <span>Berikut adalah saran kami </span>
            </div>

            <div className="flex flex-col gap-[20px] w-full">
                <div className="flex flex-col gap-2 justify-start border-b pb-[20px]">
                    <span className="text-start font-semibold">Target customer</span>
                    <div className="flex gap-3">
                        <span className="border pl-2 pr-2 rounded-lg font-semibold">Suka ngopi</span>
                        <span className="border pl-2 pr-2 rounded-lg font-semibold">Suka kopi strong</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 justify-start border-b pb-[20px]">
                    <span className="text-start font-semibold">Target customer</span>
                    <p className="text-start text-[#535862]">Surabaya coffee bean memiliki potensi besar untuk menembus pasar internasional karena fokus pada produk kopi berkualitas tinggi, terutama dengan menggunakan biji kopi robusta dan arabika dari Indonesia. Negara-negara seperti Malaysia, Singapura, dan Amerika Serikat merupakan pasar yang menjanjikan karena budaya konsumsi kopi yang kuat. Dalam memperluas pasar ekspor, penting untuk memperhatikan hubungan diplomatik dan kebijakan perdagangan guna memastikan kelancaran distribusi produk.</p>
                </div>
            </div>

            <div className="flex flex-col gap-[20px] w-full">
                <div className="flex flex-col gap-2 justify-start pb-[20px]">
                    <span className="text-start font-semibold">Negara yang cocok untuk ekspor usaha anda</span>
                    <div className="flex items-center gap-1 w-full mt-3">
                        <div className="flex gap-1">
                            <div>
                                <Image
                                    alt="Exporease"
                                    width={56}
                                    height={56}
                                    className="object-cover w-[25px] h-auto"
                                    src="/assets/icons/AU.png"
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <span className="font-semibold">Australia</span>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M13.3333 4.99996V4.33329C13.3333 3.39987 13.3333 2.93316 13.1517 2.57664C12.9919 2.26304 12.7369 2.00807 12.4233 1.84828C12.0668 1.66663 11.6001 1.66663 10.6667 1.66663H9.33333C8.39991 1.66663 7.9332 1.66663 7.57668 1.84828C7.26308 2.00807 7.00811 2.26304 6.84832 2.57664C6.66667 2.93316 6.66667 3.39987 6.66667 4.33329V4.99996M8.33333 9.58329V13.75M11.6667 9.58329V13.75M2.5 4.99996H17.5M15.8333 4.99996V14.3333C15.8333 15.7334 15.8333 16.4335 15.5608 16.9683C15.3212 17.4387 14.9387 17.8211 14.4683 18.0608C13.9335 18.3333 13.2335 18.3333 11.8333 18.3333H8.16667C6.76654 18.3333 6.06647 18.3333 5.53169 18.0608C5.06129 17.8211 4.67883 17.4387 4.43915 16.9683C4.16667 16.4335 4.16667 15.7334 4.16667 14.3333V4.99996" stroke="#717680" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <span className="text-[#079455] font-semibold">98% tingkat kecocokan</span>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <div>
                                <Image
                                    alt="Exporease"
                                    width={56}
                                    height={56}
                                    className="object-cover w-[25px] h-auto"
                                    src="/assets/icons/AU.png"
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <span className="font-semibold">Australia</span>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M13.3333 4.99996V4.33329C13.3333 3.39987 13.3333 2.93316 13.1517 2.57664C12.9919 2.26304 12.7369 2.00807 12.4233 1.84828C12.0668 1.66663 11.6001 1.66663 10.6667 1.66663H9.33333C8.39991 1.66663 7.9332 1.66663 7.57668 1.84828C7.26308 2.00807 7.00811 2.26304 6.84832 2.57664C6.66667 2.93316 6.66667 3.39987 6.66667 4.33329V4.99996M8.33333 9.58329V13.75M11.6667 9.58329V13.75M2.5 4.99996H17.5M15.8333 4.99996V14.3333C15.8333 15.7334 15.8333 16.4335 15.5608 16.9683C15.3212 17.4387 14.9387 17.8211 14.4683 18.0608C13.9335 18.3333 13.2335 18.3333 11.8333 18.3333H8.16667C6.76654 18.3333 6.06647 18.3333 5.53169 18.0608C5.06129 17.8211 4.67883 17.4387 4.43915 16.9683C4.16667 16.4335 4.16667 15.7334 4.16667 14.3333V4.99996" stroke="#717680" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <span className="text-[#079455] font-semibold">98% tingkat kecocokan</span>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <div>
                                <Image
                                    alt="Exporease"
                                    width={56}
                                    height={56}
                                    className="object-cover w-[25px] h-auto"
                                    src="/assets/icons/AU.png"
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <span className="font-semibold">Australia</span>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M13.3333 4.99996V4.33329C13.3333 3.39987 13.3333 2.93316 13.1517 2.57664C12.9919 2.26304 12.7369 2.00807 12.4233 1.84828C12.0668 1.66663 11.6001 1.66663 10.6667 1.66663H9.33333C8.39991 1.66663 7.9332 1.66663 7.57668 1.84828C7.26308 2.00807 7.00811 2.26304 6.84832 2.57664C6.66667 2.93316 6.66667 3.39987 6.66667 4.33329V4.99996M8.33333 9.58329V13.75M11.6667 9.58329V13.75M2.5 4.99996H17.5M15.8333 4.99996V14.3333C15.8333 15.7334 15.8333 16.4335 15.5608 16.9683C15.3212 17.4387 14.9387 17.8211 14.4683 18.0608C13.9335 18.3333 13.2335 18.3333 11.8333 18.3333H8.16667C6.76654 18.3333 6.06647 18.3333 5.53169 18.0608C5.06129 17.8211 4.67883 17.4387 4.43915 16.9683C4.16667 16.4335 4.16667 15.7334 4.16667 14.3333V4.99996" stroke="#717680" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <span className="text-[#079455] font-semibold">98% tingkat kecocokan</span>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <div>
                                <Image
                                    alt="Exporease"
                                    width={56}
                                    height={56}
                                    className="object-cover w-[25px] h-auto"
                                    src="/assets/icons/AU.png"
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <span className="font-semibold">Australia</span>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M13.3333 4.99996V4.33329C13.3333 3.39987 13.3333 2.93316 13.1517 2.57664C12.9919 2.26304 12.7369 2.00807 12.4233 1.84828C12.0668 1.66663 11.6001 1.66663 10.6667 1.66663H9.33333C8.39991 1.66663 7.9332 1.66663 7.57668 1.84828C7.26308 2.00807 7.00811 2.26304 6.84832 2.57664C6.66667 2.93316 6.66667 3.39987 6.66667 4.33329V4.99996M8.33333 9.58329V13.75M11.6667 9.58329V13.75M2.5 4.99996H17.5M15.8333 4.99996V14.3333C15.8333 15.7334 15.8333 16.4335 15.5608 16.9683C15.3212 17.4387 14.9387 17.8211 14.4683 18.0608C13.9335 18.3333 13.2335 18.3333 11.8333 18.3333H8.16667C6.76654 18.3333 6.06647 18.3333 5.53169 18.0608C5.06129 17.8211 4.67883 17.4387 4.43915 16.9683C4.16667 16.4335 4.16667 15.7334 4.16667 14.3333V4.99996" stroke="#717680" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <span className="text-[#079455] font-semibold">98% tingkat kecocokan</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-3 w-full">
                        <div className="flex items-center w-full">
                            <div className="border-b border-gray-300 w-full mt-2 mr-2"></div>
                            <button className="btn-secondary min-w-fit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path d="M10.4998 4.16663V15.8333M4.6665 9.99996H16.3332" stroke="#414651" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Tambah negara lainnya
                            </button>
                            <div className="border-b border-gray-300 w-full mt-2 ml-2"></div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-[20px] w-full">
                <div className="flex flex-col gap-2 justify-start pb-[20px]">
                    <span className="text-start font-semibold">Estimasi</span>
                    <div className="flex flex-col gap-3 w-fit border rounded-lg p-3 min-w-[240px]">
                        <span className="text-start">Produk terjual</span>
                        <div className="flex justify-between items-end">
                            <span className="text-[30px] font-bold">156 kg</span>
                            <span className="border pl-2 pr-2 h-fit rounded-lg font-semibold">per bulan</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step4;
