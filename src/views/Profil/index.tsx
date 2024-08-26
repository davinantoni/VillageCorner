import Link from "next/link"
import Image from "next/image"
const ProfileViews = () => {
    return (
        <main>
            <div className="container mx-auto p-16">
                <h4 className="text-2xl font-bold py-3 mb-4">
                    Pengaturan Akun
                </h4>
                <div className="bg-white rounded-lg drop-shadow-md border-2 py-3">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-1/4">
                            <div className="flex flex-col p-6">
                                <Link className="p-3 bg-[#E7B10A] text-white rounded-lg font-bold" href="#">Umum</Link>
                                <Link className="p-3 text-gray-700 hover:bg-gray-100 rounded-lg" href="#">Histori Transaksi</Link>
                                <Link className="p-3 text-red-600 hover:bg-red-100 rounded-lg" href="#">Logout</Link>
                            </div>
                        </div>
                        <div className="md:w-3/4">
                            <div className="p-6">
                                <div className="space-y-6" id="account-general">
                                    <div className="flex items-center space-x-4 justify-center flex-col">
                                        <div className="pb-6">
                                            <Image
                                                src="/Image/Profile.png"
                                                alt="Profile Picture"
                                                className="rounded-full object-cover"
                                                width={200}
                                                height={100}
                                            />
                                        </div>
                                        <div>
                                            <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                                        </div>
                                    </div>
                                    <hr className="border-t border-gray-200 my-4"/>
                                    <div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">Nama</label>
                                            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value="John Doe"/>
                                        </div>
                                        <div>
                                            <label className="block text-gray-700">E-mail</label>
                                            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value="johndoe@example.com"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="text-right mt-4">
                    <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save changes</button>&nbsp;
                    <button type="button" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">Cancel</button>
                </div> */}
            </div>
        </main>
    )
}

export default ProfileViews