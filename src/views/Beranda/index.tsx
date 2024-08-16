import Image from "next/image";

const BerandaViews = () => {
    return (
        <div className="relative w-full h-[544px]">
        <Image
            src="/Image/Desa nglanggeran 2.png"
            alt="Desa Nglanggeran"
            layout="fill" // Menggunakan layout fill agar gambar memenuhi container
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
    )
}

export default BerandaViews;