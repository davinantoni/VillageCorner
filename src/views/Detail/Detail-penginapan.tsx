import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Views_detailPenginapan = () => {
    const { push } = useRouter();
    const handlerBayar = () => {
        push("/pembayaran");
    }
    return (
        <main>
            <div className="p-14">
                <section className="pt-10">
                    <div className="flex flex-wrap items-center">
                        <div>
                            <Image
                                src="/Image/Homestay Aris Budiyono.jpg"
                                alt="Homestay Aris Budiyono"
                                width={680}
                                height={500}
                                className="rounded-3xl mr-6 h-[69vh] object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <Image src="/Image/Homestay Aris Budiyono.jpg" alt="Homestay Aris Budiyono 1" width={339} height={200} className="rounded-3xl h-[33vh]" />
                            <Image src="/Image/Homestay Aris Budiyono.jpg" alt="Homestay Aris Budiyono 2" width={339} height={200} className="rounded-3xl h-[33vh]" />
                            <Image src="/Image/Homestay Aris Budiyono.jpg" alt="Homestay Aris Budiyono 3" width={339} height={200} className="rounded-3xl h-[33vh]" />
                            <Image src="/Image/Homestay Aris Budiyono.jpg" alt="Homestay Aris Budiyono 4" width={339} height={200} className="rounded-3xl h-[33vh]" />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex items-center justify-between drop-shadow-md border-2 bg-white rounded-3xl p-7 mt-5">
                        <div className="flex flex-col gap-1">
                            <h1 className="font-bold text-[#4C4B16] text-4xl pb-1">Homestay Aris Budiyono</h1>
                            <div className="flex items-center gap-1">
                                <Image src="/Image/Icon/Location 2.png" alt="Location" width={13} height={13}></Image>
                                <p className="text-[#4C4B16]">Desa Wisata Nglanggeran, Patuk, Kabupaten Gunungkidul, DI Yogyakarta</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    <Image src="/Image/Icon/Bed.png" alt="bed" width={13} height={13}></Image>
                                    <p className="text-[#4C4B16]">2 Jam</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <h1 className="font-bold text-[#4C4B16] text-4xl pb-2">Rp 200.000 <span className="text-xl">/malam</span></h1>
                            <button onClick={handlerBayar} className="text-xs bg-[#E7B10A] text-white font-semibold px-2.5 py-1 border-4 border-solid border-[#E7B10A] rounded-full hover:bg-[#CC9F14] hover:border-[#CC9F14]">Pesan Sekarang</button>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="pt-5">
                        <h1 className="text-[#4C4B16] text-2xl font-medium pb-2">Fasilitas</h1>
                        <p className="">
                            <ul className="list-disc list-inside">
                                <li>2 Kamar Tidur</li>
                                <li>1 Kamar Mandi</li>
                                <li>WIFI</li>
                            </ul>
                        </p>
                    </div>
                </section>

                <section>
                    <div className="py-5">
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

export default Views_detailPenginapan