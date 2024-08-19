import Image from "next/image";
import Link from "next/link";   

const ViewsAktivitasLengkap = () => {
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
                <h1 className="font-bold text-[#4C4B16] text-4xl">Jelajahi Aktivitas Wisata</h1>
                <hr className="h-0.5 my-4 bg-[#4C4B16]"/>

                <div className="flex flex-wrap justify-between items-center pt-4 gap-3">
                    <Link href="">
                        <div className="bg-white flex flex-col justify-center gap-5 pb-6 relative w-[29vw]">
                            <Link href="">
                                <Image src="/Image/Beranda/Belajar batik.jpg" alt="Desa Nglanggeran" width={411} height={310}
                                    className="rounded-2xl h-[40vh] w-full"
                                />
                            </Link>
                            <div className="absolute rounded-2xl h-[40vh] w-full bg-black opacity-30"></div>

                            <div className="absolute bottom-10 left-5">
                                <h1 className="font-bold text-lg text-white">Edukasi Batik Topeng</h1>
                                <p className="text-white opacity-70 text-sm">Desa Wisata Nglanggeran</p>
                            </div>
                        </div>
                    </Link>  

                    <Link href="">
                        <div className="bg-white flex flex-col justify-center gap-5 pb-6 relative w-[29vw]">
                            <Link href="">
                                <Image src="/Image/Beranda/Belajar batik.jpg" alt="Desa Nglanggeran" width={411} height={310}
                                    className="rounded-2xl h-[40vh] w-full"
                                />
                            </Link>
                            <div className="absolute rounded-2xl h-[40vh] w-full bg-black opacity-30"></div>

                            <div className="absolute bottom-10 left-5">
                                <h1 className="font-bold text-lg text-white">Edukasi Batik Topeng</h1>
                                <p className="text-white opacity-70 text-sm">Desa Wisata Nglanggeran</p>
                            </div>
                        </div>
                    </Link>  

                    <Link href="">
                        <div className="bg-white flex flex-col justify-center gap-5 pb-6 relative w-[29vw]">
                            <Link href="">
                                <Image src="/Image/Beranda/Belajar batik.jpg" alt="Desa Nglanggeran" width={411} height={310}
                                    className="rounded-2xl h-[40vh] w-full"
                                />
                            </Link>
                            <div className="absolute rounded-2xl h-[40vh] w-full bg-black opacity-30"></div>

                            <div className="absolute bottom-10 left-5">
                                <h1 className="font-bold text-lg text-white">Edukasi Batik Topeng</h1>
                                <p className="text-white opacity-70 text-sm">Desa Wisata Nglanggeran</p>
                            </div>
                        </div>
                    </Link>  

                    <Link href="">
                        <div className="bg-white flex flex-col justify-center gap-5 pb-6 relative w-[29vw]">
                            <Link href="">
                                <Image src="/Image/Beranda/Belajar batik.jpg" alt="Desa Nglanggeran" width={411} height={310}
                                    className="rounded-2xl h-[40vh] w-full"
                                />
                            </Link>
                            <div className="absolute rounded-2xl h-[40vh] w-full bg-black opacity-30"></div>

                            <div className="absolute bottom-10 left-5">
                                <h1 className="font-bold text-lg text-white">Edukasi Batik Topeng</h1>
                                <p className="text-white opacity-70 text-sm">Desa Wisata Nglanggeran</p>
                            </div>
                        </div>
                    </Link>  

                    <Link href="">
                        <div className="bg-white flex flex-col justify-center gap-5 pb-6 relative w-[29vw]">
                            <Link href="">
                                <Image src="/Image/Beranda/Belajar batik.jpg" alt="Desa Nglanggeran" width={411} height={310}
                                    className="rounded-2xl h-[40vh] w-full"
                                />
                            </Link>
                            <div className="absolute rounded-2xl h-[40vh] w-full bg-black opacity-30"></div>

                            <div className="absolute bottom-10 left-5">
                                <h1 className="font-bold text-lg text-white">Edukasi Batik Topeng</h1>
                                <p className="text-white opacity-70 text-sm">Desa Wisata Nglanggeran</p>
                            </div>
                        </div>
                    </Link>  

                    <Link href="">
                        <div className="bg-white flex flex-col justify-center gap-5 pb-6 relative w-[29vw]">
                            <Link href="">
                                <Image src="/Image/Beranda/Belajar batik.jpg" alt="Desa Nglanggeran" width={411} height={310}
                                    className="rounded-2xl h-[40vh] w-full"
                                />
                            </Link>
                            <div className="absolute rounded-2xl h-[40vh] w-full bg-black opacity-30"></div>

                            <div className="absolute bottom-10 left-5">
                                <h1 className="font-bold text-lg text-white">Edukasi Batik Topeng</h1>
                                <p className="text-white opacity-70 text-sm">Desa Wisata Nglanggeran</p>
                            </div>
                        </div>
                    </Link>    
                </div>
            </div>
        </main>
    );
};

export default ViewsAktivitasLengkap;