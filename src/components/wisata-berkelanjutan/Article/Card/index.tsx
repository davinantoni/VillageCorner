import Image from "next/image"

type cardType = {
    image: string;
    date: string;
    title: string;
};

const Card = (props: cardType) => {
    return (
        <div className="flex">

            <Image src={ props.image } alt="Kampanye" width={300} height={200} className="rounded-2xl"></Image>

            <div className="p-4">
                <p className="text-sm">{ props.date }</p>
                <h2 className="text-l font-bold"> { props.title }</h2>
            </div>
        </div>

    )

}

export default Card;