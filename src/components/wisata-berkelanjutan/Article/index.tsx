import Image from "next/image"
import Card from "./Card"


const Article = () => {
    const cardData = [
        {
            image: "/Image/WisataBerkelanjutan/Artikel2.png",
            date: "9 Agustus 2024",
            title: "Pilihan Transportasi dan Aktivitas yang Mengurangi Jejak Karbon"
        },
        {
            image: "/Image/WisataBerkelanjutan/Artikel3.png",
            date: "3 Agustus 2024",
            title: "Aktivitas Menarik dan Ramah Lingkungan untuk Pecinta Laut"
        },
        {
            image: "/Image/WisataBerkelanjutan/Artikel4.png",
            date: "1 Agustus 2024",
            title: "Aktivitas Seru di Nusa Penida: Dari Snorkeling hingga Jelajah Pantai"
        }
    ]

    return (
        <div className="p-16">
                <h1 className="text-3xl font-bold mb-8">Artikel Populer</h1>
                <div className="flex gap-12">
                    <div className="w-[80vw]">
                        <Image src="/Image/WisataBerkelanjutan/Artikel1.png" width={ 800 } height={ 280 } alt="Article" className="rounded-2xl mb-4"></Image>
                        <div>
                            <h2 className="text-2xl font-bold mb-1">Kegiatan di Desa Wisata Liang Ndara</h2>
                            <p className="text-sm mb-4">10 Agustus 2024</p>
                            <p className="font-medium">Pesona indah Nusa Tenggara Timur, kesejukan udara di tengah pedesaan membuat Desa Wisata Liang Ndara menjadi salah satu destinasi utama wisatawan mancanegara yang berkunjung ke Indonesia. </p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col justify-between gap-6">
                        { cardData.map((card, index) => (
                            <Card 
                                key= { index }
                                image={ card.image } 
                                date= { card.date }  
                                title = { card.title }   
                            ></Card>
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default Article;