import Image from "next/image"
import { useState } from "react";

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [hero, setHero] = useState({
        h1: "2.12 miliar ton",
        h2: "sampah dibuang tiap harinya",
    });

    const handleClick = (newH1: string, newH2: string, newIndex: number) => {

        setHero({
            h1: newH1,
            h2: newH2,
        })
        setActiveIndex(newIndex);
    }

    return (
        <div className="relative w-full h-[100vh] bg-[url('/Image/WisataBerkelanjutan/Background.png')] bg-no-repeat bg-cover bg-center flex flex-col justify-end content-center ">
            <div className="text-center text-6xl  mb-3 bg-[#E7B10A] bg-opacity-50 border border-[#E7B10A] border-4 rounded-2xl p-4 ] w-3/5 self-center">
                <h1 className="font-bold text-white">{hero.h1}</h1>
                <h2 className="font-regular text-lg text-white opacity-60">{hero.h2}</h2>
            </div>

            <Image src="/Image/WisataBerkelanjutan/Bumi.png" width={1440} height={500} alt="Bumi" className="self-end" />

            <div className="relative flex justify-between items-center">
                <button className="lg:w-24 lg:h-24  md:w-16 md:h-16 w-12 h-12 absolute bottom-3 left-60 rounded-full  border-2 border-[#E7B10A] flex justify-center items-center hover:scale-105 " onClick={() => handleClick("100-500 tahun", "dibutuhkan hingga sampah plastik terurai", 0)}>
                    <div className={`lg:w-12 lg:h-12 md:w-8 md:h-8 w-6 h-6 rounded-full transition  ${activeIndex === 0 ? `bg-[#E7B10A]` : `bg-transparent border-2 border-[#E7B10A]`}`}></div>
                </button>

                <button className="lg:w-24 lg:h-24  md:w-16 md:h-16 w-12 h-12  absolute bottom-32 left-1/2 rounded-full  border-2 border-[#E7B10A] flex justify-center items-center hover:scale-105" onClick={() => handleClick("2.12 miliar ton", "sampah dibuang tiap harinya", 1)}>
                    <div className={`lg:w-12 lg:h-12 md:w-8 md:h-8 w-6 h-6  rounded-full transition ${activeIndex === 1 ? `bg-[#E7B10A]` : `bg-transparent border-2 border-[#E7B10A]`}`}></div>
                </button>

                <button className="lg:w-24 lg:h-24  md:w-16 md:h-16 w-12 h-12 absolute bottom-36 right-60 rounded-full  border-2 border-[#E7B10A] flex justify-center items-center hover:scale-105" onClick={() => handleClick("7.2 ton sampah", "belum terkelola dengan baik di Indonesia", 2)}>
                    <div className={`lg:w-12 lg:h-12 md:w-8 md:h-8 w-6 h-6 rounded-full transition ${activeIndex === 2 ? `bg-[#E7B10A]` : `bg-transparent border-2 border-[#E7B10A]`}`}></div>
                </button>
            </div>

        </div>
    )
}

export default Hero;