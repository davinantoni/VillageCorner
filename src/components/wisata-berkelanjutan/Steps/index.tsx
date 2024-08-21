import Card from "./Card";

const Steps = () => {
    const cardData = [
        {
            image: "/Image/WisataBerkelanjutan/Langkah1.png",
            text: "Kurangi penggunaan bahan sekali pakai"
        },
        {
            image: "/Image/WisataBerkelanjutan/Langkah2.png",
            text: "Tidak merusak lingkungan"
        },
        {
            image: "/Image/WisataBerkelanjutan/Langkah3.png",
            text: "Hormati budaya dan adat setempat"
        },
    ]

    return (

        <div className="flex flex-col justify-center items-center pt-16 pb-16">
            <h1 className="font-bold text-4xl text-center mb-2">Tiga Langkah Sederhana</h1>
            <h2 className="mb-10 text-center text-[#5B5955] ">Lakukan langkah-langkah sederhana ini dan bantu wujudkan wisata berkelanjutan!</h2>
            <div className="flex justify-around flex-wrap gap-2">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        number={index + 1}
                        text={card.text}
                        className={index === 0 ? 'pl-28' : 'pl-40'}
                    >
                    </Card>
                ))}
            </div>
        </div>
    )

}

export default Steps;