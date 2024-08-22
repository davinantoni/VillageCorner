import Image from "next/image";

const TentangKamiViews = () => {

    return (
        <main className="bg-[#F7F1E5]">

            {/* HERO SECTION */}
            <div className="w-full h-[100vh] bg-[url('/Image/TentangKami/Background.png')] bg-no-repeat bg-cover bg-center rounded-bl-big-xl rounded-br-big-xl  text-white flex flex-col justify-center items-center">
                <Image src="/Image/logo putih krem.png" width={283} height={283} alt="Logo"></Image>
                <h1 className="font-bold text-5xl w-2/3 text-center leading-normal" >Jelajahi  
                <span className="text-[#E7B10A]"> Petualangan Berkelanjutan</span> Anda di <span className="text-[#E7B10A]">Desa Wisata</span> Indonesia</h1>
            </div>

            {/* VISION AND MISSION SECTION */}
            <div className=" text-[#4C4B16] flex gap-8 justify-center px-60">
                <div className="relative -top-20 bg-white rounded-2xl drop-shadow-xl px-12 py-6 text-center ">
                    <h2 className="text-3xl font-bold mb-4">VISI KAMI</h2>
                    <p className="font-medium leading-7"> Mendukung keberlanjutan, meningkatkan kesejahteraan masyarakat lokal, dan memberikan informasi serta akses mudah bagi wisatawan untuk mendaftar dan berpartisipasi dalam aktivitas desa.</p>
                </div>

                <div className="relative -top-20 bg-white rounded-2xl drop-shadow-xl px-12 py-6 text-center ">
                    <h2 className=" text-3xl font-bold mb-4">MISI KAMI</h2>
                    <p className="font-medium leading-7"> Memfasilitasi pelestarian budaya dan keindahan alam desa melalui promosi wisata berkelanjutan dan program edukasi.
                    Memberdayakan masyarakat desa dengan menyediakan peluang ekonomi.</p>
                </div>
            </div>

            {/* HISTORY SECTION */}
            <div className="w-full h-[100vh] bg-[url('/Image/TentangKami/History.png')] bg-no-repeat bg-cover bg-center text-white p-16  flex flex-col justify-center items-center">
                <h1 className="font-bold text-4xl text-center mb-8">Sejarah Kami</h1>
                {/* timeline */}
                <div className="h-[80vh] overflow-hidden overflow-y-scroll relative max-w-6xl mx-24 my-auto hide-scrollbar after:content-[''] after:absolute after:w-1.5 after:h-[140vh] after:bg-white after:top-0 after:left-1/2 after:-ml-[3px] after:-z-1 after:animate-appear after:rounded-full">
                    {/* container left-container*/}
                    <div className="px-10 py-12 relative left-0 w-1/2 ">
                        <div className="w-10 h-10 bg-[#E7B10A] rounded-full border-4 border-white absolute -right-5 top-24 z-10"></div>
                        {/* text box */}
                        <div className="px-5 py-7 relative rounded-lg bg-white text-black text-right">
                            <h2 className="font-bold text-2xl mb-2">Awal Mula</h2>
                            <p className="absolute -top-4 right-4 inline-block bg-[#E7B10A] text-white px-4 py-2 rounded-xl mb-4 text-sm">2020-2021</p>
                            <p>Perusahaan dimulai dari ide untuk menghubungkan wisata dengan pelestarian budaya desa. Tim pendiri melakukan riset untuk memahami kebutuhan desa dan merancang visi serta misi perusahaan.</p>
                            {/* left-container-arrow */}
                            <span className="absolute top-7 h-0 w-0 z-1  border-t-[15px] border-b-[15px]  border-l-[15px] border-l-white border-t-transparent border-b-transparent -right-[15px]"> </span>
                        </div>
                    </div>

                    {/* container right-container*/}
                    <div className="px-10 py-12 relative left-1/2 w-1/2 ">
                        <div className="w-10 h-10 bg-[#E7B10A] rounded-full border-4 border-white absolute -left-5 top-24 z-10"></div>
                        {/* text box */}
                        <div className="px-5 py-7 relative rounded-lg bg-white text-black">
                            <h2 className="font-bold text-2xl mb-2">Ketertarikan Akan Budaya</h2>
                            <p className="absolute -top-4 left-4 inline-block bg-[#E7B10A] text-white px-4 py-2 rounded-xl mb-4 text-sm">2021-2022</p>
                            <p>Membuat rencana bisnis, termasuk bagaimana melibatkan masyarakat desa dan mempromosikan aktivitas wisata. Tim juga mengembangkan logo dan materi promosi.</p>
                           {/* right-container-arrow */}
                           <span className="absolute top-7 h-0 w-0 z-1  border-t-[15px] border-b-[15px]  border-r-[15px] border-r-white border-t-transparent border-b-transparent -left-[14px]"> </span>
                        </div>
                        
                    </div>

                    {/* container left-container*/}
                    <div className="px-10 py-12 relative left-0 w-1/2 ">
                        <div className="w-10 h-10 bg-[#E7B10A] rounded-full border-4 border-white absolute -right-5 top-24 z-10"></div>
                        {/* text box */}
                        <div className="px-5 py-7 relative rounded-lg bg-white text-black text-right">
                            <h2 className="font-bold text-2xl mb-2">Pembangunan Dilakukan</h2>
                            <p className="absolute -top-4 right-4 inline-block bg-[#E7B10A] text-white px-4 py-2 rounded-xl mb-4 text-sm">2022-2023</p>
                            <p>Perusahaan membangun sistem operasional dan menjalin kemitraan dengan desa-desa serta organisasi lokal. Perekrutan staf juga dimulai untuk menjalankan program.</p>
                            <span className="absolute top-7 h-0 w-0 z-1  border-t-[15px] border-b-[15px]  border-l-[15px] border-l-white border-t-transparent border-b-transparent -right-[15px]"> </span>
                        </div>
                    </div>

                    {/* container right-container*/}
                    <div className="px-10 py-12 relative  left-1/2 w-1/2">
                        <div className="w-10 h-10 bg-[#E7B10A] rounded-full border-4 border-white absolute -left-5 top-24 z-10"></div>
                        {/* text box */}
                        <div className="px-5 py-7 relative rounded-lg bg-white text-black">
                            <h2 className="font-bold text-2xl mb-2">Terus Berkelanjutan</h2>
                            <p className="absolute -top-4 left-4 inline-block bg-[#E7B10A] text-white px-4 py-2 rounded-xl mb-4 text-sm">2023-Sekarang</p>
                            <p>Tim pengembang serta operasional terus bersinergi untuk menghasilkan pelayanan informasi desa wisata yang terbaik bagi masyarakat. Pembangunan website VillageCorner memperkenalkan budaya desa wisata ke beragam masyarakat, baik lokal serta mancanegara.</p>
                            {/* right-container-arrow */}
                           <span className="absolute top-7 h-0 w-0 z-1  border-t-[15px] border-b-[15px]  border-r-[15px] border-r-white border-t-transparent border-b-transparent -left-[14px]"> </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* TEAM SECTION */}
            <div className="relative p-16 bg-[url('/Image/TentangKami/Background2.png')] bg-center bg-cover bg-no-repeat" style={{ backgroundPosition: "calc(50% - 13rem) center"}}>
                <h1 className="text-[#4C4B16] font-bold text-4xl text-center mb-8">Anggota Kami</h1>
                <div className="flex gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <Image src="/Image/TentangKami/Person1.png" width={ 720 } height={ 720 } alt="Anastashia Ellena Widjaja" className="w-4/5 mb-4 rounded-xl"></Image>
                        <h2 className="text-[#4C4B16] text-2xl font-bold mb-1">Anastashia Ellena Widjaja</h2>
                        <h2 className="text-[#4C4B16] opacity-70 font-semibold text-xl">Chief Executive Officer</h2>
                       
                        
                    </div>

                    <div className="flex flex-col items-center">
                        <Image src="/Image/TentangKami/Person2.png" width={ 720 } height={ 720 } alt="Anastashia Ellena Widjaja" className="w-4/5 mb-4 rounded-xl"></Image>
                        <h2 className="text-[#4C4B16] text-2xl font-bold mb-1">Davin Antoni</h2>
                        <h2 className="text-[#4C4B16] opacity-70 font-semibold text-xl">Chief Technology Officer</h2>
                       
                        
                    </div>

                    <div className="flex flex-col items-center">
                        <Image src="/Image/TentangKami/Person3.png" width={ 720 } height={ 720 } alt="Anastashia Ellena Widjaja" className="w-4/5 mb-4 rounded-xl"></Image>
                        <h2 className="text-[#4C4B16] text-2xl font-bold mb-1">John Doe</h2>
                        <h2 className="text-[#4C4B16] opacity-70 font-semibold text-xl">Chief Marketing Officer</h2>
                       
                        
                    </div>
                </div>
                <Image src="/Image/TentangKami/Circle1.png" width={ 140 } height={ 140 } alt="Lingkaran" className="absolute right-8 bottom-24"></Image>
                <Image src="/Image/TentangKami/Circle2.png" width={ 120 } height={ 120 } alt="Lingkaran" className="absolute top-24 left-12"></Image>
            </div>

            {/* VALUES SECTION */}
            <div className="p-16 bg-[#4C4B16] flex flex-col justify-center text-[#4C4B16]">
                <h1 className=" text-white font-bold text-4xl text-center mb-8">Nilai Utama</h1>
                <div className="flex gap-8">
                    <div className="bg-[#F7F1E5] flex justify-center items-center gap-4 p-4 rounded-xl">
                        <div className="w-20 h-20 bg-[#E7B10A] rounded-full flex items-center justify-center shrink-0">
                            <i className=" fa-solid fa-lightbulb text-4xl text-white "></i>
                        </div>
                        
                        <div>
                            <h2 className="font-bold text-xl">Inovasi</h2>
                            <p>Mengembangkan solusi kreatif dan baru dalam pengelolaan desa wisata dan promosi keberlanjutan.</p>
                        </div>
                        
                    </div>

                    <div className="bg-[#F7F1E5] flex justify-center items-center gap-4 p-4 rounded-xl">
                        <div className="w-20 h-20 bg-[#E7B10A] rounded-full flex items-center justify-center shrink-0">
                            <i className=" fa-solid fa-magnifying-glass text-4xl text-white "></i>
                        </div>
                        
                        <div>
                            <h2 className="font-bold text-xl">Transparansi</h2>
                            <p>Menjaga komunikasi yang jelas dan terbuka dengan semua pemangku kepentingan.</p>
                        </div>
                        
                    </div>

                    <div className="bg-[#F7F1E5] flex justify-center items-center gap-4 p-4 rounded-xl">
                        <div className="w-20 h-20 bg-[#E7B10A] rounded-full flex items-center justify-center shrink-0">
                            <i className=" fa-solid fa-award text-4xl text-white "></i>
                        </div>
                        
                        <div>
                            <h2 className="font-bold text-xl">Kualitas</h2>
                            <p>Memastikan standar tinggi dalam layanan, pengalaman wisata, dan program-program.</p>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* BACKGROUND SECTION*/}
            <div>
                <Image src="/Image/TentangKami/Background3.png" width={ 1440 } height={ 720 } alt="Pulau" className="w-full "></Image>
            </div>

            {/* PARTNERS SECTION */}
            
            <div className="p-16">
                <h1 className=" text-[#4C4B16] font-bold text-4xl text-center mb-8">Mitra Kami</h1>
                
                {/* LOGOS */}
                <div className="relative overflow-hidden px-20  whitespace-nowrap">
                    {/* LOGOS SLIDES */}
                    <div className="animate-slide inline-block ">
                        <Image src="/Image/TentangKami/BCA.png" width={ 210 } height={ 200 } alt="BCA" className="inline-block mx-10"></Image>

                        <Image src="/Image/TentangKami/Garuda.png" width={ 210 } height={ 200 } alt="Garuda" className="inline-block mx-10"></Image>
                        <Image src="/Image/TentangKami/PesonaIndonesia.png" width={ 210 } height={ 200 } alt="PesonaIndonesia" className="inline-block mx-10"></Image>
                        <Image src="/Image/TentangKami/Traveloka.png" width={ 210 } height={ 200 } alt="Traveloka" className="inline-block mx-10"></Image>
                        <Image src="/Image/TentangKami/Tiket.png" width={ 210 } height={ 200 } alt="Tiket" className="inline-block "></Image>
                        <Image src="/Image/TentangKami/Goto.png" width={ 210 } height={ 200 } alt="Goto" className="inline-block mx-10"></Image>
                        <Image src="/Image/TentangKami/BCA.png" width={ 210 } height={ 200 } alt="BCA" className="inline-block mx-10"></Image>

                        <Image src="/Image/TentangKami/Garuda.png" width={ 210 } height={ 200 } alt="Garuda" className="inline-block mx-10"></Image>
                        <Image src="/Image/TentangKami/PesonaIndonesia.png" width={ 210 } height={ 200 } alt="PesonaIndonesia" className="inline-block mx-10"></Image>
                        <Image src="/Image/TentangKami/Traveloka.png" width={ 210 } height={ 200 } alt="Traveloka" className="inline-block mx-10"></Image>
                        <Image src="/Image/TentangKami/Tiket.png" width={ 210 } height={ 200 } alt="Tiket" className="inline-block "></Image>
                        <Image src="/Image/TentangKami/Goto.png" width={ 210 } height={ 200 } alt="Goto" className="inline-block mx-10"></Image>
                    </div>

                    
                </div>
            </div>
        </main>
    )
}

export default TentangKamiViews;