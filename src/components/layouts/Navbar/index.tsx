import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <header>
            <nav className="absolute top-0 left-0 w-full flex items-center justify-between pl-5 z-10 pr-5">
                <div>
                    <Image src="/Image/Logo putih krem.png" alt="logo" width={70} height={70} />
                </div>
                <div>
                    <ul className="flex items-center gap-[4.3vw]">
                        <li>
                            <Link href={"/"} className="font-bold text-white hover:text-[#E7B10A]">Beranda</Link>
                        </li>
                        <li>
                            <a href="#" className="font-bold text-white hover:text-[#E7B10A]">Desa Wisata dan Aktivitas</a>
                        </li>
                        <li>
                            <a href="#" className="font-bold text-white hover:text-[#E7B10A]">Tur Virtual</a>
                        </li>
                        <li>
                            <Link href={"/wisata-berkelanjutan"} className="font-bold text-white hover:text-[#E7B10A]">Wisata Berkelanjutan</Link>
                        </li>
                        <li>
                            <a href="#" className="font-bold text-white hover:text-[#E7B10A]">Tentang Kami</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="">
                        <button className="mr-4 text-[#E7B10A] tracking-widest font-bold px-5 py-1 border-2 border-solid border-[#E7B10A] rounded-full hover:scale-105 transition ease-in-out delay-150 hover:-translate-y-0.5 duration-300">LOGIN</button>
                        <button className="mr-4 bg-[#E7B10A] text-white tracking-widest font-bold px-5 py-1 border-2 border-solid border-[#E7B10A] rounded-full hover:scale-105 transition ease-in-out delay-150 hover:-translate-y-0.5 duration-300">REGISTER</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;