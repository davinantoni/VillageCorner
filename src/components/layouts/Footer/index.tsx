import Image from "next/image";

const Footer = () => {
    return (
        <div className="flex flex-col bg-[#4C4B16] text-white p-16 pb-4 gap-4">
            <div className="flex gap-4 py-4 ">
                <div className="flex flex-1 items-center">
                    <Image src="/Image/logo putih krem.png" width= { 150 } height= {300} alt="Logo"></Image>
                    <p className="font-semibold text-lg" >Jelajahi  
                    <span className="text-[#E7B10A]"> Petualangan Berkelanjutan</span> Anda di <span className="text-[#E7B10A]">Desa Wisata</span> Indonesia</p>
                </div>

                <div className="flex-1">
                    <h1 className="font-semibold text-lg mb-2">Kontak Kami</h1>
                    <p className="mb-2">+62 123131214121 | villagecorner@gmail.com</p>
                    <div  className="flex  items-center gap-2">
                        <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram text-6xl"></i></a>
                        <a href="https://x.com/?lang=en"><i className="fa-brands fa-x-twitter text-6xl"></i></a>
                        <a href="https://id-id.facebook.com/"><i className="fa-brands fa-facebook text-6xl"></i></a>
                    </div>
                </div>

                <div className="flex-1">
                    <h1 className="font-semibold text-lg mb-2 ">Langganan</h1>
                    <p className="mb-2">Masukkan email Anda untuk mendapatkan informasi terbaru dari VillageCorner</p>

                    <div  className="relative">
                        <input type="text" placeholder="Email " className="p-1 w-3/5 text-black rounded-lg pr-9" />
                        <i className="absolute left-[15rem]  top-1/2 transform -translate-y-1/2 text-[#4C4B16] fa-solid fa-envelope "></i>
                    </div>
                    
                </div>
            </div>

            <div className="border-b border-[#898121]"></div>
            <p className="text-center font-semibold">&copy; 2024 VillageCorner. Hak cipta dilindungi.</p>
        </div>
    )
}

export default Footer;