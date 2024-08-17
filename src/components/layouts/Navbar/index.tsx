import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
    const {push} = useRouter();
    const handlerLogin = () => {
         push("/auth/login");
    }
    const handlerRegister = () => {
        push("/auth/register");
   }

    return (
        <header>
            <nav className="absolute top-0 left-0 w-full flex items-center justify-between pl-5 z-10 pr-5">
                <div>
                    <Link href="/">
                        <Image src="/Image/Logo putih krem.png" alt="logo" width={70} height={70} />
                    </Link>
                </div>
                <div>
                    <ul className="flex items-center gap-[4.3vw]">
                        <li>
                            <Link href="/" className="font-bold text-white hover:text-[#E7B10A]">Beranda</Link>
                        </li>
                        <li>
                            <Link href="#" className="font-bold text-white hover:text-[#E7B10A]">Desa Wisata dan Aktivitas</Link>
                        </li>
                        <li>
                            <Link href="#" className="font-bold text-white hover:text-[#E7B10A]">Tur Virtual</Link>
                        </li>
                        <li>
                            <Link href="#" className="font-bold text-white hover:text-[#E7B10A]">Wisata Berkelanjutan</Link>
                        </li>
                        <li>
                            <Link href="#" className="font-bold text-white hover:text-[#E7B10A]">Tentang Kami</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="">
                        <button onClick={handlerLogin} className="mr-4 text-[#E7B10A] tracking-widest font-bold px-5 py-1 border-2 border-solid border-[#E7B10A] rounded-full hover:scale-105">LOGIN</button>
                        <button onClick={handlerRegister} className="mr-4 bg-[#E7B10A] text-white tracking-widest font-bold px-5 py-1 border-2 border-solid border-[#E7B10A] rounded-full hover:scale-105">REGISTER</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;