import Image from "next/image";
import Link from "next/link";

const DetailDesaWisataViews = () => {
    return (
        <main>
            <div className="relative w-full h-[60vh]">
                <Image
                    src="/Image/Beranda/Desa nglanggeran.png"
                    alt="Desa Nglanggeran"
                    fill={true} className="object-cover"
                />
            </div>

            <div className="p-14">
                <section>
                    <h1 className="font-bold text-[#4C4B16] text-4xl pb-1">Desa Wisata Nglanggeran</h1>
                    <div className="flex items-center gap-1 pb-5">
                        <Image src="/Image/Icon/Location.png" alt="Location" width={13} height={13}></Image>
                        <p className="opacity-50">Nglanggeran, Patuk, Kabupaten Gunungkidul, DI Yogyakarta</p>
                    </div>

                    <div className="flex flex-wrap items-center">
                        <div>
                            <Image
                                src="/Image/Beranda/Desa nglanggeran 2.png"
                                alt="Desa Nglanggeran"
                                width={680}
                                height={500}
                                className="rounded-3xl mr-6 h-[69vh] object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <Image src="/Image/Beranda/Belajar Batik.jpg" alt="Belajar Batik" width={339} height={200} className="rounded-3xl h-[33vh]" />
                            <Image src="/Image/Mengenal pakaian adat jawa.jpg" alt="Mengenal pakaian adat jawa" width={339} height={200} className="rounded-3xl h-[33vh]" />
                            <Image src="/Image/Perah susu kambing.jpg" alt="Perah susu kambing" width={339} height={200} className="rounded-3xl h-[33vh]" />
                            <Image src="/Image/belajar olahan criping pisang.jpg" alt="Photo 4" width={339} height={200} className="rounded-3xl h-[33vh]" />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="py-5">
                        <h1 className="text-[#4C4B16] text-2xl font-medium pb-2">Profil Desa</h1>
                        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>

                    <div className="py-5">
                        <h1 className="text-[#4C4B16] text-2xl font-medium pb-2">Lokasi</h1>
                        <Image src="/Image/Icon/Map.jpg" alt="Map" width={350} height={13}></Image>
                    </div>

                    <div className="py-5">
                        <div className="flex justify-between pb-2"> 
                            <h1 className="text-[#4C4B16] text-2xl font-medium">Aktivitas</h1>
                            <h1 className="text-[#E7B10A] text-lg font-medium">Lihat semua</h1>
                        </div>

                        <div className="flex flex-wrap gap-12">
                            <div className="bg-white flex flex-col justify-center gap-5 rounded-3xl pb-6 mb-5 drop-shadow-md">
                                <Link href="/detail/detail-aktivitas">
                                    <Image src="/Image/Beranda/Belajar batik.jpg" alt="Belajar Batik" width={310} height={300}
                                        className="rounded-t-3xl h-[30vh] mb-3 object-cover "
                                    />

                                    <div className="px-4">
                                        <h1 className="font-medium text-xl pb-1">Edukasi Batik Topeng</h1>
                                        <p className="font-extrabold ">Rp 20.000</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="bg-white flex flex-col justify-center gap-5 rounded-3xl pb-6 mb-5 drop-shadow-md">
                                <Link href="">
                                    <Image src="/Image/Beranda/Belajar batik.jpg" alt="Belajar Batik" width={310} height={300}
                                        className="rounded-t-3xl h-[30vh] mb-3 object-cover "
                                    />

                                    <div className="px-4">
                                        <h1 className="font-medium text-xl pb-1">Edukasi Batik Topeng</h1>
                                        <p className="font-extrabold ">Rp 20.000</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="bg-white flex flex-col justify-center gap-5 rounded-3xl pb-6 mb-5 drop-shadow-md">
                                <Link href="">
                                    <Image src="/Image/Beranda/Belajar batik.jpg" alt="Belajar Batik" width={310} height={300}
                                        className="rounded-t-3xl h-[30vh] mb-3 object-cover "
                                    />

                                    <div className="px-4">
                                        <h1 className="font-medium text-xl pb-1">Edukasi Batik Topeng</h1>
                                        <p className="font-extrabold ">Rp 20.000</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="bg-white flex flex-col justify-center gap-5 rounded-3xl pb-6 mb-5 drop-shadow-md">
                                <Link href="">
                                    <Image src="/Image/Beranda/Belajar batik.jpg" alt="Belajar Batik" width={310} height={300}
                                        className="rounded-t-3xl h-[30vh] mb-3 object-cover "
                                    />

                                    <div className="px-4">
                                        <h1 className="font-medium text-xl pb-1">Edukasi Batik Topeng</h1>
                                        <p className="font-extrabold ">Rp 20.000</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="py-5">
                        <h1 className="text-[#4C4B16] text-2xl font-medium pb-2">Penginapan</h1>

                        <div className="flex flex-wrap gap-12">
                            <div className="bg-white flex flex-col justify-center gap-5 rounded-3xl pb-6 mb-5 drop-shadow-md">
                                <Link href="/detail/detail-penginapan">
                                    <Image src="/Image/Homestay Aris Budiyono.jpg" alt="Homestay Aris Budiyono" width={310} height={300}
                                        className="rounded-t-3xl h-[30vh] mb-3 object-cover "
                                    />

                                    <div className="px-4">
                                        <h1 className="font-medium text-xl pb-1">Homestay Aris Budiyono</h1>
                                        <p className="font-extrabold ">Rp 200.000</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="bg-white flex flex-col justify-center gap-5 rounded-3xl pb-6 mb-5 drop-shadow-md">
                                <Link href="">
                                    <Image src="/Image/Homestay Aris Budiyono.jpg" alt="Homestay Aris Budiyono" width={310} height={300}
                                        className="rounded-t-3xl h-[30vh] mb-3 object-cover "
                                    />

                                    <div className="px-4">
                                        <h1 className="font-medium text-xl pb-1">Homestay Aris Budiyono</h1>
                                        <p className="font-extrabold ">Rp 200.000</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default DetailDesaWisataViews