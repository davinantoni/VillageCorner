

const Card = (props: any) => {
    return (
        <div className={`relative h-72 w-1/4 flex bg-cover bg-center bg-no-repeat p-5  rounded-xl shadow-lg ${ props.className }`} style={{ backgroundImage: `url(${ props.image })` }}>
            <h1 className="absolute left-2 -bottom-16 font-bold text-big-xl text-[#F7F1E5]" >{ props.number }</h1>
            <p className="self-end font-bold text-3xl text-[#F7F1E5] leading-10">{ props.text }</p>
        </div>
    )
}

export default Card;