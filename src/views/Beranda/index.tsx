import Image from "next/image";

const BerandaViews = () => {
    return (
        <main>
            <div className="relative w-full h-[100vh]">
                <Image
                    src="/Image/Desa nglanggeran 2.png"
                    alt="Desa Nglanggeran"
                    layout="fill" objectFit="cover" // Menggunakan layout fill agar gambar memenuhi container
                    // objectFit="cover" // Mengatur gambar agar cover seluruh container
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <h1 className="text-6xl font-bold mb-3">Selamat Datang di</h1>
                    <h1 className="text-6xl font-bold text-[#E7B10A] mb-7">VillageCorner</h1>
                    <p className="mt-2 text-lg font-medium mb-5">Jelajahi <span className="text-[#E7B10A]">Petualangan Berkelanjutan</span> Anda di <br></br>Desa Wisata Indonesia</p>
                    <button className="text-sm bg-[#E7B10A] text-white font-semibold px-2.5 py-1 border-4 border-solid border-[#E7B10A] rounded-full hover:bg-[#CC9F14] hover:border-[#CC9F14]">Mulai Berpetualang &gt;</button>
                </div>
            </div>
            
            <div className="bg-[#F7F1E5] flex justify-evenly items-center flex-wrap"> 
                <div>
                    <p className="tracking-extra_wide font-bold text-[#898121] text-lg pb-3">WISATA BERKELANJUTAN</p>
                    <h1 className="text-3xl font-bold pb-2">Apa Manfaat dari <br/> <span className="text-[#E7B10A]">Sustainable Tourism ?</span></h1>
                    <button className="text-xs bg-[#E7B10A] text-white font-bold px-2.5 py-1 border-4 border-solid border-[#E7B10A] rounded-full hover:bg-[#CC9F14] hover:border-[#CC9F14]">Pelajari Lebih Lanjut &gt;</button>
                </div>

                <div className="flex flex-wrap mt-20 mb-20 justify-center items-center">
                    <div className="bg-white flex flex-col justify-center items-center gap-5 pt-12 pb-12 m-2.5 text-center w-full max-w-xs border border-gray-200 rounded-3xl">
                        <div className="pb-6">
                            <Image src="/Image/lingkungan.png" alt="Lingkungan" width={100} height={100}/>
                        </div>
                        <div>
                            <h1 className="font-bold text-2xl mb-5">Lingkungan</h1>
                            <p className="text-[#191825] opacity-40">Melestarikan alam dengan meminimalkan dampak negatif terhadap ekosistem.</p>
                        </div>                       
                    </div>

                    <div className="bg-white flex flex-col justify-center items-center gap-5 pt-12 pb-12 m-2.5 text-center w-full max-w-xs border border-gray-200 rounded-3xl">
                        <div className="pb-6">
                            <Image src="/Image/Ekonomi 2.png" alt="Ekonomi" width={100} height={100}/>
                        </div>
                        <div>
                            <h1 className="font-bold text-2xl mb-5">Ekonomi</h1>
                            <p className="text-[#191825] opacity-40"> Meningkatkan perekonomian lokal dengan menciptakan lapangan kerja dan mendukung bisnis lokal.</p>
                        </div>                       
                    </div>

                    <div className="bg-white flex flex-col justify-center items-center gap-5 pt-12 pb-12 m-2.5 text-center w-full max-w-xs border border-gray-200 rounded-3xl">
                        <div className="pb-6">
                            <Image src="/Image/Sosial 2.png" alt="Sosial" width={100} height={100}/>
                        </div>
                        <div>
                            <h1 className="font-bold text-2xl mb-5">Sosial</h1>
                            <p className="text-[#191825] opacity-40">Mendukung budaya lokal dan memperkuat hubungan antar masyarakat.</p>
                        </div>                       
                    </div>
                </div>
            </div>

            <div className="bg-[#77701F]">

            </div>
        </main>
    )
}

export default BerandaViews;