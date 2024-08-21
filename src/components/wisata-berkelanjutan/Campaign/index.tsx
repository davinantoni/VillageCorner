import Image from "next/image";
import { useState } from "react";

const Campaign = () => {
    const images = [
        "/Image/WisataBerkelanjutan/Kampanye1.png",
        "/Image/WisataBerkelanjutan/Kampanye2.png",
        "/Image/WisataBerkelanjutan/Kampanye3.png",
        "/Image/WisataBerkelanjutan/Kampanye4.png"
    ];

    const contents = [
        ["Belanja Lokal", "Membeli produk dan makanan dari pedagang setempat. Dengan ini, Anda membantu memperkuat ekonomi lokal dan budaya daerah."],
        ["Hindari Plastik", "Kurangi penggunaan bahan sekali pakai. Membawa botol, tas, dan wadah sendiri untuk mengurangi sampah di lingkungan."],
        ["Transportasi Hijau", "Pilih transportasi umum, sepeda, atau jalan kaki. Hal ini mengurangi emisi karbon, mengurangi polusi udara, dan hemat energi."],
        
        ["Jaga Kebersihan", "Selalu membuang sampah pada tempatnya. Jangan merusak lingkungan dengan aksi yang tidak bertanggung jawab."]
    ]

    const [image, setImage] = useState(images[0])
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index: number) => {
        setActiveIndex(index),
        setImage(images[index])
    }

    return (
        <div className="flex bg-[#4C4B16] text-white">
                <div className="relative w-[200vw]">
                    <Image src={ image } alt="Kampanye" layout='fill' objectFit='cover'></Image>
                </div>
                
                <div className="py-16 px-12">
                    <h1 className="font-bold text-4xl mb-2">Dimulai dari Anda</h1>
                    <h2 className="mb-16 opacity-60">Semua dimulai dari diri sendiri. Lakukan aksi sederhana yang membawa banyak perubahan pada lingkungan pariwisata Indonesia.</h2>
                    <div className="flex flex-wrap gap-16">
                        <div className="flex gap-8">
                            <div className={`cursor-pointer relative  p-4 pt-8 border-2 border-[#898121] rounded-xl ${ activeIndex === 0 ? 'bg-[#898121]/20 border-[#898121]' : 'bg-transparant' }`} onClick={() => handleClick(0) }>
                                    <div className="absolute -top-10 text-4xl w-16 h-16 rounded-full bg-[#898121] flex justify-center items-center p-2">
                                        <i className="fa-solid fa-bag-shopping"></i>
                                    </div>

                                    <h3 className="font-semibold text-xl mb-2">Belanja Lokal</h3>
                                    <p className=" text-sm leading-6">Membeli produk dan makanan dari pedagang setempat. Dengan ini, Anda membantu memperkuat ekonomi lokal dan budaya daerah.</p>
                                </div>

                            

                            <div className={`cursor-pointer relative  p-4 pt-8 border-2 border-[#898121] rounded-xl ${ activeIndex === 1 ? 'bg-[#898121]/20 border-[#898121]' : 'bg-transparant' }`} onClick={() => handleClick(1) }>
                                <div className="absolute -top-10 text-4xl w-16 h-16 rounded-full bg-[#898121] flex justify-center items-center p-2">
                                    <i className="fa-solid fa-bottle-water self-center"></i>
                                </div>

                                <h3 className="font-semibold text-xl mb-2">Hindari Plastik</h3>
                                <p className=" text-sm leading-6">Kurangi penggunaan bahan sekali pakai. Membawa botol, tas, dan wadah sendiri untuk mengurangi sampah di lingkungan.</p>
                            </div>

                        </div>

                        <div className="flex gap-8">
                            <div className={`cursor-pointer relative  p-4 pt-8 border-2 border-[#898121] rounded-xl ${ activeIndex === 2 ? 'bg-[#898121]/20 border-[#898121]' : 'bg-transparant' }`} onClick={() => handleClick(2) }>
                                <div className="absolute -top-10 text-3xl w-16 h-16 rounded-full bg-[#898121] flex justify-center items-center p-2">
                                    <i className="fa-solid fa-bus-simple self-center"></i>
                                </div>

                                <h3 className="font-semibold text-xl mb-2">Transportasi Hijau</h3>
                                <p className=" text-sm leading-6">Pilih transportasi umum, sepeda, atau jalan kaki. Hal ini mengurangi emisi karbon, mengurangi polusi udara, dan hemat energi.</p>
                            </div>

                            <div className={`cursor-pointer relative  p-4 pt-8 border-2 border-[#898121] rounded-xl ${ activeIndex === 3 ? 'bg-[#898121]/20 border-[#898121]' : 'bg-transparant' }`} onClick={() => handleClick(3) }>
                                <div className="absolute -top-10 text-3xl w-16 h-16 rounded-full bg-[#898121] flex justify-center align-center p-2">
                                    <i className="fa-solid fa-trash self-center"></i>
                                </div>

                                <h3 className="font-semibold text-xl mb-2">Jaga Kebersihan</h3>
                                <p className=" text-sm leading-6">Selalu membuang sampah pada tempatnya. Jangan merusak lingkungan dengan aksi yang tidak bertanggung jawab. </p>
                            </div>

                            

                        </div>

                    </div>

                </div>
            </div>
    )
}

export default Campaign;