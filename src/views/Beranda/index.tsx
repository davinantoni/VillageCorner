import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const BerandaViews = () => {
    const { push } = useRouter();
    const handlerHero = () => {
        push("/desa-wisata-aktivitas");
    }
    const handlerWisataBerkelanjutan = () => {
        push("/wisata-berkelanjutan");
    }
    const handlerDesadanAktivitas = () => {
        push("/desa-wisata-aktivitas");
    }
    const handlerTurVirtual = () => {
        push("/tur-virtual");
    }
    const handlerTentangKami = () => {
        push("/tentang-kami");
    }

    return (
        <main>
            <div className="relative w-full h-[100vh]">
                <Image
                    src="/Image/Beranda/Desa nglanggeran 2.png"
                    alt="Desa Nglanggeran"
                    fill={true} className="object-cover" // Menggunakan layout fill agar gambar memenuhi container
                    // objectFit="cover" // Mengatur gambar agar cover seluruh container
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">Selamat Datang di</h1>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E7B10A] mb-7">VillageCorner</h1>
                    <p className="mt-2 text-base md:text-lg lg:text-xl font-medium mb-5">Jelajahi <span className="text-[#E7B10A]">Petualangan Berkelanjutan</span> Anda di <br/>Desa Wisata Indonesia</p>
                    <button onClick={handlerHero} className="text-xs md:text-sm bg-[#E7B10A] text-white font-semibold px-2.5 py-1 border-4 border-solid border-[#E7B10A] rounded-full hover:bg-[#CC9F14] hover:border-[#CC9F14]">Mulai Berpetualang &gt;</button>
                </div>

            </div>
            
            <div className="bg-[#F7F1E5] flex flex-col md:flex-row justify-center 2xl:justify-between flex-wrap items-center p-8 md:p-16"> 
                <div className="mb-6 text-center 2xl:text-left">
                    <p className="tracking-extra_wide font-bold text-[#898121] md:text-lg pb-3">WISATA BERKELANJUTAN</p>
                    <h1 className="text-2xl md:text-3xl font-bold pb-2 ">Apa Manfaat dari <br/> <span className="text-[#E7B10A]">Sustainable Tourism?</span></h1>
                    <button onClick={handlerWisataBerkelanjutan} className="text-xs bg-[#E7B10A] text-white font-bold px-2.5 py-1 border-4 border-solid border-[#E7B10A] rounded-full hover:bg-[#CC9F14] hover:border-[#CC9F14]">Pelajari Lebih Lanjut &gt;</button>
                </div>

                <div className="flex flex-wrap justify-center items-center">
                    <div className="bg-white flex flex-col justify-center items-center gap-5 pt-12 pb-12 m-2.5 text-center w-full max-w-xs border border-gray-200 rounded-3xl shadow">
                        <div className="pb-6">
                            <Image src="/Image/Beranda/lingkungan.png" alt="Lingkungan" width={100} height={100}/>
                        </div>
                        <div className="px-2 md:px-3">
                            <h1 className="font-bold text-xl md:text-2xl mb-5">Lingkungan</h1>
                            <p className="text-[#191825] text-sm md:text-base opacity-50">Melestarikan alam dengan meminimalkan dampak negatif terhadap ekosistem.</p>
                        </div>                       
                    </div>

                    <div className="bg-white flex flex-col justify-center items-center gap-5 pt-12 pb-12 m-2.5 text-center w-full max-w-xs border border-gray-200 rounded-3xl shadow">
                        <div className="pb-6">
                            <Image src="/Image/Beranda/Ekonomi 2.png" alt="Ekonomi" width={100} height={100}/>
                        </div>
                        <div className="px-2 md:px-3">
                            <h1 className="font-bold text-xl md:text-2xl mb-5">Ekonomi</h1>
                            <p className="text-[#191825] text-sm md:text-base opacity-50"> Meningkatkan perekonomian lokal dengan menciptakan lapangan kerja dan mendukung bisnis lokal.</p>
                        </div>                       
                    </div>

                    <div className="bg-white flex flex-col justify-center items-center gap-5 pt-12 pb-12 m-2.5 text-center w-full max-w-xs border border-gray-200 rounded-3xl shadow">
                        <div className="pb-6">
                            <Image src="/Image/Beranda/Sosial 2.png" alt="Sosial" width={100} height={100}/>
                        </div>
                        <div className="px-2 md:px-3">
                            <h1 className="font-bold text-xl md:text-2xl mb-5">Sosial</h1>
                            <p className="text-[#191825] text-sm md:text-base opacity-50">Mendukung budaya lokal dan memperkuat hubungan antar masyarakat.</p>
                        </div>                       
                    </div>
                </div>
            </div>


            <div className="bg-[#77701F] p-8 md:p-16">
                <div className="pb-5 text-center 2xl:text-left">
                    <p className="tracking-extra_wide font-bold text-[#4C4B16] md:text-lg pb-3">DESA WISATA & AKTIVITAS</p>
                    <h1 className="text-2xl md:text-3xl font-bold pb-2 text-white">Jelajahi <span className="text-[#E7B10A]">Desa Wisata</span> dan
                        <span className="text-[#E7B10A]"> Aktivitasnya</span></h1>
                </div>

                <div className="flex flex-wrap justify-center items-center md:justify-between">
                    <div className="bg-white flex flex-col justify-center gap-5 rounded-3xl pb-6 mb-5">
                        <Link href="/detail/detail-desa-wisata">
                            <Image src="/Image/Beranda/Desa nglanggeran.png" alt="Desa Nglanggeran" width={310} height={310}
                                className="rounded-t-3xl h-[35vh] 2xl:h-[44vh] object-cover"
                            />
                        </Link>

                        <div className="px-4">
                            <Link href="/detail/detail-desa-wisata">
                                <h1 className="font-bold text-lg md:text-xl pb-1">Desa Wisata Nglanggeran</h1>
                            </Link>
                            <p className="opacity-75 text-sm md:text-base">Kabupaten Gunungkidul</p>
                        </div>
                    </div>

                    <div className="bg-white flex flex-col justify-center gap-5  rounded-3xl pb-6 mb-5">
                        <Link href="/detail/detail-aktivitas">
                            <Image src="/Image/Beranda/Belajar batik.jpg" alt="Belajar Batik" width={310} height={300}
                                className="rounded-t-3xl h-[35vh] 2xl:h-[44vh] object-cover"
                            />
                        </Link>

                        <div className="px-4">
                            <Link href="/detail/detail-aktivitas">
                                <h1 className="font-bold text-lg md:text-xl pb-1">Edukasi Batik Topeng</h1>
                            </Link>
                            <p className="opacity-75 text-sm md:text-base">Desa Wisata Nglanggeran</p>
                        </div>
                    </div>

                    <div className="bg-white flex flex-col justify-center gap-5 rounded-3xl pb-6 mb-5">
                        <Link href="/detail/detail-desa-wisata">
                            <Image src="/Image/Beranda/Desa nglanggeran.png" alt="Desa Nglanggeran" width={310} height={310}
                                className="rounded-t-3xl h-[35vh] 2xl:h-[44vh] object-cover"
                            />
                        </Link>

                        <div className="px-4">
                            <Link href="/detail/detail-desa-wisata">
                                <h1 className="font-bold text-lg md:text-xl pb-1">Desa Wisata Nglanggeran</h1>
                            </Link>
                            <p className="opacity-75 text-sm md:text-base">Kabupaten Gunungkidul</p>
                        </div>
                    </div>

                    <div className="bg-white flex flex-col justify-center gap-5 rounded-3xl pb-6 mb-5">
                        <Link href="/detail/detail-aktivitas">
                            <Image src="/Image/Beranda/Belajar batik.jpg" alt="Belajar Batik" width={310} height={300}
                                className="rounded-t-3xl h-[35vh] 2xl:h-[44vh] object-cover"
                            />
                        </Link>

                        <div className="px-4">
                            <Link href="/detail/detail-aktivitas">
                                <h1 className="font-bold text-lg md:text-xl pb-1">Edukasi Batik Topeng</h1>
                            </Link>
                            <p className="opacity-75 text-sm md:text-base">Desa Wisata Nglanggeran</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <button onClick={handlerDesadanAktivitas} className="text-xs bg-[#E7B10A] text-white font-bold px-2.5 py-1 border-4 border-solid border-[#E7B10A] rounded-full hover:bg-[#CC9F14] hover:border-[#CC9F14]">Lihat Lebih Banyak &gt;</button>
                </div>
            </div>

            <div className="bg-[#F7F1E5] flex flex-col justify-center items-center flex-wrap p-8 md:p-16"> 
                <div className="pb-5 text-center">
                    <p className="tracking-extra_wide font-bold text-[#4C4B16] md:text-lg pb-3">TUR VIRTUAL</p>
                    <h1 className="text-2xl md:text-3xl font-bold pb-2">Jelajahi <span className="text-[#E7B10A]">Desa Wisata secara virtual, </span>langsung dari layar anda</h1>
                </div>

                <div>
                    <Image src="/Image/Beranda/Tur Virtual.png" alt="Tur Virtual" width={1440} height={500}
                        className="h-full w-full"
                    />
                </div>

                <div className="flex justify-center mt-5">
                    <button onClick={handlerTurVirtual} className="text-xs bg-[#E7B10A] text-white font-bold px-2.5 py-1 border-4 border-solid border-[#E7B10A] rounded-full hover:bg-[#CC9F14] hover:border-[#CC9F14]">Lihat Lebih Banyak &gt;</button>
                </div>
            </div>

            <div className="bg-[#77701F] flex flex-col md:flex-row justify-between items-center">
                <div className="flex-1">
                    <Image src="/Image/Beranda/Desa Segitiga.png" alt="Desa" width={1440} height={500}
                        className="h-full w-full"
                    />
                </div>

                <div className="flex-1 px-10 text-center text-white flex flex-col py-8 md:py-16">
                    <p className="tracking-extra_wide font-bold md:text-lg pb-3">TENTANG KAMI</p>
                    <h1 className="text-2xl md:text-3xl font-bold pb-2">Mengapa <span className="text-[#E7B10A]">VillageCorner? </span></h1>
                    <p className="mb-5 text-sm md:text-base">Visi kami adalah mendukung keberlanjutan, meningkatkan kesejahteraan masyarakat lokal, dan memberikan informasi serta akses mudah bagi wisatawan untuk mendaftar dan berpartisipasi dalam aktivitas desa.</p>
                    <div className="flex justify-center">
                        <button onClick={handlerTentangKami} className="text-xs bg-[#E7B10A] text-white font-bold px-2.5 py-1 border-4 border-solid border-[#E7B10A] rounded-full hover:bg-[#CC9F14] hover:border-[#CC9F14]">Tentang Kami &gt;</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BerandaViews;