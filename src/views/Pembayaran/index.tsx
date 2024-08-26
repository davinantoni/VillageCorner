import Image from "next/image";
import Link from "next/link";

const PembayaranViews = () => {
    return (
        <main>
            <div className="flex px-14 py-20 justify-evenly items-center">
                <div>
                    <h1 className="font-semibold text-2xl pb-4">Detail  Pembelian</h1>
                    <div>
                        <Image 
                            src="/Image/Beranda/Belajar batik.jpg" 
                            alt="Belajar batik" 
                            width={343} 
                            height={256}
                            className="rounded-2xl h-[40vh] w-full"
                        />
                    </div>
                    
                    <div className="gap-2 flex flex-col">
                        <h1 className="font-bold text-xl pt-3">Edukasi Batik Topeng</h1>
                        <div className="flex items-center gap-1">
                            <Image src="/Image/Icon/Location 2.png" alt="Location" width={13} height={13}></Image>
                            <p className="text-sm">Nglanggeran, Patuk, Kabupaten Gunungkidul, DI Yogyakarta</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-1">
                                <Image src="/Image/Icon/clock-time.png" alt="clock" width={13} height={13}></Image>
                                <p className="text-sm">2 Jam</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex bg-white drop-shadow-md border-2 flex-col rounded-3xl p-7 w-[30vw] ">
                    <div className="flex justify-between pb-3">
                        <h1 className="font-semibold text-xl">Total Pembayaran</h1>
                        <h1 className="font-semibold text-xl">Rp 20.000</h1>
                    </div>
                    <hr className="h-0.5 mb-4 bg-black" />

                    <div className="flex flex-col gap-5 pb-5 w-[70%] mx-auto">
                        <div className="flex bg-white rounded-xl p-2 drop-shadow-lg justify-between items-center ">
                            <div className="flex items-center">
                                <Image 
                                    src="/Image/Icon/gopay.png" 
                                    alt="Gopay" 
                                    width={68} 
                                    height={20}
                                    className="mr-6"
                                />
                                <label htmlFor="gopay">GoPay</label>
                            </div>

                            <div>
                                <input type="radio" name="payment" id="gopay" />
                            </div>
                        </div>

                        <div className="flex bg-white rounded-xl p-2 drop-shadow-lg justify-between items-center">
                            <div className="flex items-center">
                                <Image 
                                    src="/Image/Icon/dana.png" 
                                    alt="DANA" 
                                    width={68} 
                                    height={20}
                                    className="mr-6"
                                />
                                <label htmlFor="dana">DANA</label>
                            </div>

                            <div>
                                <input type="radio" name="payment" id="dana" />
                            </div>
                        </div>

                        <div className="flex bg-white rounded-xl p-2 drop-shadow-lg justify-between items-center">
                            <div className="flex items-center">
                                <Image 
                                    src="/Image/Icon/LinkAja.png" 
                                    alt="LinkAja" 
                                    width={68} 
                                    height={20}
                                    className="mr-6"
                                />
                                <label htmlFor="linkaja">LinkAja</label>
                            </div>

                            <div>
                                <input type="radio" name="payment" id="linkaja" />
                            </div>
                        </div>

                        <div className="flex bg-white rounded-xl p-2 drop-shadow-lg justify-between items-center">
                            <div className="flex items-center">
                                <Image 
                                    src="/Image/Icon/BCA.png" 
                                    alt="BCA" 
                                    width={68} 
                                    height={20}
                                    
                                    className="mr-6"
                                />
                                <label htmlFor="bca">BCA</label>
                            </div>

                            <div>
                                <input type="radio" name="payment" id="bca" />
                            </div>
                        </div>
                    </div>

                    <button className="text-xs bg-[#E7B10A] text-white font-semibold px-2.5 py-1 border-4 border-solid border-[#E7B10A] rounded-full hover:bg-[#CC9F14] hover:border-[#CC9F14] w-[50%] mx-auto">Bayar</button>

                </div>
            </div>
        </main>
    )
}

export default PembayaranViews