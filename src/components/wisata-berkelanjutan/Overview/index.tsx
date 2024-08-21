import Image from "next/image";
import { useState } from "react";

const Overview = () => {
    const contents = [
        ["Pariwisata berkelanjutan merupakan pengembangan konsep berwisata yang dapat dapat memberikan dampak jangka panjang. Baik itu terhadap lingkungan, sosial, budaya, serta ekonomi untuk masa kini dan masa depan bagi seluruh masyarakat lokal maupun wisatawan yang berkunjung.", "Beberapa hal yang dapat dilakukan adalah dengan mengadopsi metode transportasi yang lebih berkelanjutan, tinggal di akomodasi yang lebih ramah lingkungan, makan makanan yang bersumber secara lokal dan etis, dan menghindari aktivitas yang dapat merugikan lingkungan."],
        ["Pariwisata dapat memiliki konsekuensi negatif, termasuk penggunaan sumber daya yang berlebihan, pemindahan satwa liar, dan kerusakan budaya lokal, sambil berkontribusi pada emisi gas rumah kaca. Sikap pariwisata yang tidak berkelanjutan akan  merugikan lingkungan, masyarakat lokal, dan sumber daya alam bumi. Hal ini membuat pariwisata berkelanjutan penting untuk kelangsungan jangka panjang industri pariwisata secara keseluruhan.", "Ketika langkah-langkah diambil untuk memberikan manfaat bagi penduduk setempat dan meminimalkan kerugian yang disebabkan oleh pariwisata, itu menjadi kekuatan untuk kebaikan di dunia."],
        ["Pariwisata berkelanjutan merupakan tanggung jawab semua orang yang terlibat dalam perjalanan, baik wisatawan, penyedia jasa, maupun penduduk lokal. Setiap individu memiliki peran penting dalam menjaga kelestarian lingkungan dan budaya setempat.", "Hal ini tidak hanya berlaku di destinasi tertentu, tetapi di mana saja kita berada. Pariwisata berkelanjutan harus diterapkan kapan saja dan di mana saja saat bepergian, baik di tempat wisata alam, situs bersejarah, maupun kawasan perkotaan. Dengan menghormati lingkungan dan budaya yang kita temui di sepanjang perjalanan, kita turut berperan dalam menjaga keberlanjutan."]
    ];

    const images = [
        "/Image/WisataBerkelanjutan/Pengertian.png",
        "/Image/WisataBerkelanjutan/Alasan.png",
        "/Image/WisataBerkelanjutan/Waktu dan Lokasi.png",
    ];
    const [text, setText] = useState(contents[0]);
    const [image, setImage] = useState(images[0]);
    const [transitioning, setTransitioning] = useState(false);

    const handleClick = (index: number) => {
        setTransitioning(true);
        setTimeout(() => {
            setText(contents[index]);
            setActiveIndex(index);
            setImage(images[index]);
            setTransitioning(false);
        }, 200);
        
        
    };

    const [activeIndex, setActiveIndex] = useState(0);

    return(
        <div className="bg-[#898121] text-white flex min-h-fit" >
                <div className=" p-16 ">
                    <h1 className="text-4xl font-bold mb-1">Wisata Berkelanjutan</h1>
                    <h2 className="mb-10 text-xl opacity-60 ">Menjelajahi tanpa Merusak</h2>
                    <div className="flex gap-5 mb-3 ">
                        <button className={`rounded-xl font-semibold px-4 py-2 border-2 mr-2  ${activeIndex === 0 ? `bg-[#4C4B16] border-[#4C4B16]` : `bg-transparent border-[#4C4B16] text-[#4C4B16]`}`} onClick={() => { handleClick(0) }}>Pengertian</button>
                        <button className={`rounded-xl font-semibold px-4 py-2 border-2 mr-2  ${activeIndex === 1 ? `bg-[#4C4B16] border-[#4C4B16]` : `bg-transparent border-[#4C4B16] text-[#4C4B16]`}`} onClick={() => { handleClick(1) }}>Alasan</button>
                        <button className={`rounded-xl font-semibold px-4 py-2 border-2 mr-2  ${activeIndex === 2 ? `bg-[#4C4B16] border-[#4C4B16]` : `bg-transparent border-[#4C4B16] text-[#4C4B16]`}`} onClick={() => { handleClick(2) }}>Waktu dan Lokasi</button>
                    </div>
                    <div>
                        
                        {text.map((paragraph, index) => (
                            <div key={index}>
                                <p className="leading-10">{paragraph}</p>
                                {index < text.length - 1 && <br />}
                            </div>
                        ))}
                    </div>
                </div>
                <Image src={ image } width={700} height={400} alt="Pengertian" className={`transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}></Image>
                

            </div>
                    
    )
}

export default Overview;