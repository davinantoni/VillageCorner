import Image from "next/image";
import Link from "next/link";   
import { useRouter } from "next/router";

const DesaDanAktivitasViews = () => {
    const {push} = useRouter();

    const handlerDesa = () => {
        push("/desa-wisata-aktivitas/desa-wisata-full");
    }

    const handlerAktivitas = () => {
        push("/desa-wisata-aktivitas/aktivitas-full");
    }
    
    return (
        <main className="bg-[#FFFCF5]">
            <div className="relative w-full h-[45vh]">
                <Image
                    src="/Image/Air terjun samparona.jpg"
                    alt="Desa Nglanggeran"
                    fill={true} 
                    className="object-cover rounded-b-[180px] object-[20%_20%]"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-b-[180px]"></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <h1 className="text-white text-4xl font-bold">
                        Temukan <span className="text-[#E7B10A]">Tempat dan Aktivitas Terbaik</span> untuk Menikmati Liburan Anda Berikutnya
                    </h1>
                </div>
            </div>

            <div className="p-16">
                <h1 className="font-bold text-[#4C4B16] text-4xl">Jelajahi Desa Wisata di Indonesia</h1>
                <hr className="h-0.5 my-4 bg-[#4C4B16]"/>

                <div className="flex flex-wrap justify-between items-center pt-4 gap-3">
                    <div className="bg-white flex flex-col justify-center gap-5 pb-6 relative w-[29vw]">
                        <Link href="/detail/detail-desa-wisata">
                            <Image src="/Image/Beranda/Desa nglanggeran.png" alt="Desa Nglanggeran" width={411} height={310}
                                className="rounded-2xl h-[40vh] w-full"
                            />

                            <div className="absolute bottom-10 left-5">
                                <h1 className="font-bold text-lg text-white">Desa Wisata Nglanggeran</h1>
                                <p className="text-white opacity-70 text-sm">Kabupaten Gunungkidul</p>
                            </div>
                        </Link>
                    </div>

                    <div className="bg-white flex flex-col justify-center gap-5 pb-6 relative w-[29vw]">
                        <Link href="/detail/detail-desa-wisata">
                            <Image src="/Image/Beranda/Desa nglanggeran.png" alt="Desa Nglanggeran" width={411} height={310}
                                className="rounded-2xl h-[40vh] w-full"
                            />

                            <div className="absolute bottom-10 left-5">
                                <h1 className="font-bold text-lg text-white">Desa Wisata Nglanggeran</h1>
                                <p className="text-white opacity-70 text-sm">Kabupaten Gunungkidul</p>
                            </div>
                        </Link>
                    </div>

                    <div className="bg-white flex flex-col justify-center gap-5 pb-6 relative w-[29vw]">
                        <Link href="/detail/detail-desa-wisata">
                            <Image src="/Image/Beranda/Desa nglanggeran.png" alt="Desa Nglanggeran" width={411} height={310}
                                className="rounded-2xl h-[40vh] w-full"
                            />

                            <div className="absolute bottom-10 left-5">
                                <h1 className="font-bold text-lg text-white">Desa Wisata Nglanggeran</h1>
                                <p className="text-white opacity-70 text-sm">Kabupaten Gunungkidul</p>
                            </div>
                        </Link>
                    </div>

                    <div className="bg-white flex flex-col justify-center gap-5 pb-6 relative w-[29vw]">
                        <Link href="/detail/detail-desa-wisata">
                            <Image src="/Image/Beranda/Desa nglanggeran.png" alt="Desa Nglanggeran" width={411} height={310}
                                className="rounded-2xl h-[40vh] w-full"
                            />

                            <div className="absolute bottom-10 left-5">
                                <h1 className="font-bold text-lg text-white">Desa Wisata Nglanggeran</h1>
                                <p className="text-white opacity-70 text-sm">Kabupaten Gunungkidul</p>
                            </div>
                        </Link>
                    </div>

                    <div className="bg-white flex flex-col justify-center gap-5 pb-6 relative w-[29vw]">
                        <Link href="/detail/detail-desa-wisata">
                            <Image src="/Image/Beranda/Desa nglanggeran.png" alt="Desa Nglanggeran" width={411} height={310}
                                className="rounded-2xl h-[40vh] w-full"
                            />

                            <div className="absolute bottom-10 left-5">
                                <h1 className="font-bold text-lg text-white">Desa Wisata Nglanggeran</h1>
                                <p className="text-white opacity-70 text-sm">Kabupaten Gunungkidul</p>
                            </div>
                        </Link>
                    </div>

                    <div className="bg-white flex flex-col justify-center gap-5 pb-6 relative w-[29vw]">
                        <Link href="/detail/detail-desa-wisata">
                            <Image src="/Image/Beranda/Desa nglanggeran.png" alt="Desa Nglanggeran" width={411} height={310}
                                className="rounded-2xl h-[40vh] w-full"
                            />

                            <div className="absolute bottom-10 left-5">
                                <h1 className="font-bold text-lg text-white">Desa Wisata Nglanggeran</h1>
                                <p className="text-white opacity-70 text-sm">Kabupaten Gunungkidul</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="text-center">
                    <button onClick={handlerDesa} className="text-sm bg-[#E7B10A] text-white font-semibold px-2.5 py-1 border-4 border-solid border-[#E7B10A] rounded-full hover:bg-[#CC9F14] hover:border-[#CC9F14]">Lebih Lengkap &gt;</button>
                </div>
            </div>

            <div className="px-16">
                <h1 className="font-bold text-[#4C4B16] text-4xl">Jelajahi Aktivitas Wisata</h1>
                <hr className="h-0.5 my-4 bg-[#4C4B16]"/>

                <div className="flex flex-wrap justify-between items-center pt-4 gap-3">
                    <Link href="/detail/detail-aktivitas">
                        <div className="bg-white flex flex-col justify-center gap-5 pb-6 relative w-[29vw]">
                            <Image src="/Image/Beranda/Belajar batik.jpg" alt="Desa Nglanggeran" width={411} height={310}
                                className="rounded-2xl h-[40vh] w-full"
                            />
                            <div className="absolute rounded-2xl h-[40vh] w-full bg-black opacity-30"></div>

                            <div className="absolute bottom-10 left-5">
                                <h1 className="font-bold text-lg text-white">Edukasi Batik Topeng</h1>
                                <p className="text-white opacity-70 text-sm">Desa Wisata Nglanggeran</p>
                            </div>
                        </div>
                    </Link>  

                    <Link href="/detail/detail-aktivitas">
                        <div className="bg-white flex flex-col justify-center gap-5 pb-6 relative w-[29vw]">
                            <Image src="/Image/Beranda/Belajar batik.jpg" alt="Desa Nglanggeran" width={411} height={310}
                                className="rounded-2xl h-[40vh] w-full"
                            />
                            <div className="absolute rounded-2xl h-[40vh] w-full bg-black opacity-30"></div>

                            <div className="absolute bottom-10 left-5">
                                <h1 className="font-bold text-lg text-white">Edukasi Batik Topeng</h1>
                                <p className="text-white opacity-70 text-sm">Desa Wisata Nglanggeran</p>
                            </div>
                        </div>
                    </Link> 

                    <Link href="/detail/detail-aktivitas">
                        <div className="bg-white flex flex-col justify-center gap-5 pb-6 relative w-[29vw]">
                            <Image src="/Image/Beranda/Belajar batik.jpg" alt="Desa Nglanggeran" width={411} height={310}
                                className="rounded-2xl h-[40vh] w-full"
                            />
                            <div className="absolute rounded-2xl h-[40vh] w-full bg-black opacity-30"></div>

                            <div className="absolute bottom-10 left-5">
                                <h1 className="font-bold text-lg text-white">Edukasi Batik Topeng</h1>
                                <p className="text-white opacity-70 text-sm">Desa Wisata Nglanggeran</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/detail/detail-aktivitas">
                        <div className="bg-white flex flex-col justify-center gap-5 pb-6 relative w-[29vw]">
                            <Image src="/Image/Beranda/Belajar batik.jpg" alt="Desa Nglanggeran" width={411} height={310}
                                className="rounded-2xl h-[40vh] w-full"
                            />
                            <div className="absolute rounded-2xl h-[40vh] w-full bg-black opacity-30"></div>

                            <div className="absolute bottom-10 left-5">
                                <h1 className="font-bold text-lg text-white">Edukasi Batik Topeng</h1>
                                <p className="text-white opacity-70 text-sm">Desa Wisata Nglanggeran</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/detail/detail-aktivitas">
                        <div className="bg-white flex flex-col justify-center gap-5 pb-6 relative w-[29vw]">
                            <Image src="/Image/Beranda/Belajar batik.jpg" alt="Desa Nglanggeran" width={411} height={310}
                                className="rounded-2xl h-[40vh] w-full"
                            />
                            <div className="absolute rounded-2xl h-[40vh] w-full bg-black opacity-30"></div>

                            <div className="absolute bottom-10 left-5">
                                <h1 className="font-bold text-lg text-white">Edukasi Batik Topeng</h1>
                                <p className="text-white opacity-70 text-sm">Desa Wisata Nglanggeran</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/detail/detail-aktivitas">
                        <div className="bg-white flex flex-col justify-center gap-5 pb-6 relative w-[29vw]">
                            <Image src="/Image/Beranda/Belajar batik.jpg" alt="Desa Nglanggeran" width={411} height={310}
                                className="rounded-2xl h-[40vh] w-full"
                            />
                            <div className="absolute rounded-2xl h-[40vh] w-full bg-black opacity-30"></div>

                            <div className="absolute bottom-10 left-5">
                                <h1 className="font-bold text-lg text-white">Edukasi Batik Topeng</h1>
                                <p className="text-white opacity-70 text-sm">Desa Wisata Nglanggeran</p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="text-center">
                    <button onClick={handlerAktivitas} className="text-sm bg-[#E7B10A] text-white font-semibold px-2.5 py-1 border-4 border-solid border-[#E7B10A] rounded-full hover:bg-[#CC9F14] hover:border-[#CC9F14]">Lebih Lengkap &gt;</button>
                </div>
            </div>
        </main>
    );
}

export default DesaDanAktivitasViews;