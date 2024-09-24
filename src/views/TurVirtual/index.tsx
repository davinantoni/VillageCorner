import Image from "next/image";
import Link from "next/link";

const TurVirtualViews = () => {
    return (
        <main className="bg-[#fffff]">
            
            {/* TOUR VIRTUAL SECTION */}
            <div className="w-full h-[100vh] bg-[url('/Image/TurVirtual/Background.png')] bg-no-repeat bg-cover bg-center ">
                <div className="absolute top-32 left-64 flex flex-col justify-center items-center gap-2 hover:scale-105 transition ease-in-out delay-150 hover:-translate-y-0.5 duration-300 cursor-pointer">
                    <Image src="/Image/TurVirtual/Location.png" width={1440} height={720} alt="Pin" className="w-8 h-14 animate-slow-bounce"></Image>
                    <p className="bg-[#D93636]/70 border-[1px] border-white  px-4 py-1 text-white grow-0 rounded-full ">Kawasan Pengrajin</p>
                </div>
                <div className="absolute left-28 bottom-32 flex flex-col justify-center items-center gap-2 hover:scale-105 transition ease-in-out delay-150 hover:-translate-y-0.5 duration-300 cursor-pointer">
                    <Image src="/Image/TurVirtual/Location.png" width={1440} height={720} alt="Pin" className="w-8 h-14 animate-slow-bounce"></Image>
                    <p className="bg-[#D93636]/70 border-[1px] border-white  px-4 py-1 text-white grow-0 rounded-full ">Kawasan Nelayan</p>
                </div>
                <div className="absolute right-64 top-64 flex flex-col justify-center items-center gap-2 hover:scale-105 transition ease-in-out delay-150 hover:-translate-y-0.5 duration-300 cursor-pointer">
                    <Image src="/Image/TurVirtual/Location.png" width={1440} height={720} alt="Pin" className="w-8 h-14   animate-slow-bounce"></Image>
                    <p className="bg-[#D93636]/70 border-[1px] border-white  px-4 py-1 text-white grow-0 rounded-full ">Kawasan Penginapan</p>
                </div>
            </div>

            {/* OTHERS SECTION */}
            <div className="p-16">
                <h1 className="font-bold text-[#4C4B16] text-4xl">Pilih Tur Virtual Desa Wisata Lainnya</h1>
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
            </div>
        </main>
    )
}

export default TurVirtualViews;