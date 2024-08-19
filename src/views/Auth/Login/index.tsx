import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const LoginViews = () => {
    const {push} = useRouter();
    const handlerLogin = () => {
         push("/");
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
                
                <div className="relative flex items-center justify-evenly w-full h-full px-4">
                    <div className="bg-white p-10 rounded-xl w-[90%] max-w-md">
                        <h2 className="text-[#898121] text-3xl font-semibold mb-10">Masuk</h2>
                        
                        <form>
                            <div className="mb-4 flex items-center">
                                <div className="flex items-center border border-gray-300 rounded-lg w-full overflow-hidden">
                                    <div className="p-3">
                                        <Image src="/Image/Icon/email.png" alt="Email Icon" width={24} height={24} />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email Anda"
                                        className="w-full p-3 outline-none"
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="flex items-center border border-gray-300 rounded-lg w-full overflow-hidden">
                                    <div className="p-3">
                                        <Image src="/Image/Icon/Password.png" alt="Password Icon" width={24} height={24} />
                                    </div>
                                    <input
                                    type="password"
                                    id="password"
                                    placeholder="Kata Sandi"
                                    className="w-full p-3 outline-none"
                                    />
                                </div>
                            </div>
                            <button onClick={handlerLogin} type="submit" className="w-full bg-[#898121] text-white py-3 rounded-lg font-semibold hover:bg-[#6F691A]">
                                Masuk
                            </button>
                        </form>

                        <div className="text-right mt-4">
                            <Link href="#" className="text-sm text-[#898121] font-semibold">Lupa kata sandi?</Link>            
                        </div>

                        <div className="text-center mt-6">
                            <Link href="/auth/register" className="text-sm text-[#6B8F71] hover:text-[#577F5B]">Belum punya akun? <span className="text-[#898121] font-semibold">Buat Akun</span></Link>
                        </div>
                    </div>

                    {/* hidden md:block */}
                    <div className="text-white max-w-xl text-center">
                        <h1 className="text-4xl font-bold leading-tight">
                            Discover Your <span className="text-[#E7B10A]">Sustainable Journey </span>
                            in Indonesia’s <span className="text-[#E7B10A]">Tourism Villages</span>
                        </h1>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LoginViews;