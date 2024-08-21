import Image from "next/image";
import Link from "next/link";

const DetailAktivitasViews = () => {
    return (
        <main>
            <div className="p-14">
                <section className="pt-10">
                    <div className="flex flex-wrap items-center">
                        <div>
                            <Image
                                src="/Image/Beranda/Belajar Batik.jpg"
                                alt="Belajar Batik"
                                width={680}
                                height={500}
                                className="rounded-3xl mr-6 h-[69vh] object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <Image src="/Image/Beranda/Belajar Batik.jpg" alt="Belajar Batik 1" width={339} height={200} className="rounded-3xl h-[33vh]" />
                            <Image src="/Image/Beranda/Belajar Batik.jpg" alt="Belajar Batik 2" width={339} height={200} className="rounded-3xl h-[33vh]" />
                            <Image src="/Image/Beranda/Belajar Batik.jpg" alt="Belajar Batik 3" width={339} height={200} className="rounded-3xl h-[33vh]" />
                            <Image src="/Image/Beranda/Belajar Batik.jpg" alt="Belajar Batik 4" width={339} height={200} className="rounded-3xl h-[33vh]" />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex items-center justify-between drop-shadow-md border-2 bg-white rounded-3xl p-7 mt-5">
                        <div className="flex flex-col gap-1">
                            <h1 className="font-bold text-[#4C4B16] text-4xl pb-1">Edukasi Batik Topeng</h1>
                            <div className="flex items-center gap-1">
                                <Image src="/Image/Icon/Location 2.png" alt="Location" width={13} height={13}></Image>
                                <p className="text-[#4C4B16]">Nglanggeran, Patuk, Kabupaten Gunungkidul, DI Yogyakarta</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    <Image src="/Image/Icon/clock-time.png" alt="clock" width={13} height={13}></Image>
                                    <p className="text-[#4C4B16]">2 Jam</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <h1 className="font-bold text-[#4C4B16] text-4xl pb-2">Rp 20.000</h1>
                            <button className="text-xs bg-[#E7B10A] text-white font-semibold px-2.5 py-1 border-4 border-solid border-[#E7B10A] rounded-full hover:bg-[#CC9F14] hover:border-[#CC9F14]">Pesan Sekarang</button>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="pt-5">
                        <h1 className="text-[#4C4B16] text-2xl font-medium pb-2">Deskripsi Aktivitas</h1>
                        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </section>

                <section>
                    <div className="pt-5">
                        <h1 className="text-[#4C4B16] text-2xl font-medium pb-2">Kontak Kami</h1>
                        <div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-1">
                                    <Image src="/Image/Icon/globe-world-earth.png" alt="globe" width={17} height={17}></Image>
                                    <Link href="">
                                        <p className="text-[#E7B10A]">Desa Wisata Nglanggeran</p>
                                    </Link>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Image src="/Image/Icon/phone-call.png" alt="phone" width={17} height={17}></Image>
                                    <p className="">+62 012 3456 7898 </p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Image src="/Image/Icon/email-message-inbox.png" alt="email" width={17} height={17}></Image>
                                    <p className="">desa@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default DetailAktivitasViews